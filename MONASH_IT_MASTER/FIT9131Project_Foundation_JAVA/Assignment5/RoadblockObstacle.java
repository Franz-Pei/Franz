/**
 * RoadblockObstacle is a subclass Of Obstacle representing a type of Obstacle with a roadblock.
 *
 * @author Ziqi Pei
 * @version 3.0
 */
public class RoadblockObstacle extends Obstacle
{
    /**
     * Default constantor initialize the RoadblockObstacle with default values.
     */ 
    public RoadblockObstacle()
    {
        super("B", 0, 0, true);
    }

    /**
     * Parameterized constantor for creating a  RoadblockObstacle with custom values.
     *
     * @param type The type of the obstacle.
     * @param fuelPoints The fuel points assocaited with the obstacle.
     * @param damagePoints The damage points assocaited with the obstacle.
     * @param isObstacle A boolean indicaing if it is an obstacle or not.
     */
    public RoadblockObstacle(String type, int fuelPoints,int damagePoints, boolean isObstacle)
    {
        //Overrideen methods from the superclass(Obstacle)
        super(type, fuelPoints, damagePoints, isObstacle);//Calls the constructor of the superclass(Obstacle) with custome values
    }

    /**
     * Gets the type of the {@link RoadblockObstacle}
     *
     * @return The type of the obstacle.
     */
    @Override
    public String getType()
    {
        return super.getType();
    }

    /**
     * Gets the fuel points associated withe the RoadblockObstacle.
     *
     * @return The fuel points.
     */
    @Override
    public int getFuelPoints()
    {
        return super.getFuelPoints();
    }

    /**
     * Gets the  damage points assocaited with the {@link RoadblockObstacle}.
     *
     * @return The damage points
     */
    @Override
    public int getDamagePoints()
    {
        return super.getDamagePoints();
    }

    /**
     * Checks if the RoadblockObstacle is an obstacle or not.
     *
     * @return True if it is an obstacle, false otherwise.
     */
    @Override   
    public boolean isObstacle()
    {
        return super.isObstacle();
    }

    /**
     * Sets the type of the RoadblockObstacle.
     *
     * @param type The type to be set
     */
    @Override
    public void setType(String type)
    {
        super.setType(type);
    }

    /**
     * Sets the fuel points associated with the RoadblockObstacle.
     *
     * @param fuelPoints The fuel points to be set.
     */
    @Override
    public void setFuelPoints(int fuelPoints)
    {
        super.setFuelPoints(fuelPoints);
    }
    
    /**
     * Sets  the damage points assocaited with the RoadblockObstacle.
     *
     * @param damagePoints The Damage points to be set.
     */
    @Override
    public void setDamagePoints(int damagePoints)
    {
        super.setDamagePoints(damagePoints);
    }

    /**
     * Set whether the RoadblockObstacle is an obstacle or not.
     *
     * @param isObstacle A boolean indicating if it is an obstalce. 
     */
    @Override
    public void setObstacle(boolean isObstacle)
    {
        super.setObstacle(isObstacle);
    }

    /**
     * Generates a string representation of the RoadblockObstacle.
     *
     * @return A string representation of the RoadblockObstacle.
     */
    @Override
    public String toString()
    {
        return "RoadblockObstacle{" +
        "type=" + getType() + '\'' +
        ",fuelPoints=" + getFuelPoints() +
        ", damagePoints=" + getDamagePoints() +
        ", isObstacle=" + isObstacle() +
        "}";
    }
}
