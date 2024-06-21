/**
 * The Game class represents the game logic and cations taken by the player on the highway.
 *
 * author: Ziqi Pei
 * version: 12.0
 */
public class Game
{
    private Player player; // The  player participating in the game
    private Highway highway;// The highway where the game is played.
    
    /**
     * Default constantor for the Game class
     */
    public Game()
    {
        this.player = new Player();
        this.highway = new Highway();
    }

    /**
     * Parameterized constructor to create a Game with a specific player and highway.
     *
     * @param player The player participating in the game.
     * @param highway The highway where the game is played.
     */
    public Game(Player player, Highway highway)
    {
        this.player = player;
        this.highway = highway;
    }

    /**
     * Retrieves the player associated with the game.
     *
     * @return The player participating in the game.
     */
    public Player getPlayer()
    {
        return player;
    }

    /**
     * Retrieves the highway where the game is played.
     * 
     * @return The highway where the game is palyed
     */
    public Highway getHighway()
    {
        return highway;
    }

    /**
     * Sets the player for the game.
     *
     * @param player The player to set for the game.
     */
    public void setPlayer(Player player)
    {
        this.player = player;
    }

    /**
     * Sets the highway for the game.
     *
     * @param highway The highway to set for the game.
     */
    public void setHighway(Highway highway)
    {
        this.highway = highway;
    }
    
    /**
     * Display the sections of the highway around the player's current position.
     */
    public void displayShowSections()
    {
        //Calcuelate the starting index for displaying the Section, ensure it's not less than 0
        int displayStartIndex = Math.max(0, player.getPlayerPositionY() - 4);

        //Calcuelate the ending index for displaying the highway, limited to a maimum of 10 section or the total Section length
        int displayEndIndex = Math.min(displayStartIndex + 10, highway.getSectionsLength());

        
        //Loop through each lane of the highway
        for(int i = 0; i < highway.getNumLanes(); i++)
        {
            //Display a row of '-' character to represent the top boundar of the Section
            for(int j = displayStartIndex; j < displayEndIndex; j++)
            {
                    System.out.printf(" %c ", '-');  
            }
            System.out.println();
            //Display the content of each section in the current lane
            for(int j = displayStartIndex; j < displayEndIndex; j++)
            {
                //Check if the current section is the player's position, and display '@' if true;
                if(i == player.getPlayerPositionX() && j == player.getPlayerPositionY())
                {
                    System.out.printf(" %c ", '@');
                    continue;
                }
                //Display the content of the highway displayShowSections
                System.out.printf(" %c ", highway.getSectionLanes()[i][j]);   
            }
            System.out.println();
        }
        //Display a row of character '-' to represent the bottom boundaryof the highway section
        for(int j = displayStartIndex; j < displayEndIndex; j++)
        {
            System.out.printf(" %c ", '-');
        } 
        System.out.println();
    }

    /**
     * Checks whether the player is in a dead-end formed by three consecutivae 'B' obstacles or in a row of three 'B' obstacles.
     *
     * @param x The current X coordinate of the player.
     * @param y The current Y corrdinate of the player.
     * @return Returns true if the players is in a dead-end or row; otherwise, returns false;
     */
    public boolean isInDeadEnd(int x, int y)
    {
        //check if the current position is'B';
        if(highway.getSectionLanes()[x][y] == 'B')
        {
            //check if the next section is also 'B'
            if(y + 1 < highway.getSectionsLength() && highway.getSectionLanes()[x][y + 1] == 'B')
            {
                //Check if the next sectio is also 'B'
                if(y + 2 < highway.getSectionsLength() && highway.getSectionLanes()[x][y + 2] == 'B')
                {
                    return true;// In a dead-end formed by three consecutive 'B' obstacles
                }
            }
        }
        return false;
    }
    
    /**
     * Moves the player forward on the highway.
     *
     * @return True
     * if the player cannot move forward, false otherwise.
     */
    public boolean moveForward()
    {
        int x = player.getPlayerPositionX();
        int y = player.getPlayerPositionY();
        //x y consumeFuel + 1
        boolean cannotMoveForward = updatePlayerStatusAtCurrentPosition(x, y + 1, 1);
        if(!cannotMoveForward)
        {
            player.setPlayerPositionY(y + 1);
        }
        return cannotMoveForward;
    }

    /**
     * Moves the player up on the highway.
     *
     * @return True if the player cannot move up, false otherwise.
     */
    public boolean moveUp()
    {
        int x = player.getPlayerPositionX();
        int y = player.getPlayerPositionY();
        if(x == 0)
        {
            System.out.println("Your position iis at the top of the highway, cam't move Up");
            return true;
        }
        boolean cannotMoveUp = updatePlayerStatusAtCurrentPosition(x - 1, y, 2);//x,y consumeFuel
        if(!cannotMoveUp)
        {
            player.setPlayerPositionX(x - 1);
        }
        return cannotMoveUp;
    }

    /**
     * Moves the player down on the highway.
     *
     * @return True if the player cannot move down, false otherwise.
     */
    public boolean moveDown()
    {
        int x = player.getPlayerPositionX();
        int y = player.getPlayerPositionY();
        if(x == highway.getNumLanes() - 1)
        {
            System.out.println("Your position is at the botton of the highway, can't move down");
            return true;
        }
        boolean cannotMoveDown = updatePlayerStatusAtCurrentPosition(x + 1, y, 2);//x, y , consumeFuel
        if(!cannotMoveDown)
        {
            player.setPlayerPositionX(x + 1);
        }
        return cannotMoveDown;
    }

    /**
     * Moves the player diagonally up on the highway.
     * 
     * @return True if the player cannot move diagonally up,false otherwise
     */
    public boolean moveDiagonallyUp()
    {
        int x = player.getPlayerPositionX();
        int y = player.getPlayerPositionY();
        if(x == 0)
        {
            System.out.println("Your position is at the top of the highway, can't mpve Diagonally Up");
            return true;
        }
        //x: x - 1 y: y + 1, consumeFuel:4
        boolean cannotMoveDiagonallyUp = updatePlayerStatusAtCurrentPosition(x - 1,  y + 1, 4);
        if(!cannotMoveDiagonallyUp)
        {
            player.setPlayerPositionX(x - 1);
            player.setPlayerPositionY(y + 1);
        }
        return cannotMoveDiagonallyUp;
    }

    /**
     * Moves the player diagonally down on the highway.
     *
     * @return True if the player cannot move diagonally down, false otherwise.
     */
    public boolean moveDiagonallyDown()
    {
        int x = player.getPlayerPositionX();
        int y = player.getPlayerPositionY();
        if (x == highway.getNumLanes() - 1)
        {
            System.out.println("Your position at the bottom of the highway, can't move Diagonally dowm");
            return true;
        }
        boolean cannotMoveDiagonallyDown = updatePlayerStatusAtCurrentPosition(x + 1, y + 1, 4);
        if(!cannotMoveDiagonallyDown)
        {
            player.setPlayerPositionX(x + 1);
            player.setPlayerPositionY(y + 1);
        }
        return cannotMoveDiagonallyDown;
    }

    /**
     * Processes the current position of the player, updating fuel, damage, and handling obstacle.
     *
     * @param x The x-coordiantae of the player's position.
     * @param y The y-coordiantae of the player's position.
     * @param consumeFuel The amount of fuel to consume in the current position.
     * @return True if the player cannot move further, false otherwise.
     */
    public boolean updatePlayerStatusAtCurrentPosition(int x, int y, int consumeFuel)
    {
        int currentFuel = player.getCurrentFuel();
        int currentDamage = player.getCurrentDamage();
        currentFuel -= consumeFuel;

        switch(highway.getSectionLanes()[x][y])
        {
            case 'F':
                FuelObstacle fuelObstacle = new FuelObstacle();
                // ? : is a ternary conditional operator in Java Theis line compares the calculateed fuel level(currentFuelAddTen) with the maimum fuek capacityof the selected vehicle(player.getSelectedVehicle().getMaxFuel()).
                // It assigns the minimum value between the calculated fuel level and the maximum fuel capacity to the  variable fuel. This ensures that the fuel level doesn't exced the maximum capacity if the selected vehicle.
                int currentFuelAddTen = currentFuel + fuelObstacle.getFuelPoints();
                int fuel = (currentFuelAddTen > player.getSelectedVehicle().getMaxFuel()) ? player.getSelectedVehicle().getMaxFuel(): currentFuelAddTen;
                player.setCurrentFuel(fuel);
                break;
            case 'B':
                RoadblockObstacle roadblockObstacle = new RoadblockObstacle();
                System.out.println("This Obstacle can't be passed , please try again.");
                player.setCurrentDamage(currentDamage - roadblockObstacle.getDamagePoints());
                return true;
            case 'S':
                TyreSpikesObstacle tyreSpikesObstacle = new TyreSpikesObstacle();
                player.setCurrentDamage(currentDamage - tyreSpikesObstacle.getDamagePoints());
                break;
            case 'P':
                DeepPotholeObstacle deepPotholeObstacle = new DeepPotholeObstacle();
                player.setCurrentDamage(currentDamage - deepPotholeObstacle.getDamagePoints());
                break;
            default:
                player.setCurrentFuel(currentFuel);
        }
        return false;
    }

    public void testGame()
    {
        // System.out.println("Create an object with show section");
        // Game game1 = new Game();
        // game1.displayShowSections();

        // System.out.println("Test Move Forward");
        // Game game2 = new Game();
        // game2.moveForward();
        // game2.displayShowSections();
        
        // System.out.println("test move Down");
        // game2.moveDown();
        // game2.displayShowSections();

        // System.out.println("test Diagnoally Down");
        // game2.moveDiagonallyDown();
        // game2.displayShowSections();

        // System.out.println("test Diagnoally Up");
        // game2.moveDiagonallyUp();
        // game2.displayShowSections();

        // System.out.println("test Move Up");
        // game2.moveUp();
        // game2.displayShowSections();

        // System.out.println("test Move Up");
        // game2.moveUp();
        // game2.displayShowSections();

        // System.out.println("Create an object with show section");
        // Game game3 = new Game();
        // game3.displayShowSections();
        // //Set the player's initial poistion
        // game3.getPlayer().setPlayerPositionX(1);
        // game3.getPlayer().setPlayerPositionY(2);
        // game3.player.setCurrentFuel(10);
        // //Test the updatePlayerStatusAtCurrentPosition method
        // System.out.println("Test Update Player Status At Current Position");
        // game3.getHighway().getSectionLanes()[1][3] = 'B';
        // System.out.println("Player's Current Fuel before update: " + player.getCurrentFuel());
        // boolean cannotMove = game3.updatePlayerStatusAtCurrentPosition(1, 3, 2);//x, y, consumeFuel
        // //DisPlay the update sections and player's update status
        // System.out.println("Player's Current Fuel: " + game3.getPlayer().getCurrentFuel());
        // System.out.println("Cannot move further: " + cannotMove);
        // System.out.println("Player's Current Damage: " + game3.getPlayer().getCurrentDamage());
        // game3.displayShowSections();

        // System.out.println(" test updatePlayerStatusAtCurrentPosition F");
        // Game game4 = new Game();
        // Vehicle selectedVehicle = new Vehicle("Car", 100, 10);
        // game4.getPlayer().setSelectedVehicle(selectedVehicle);
        
        // //Set the player's initial poistion
        // game4.getPlayer().setCurrentFuel(10);
        // game4.getPlayer().setPlayerPositionX(1);
        // game4.getPlayer().setPlayerPositionY(1);
        // //Test the updatePlayerStatusAtCurrentPosition method
        // System.out.println("Initial Sections: ");
        // game4.displayShowSections();
        // FuelObstacle fuelObstacle = new FuelObstacle();
        // int fuelPoints = fuelObstacle.getFuelPoints();
        // boolean cannotMove2 = game4.updatePlayerStatusAtCurrentPosition(1, 1, fuelPoints);//x, y, consumeFuel
        // //DisPlay the update sections and player's update status
        // System.out.println("Update Sections:");
        // game4.displayShowSections();
        // System.out.println("Player's Current Fuel: " + game4.getPlayer().getCurrentFuel());
        // System.out.println("Cannot move further: " + cannotMove2);
        

        // System.out.println(" test updatePlayerStatusAtCurrentPosition P ");
        // Game game6 = new Game();
        // Vehicle selectedVehicle3 = new Vehicle("Car", 100, 10);
        // game6.getPlayer().setSelectedVehicle(selectedVehicle3);
        // //Set the player's initial poistion
        // game6.getPlayer().setCurrentDamage(100);
        // game6.getPlayer().setPlayerPositionX(3);
        // game6.getPlayer().setPlayerPositionY(2);
        // //Test the updatePlayerStatusAtCurrentPosition method
        // game6.getHighway().getSectionLanes()[3][3] = 'P';
        // System.out.println("Initial Sections: ");
        // game6.displayShowSections();
        // DeepPotholeObstacle deepPotholeObstacle = new DeepPotholeObstacle();
        // int damagePointsP = deepPotholeObstacle.getDamagePoints();
        // boolean cannotMoveP = game6.updatePlayerStatusAtCurrentPosition(3, 3, damagePointsP);//x, y, 
        // //DisPlay the update sections and player's update status
        // System.out.println("Update Sections:");
        // game6.moveForward();
        // game6.displayShowSections();
        // System.out.println("Cannot move further: " + cannotMoveP);
        // System.out.println("Player's Initial Damage:100");
        // System.out.println("Player's Current Damage: " + game6.getPlayer().getCurrentDamage());
        
        // System.out.println(" test updatePlayerStatusAtCurrentPosition S ");
        // Game game7 = new Game();
        // Vehicle selectedVehicle4 = new Vehicle("Car", 100, 10);
        // game7.getPlayer().setSelectedVehicle(selectedVehicle4);
        // //Set the player's initial poistion
        // game7.getPlayer().setCurrentDamage(100);
        // game7.getPlayer().setPlayerPositionX(3);
        // game7.getPlayer().setPlayerPositionY(2);
        // //Test the updatePlayerStatusAtCurrentPosition method
        // game7.getHighway().getSectionLanes()[3][3] = 'S';
        // System.out.println("Initial Sections: ");
        // game7.displayShowSections();
        // boolean cannotMoveS = game7.moveForward();
        // //DisPlay the update sections and player's update status
        // System.out.println("Update Sections:");
        // game7.displayShowSections();
        // System.out.println("Cannot move further: " + cannotMoveS);
        // System.out.println("Player's Initial Damage:100");
        // System.out.println("Player's Current Damage: " + game7.getPlayer().getCurrentDamage());
    }

}
