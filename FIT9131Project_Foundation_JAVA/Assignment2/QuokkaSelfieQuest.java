/**
*The QuokkaSelfieQuest class is the main class that runs the"QuokkaSelfieQuest"simulation game
*It allows the user to start the simulation, input the population of qyokkas, and simulate mulatiple days of the game.
*The1 class includes methods for seeting up the quokka population.
*This class includes methods for setting up the quokka population,computing various statistics, and display the simulation results
*@author Ziqi Pei
*@version 6.2
*/
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.IOException;
import java.io.FileWriter;

import static java.lang.Thread.sleep;

public class QuokkaSelfieQuest {

    public static void main(String[] args) throws InterruptedException {
        // Create a new instance of the Client class
        Client start = new Client();
        // Display the welcome message
        start.displayWelcomeMessage();
        // Create a new instance of the FileIO class
        FileIO newFileIO = new FileIO();
        // Read the group data from the file
        int[] thirtyDays = newFileIO.readGroupData("./tourist.txt");
        // Create a scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        Scanner sc = new Scanner(System.in);
        while(true){
            // Reset the current food and current day died counters
            SelfieType.CURRENT_FOOD = 0;
            SelfieType.CURRENT_DAY_DIED = 0;
            System.out.println("1. Start simulation.");
            System.out.println("0. Exit simulation.");
            System.out.print("Please enter the simulation: ");
            int code = scanner.nextInt();
            if (code == 0) {
                System.out.println("Exit simulation successful");
                break;
            }
            if (code != 1){
                System.out.println("Input errors, please re-enter.");
                continue;
            }
            // Get the population of quokkas from the user
            int population = start.getNumOfQuokkas();
            // Setup the quokka population
            QuokkaCollection quokkaSimulate = start.setupQuokkas(population);
            System.out.println("Setting up the quokka population");
            FileIO.appendMethod(SelfieType.OUT_PATH, "Setting up the quokka population");
            int totalNewBornBaby = quokkaSimulate.getNumberOfBabies();
            FileIO.appendMethod(SelfieType.OUT_PATH, "New babies: " + totalNewBornBaby);
            FileIO.appendMethod(SelfieType.OUT_PATH, "");
            FileIO.appendMethod(SelfieType.OUT_PATH, "Simulation started:");
            System.out.println("New babies: " + totalNewBornBaby);
            System.out.println();
            System.out.println("Simulation started:");
            int countTotalDeath = 0;
            int totalFood = 0;
            for (int i = 0; i < thirtyDays.length; i++) {
                System.out.println("Press enter to continue to the next day:");
                while(true){
                    String input = sc.nextLine();
                    if (input.isEmpty()) {
                        System.out.println();
                        System.out.println("Enter key was pressed.");
                        break;
                    }
                }
                int day = i + 1;
                int numOfGroups = thirtyDays[i];
                System.out.println();
                // Compute the number of quokkas alive on the current day
                start.computeCurrentDayAlive(quokkaSimulate);
                System.out.println();
                // Simulate one day of the quokka population
                start.oneDaySimulate(day, quokkaSimulate, numOfGroups);
                System.out.println();
                // Compute the impact of tourists on the quokka population
                start.computeTourist(numOfGroups ,quokkaSimulate);
                System.out.println();
                // Compute and display the summary for the current day
                start.computeSummary(day, quokkaSimulate);
                sleep(100);
            }
            
            System.out.println("Final Simulation Summary");
            System.out.println("========================");
            // Compute the number of quokkas that died during the simulation
            int died = start.computeDied(quokkaSimulate);
            // Compute the Quokka Selfie Quality Survival Factor (QSQSF)
            double qsqsf = (1-(died/(population*1.0)))*100;
            System.out.println("QSQSF: "+qsqsf);
            // Compute the Quokka Population Stability Factor (QPSF)
            int size = quokkaSimulate.getQuokkas().size();
            double qpsf = (size-population)/(population*1.0);
            System.out.println("QPSF: "+qpsf);
            // Compute the average number of days for dead quokkas
            double avgDay = start.computeAvgDay(died, quokkaSimulate);
            System.out.println("Day count for dead quokkas: "+avgDay);
            System.out.println();
            System.out.println("Writing summary to populationFinal.txt");
            System.out.println("Total alive quokkas incl. babies: "+(size-died));
            // Compute the number of alive babies in the quokka population
            int babies = start.computeAliveBaby(quokkaSimulate);
            System.out.println("Total new born babies: "+babies);
            System.out.println("Total dead quokkas: "+died);
            // Compute the total number of food bags consumed by the quokkas
            int totalBags = start.computeTotalBags(quokkaSimulate);
            System.out.println("Total food bags: "+totalBags);
            System.out.println();
            System.out.println("Goodbye");
            try (PrintWriter writer = new PrintWriter(new FileWriter("./populationFinal.txt"))) {
                // Write the simulation summary to a file
                writer.println("Final Simulation Summary");
                writer.println("========================");
                writer.println("QSQSF: " + qsqsf);
                writer.println("QPSF: " + qpsf);
                writer.println("Day count for dead quokkas: " + avgDay);
                writer.println();
                writer.println("Total alive quokkas incl. babies: " + (size - died));
                writer.println("Total new born babies: " + babies);
                writer.println("Total dead quokkas: " + died);
                writer.println("Total food bags: " + totalBags);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        scanner.close();
        sc.close();
    }

}

