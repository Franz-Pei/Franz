/**
 * The {@link DeepPotholeObstacle} class represent a type of obstacle in the game - 
 * It is a subclass of the Obstacle clas and provides specific details for deep pothole obstacles.
 *
 * author: Ziqi Pei
 * @Version: 3.0
 */
public class DeepPotholeObstacle extends Obstacle
{
    /**
     * Default constantor initializes deep pothole with predefined values.
     */
    public DeepPotholeObstacle()
    {
        super("P",0, 60, true);
    }

    /**
     * Parameterized Constructor to set deep pothole attributes.
     *
     * @param type  The type of the Obstacle.
     * @param fuelPoints  The fuelPoints deduted when encountering the obstacle.
     * @param damagePoints  The damage points inflicted when encountering the obstacle.
     * @param isObstacle   A flag indicating if the object is an obstacle.
     */
    public DeepPotholeObstacle( String type, int fuelPoints, int damagePoints, boolean isObstacle)
    {
        super(type, fuelPoints, damagePoints, isObstacle);
    }

    /**
     * Gets the type of the deep pothole obstacle.
     *
     * @return The type of the obstacle.
     */
    @Override
    public String getType()
    {
        return super.getType();
    }

    /**
     * Gets the fuel points deduted when encountering the deep pothole obstacle.
     *
     * @return The fuel points deduted.
     */
    @Override
    public int getFuelPoints()
    {
        return super.getFuelPoints();
    }

    /**
     * Gets the damage points inflicted when encountering the deep pothole obstalce.
     *
     * @return The damage points inflicted.
     */
    @Override
    public int getDamagePoints()
    {
        return super.getDamagePoints();
    }

    /**
     * Checks if the object is a deep pothole obstacle.
     *
     * @return True if the object is a deep pothole obstacle, false otherwise.
     */
    @Override
    public boolean isObstacle()
    {
        return super.isObstacle();
    }

    /**
     * Sets the type of the deep pothole obstacle.
     *
     * @param type The new type of the obstacle.
     */
    @Override
    public void setType(String type)
    {
        super.setType(type);
    }

    /**
     * Sets the fuel points deducted when encountering the deep pothole obstacle.
     *
     * @param fuelPoints The new fuel points deduted.
     */
    @Override
    public void setFuelPoints(int fuelPoints)
    {
        super.setFuelPoints(fuelPoints);
    }

    /**
     * Sets the damage points ibflicted when encountering the deep  pothole obstacle.
     *
     * @param damagePoints The new damage points inflicted
     */
    @Override
    public void setDamagePoints( int damagePoints)
    {
        super.setDamagePoints(damagePoints);
    }

    /**
     * Sets whether the object is a deep pothole obstacle or not.
     *
     * @param isObstacle A flag indicating if the object is an obstacle.
     */
    @Override
    public void setObstacle( boolean isObstacle)
    {
        super.setObstacle(isObstacle);
    }

    /**
     * Returns a string representation of the DeepPotholeObstacle object.
     *
     * @return A string representation of the object.
     */
    @Override
    public String toString()
    {
        return "DeepPotholeObstacle{" +
        "type=" + getType() + '\'' +
        ",fuelPoints=" + getFuelPoints() +
        ", damagePoints=" + getDamagePoints() +
        ", isObstacle=" + isObstacle() +
        "}";
    }

}
