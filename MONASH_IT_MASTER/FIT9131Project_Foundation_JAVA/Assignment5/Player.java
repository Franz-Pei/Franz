import java.util.List;
/**
 * Represents a player in the game.
 *
 */
public class Player
{
    //Player attributes
    private String playerName;     // The name of the player.
    private Vehicle selectedVehicle;// The vehicle selected by the Player.
    private int currentFuel;// The current fuel level of the player.
    private int currentDamage;// The current Damage level of the player.
    private int playerPositionX;// The X-coordinate of the player's position.
    private int playerPositionY;// The Y-coordinate of the player's position.
    
    /**
     * Default constantor for player.
     * Initializes default values for player attributes.
     */
    public Player()
    {
        playerName = " ";
        selectedVehicle = null;
        currentFuel = 0;
        currentDamage = 0;
        playerPositionX = 0;
        playerPositionY = 0;
   }
   
   /**
    * Parameterized constantor for Player.
    *
    * @param playerName The name of the player.
    * @param selectdVehicle The vehicle selected by the player.
    * @param currentFuel The current fuel level of the player.
    * @param currentDamage The current damage level of the player.
    * @param playerPositionX The X-coordinate of the player's position.
    * @param playerPositionY The Y-coordinate of the player's position.
    */
   public Player(String playerName, Vehicle selectdVehicle, int currentFuel, int currentDamage, 
                int playerPositionX, int playerPositionY)
   {
        this.playerName = playerName;
        this.selectedVehicle = selectdVehicle;
        this.currentFuel = currentFuel;
        this.currentDamage = currentDamage;
        initializePlayerPositionX();
        this.playerPositionY = playerPositionY;
   }
   
   /**
    * Displays Information about the player.
    */
    public void display()
    {
        System.out.println("Player Information");
        System.out.println("Name: " + playerName);
        // This checks if the selectedVehicle is not null it means a vehicle is selected, if is not null it retrive the type of selectedVehicle
        // useing the getType(),"None" This is a ternary operator if selected null it return "None"
        System.out.println("Selected Vehicle: " + selectedVehicle);
        System.out.println("Current Fuel: " + currentFuel);
        System.out.println("Current Damage: " + currentDamage);
        System.out.println("Player Position: (" + playerPositionX + ", " + playerPositionY + ")");
    }

    /**
     * Gets the name of the player.
     *
     * @return The player's name.initializeGame String playerName
     */
    public String getPlayerName()
    {
        return playerName;
    }

    /**
     * Gets the selected vehicle of the player.
     *
     * @return The selected vehicle.
     */
    public Vehicle getSelectedVehicle()
    {
        return selectedVehicle;
    }

    /**
     * Gets the current fuel level of the player.
     *
     * @return The current fuel lev1.
     */
    public int getCurrentFuel()
    {
        return currentFuel;
    }

    /**
     * Gets the current damage level of the player.
     *
     * @return The current damage level.
     */
    public int getCurrentDamage()
    {
        return currentDamage;
    }

    /**
     * Gets the X-coordinate of the player's position.
     *
     * @return The X-coordinate.
     */
    public int getPlayerPositionX()
    {
        return playerPositionX;
    }

    /**
     * Get the Y-coordinate of the player's position.
     *
     * @return The Y-coordinate.
     */
    public int getPlayerPositionY()
    {
        return playerPositionY;
    }

    /**
     * Initializes the X-coordinate of the player's position using a random value.
     */
    private void initializePlayerPositionX()
    {
        RandomGenerator randomGenerator = new RandomGenerator();
        this.playerPositionX = randomGenerator.generateRandomInt(0, 2);
    }
    
    /**
     * Sets the name of the player.
     *
     * @param playerName The new name for the player.
     * @return The update player name.
     */
    public String setPlayerName(String playerName)
    {
        Validation validation = new Validation();
        if(validation.isValidPlayerName(playerName))
        {
            this.playerName = playerName;
        }else
        {
            System.out.println("Error: Invalid player name. Name should not contain numbers and should only contain lowcase letters.");
        }
        return this.playerName;
    }
    
    /**
     * Sets the current damgae level of the player.
     * 
     * @param currentDamage The new damage level.
     */
    public void setCurrentDamage(int currentDamage)
    {
        this.currentDamage = currentDamage;
    }

    /**
     * Sets the X-coordinate of the player's position.
     *
     * @param playerPositionX The new X-coordinate. Game player.setPlayerPositionX
     */
    public void setPlayerPositionX(int playerPositionX)
    {
        if(playerPositionX >= 0)
        {
            this.playerPositionX = playerPositionX;
        }else
        {
            System.out.println("Error: playerPositionX cannot be negative.");
        }
        
    }

    /**
     * Sets the Y-coordiantae of the player's position.
     * @param playerPositionY The new Y-coordiantae
     */
    public void setPlayerPositionY(int playerPositionY)
    {
        if( playerPositionY >= 0)
        {
            this.playerPositionY = playerPositionY;
        }else
        {
            System.out.println("Error: playerPositionY cannot be negative.");
        } 
    }
    
    /**
     * Sets the selected vehicle for the player.
     *
     * @param selectedVehicle The new selected vehicle.
     */
    public void setSelectedVehicle(Vehicle selectedVehicle)
    {
        //the conditional operator is used yto check if not null. This way of 
        //writing ensures that the value of selectedVehicle is valid or no vehicle
        this.selectedVehicle = (selectedVehicle != null ? selectedVehicle : null);
    }

    /**
     * Sets the current fuel level of the player.
     *
     * @param currentFuel The new currentfuel level.
     */
    public void setCurrentFuel(int currentFuel)
    {   
        //If selectdVehicle is not null the value of this.currentFuel will be set to selectedVehicle。getMaxFuel().
        //If selectedVehicle is null, the value of this currentFuel will be set to 0;
        this.currentFuel = (selectedVehicle != null ? selectedVehicle.getMaxFuel() : 0);
    }

    /**
     * Converts th Player object to a string representation.
     *
     * @return A string representing the Player object.
     */
    @Override
    public String toString()
    {
        return  "Player{" +
                "playerName=" + playerName + '\'' +
                ", selectdVehicle=" + selectedVehicle+
                ", currentFuel=" + currentFuel +
                ", currentDamage=" + currentDamage +
                ", playerPositionX=" + playerPositionX +
                ", playerPositionY=" + playerPositionY +
                "}";
    }
    
    public void testPlayer()
    {
        // System.out.println("Create an Player object with the default constantor ");
        // Player player1 = new Player();
        // player1.display();

        // System.out.println("Create an Player object withe the non-default constantor with valid field values");
        // Player player2 = new Player();
        // player2.setPlayerName("ziqi");
        // player2.setSelectedVehicle(new Vehicle());
        // player2.setCurrentFuel(50);
        // player2.setCurrentDamage(20);
        // player2.setPlayerPositionX(2);
        // player2.setPlayerPositionY(0);
        // player2.display();

        // System.out.println("Create an Player object withe the non-default constantor with invalid field values");
        // Player player3 = new Player();
        // player3.setPlayerName("Joohn");
        // player3.setSelectedVehicle(null);
        // player3.setCurrentFuel(-50);
        // player3.setCurrentDamage(-20);
        // player3.setPlayerPositionX(-2);
        // player3.setPlayerPositionY(0);
        // player3.display();
    
    }
}
