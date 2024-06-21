/**
 * The GameStatus class represents the current status of game, including drive distance,
 * move times, and the result of the game.
 *
 * author:Ziqi Pei
 * version: 12.0
 */

public class GameStatus
{
    private int driveDistance; // The distance covered by the player in the game.
    private int moveTimes;     // The number of moves made by the player.
    private String gameResult; // The result of the game(e.g, win, lose).

    /**
     * Default constantor initializes  the gameStatus with default values.
     */
    public GameStatus()
    {
        this.moveTimes = 1;
        this.driveDistance = 1;
        this.gameResult = " ";
    }

    /**
     * Parmeterzied constructor to create GameStatus with specified values.
     *
     * @param driveDistance The distance covered by the player.
     * @param moveTimes The number of moves mode by the player.
     * @param gameResult The result of the game.
     */
    public GameStatus(int driveDistance, int moveTimes, String gameResult)
    {
        Validation validataion = new Validation();// Create an instance of Validation getClass

        // Validate driveDistance
        if(driveDistance <= 0)
        {
            //If invalid ,set default value.
            this.driveDistance = 1;// Default value for invalid drive distance.
        } else
        {
            this.driveDistance = driveDistance;
        }
        // Validate moveTimes
        if(moveTimes <= 0)
        {   
            //If invalid ,set default value;
            this.moveTimes = 1;
        }
        else
        {
            this.moveTimes = moveTimes;
        }
        // Set gameResult directly , assumeing no
        if(validataion.isBlank(gameResult) || !("message".equals(gameResult)))
        {
            this.gameResult = " ";
        }else
        {
            this.gameResult = gameResult;
        }
    }
    /**
     * Displays the current game status, including dirve distacne. move times, and game result.
     */
    public void display()
    {
        System.out.println("Drive Distance :" + driveDistance);
        System.out.println("Move Times :" + moveTimes);
        System.out.println("Game Result :" + gameResult);
    }
    /**
     * Gets the drive distance
     *
     * @return The distance covered by the player.
     */
    public int getDriveDistance()
    {
        return driveDistance;
    }

    /**
     * Gets the number of moves made by the player.
     *
     * @return The number of moves.
     */
    public int getMoveTimes()
    {
        return moveTimes;
    }

    /**
     * Gets the result of the game.
     *
     * @return The result of the game(e.g.,win, lose).
     */
    public String getGameResult()
    {
        return gameResult;
    }

    /**
     * Sets the dirve distance.
     *
     * @param driveDistance The distance covered by the player.
     */
    public void setDriveDistance(int driveDistance)
    {
        this.driveDistance = driveDistance;
    }

    /**
     * Sets the number of moves made by the player.
     *
     * @param moveTimes The number of moves.
     */
    public void setMoveTimes(int moveTimes)
    {
        this.moveTimes = moveTimes;
    }

    /**
     * Sets the result of the game.
     *
     * @param gameResult The result of the game(e.g, win, lose).
     */
    public void setGameResult(String gameResult)
    {
        this.gameResult = gameResult;
    }

    /**
     * Returns a string representation of the {@link GameStatus}.
     *
     * @return A string representation of the GameStatus.
     */
    @Override
    public String toString()
    {
        return  "GameStatus{" + 
                "driveDistance=" + driveDistance +
                ", moveTimes=" + moveTimes +
                ", gameResult=" + gameResult + '\'' +
                '}';
    }

    public void testGameStatus()
    {
    //     System.out.println("Create an GameStatus object with the default constantor");
    //     GameStatus gameStatus1 = new GameStatus();
    //     gameStatus1.display();

    //     System.out.println("Create an GameStatus object with the non-default constantor with valid  filed values");
    //     GameStatus gameStatus2 = new GameStatus(75, 30, "GameOver");
    //     gameStatus2.display();

    //     System.out.println("Create an GameStatus object with the non-default constantor with invalid filed value");
    //     GameStatus gameStatus3 = new GameStatus(-10, -5, "12122");
    //     gameStatus3.display();

    //     System.out.println("Test Get Dirve Distance");
    //     GameStatus gameStatus4 = new GameStatus();
    //     int expectedDriveDistance = 100;
    //     gameStatus4.setDriveDistance(expectedDriveDistance);
    //     int actualDriveDistance = gameStatus4.getDriveDistance();
    //     if(expectedDriveDistance == actualDriveDistance)
    //     {
    //         System.out.println("Test passed:");
    //     }
    //     else
    //     {
    //         System.out.println("Test failed:");
    //     }

    //     System.out.println("Test getMoveTimes");
    //     GameStatus gameStatus5 = new GameStatus();
    //     int expectedMoveTimes1 = 50;
    //     gameStatus5.setMoveTimes(expectedMoveTimes1);
    //     int actualMoveTimes1 = gameStatus5.getMoveTimes();
    //     if(expectedMoveTimes1 == actualMoveTimes1)
    //     {
    //         System.out.println("Test passed:");
    //     }
    //     else
    //     {
    //         System.out.println("Test failed:");
    //     }

    //     System.out.println("Test getGameResult");
    //     GameStatus gameStatus6 = new GameStatus();
    //     String expectedGameResult = "Game Over";
    //     gameStatus6.setGameResult(expectedGameResult);
    //     String actualGameResult = gameStatus6.getGameResult();
    //     if(actualGameResult == expectedGameResult)
    //     {
    //         System.out.println("Test passed:");
    //     }
    //     else
    //     {
    //         System.out.println("Test failed:");
    //     }
    }

}
