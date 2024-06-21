import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.InputMismatchException;

/**
 * The main class representing the journey in the game.
 *
 * @author Ziqi Pei
 * @version 12.0
 */
public class Journey
{
    //Class attributes
    private Player player; // The Player class in the game.
    private Input input;// Input object for accepting user input.
    private DifficultyLevel difficultyLevel;//Difficulty Level of the game.
    private Highway highway;// The highway in the game.
    private Game game;// The game object.
    private List<Vehicle> vehicles;//Lists of available vehicles.
    private Scanner scanner;//Scanner object for user input.
    private GameStatus gameStatus;// The game status.

    /**
     * Default constructor for Journey.
     * Initialize various objects required for the game.
     */
    public Journey()
    {   
        this.player = new Player();
        this.input = new Input();
        this.difficultyLevel = new DifficultyLevel();
        this.highway = new Highway();
        this.scanner = new Scanner(System.in);
        this.vehicles = new ArrayList<>();
        this.gameStatus = new GameStatus();
    }

    /**
     * Parameterized constructor for Journey.
     * Initialized the objects with provided values.
     *
     * @param player   The palyer object.
     * @param input    The input object.
     * @param difficultyLevel The {@link DifficultyLevel}object.
     * @param highway  The highway object.
     * @param vehicles List of available vehicles.
     * @param scanner The scanner object.
     * @param gameStatus The game status object.
     */
    public Journey( Player player, Input input, DifficultyLevel difficultyLevel, Highway highway, List<Vehicle> vehicles, 
                    Scanner scanner, GameStatus gameStatus)
    {
        this.player = player;
        this.input = input;
        this.difficultyLevel = difficultyLevel;
        this.highway = highway;
        this.vehicles = vehicles;
        this.scanner = scanner;
        this.gameStatus = gameStatus;
    }

    /**
     * Displays a welcome message to the player.
     */
    public void displayWelcomeMessage()
    {
        System.out.println("Welcome to Java Journey");
        System.out.println("=======================");
    }

    /**
     * Display the avaliable vehicle options to the player.
     */
    public void displayVehicleOptions()
    {
        vehicles = new FileIO().readVehiclesFromFile();
        if(!vehicles.isEmpty())
        {
            System.out.println("Available Vehicles");
        }
        else
        {
            System.out.println("No vehicle available. Exiting the game.");
            System.exit(0);//GameStatus
        }
    }
    
    /**
     * Allows the player to choose a vehicle from the avaliable optins.
     *
     * @param vehicles List of avaliable vehicles.
     * @param playerName The name of the player.
     */
    public Vehicle chooseVehicle(List<Vehicle> vehicles, String playerName)
    {
        Vehicle currentVehicle = null;
        //Loop through and print the list of available vehicles
        System.out.println("Available Vehicles");
        for(int i = 0; i < vehicles.size(); i++)
        {
            currentVehicle = vehicles.get(i);
            System.out.println((i + 1) + "." + currentVehicle.getVehicleType());
            System.out.println(" Maximum Fuel: " + currentVehicle.getMaxFuel());
            System.out.println(" Max Damage: " + currentVehicle.getMaxDamage());
        }
        while(true)
        {
            System.out.println("Choose a vehicle 1-" + vehicles.size() + "):");
            int vehicleChoice = input.acceptIntInput();
            //Validate user input to ensure it is within the corre range
            if(vehicleChoice >= 1 && vehicleChoice <= vehicles.size())
            {
                //Set the selected Vehicle for the Player
                currentVehicle = vehicles.get(vehicleChoice - 1);
                //calculate actual Fuel fuelCapacity(percentage * maxFuel)
                double fuelPencentage = difficultyLevel.getFuelCapacity();
                int maxFuel = currentVehicle.getMaxFuel();
                int currentFuel = (int) (fuelPencentage * maxFuel);
                this.player = new Player( playerName, currentVehicle, currentFuel, currentVehicle.getMaxDamage(), 
                                          player.getPlayerPositionX(), player.getPlayerPositionY());
                System.out.println("You choose one vehicle" + currentVehicle.getVehicleType() + ".");
                System.out.println("Highway Length is" + difficultyLevel.getCurrentHighwayLength());
                System.out.println("Your current fuel is" + player.getCurrentFuel());
                System.out.println("Your corrent obstacleCount is" + difficultyLevel.getObstacleCount());
                break;
            }
        }
        return currentVehicle;
    }

    /**
     * Initializes the game by displaying welcome messages,setting up the player,
     * difficulty level, highway and Obstacle count.
     */
    public void initializeGame()
    {
        displayWelcomeMessage();
        displayVehicleOptions();
        player.setPlayerName(input.acceptValidName());
        String playerName = player.getPlayerName();
        difficultyLevel.setDifficultyLevel();

        // choose the current HighwayLength - numLanes is 3
        this.highway = new Highway(difficultyLevel.getCurrentHighwayLength(), 3);
        this.highway.initializeLanes();
        highway.display();

        //Generate obstacles and write the count to  features.txt
        int obstacleCount = difficultyLevel.getObstacleCount();
        highway.initializeObstacles(obstacleCount);
        highway.display();

        chooseVehicle(vehicles, playerName);
        this.game = new Game(player, highway);
    }

    /**
     * Starts the game loop and continues unitil the player reaches the end of the highway.
     */
    public void startGame()
    {
        initializeGame();
        System.out.println("Let the Game begin!");

        // The main game loop that continues unitil the player reaches the end of the highway
        while(player.getPlayerPositionY() + 1 < highway.getSectionsLength())
        {
            //Check if the player runs out of fuel
            if(player.getCurrentFuel() <= 0)
            {
                handleGameOver("The Vehicle didn't have fuel, Game Over!!");
                break;
            }
            //Check if the player's vehicle is broken
            if(player.getCurrentDamage() <= 0)
            {
                handleGameOver("The Vehicle has been broken, Game Over!!");
                break;
            }
            // Check if the player runs into Roadblock(B)
            if(game.isInDeadEnd(player.getPlayerPositionX(), player.getPlayerPositionY()))
            {
                handleGameOver("You encountered Roadblock three times, Game Over!!");
                break;
            }
            
            //Executed a turn in the game
            playTurn();

            //Increment the move count in the game status
            int moveTimes = gameStatus.getMoveTimes();
            gameStatus.setMoveTimes(moveTimes + 1);
        }
        game.displayShowSections();
        //Check if the player reached the end of the highway
        if(player.getPlayerPositionY() == highway.getSectionsLength() - 1)
        {
            gameStatus.setGameResult("You got it, Win!!");
        }

        //Set the total drive distance in the game status
        gameStatus.setDriveDistance(player.getPlayerPositionY() + 1);
        
        //Display the final game status
        displayGameStatus();

        //Write the obstacle count to the feature file
        writeObstacleCountToFeatures(difficultyLevel.getObstacleCount());
        
        //Close the scanner to avoid resoure leaks
        scanner.close();
    }


    /**
     * Handles the game over scenario by seeting the game result and displaying a message.
     *
     * @param message The message to display.
     */
    private void handleGameOver(String message)
    {
        gameStatus.setGameResult(message);
        System.out.println(message);
    }
    

    /**
     * Plays a turn in the game by displaying sections and processing player input.
     */ 
    public void playTurn()
    {
         game.displayShowSections();
         processPlayerInput();
    }

    /**
     * Processes player input by displaying movement options and executing the chosen move.
     */
    public void processPlayerInput()
    {
        Validation validator = new Validation();
        //Accept user input for the desired move
        int choice;
        while(true)
        {
            try
            {
                System.out.println("Choose your move:");
                System.out.println("1. Move forward");
                System.out.println("2. Move up");
                System.out.println("3. Move down");
                System.out.println("4. Move diagonally up");
                System.out.println("5. Move diagonally down");
                choice = scanner.nextInt();
                scanner.nextLine();//consume Invalid input
                
            }catch(InputMismatchException e)
            {
                System.out.println("Invalid input, please enter a number");
                scanner.nextLine();
                continue;//loop input
            }
            
            //use Validation validated user input
            String validationMessage = validator.isValidMoveDirection(choice);
            if(validationMessage != null)
            {
                System.out.println(validationMessage);
                continue;
            }
            
            // Flag to track wheather the movement was successful
            boolean isMovementSuccessful = false;

            // Switch statement to handle differernt movement choices
            switch(choice)
            {
                case 1:
                    //Attempt to move forward in the game.
                    isMovementSuccessful = game.moveForward();
                    break;
                case 2:
                    //Attempt to move Up in the game
                    isMovementSuccessful = game.moveUp();
                    break;
                case 3:
                    //Attempt to move down in the game
                    isMovementSuccessful = game.moveDown();
                    break;
                case 4:
                    //Attempt to move diagonally up in the game
                    isMovementSuccessful = game.moveDiagonallyUp();
                    break;
                case 5:
                    //Attempt to move diagonally down in the game
                    isMovementSuccessful = game.moveDiagonallyDown();
                    break;
                default:
                    // Handle invalid choice
                    System.out.println("Invalid choice. Try again");
            }

            // If the movement was not successful, break out of the loop
            if(!isMovementSuccessful)
            {
                break;
            }
        }       
    }

    public void displayGameStatus()
    {
        System.out.println("Game Over!");
        System.out.println("Distance Covered: " + gameStatus.getDriveDistance());
        System.out.println("Move Made: " + gameStatus.getMoveTimes());
        System.out.println("Outcome: " + gameStatus.getGameResult());
        FileIO fileIO = new FileIO();
        fileIO.writeGameResultToFile(gameStatus.getDriveDistance(), gameStatus.getMoveTimes(), gameStatus.getGameResult());
    
    }
    
    /**
     * Writes the obstacle count to features.txt file.
     *
     * @param obstacleCount The count of obstacles in the game.
     */
    public void writeObstacleCountToFeatures(int obstacleCount)
    {
        //Create an instance of FileIO to handle file input and output operation
        FileIO fileIO = new FileIO();
        //Create a String featureDescription that describes the feature, which contains information about the number of obstacles.
        String featureDescription = "Number of obstacle generated: " + obstacleCount;
        
        //Obtain the obstacle information list obstaclePositionAndTypeList by calling the highway.tellObstaclesInformation()method
        List<String> obstaclePositionAndTypeList = highway.tellObstaclesInformation();
        
        // Use a StringBuilder object obstaclePositionAndType store the location and type information of the obstacle.
        StringBuilder obstaclePositionAndType = new StringBuilder();
        //By iterating over the obstaclePositionAndTypeList,append the information of each obstacle to the obstaclePositionAndType.
        for(String obstacleInfomation : obstaclePositionAndTypeList)
        {
            obstaclePositionAndType.append(obstacleInfomation);
        }
        //Write feature description and obstacle position type information into the feature file by calling fileIO.
        fileIO.writeFeatureToFile(featureDescription, obstaclePositionAndType.toString());
    }

    /**
     * The main method to start the game by creating a Journey object and calling startGame method.
     *
     * @param args Commendd line arguments(not used in this case).
     */
    public static void main(String[] args)
    {
        Journey journey = new Journey();
        journey.startGame();
    }


    public void testJourney()
    {
        // Journey journey = new Journey();
        // displayWelcomeMessage();
        
        // displayVehicleOptions();
        // player.setPlayerName(input.acceptValidName());
        // String playerName = player.getPlayerName();
        // difficultyLevel.setDifficultyLevel();
        
        // // choose the current HighwayLength - numLanes is 3
        // highway = new Highway(difficultyLevel.getCurrentHighwayLength(), 3);
        // highway.initializeLanes();
        // highway.display();
        // int obstacleCount = difficultyLevel.getObstacleCount();
        // this.highway.initializeObstacles(obstacleCount);//put Obstacle Number put generateRandomObstacle
        // highway.display();
        
        // chooseVehicle(vehicles, playerName);
        // this.game = new Game(player, highway);

        // System.out.println("Let the Game begin!");

        // // The main game loop that continues unitil the player reaches the end of the highway
        // while(player.getPlayerPositionY() + 1 < highway.getSectionsLength())
        // {
        //     //Check if the player runs out of fuel
        //     if(player.getCurrentFuel() <= 0)
        //     {
        //         handleGameOver("The Vehicle didn't have fuel, Game Over!!");
        //         break;
        //     }
        //     //Check if the player's vehicle is broken
        //     if(player.getCurrentDamage() <= 0)
        //     {
        //         handleGameOver("The Vehicle has been broken, Game Over!!");
        //         break;
        //     }
        //     // Check if the player runs into Roadblock(B)
        //     if(game.isInDeadEnd(player.getPlayerPositionX(), player.getPlayerPositionY()))
        //     {
        //         handleGameOver("You encountered Roadblock three times, Game Over!!");
        //         break;
        //     }
            
        //     //Executed a turn in the game
        //     playTurn();

        //     //Increment the move count in the game status
        //     int moveTimes = gameStatus.getMoveTimes();
        //     gameStatus.setMoveTimes(moveTimes + 1);
        // }
        // game.displayShowSections();
        // //Check if the player reached the end of the highway
        // if(player.getPlayerPositionY() == highway.getSectionsLength() - 1)
        // {
        //     gameStatus.setGameResult("You got it, Win!!");
        // }

        // //Set the total drive distance in the game status
        // gameStatus.setDriveDistance(player.getPlayerPositionY() + 1);
        
        // //Display the final game status
        // displayGameStatus();

        // //Write the obstacle count to the feature file
        // writeObstacleCountToFeatures(difficultyLevel.getObstacleCount());
        
        // //Close the scanner to avoid resoure leaks
        // scanner.close();
        
    }

}
