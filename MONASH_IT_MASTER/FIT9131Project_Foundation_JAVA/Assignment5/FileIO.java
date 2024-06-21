import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * The FileIO class provides methods for reading and writing data to files.
 *
 * author: Ziqi Pei
 * version: 8.0
 */
public class FileIO
{
    private String vehicleFileName;// The file name containing vehicle data.
    private String outputFileName;// The file name for writing game results.

    /**
     * Default constantor initializes file name
     */
    public FileIO()
    {
        this.vehicleFileName = "vehicles.txt";
        this.outputFileName = "output.txt";
    }

    /**
     * Parameterized constantor to set specific file names.
     *
     * @param vehicleFileName The file name containing vehicle data.
     * @param outputFileName The file name for writing game results.
     */
    public FileIO(String vehicleFileName, String outputFileName)
    {
        this.vehicleFileName =  vehicleFileName;
        this.outputFileName = outputFileName; 
    }
    
    /**
     * Gets the vehicle file name.
     *
     * @return The file name containing vehicle data.
     */
    public String getVehicleFileName()
    {
        return vehicleFileName;
    }

    /**
     * Reads vehicle data from the file and returns a list of Vehicle objects.
     *
     * @return A list of Vehicle object read from the file.
     */
    public String getOutputFileName()
    {
        return outputFileName;
    }
    
    public List<Vehicle> readVehiclesFromFile()
    {
        List<Vehicle> vehicles = new ArrayList<>();
        try
        {
            FileReader fileReader = new FileReader(new File(vehicleFileName));
            Scanner scanner = new Scanner(fileReader);

            while(scanner.hasNextLine())
            {
                String line = scanner.nextLine();
                String[] parts = line.split(",");//regex
                if(parts.length == 3)
                {
                    String vehicleName= parts[0].trim();
                    int maxFuel = Integer.parseInt(parts[1].trim());
                    int maxDamage = Integer.parseInt(parts[2].trim());

                    Vehicle vehicle = new Vehicle(vehicleName, maxFuel, maxDamage);
                    vehicles.add(vehicle);
                }
            }
            scanner.close();
        } catch(FileNotFoundException e)
        {
            e.printStackTrace();
        }
        return vehicles;
    }

    /**
     * Sets the vehicle file name.
     *
     * @param vehicleFileName The new file name containing vehicle data.
     */
    public void setVehileFileName(String vehicleFileName)
    {
        this.vehicleFileName = vehicleFileName;
    }

    /**
     * Sets the output file name.
     *
     * @param outputFileName The new file name for writing game results.
     */
    public void setOutputFileName(String outputFileName)
    {
        this.outputFileName = outputFileName;
    }

    /**
     * Writes game results to the output file
     *
     * @param distanceCovered The distance covered in the game.
     * @param movesMade       The number of moves made in the game.
     * @param outcome         The outcome of the game(e.g., win, lose).
     */
    public void writeGameResultToFile(int distanceCovered, int movesMade, String outcome)
    {
        try
        {
            FileWriter writer = new FileWriter(outputFileName, true);
            writer.write("Distance Covered: " + distanceCovered + "\n");
            writer.write("Moves Made: " + movesMade + "\n");
            writer.write("Outcome: " + outcome + "\n");
            writer.close();
        } catch (IOException e)
        {
            e.printStackTrace();
        }
    }

    /**
     * Writes feature information to the feature file.
     *
     * @param featureDescription  The description of the game feture.
     * @param obstaclePositionAndType  The information aout obstacle positions
     */
    public void writeFeatureToFile(String featureDescription, String obstaclePositionAndType)
    {
        try
        {
            FileWriter writer = new FileWriter("feature.txt");
            writer.write(featureDescription + "\n");
            writer.write(obstaclePositionAndType + "\n");
            writer.close();
        }catch(IOException e)
        {
            System.out.println("Error writing feature to file: " + e.getMessage());
        }
    }
    
    public void testFileIO()
    {
        // System.out.println("Create an FielIO object with the default constantor");
        // FileIO fileIO = new FileIO();
        // System.out.println("Vehicle File Name: " + getVehicleFileName());
        // System.out.println("Output File Name: " + getOutputFileName());

        // System.out.println("Create an FielIO object with the readVehiclesFromFile");
        // FileIO fileIO1 = new FileIO();
        // List<Vehicle> vehicles = fileIO1.readVehiclesFromFile();
        // System.out.println("Vehicle read from file:");
        // for(Vehicle vehicle : vehicles)
        // {
        //     System.out.println(vehicle);
        // }

        // System.out.println("Test writing game result to file");
        // FileIO fileIO2 = new FileIO();
        // fileIO2.writeGameResultToFile(100, 5, "Win");
        // System.out.println("Game result written to file.");

        // System.out.println("Test write Feature To File ");
        // fileIO2.writeFeatureToFile("Game Feature Description", "obtstacle Position and Type");
        // System.out.println("Feature written to file.");


    }
}
