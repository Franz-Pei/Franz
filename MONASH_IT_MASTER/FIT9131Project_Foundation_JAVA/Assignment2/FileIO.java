/**
*The FileIO class provides utility methods for reading form and writing to file in the "QuokkaSelfieQuest"simulationgame
*In includes methods for appearing text to a file and reading text from a file.
*@author Ziqi Pei
*@version 6.2
*/
import java.io.*;

public class FileIO {

    /**
     * Read group data from a file.
     *
     * @param path the path of the file to read
     * @return an array containing the group data for each of the 30 days
     */
    public int[] readGroupData(String path) {
        int[] thirtyDays = new int[30];
        File source = new File(path);
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(source));
            String line = null;
            String lines = "";
            while ((line = br.readLine()) != null) {
                lines += line;
            }
            String[] numbers = lines.split(",");
            if (numbers.length == 0) {
                System.out.println("File has no initial value");
                return thirtyDays;
            }
            for (int i = 0; i < numbers.length; i++) {
                thirtyDays[i] = Integer.parseInt(numbers[i]);
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found");
        } catch (IOException e) {
            System.err.println("File read error");
        } catch (Exception e) {
            System.err.println(e.getMessage());
        } finally {
            try {
                br.close();
            } catch (IOException e) {
                System.err.println(e.getMessage());
            }
        }
        return thirtyDays;
    }

    /**
     * Append content to a file.
     *
     * @param fileName the name of the file to append to
     * @param content  the content to append
     */
    public static void appendMethod(String fileName, String content) {
        try {
            // Open a file writer, the second parameter true in the constructor means to write the file in append form
            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(
                            new FileOutputStream(fileName, true), "UTF-8"));
            writer.write("\n" + content);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
