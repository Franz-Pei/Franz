/**
 * The PenguinPawPatrol class represents a simulatiom of a penguin colony over several months.
 * It includes multiple list of animals, a random generator, and a set of methods for managing
 * the simulatiom.
 * The simulatiom starts with a certain number of penguins, foxes, cats and sharks .It then
 * simulates various events and tracks th colony's progress over serval months.
 * At the end, it calculate and displays survival rates an saves the results to a file.
 * The class also contains a main method to start the simulation.
 *
 * @author Ziqi Pei
 * version 25.0
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PenguinPawPatrol
{
    private List<Penguin> penguins;
    private List<Fox> foxes;
    private List<Cat> cats;
    private List<Shark> sharks;
    private List<Chick> chicks;
    private RandomGenerator randomGenerator;
    private PenguinFamily penguinFamily;
    private Hunter hunter;

    /**
     * Default constructo for the  {@link PenguinPawPatrol} class Initilizes the simulation with default values.
     */
    public PenguinPawPatrol()
    {
        this.penguins = new ArrayList<>();
        this.foxes = new ArrayList<>();
        this.cats = new ArrayList<>();
        this.sharks = new ArrayList<>();
        this.chicks = new ArrayList<>();
        this.randomGenerator = new RandomGenerator();
        this.penguinFamily = new PenguinFamily(randomGenerator);
        this.hunter = new Hunter(penguinFamily);
    }
    
    /**
     * Constructor to create a {@link PenguinPawPatrol} simulation wth specified parameters.
     * @param penguins List of Penguin objects.
     * @param foxes    List of fox objcects.
     * @param cats     List of cat Objects.
     * @param sharks   List of shark objects.
     * @param chicks   List of chick objects.
     * @param randomGenerator The random number generator.
     * @param penguinFamily  The penguin family
     */
    public PenguinPawPatrol(List<Penguin> penguins, List<Fox> foxes, List<Cat> cats,List<Shark> sharks,
                            List<Chick> chicks, RandomGenerator randomGenerator,PenguinFamily penguinFamily)
    {
        this.penguins = penguins;
        this.foxes =  foxes;
        this.cats = cats;
        this.sharks = sharks;
        this.chicks = chicks;
        this.randomGenerator = randomGenerator;
        this.penguinFamily = penguinFamily;
    } 

    /**
     * Accssor method to retrive the list of penguins.     
     *
     * @return The list of pengins
     */
    public List<Penguin> getPenguins()
    {
        return penguins;
    }

    /**
     * Mutator method to set the list of penguins
     *
     * @param penguins The list of penguins to be set.
     */
    public void setPenguins(List<Penguin> penguins)
    {
        this.penguins = penguins;
    }

    /**
     * Accssor method to retrive the list of fox.     
     *
     * @return The list of fox
     */
    public List<Fox> getFoxes()
    {
        return foxes;
    }

    /**
     * Mutator method to set the list of Fox
     *
     * @param  The list of foxes to be set.
     */
    public void setFoxes(List<Fox> foxes)
    {
        this.foxes = foxes;
    }

    /**
     * Accssor method to retrive the list of cat.     
     *
     * @return The list of cat
     */
    public List<Cat> getCats()
    {
        return cats;
    }

    /**
     * Mutator method to set the list of cat
     *
     * @param  The list of cat to be set.
     */
    public void setCats(List<Cat> cats)
    {
        this.cats = cats;
    }

    /**
     * Accssor method to retrive the list of shark.     
     *
     * @return The list of sharks
     */
    public List<Shark> getSharks()
    {
        return sharks;
    }

    /**
     * Mutator method to set the list of shark
     *
     * @param The list of shark  to be set.
     */
    public void setSharks(List<Shark> sharks)
    {
        this.sharks = sharks;
    }

     /**
     * Accssor method to retrive the list of chick.     
     *
     * @return The list of chiks
     */
    public List<Chick> getChicks()
    {
        return chicks;
    }

    /**
     * Mutator method to set the list of chick
     *
     * @param shark The list of chick to be set.
     */
    public void setChicks(List<Chick> chicks)
    {
        this.chicks = chicks;
    }

    /**
     * Accssor method retrive the random number generator used in the simulation   
     *
     * @return The list of chicks to be set
     */
    public RandomGenerator getRandomGenerator()
    {
        return randomGenerator;
    }

    /**
     * Display a welcome message at the beaginning  of the simulation
     */
    public void displayWelcomeMessage()
    {
        System.out.println("Welcome to Penguin Paw Patrol");
        System.out.println("======================");
    }

    /**
     * Prompt the user to input the number of patrol dogs for the simulation.
     *
     * @return The number of patrol dogs(0-2).
     */
    public int requestEnterNumberOfDogs()
    {
        Scanner scanner = new Scanner(System.in);
        Validation validation = new Validation();
        int numberOfDogs = -1;
        while(true)
        {
            System.out.print("How many patrol dogs?(0-2) ");
            String input = scanner.next();
            if(validation.isInteger(input))
            {
                numberOfDogs = Integer.parseInt(input);
                if(numberOfDogs >= 0 && numberOfDogs <= 2)
                {
                    System.out.println();//Add a blank line here
                    break;//valid input,exist the loop
                }
                else
                {
                    System.out.println("Error: number not in range(0-2)");
                }
            }
            else
            {
                //Input is not an integer
                System.out.println("Error: value is not a number: " + input);
            }
        }
        return numberOfDogs;
    }

    /**
     * Read colony  data from a fileIO , including penguin, fox ,cat an shark numbers.
     *
     * @return A list of integers containing colony data.
     */
    public List<Integer> readFile()
    {
        FileIO fileIO = new FileIO("colony.txt");
        List<Integer> colonyData = fileIO.readColonyData();
        return colonyData;
    }
    
    /**
     * Start the simulation by displaying a welcome message ,requesting the number of dogs
     * and Simulating events for multiple months.
     */
    public void startSimulation()
    {
        displayWelcomeMessage();
        int numberOfDogs = requestEnterNumberOfDogs();
        System.out.println("Running simulatiom from month 7 to 6");
        System.out.println("Number of dogs: " + numberOfDogs);
        System.out.println();
        simulateOneMonth(numberOfDogs);
    }   

    /**
     * Simulate the colony's activities for one month based on the givn number of patrol dogs.
     *
     * @param numberOfDogs The number of patrol dogs in the simlation(0-2).
     */
    public void simulateOneMonth(int numberOfDogs)
    {
        int[] months = {7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6};
        List<Integer> fileData = readFile();
        int penguinNumber = fileData.get(0);
        int foxNumber = fileData.get(1);
        int catNumber = fileData.get(2);
        int sharkNumber = fileData.get(3);

        //Initializes the number animal in the  colony
        penguinFamily.initilizeAnimalNumber(penguinNumber, foxNumber, catNumber, sharkNumber,
                                            penguins, foxes, cats, sharks);
        // Penguins mate and produce new offspring.
        penguinFamily.penguinMate(penguins);

        // Calculate the number of animals killed by dogs and update counts.
        List<Integer> numbers = hunter.monthKilledAnimal(numberOfDogs, penguins, foxes, cats, sharks, chicks);
        foxNumber -= numbers.get(4);
        catNumber -= numbers.get(5);

        int complete = penguinFamily.isComplete(penguins);

        //Generate a monthly report for the  first month.
        generateMonthReport(months[0], 0, 0, numbers, complete, 0, 0, foxNumber,
                            catNumber, sharkNumber);

        // Iterate over the remaining months            
        for(int i = 1; i < months.length; i++)
        {
            int month = months[i];

            // Penguins lay eggs.
            penguinFamily.addEggMonth(chicks);
            List<Integer> chickNumber = penguinFamily.hatchChick(chicks);
            int preyEggKilledCount = chickNumber.get(0);
            int newChicks = chickNumber.get(1);
            int newEggNumber = penguinFamily.newEgg(month, chicks, penguins);
            
            // Calculate the number of animals killed by dogs and update counts.
            List<Integer> animalKilledCounts = hunter.monthKilledAnimal(numberOfDogs, penguins, foxes, cats, sharks, chicks);
            int eatenChickCount = animalKilledCounts.get(2);
            int eatenEggCount = animalKilledCounts.get(3);
            int completeNumber = penguinFamily.isComplete(penguins);

            // calculate the number of eggs and chick without parents and total killed counts.
            List<Integer> eggAndChickKilledCounts = penguinFamily.chickWithoutParents(penguins, chicks);
            int eggWithoutParentKilledCount = eggAndChickKilledCounts.get(0);
            int chickWithoutParentKilledCount = eggAndChickKilledCounts.get(1);
            int totalKilledChickCount = chickWithoutParentKilledCount + eatenChickCount;
            int totalKilledEggCount = preyEggKilledCount + eatenEggCount + eggWithoutParentKilledCount;
            animalKilledCounts.add(2, totalKilledChickCount);
            animalKilledCounts.add(3, totalKilledEggCount);
            
            int liveChickCount = penguinFamily.liveChick(chicks);
            int liveEggCount = penguinFamily.liveEgg(chicks);
            
            // Generate a monthly report for the current month.
            generateMonthReport(months[i], newChicks, newEggNumber, animalKilledCounts, completeNumber, liveChickCount, 
                                liveEggCount, foxNumber, catNumber, sharkNumber);
        }
        //Generate a summary of the simlation.
        generateSimulationSummary();

        //Calculate and display surivival rates.
        generateSurvivalRates();
    }
    
    /**
     *
     * Generate a month resport for a specific month, displaying various statistics about the colony.
     *
     * @param month            The month being simulated.
     * @param newChicks        The number of new chicks born in the month.
     * @param newEggs          The number of new eggs laid in the month.
     * @param numbers          A list of counts for various events(animal deaths)
     * @param completeFamily   The count of complete penguin families.
     * @param liveChickCount   The count of complete penguin familes.
     * @param uneatenEggCount  The count of uneateneggs in the colony. 
     * @param foxCount         The count of foxes in the colony.
     * @param catCount         The count of cats in the colony.
     * @param sharkCount       The coubt of sharks in the colony.
     */ 
    public void generateMonthReport(int month, int newChicks, int newEggs, List<Integer> numbers,
                                    int completeFamily, int liveChickCount, int uneatenEggCount,
                                    int foxCount, int catCount, int sharkCount)
    {
        int malePenguinKilled = numbers.get(0);
        int femalePenguinKilled = numbers.get(1);
        int chicksKilled = numbers.get(2);
        int eggsEaten = numbers.get(3);
        int foxKilled = numbers.get(4);
        int catKilled = numbers.get(5);

        System.out.println("Simulating month " + month);
        System.out.println("+ new chicks: " + newChicks);
        System.out.println("+ new eggs: " + newEggs);
        System.out.println("penguin killed: " + malePenguinKilled+ "male," + femalePenguinKilled + "female");
        System.out.println("chicks killed: " + chicksKilled); 
        System.out.println("eggs eaten: " + eggsEaten);
        System.out.println("fox killed: " + foxKilled);
        System.out.println("cat Killed: " + catKilled);
        System.out.println("End of month colony status");
        System.out.println("complete family: " + completeFamily);
        System.out.println("live chick count: " + liveChickCount);
        System.out.println("uneaten egg count: " + uneatenEggCount);
        System.out.println("fox count: " + foxCount);
        System.out.println("cat count: " + catCount);
        System.out.println("shark count: " + sharkCount);
        System.out.println("press Enter to continue");

        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();
    }
    
    /**
     * Generates a summary of the simulation displaying the count of complete penguin fanilies, live penguins, and live chicks.
     * Waits for user inout to continue the simulation.
     */
    public void generateSimulationSummary()
    {
        int completeFamilyCount = penguinFamily.isComplete(penguins);
        int livePenguins = penguinFamily.getLivePenguinCount(penguins);
        int liveChicks = penguinFamily.getLiveChickCount(chicks);

        System.out.println("End of simulation summary");
        System.out.println("complete family: " + completeFamilyCount);
        System.out.println("live penguins: " + livePenguins);
        System.out.println("live chicks: " + liveChicks);
        System.out.println("Simulation is done . Press Enter to continue");

        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();
    }

    /**
     * calculates display  variouse surivival rate such as  family froup  survival rate, penguin surivival rate.
     * egg survival rate , chick survival rate, and overall colony survival rate. Also wrieted the survival rates to a file.
     */
    public void generateSurvivalRates()
    {
        int uneatenEggCount = penguinFamily.getUneatenEggCount(chicks);
        int livePenguinCount = penguinFamily.getLivePenguinCount(penguins);
        int liveChickCount = penguinFamily.calculateNewChicks(chicks);
        int totalPenguinCount = penguins.size();
        
        double familyGroupSurvalRate = penguinFamily.isComplete(penguins) / ((double)penguinFamily.penguinFamilies(penguins)) * 100;
        double penguinSurvivalRate = livePenguinCount / ((double)totalPenguinCount) * 100;
        double eggSurvivalRate = uneatenEggCount / ((double)chicks.size()) * 100;
        double chickSurvivalRate = liveChickCount != 0 ? uneatenEggCount /((double)liveChickCount) : 0;
        double colonySurvivalRate = (livePenguinCount + liveChickCount) / ((double)totalPenguinCount) * 100;

        System.out.println("colony survival rates:");
        System.out.println("family group survival rate: " + familyGroupSurvalRate + "%");
        System.out.println("penguin survival rate: " + penguinSurvivalRate + "%");
        System.out.println("egg survival rate: " + eggSurvivalRate + "%");
        System.out.println("Chick surivival rate: " + chickSurvivalRate + "%");
        System.out.println("conlony surivival: " + colonySurvivalRate + "%");

        FileIO fileIO = new FileIO("colonyFinal.txt");
        fileIO.writeToFile(familyGroupSurvalRate, penguinSurvivalRate, eggSurvivalRate, chickSurvivalRate,colonySurvivalRate);
        System.out.println();
        System.out.println("Writing surivival rate in colonyFinal txt");
        System.out.println("Good Bye");
    }

    /**
     * Override the  toString method to provides a string representation of the {@link PenguinPawPatrol} object
     *
     * @return A string  representation of the object.
     */
    @Override
    public String toString()
    {
        return "PenguinPawPatrol{" +
                "penguins=" + penguins +
                ", foxes=" + foxes +
                ", cats=" + cats +
                ", sharks=" + sharks +
                ", chicks=" + chicks +
                "}";
    }

    /**
     * The main method to start the {@link PenguinPawPatrol} simlation.
     *
     * @param args The command line arguments.
     */
    public static void main(String[] args)
    {
        PenguinPawPatrol penguinPawPatrol = new PenguinPawPatrol();
        penguinPawPatrol.startSimulation();
    }
}
