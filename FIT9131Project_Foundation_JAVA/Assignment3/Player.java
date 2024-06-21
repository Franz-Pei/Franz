/**
 * The Player class represents a player in the Learndle game.It stores the player's name
 * and their maximum game score. This class provides methods to get  and set the player's
 *
 * @auther[Ziqi Pei]
 * @version 5.0
 */
public class Player
{
    /**
     *Fields
     */
    public String name;
    public int maxScore;

    /**
     * Default construcor that  initilaizes the player with an unknown name and
     * a maximum score of 0
     */
    public Player()
    {
        this.name = "unknown";
        this.maxScore = 0;
    }   

    /**
     * return the maximum game score Achieved by the player.
     *
     * @return the maximum game score 
     */
    public int getMaxGameScore()
    {
        return maxScore;
    }

    /**
     * Sets the maximum game score for the plyer,if it is within the valie range.
     * @param maxScore the maximum game score to set
     */ 
    public void setMaxGameScore(int maxScore)
    {
        if(Validation.validateMaxGameScore(maxScore))
        this.maxScore = maxScore;
    }

    public void display()
    {
        System.out.println("Player Name: " + getName());
        System.out.println("Maximun Game Score: " + getMaxGameScore());
    }

    /**
     * Constructor the create a player with the given name and maximum game score,
     * if they mmet the validateion criteria.If the name or maximum game score is
     * invalid,default values are used.
     *
     * @param newName the player's name
     * @param maxGameScore the maximum game score
     */
    public Player(String newName, int maxGameScore)
    {
        if(Validation.validateName(newName))
        {
            this.name = newName;//filed initiolization
        }
        else
        {
            this.name = "unknown";
        }    
        if(Validation.validateMaxGameScore(maxGameScore))
        {
            this.maxScore = maxGameScore;
        }
        else
        {
            this.maxScore = 0;
        }    
    }

    /**
     * Return the name of the player.
     *
     * @return the player's name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Set the name of the player, ig it meets the vallidation crurerua.
     * If the name is invalid, the name iis set to"unknown."
     *
     * @param name the player's name to set
     * @return true if the name is valid and set successfully, otherwise false
     */ 
    public boolean setName(String name)
    {
        if(Validation.validateName(name))
        {
            this.name = name;
            return true;
        }    
        else
        {   
            this.name = "unknown";
            return false;
        }
    }

    /**
     * Return a string respresentation of the player object.
     * @return a string containing the player's name and maximum game score
     */
    @Override
    public String toString()
    {
        return "Player Name: " + getName() + "\n Maximum Game Score:" + getMaxGameScore();
    }   
    
    /**
     * Test Player 
     *
     * @return name Score
     **/
    // public static void main(String[] args)
    // {
    //     Player player = new Player("ABC123",90);
    //     System.out.println(player.toString());
    // }
  
}

