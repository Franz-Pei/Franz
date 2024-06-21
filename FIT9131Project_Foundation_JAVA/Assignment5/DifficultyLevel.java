/**
 * The {@link DifficultyLevel} class represents the difficulty settings for the game.
 * It includes options such as difficulty level, highway length constraints,
 * fuel capacity, obstacle count, and the current highway length.
 *
 */
public class DifficultyLevel
{
    private String difficultyOption;// The selected DifficultyLevel.
    private int minHighwayLength;// The minimum allowed highway length
    private int maxHighwayLength;// The maximum allowed highway length
    private double fuelCapacity;// The fuel capacity multiplier.
    private int obstacleCount;// The number of obstacles on the highway.
    private int currentHighwayLength;// The current length of the highway.

    /**
     * Default constructor initializes attributes with default values.
     */
    public DifficultyLevel()
    {
        difficultyOption = " ";
        minHighwayLength = 0;
        maxHighwayLength = 0;
        fuelCapacity = 0.0;
        obstacleCount = 0;
        currentHighwayLength = 0;
    }

    /**
     * Parameterozed constructor to set difficulty options and constraints.
     *
     * @param difficultyOption    The selected difficulty level.
     * @param minHighwayLength    The minimum allowed highway length.
     * @param maxHighwayLength    The maximum allowed highway length.
     * @param fuelCapacity        The fuel capaticty multiplier.
     * @param obstacleCount       The number of obstacle multiper.
     * @param currentHighwayLength The current length of the highway.
     */
    public DifficultyLevel( String difficultyOption, int minHighwayLength, int maxHighwayLength, double fuelCapacity, 
                            int obstacleCount, int currentHighwayLength)
    {
        this.difficultyOption = difficultyOption;
        this.minHighwayLength = minHighwayLength;
        this.maxHighwayLength = maxHighwayLength;
        this.fuelCapacity = fuelCapacity;
        this.obstacleCount = obstacleCount;
        this.currentHighwayLength = currentHighwayLength;
    }

    /**
     * Displays information about the difficulty level.
     */
    public void display()
    {
        System.out.println("Difficulty Level Information");
        System.out.println("Difficulty Option: " + difficultyOption);
        System.out.println("Min Highway Length: " + minHighwayLength);
        System.out.println("Max Highway Length: " + maxHighwayLength);
        System.out.println("Fuel Capacity: " + fuelCapacity);
        System.out.println("Obstacle Count: " + obstacleCount);
        System.out.println("Current Highway Length: " + currentHighwayLength);
    }
    /**
     * Gets the selected difficulty level.
     * 
     * @return The difficulty level.
     */
    public String getDifficultyOption()
    {
        return difficultyOption;
    }

    /**
     * Gets the minimum allows highway length.
     *
     * @return The minimum highway length.
     */
    public int getMinHighwayLength()
    {
        return minHighwayLength;
    }

    /**
     * Gets the maximum allowed highway length.
     *
     * @return The maximum highway length.
     */
    public int getMaxHighwayLength()
    {
        return maxHighwayLength;
    }
    
    /**
     * Gets the fuel capacity multiplier.
     *
     * @return The fuel capacity multliper.
     */
    public double getFuelCapacity()
    {
        return fuelCapacity;
    }

    /**
     * Gets the number of obstacles on the highway.
     *
     * @return The obstacle count.
     */
    public int getObstacleCount()
    {
        return obstacleCount;
    }

    /**
     * Gets the current length of the highway.
     * 
     * @return  The current highway length.
     */
    public int getCurrentHighwayLength()
    {
        return currentHighwayLength;
    }

    /**
     * Generates a random highway length within the specified constraints
     */
    private void generateRandomHighwayLength()
    {
        RandomGenerator randomGenerator = new RandomGenerator();
        int randomLength = randomGenerator.generateRandomInt(minHighwayLength, maxHighwayLength);
        setCurrentHighwayLength(randomLength);
    }

    /**
     * Sets the selected difficulty option.
     *
     * @param difficultyOption The new difficulty option.
     */
    public void setDifficultyOption(String difficultyOption)
    {
        Validation validatior = new Validation();
        if(!validatior.isBlank(difficultyOption))
        {
            this.difficultyOption = difficultyOption;
        }
        else
        {
            throw new IllegalArgumentException("Difficulty option cannot be null or empty.");
        }
        
    }

    /**
     * Sets the minimum allowed highway length.
     * @param minHighwayLength The new minimum highway length.
     */
    public void setMinHighwayLength(int minHighwayLength)
    {
        if(minHighwayLength < 0)
        {
            throw new IllegalArgumentException("Min highway length cannot be nagative");
        }
        this.minHighwayLength = minHighwayLength;
    }
    
    /**
     * Sets the maximum allowed highway length.
     *
     * @param maxHighwayLength The new maximum highway length.
     */
    public void setMaxHighwayLength(int maxHighwayLength)
    {
        if(maxHighwayLength < minHighwayLength)
        {
            throw new IllegalArgumentException("Max highway length cannot be less than min highway length.");
        }
        this.maxHighwayLength = maxHighwayLength;
    }

    /**
     * Sets the fuel capacity multiplier.
     *
     * @param fuelCapacity The new fuel capacity multiplier.
     */
    public void setFuelCapacity(double fuelCapacity)
    {
        this.fuelCapacity = fuelCapacity;
    }

    /**
     * Sets  the number of obstacles on the highway.
     *
     * @param obstacleCount The new obstacle count.
     */
    public void setObstacleCount(int obstacleCount)
    {  
        if(obstacleCount <= 0)
        {
            throw new IllegalArgumentException("Obstacle count must be greater than zero.");
        }
        this.obstacleCount = obstacleCount;
    } 
    
    /**
     * Sets the current length of the highway.
     *
     * @param currentHighwayLength The new current highway length.
     */
    public void setCurrentHighwayLength(int currentHighwayLength)
    {
        this.currentHighwayLength = currentHighwayLength;
    }

    /**
     * Sets the difficultyLevel level based on user input.
     */
    public void setDifficultyLevel()
    {
        
        System.out.println("Select difficulty");
        System.out.println("1. Easy");
        System.out.println("2. Moderate");
        System.out.println("3. Hard");
        System.out.println("Enter Your choice");
        Input input = new Input();
        int choice = input.acceptIntInput();
        switch(choice)
        {
            case 1:
                setDifficultyOption("Easy");
                setMinHighwayLength(10);
                setMaxHighwayLength(15);
                setFuelCapacity(1.0); 
                setObstacleCount(12);
                break;
            case 2:
                setDifficultyOption("Moderate");
                setMinHighwayLength(16);
                setMaxHighwayLength(30);
                setFuelCapacity(0.8);
                setObstacleCount(24);
                break;
            case 3:
                setDifficultyOption("Hard");
                setMinHighwayLength(31);
                setMaxHighwayLength(50);
                setFuelCapacity(0.5);
                setObstacleCount(45);
                break;
            default:
                System.out.println("Invalid choice. Defaulting to Easy difficulty.");
                setDifficultyOption("Easy");
                setMinHighwayLength(10);
                setMaxHighwayLength(15);
                setFuelCapacity(1.0); 
                setObstacleCount(12);
                break;
        }

        generateRandomHighwayLength();
        
    }

    /**
     * Returns  a string representation of the DifficultyLevel object.
     *
     * @return A string representation of the object.
     */
    @Override
    public String toString()
    {
        return  "DifficultyLevel{" +
                "difficultyOption=" + difficultyOption + '\'' +
                ", minHighwayLength=" + minHighwayLength +
                ", maxHighwayLength=" + maxHighwayLength +
                ", fuelCapacity=" + fuelCapacity +
                ", obstacleCount=" + obstacleCount +
                ", currentHighwayLength=" + currentHighwayLength +
                '}';
    }

    public void testDifficultyLevel()
    {
        // System.out.println("Create an DifficultyLevel object with the default constructor");
        // DifficultyLevel difficultyLevel = new DifficultyLevel();
        // difficultyLevel.display();

        // System.out.println("Create an DifficultyLevel object with the non-defult constructor with valid field values");
        // DifficultyLevel difficultyLevel2 = new DifficultyLevel("Hard", 31, 50, 0.5, 45, 0);
        // difficultyLevel2.display();

        // System.out.println("Create an DifficultyLevel object with the non-default construtor with invalid field values");
        // DifficultyLevel difficultyLevel3 = new DifficultyLevel(null, -1, -20, 1.5, -5, 0);
        // difficultyLevel3.display();

        // System.out.println("Create an DifficultyLevel ovject with test set funtion with invaid value");
        // DifficultyLevel difficultyLevel4 = new DifficultyLevel();
        // difficultyLevel4.setDifficultyOption(null);
        // difficultyLevel4.setMinHighwayLength(-1);
        // difficultyLevel4.setMaxHighwayLength(-20);
        // difficultyLevel4.setObstacleCount(0);
        // difficultyLevel4.display();

        // DifficultyLevel difficultyLevel5 = new DifficultyLevel();
        // difficultyLevel5.setDifficultyLevel();
        // difficultyLevel5.getDifficultyOption();
        // difficultyLevel5.display();

    }
}

