/**
 * An abstract class representing obstalces  in the game.
 *
 * @author ziqi Pei
 * @version 5.0
 */
public abstract class Obstacle
{
    // Obstacle attributes
    private String type; // The type of the obstacle.
    private int fuelPoints;// The amount of fuel points associated with the obstacle.
    private int damagePoints;// The amount of  damage Points associated with the obstacle.
    private boolean isObstacle;    //indicates whether the object is an obstacle or not.
    
    /**
     * Default constantor for Obstacle.
     * Initializes default values for obstacle attributes.
     */
    public Obstacle()
    {
        type = " ";
        fuelPoints = 0;
        damagePoints = 0;
        isObstacle = true;
    }

    /**
     * Parameterized constantor for Obstacle.
     *
     * @param type The type of obstacle.
     * @param fuelPoints The amount of fuel points associated with the obstacle.
     * @param isObstacle Indicates wheather the object is an obstacle or not.
     */
    public Obstacle(String type, int fuelPoints,int damagePoints, boolean isObstacle)
    {
        this.type = type;
        this.fuelPoints = fuelPoints;
        this.damagePoints = damagePoints;
        this.isObstacle = isObstacle;
    }

    /**
     * Gets the type of the obstacle.
     *
     * @return The type of the obstacle.
     */
    public String getType()
    {
        return type;
    }

    /**
     * Gets the amount fuel points assoicated with the obstacle.
     *
     * @return The amount of fuel points.
     */
    public int getFuelPoints()
    {
        return fuelPoints;
    }

    /**
     * Gets the amount of damage points associated with the obstacle.
     *
     * @return The amount of damage points.
     */
    public int getDamagePoints()
    {
        return damagePoints;
    }

    /**
     * Checks if the object is an obstacle.
     * @return True if the object is an obstaccle, false otherwise.
     */
    public boolean isObstacle()
    {
        return isObstacle;
    }

    /**
     * Sets the type of the obstacle.
     *
     * @param type the new type for the obstacle.
     */
    public void setType(String type)
    {
        this.type = type;
    }

    /**
     * Set the amount of fuel points associated with the obstacle.
     *
     * @param fuelPoints The new amount of fuel points.
     */
    public void setFuelPoints(int fuelPoints)
    {
        this.fuelPoints = fuelPoints;
    }

    /**
     * Sets the amount of damage points assocaited with the obstacle.
     *
     * @param damagePoints The new amount of damage points.
     */
    public void setDamagePoints(int damagePoints)
    {
        this.damagePoints = damagePoints;
    }
    
    /**
     * Sets wheather the object is an obstacle or not.
     *
     * @param isObstacle True if the object is an obstacle, false otherwise.
     */
    public void setObstacle(boolean isObstacle)
    {
        this.isObstacle = isObstacle;
    }

    /**
     * Displays information about the obstacle.
     */
    public void display()
    {
        System.out.println("Type: " + type);
        System.out.println("Fuel Points: " + fuelPoints);
        System.out.println("Damage Points: " + damagePoints);
        System.out.println("Is Obstacle: " + isObstacle);
    }

    /**
     * Converts the Obstacle object to a string representation.
     *
     * @return A String representing the Obstacle object.
     */
    @Override
    public String toString()
    {
        return  "Obstacle{" +
                "type='" + type + "\'" +
                ", fuelPoints=" + fuelPoints +
                ", damagePoints=" + damagePoints +
                ", isObstacle=" + isObstacle +
                '}';
    }

    public void testObstacle()
    {
        // Obstacle obstacle1 = new DeepPotholeObstacle();
        // obstacle1.display();
        // System.out.println(obstacle1.toString());

        // Obstacle obstacle2 = new TyreSpikesObstacle();
        // obstacle2.display();
        // System.out.println(obstacle2.toString());

        // Obstacle obstacle3 = new RoadblockObstacle();
        // obstacle3.display();
        // System.out.println(obstacle3.toString());

        // Obstacle obstacle4 = new FuelObstacle();
        // obstacle4.display();
        // System.out.println(obstacle4.toString());

    }

}
