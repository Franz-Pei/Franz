/**
* respresents a player with a name and a score.
*/
public class Player
{
    //The player's name.
    private String name;
    private int score;

     /*
   * Create a new player with default value.
   * The name is set to "Unkonwn",and the score is set to 0.
   */
    public Player()
    {
        this.name = "Unknown";
        this.score = 0;
    }

  /**
   * Creates a new player with the specified name and default score
   * @param name the player's name.
   */
    public Player(String name){
        this.name = name;
        this.score = 0;
    }

    // Accessor for name field
    public String getName(){return name;}

    /**
    *Sets the player's name.
    *@param name the new name to set.
    */
    public void setName(String name){this.name = name;}

    /**
    * Returns the player's score.
    * @return the player's score.
    */
    public int getScore()  {return score;}
    
    /**
    *Sets the Player's score
    * @param score the new score to set.
    * @throws IllegalArgumentException if the score is negative.
    */
    public void setScore(int score) 
    {
        //Check for negative score
        if (score < 0){
            throw new IllegalArgumentException("Score must be a non-negative integer!");
        }

        this.score = score;
    }

    /**
    * Returns a string representation of the player.
    * @ return a string representation of player.
    */
    public String toString(){return name + "(score: " + score + ")";
    }
}


