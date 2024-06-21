/**
 * The FileIO provides functionally for reading and write colony data to a file.
 * It allows reading colony data from a file and writing colony survival rates to a file.
 *
 * @author Ziqi Pei
 * @version 7.0
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileIO
{
    private String fileName;
    
    /**
     * Constructor to create a FileIO object for reading and writing data to a file.
     *
     * @param fileName The name of the file to read from or write to.
     */
    public FileIO(String fileName)
    {
        this.fileName = fileName;
    }

    /**
     * Read colony data from a file and returns it as a list of integers. 
     *
     * @return A list of integers  representing the colony data.
     *
     */
    public List<Integer> readColonyData()
    {
        List<Integer> colonyData = new ArrayList<>();
        BufferedReader buffer = null;
        try
        {
            FileReader file = new FileReader(fileName);
            buffer = new BufferedReader(file);
            String line = buffer.readLine();
            if(line != null)
            {
                String[] values = line.split(",");// regular expression
                if(values.length == 4)
                {
                    for(String value : values)
                    {
                        colonyData.add(Integer.parseInt(value.trim()));
                    }
                }
                else
                {
                    System.err.println("Invalid data format in" + fileName);
                }
            }
            else
            {
                System.err.println("Empty file: " + fileName);
            }
        }
        catch(IOException e)
        {
            System.err.println("Error reading" + fileName + ": " + e.getMessage());
        }
        finally
        {
            try
            {
                if(buffer != null)
                {
                    buffer.close();
                }
            }
            catch(IOException e)
            {
                System.err.println("Error closing " + fileName + ":" + e.getMessage());
            }
        }
        return colonyData;
    }

    /**
     * Write colony survival rates to a file.
     *
     * @param familyGroupSurvalRate The survival rate of family group.
     * @param penguinSurvivalRate   The survival rate of penguins.
     * @param eggSurvivalRate       The survival rate og eggs.
     * @param chickSurvivalRate     The survival rate of chicks.
     * @param colonySurvivalRate    The overall colony survival rate.
     */
    public void writeToFile (double familyGroupSurvalRate, double penguinSurvivalRate, double eggSurvivalRate, double chickSurvivalRate, double colonySurvivalRate)
    {
        try
        {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));
            writer.write("colony surivival rates: ");
            writer.newLine();
            writer.write("family group survival rate: " + familyGroupSurvalRate + "%");
            writer.newLine();
            writer.write("penguin survival rate: " + penguinSurvivalRate + "%");
            writer.newLine();       
            writer.write("egg survival rate: " + eggSurvivalRate + "%");
            writer.newLine();
            writer.write("Chick surivival rate: " + chickSurvivalRate + "%");
            writer.newLine();
            writer.write("conlony surivival: " + colonySurvivalRate + "%");
            writer.close();
        }
        catch (IOException e)
        {
            System.out.println("Error writing to file:" + e.getMessage());
        }
    }

    /**
     * Convert FileIO object to a string representation.
     *
     * @return A String representing the FileIO object.
     */
     @Override
     public String toString()
     {
        return "FileIO{" +
               "fileName=" + fileName + 
               "}";

     }
}
