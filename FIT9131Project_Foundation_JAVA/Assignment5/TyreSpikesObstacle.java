/**
 * TyreSpikesObstacle is a subclass of Obstacle representing a typ
 * @author:ziqi Pei
 * @version: 3.0
 */
public class TyreSpikesObstacle extends Obstacle
{
    /**
     * Default constantor initializes the  TyreSpikesObstacle with default values
     */
    public TyreSpikesObstacle()
    {
        //Type,fuelPoints,damagePoints,isObstacle
        super("S", 0, 45,true);
    }

    /**
     * Parameterized constructor for creating a TyreSpikesObstacle with conston values.
     *
     * @param type The type of the obstacle.
     * @param fuelPoints The fuel points associated with the  obstacle.
     * @param damagePoints The damage points associated with the obstacle.
     * @param isObstacle A boolean indicating if it is an obstacle or not.
     */
    public TyreSpikesObstacle(String type, int fuelPoints, int damagePoints, boolean isObstacle)
    {
        //Override methods from the superclass (Obstacle)
        super(type, fuelPoints, damagePoints, isObstacle);
    }
    /**
     * Gets the type of the TyreSpikesObstacle.
     *
     * @return The type of the obstacle.
     */
    @Override
    public String getType()
    {
        return super.getType();
    }

    /**
     *Gets the fuel points associated with the TyreSpikesObstacle.
     *
     *@return The fuel points.
     */
    @Override
    public int getFuelPoints()
    {
        return super.getFuelPoints();
    }

    /**
     *Gets the damage points associated with The TyreSpikesObstacle
     * 
     * @return The damage points
     */
    @Override
    public int getDamagePoints()
    {
        return super.getDamagePoints();
    }

    /**
     * Checks if The {@link TyreSpikesObstacle} is an obstacle or not.
     *
     * @return True if it is an Obstacle, false otherwise.
     */
    @Override
    public boolean isObstacle()
    {
        return super.isObstacle();
    }

    /**
     * Sets the type of the TyreSpikesObstacle.
     *
     * @param type The type to be set.
     */
    @Override
    public void setType(String type)
    {
        super.setType(type);
    }

    /**
     * Sets the fuel points associated with the {@link TyreSpikesObstacle}.
     *
     * @param fuelPoints The fuel points to be set.
     */
    @Override
    public void setFuelPoints(int fuelPoints)
    {
        super.setFuelPoints(fuelPoints);
    }

    /**
     * Sets the damage points associated with the {@link TyreSpikesObstacle}
     *
     * @parm damagePoints The damgae points to be set.
     */
    @Override
    public void setDamagePoints(int damagePoints)
    {
        super.setDamagePoints(damagePoints);
    }

    /**
     * Sets whether the {@link TyreSpikesObstacle} is an obstacle or not.
     *
     * @param isObstacle A boolean indicaing if it is an obstacle.
     */
    @Override
    public void setObstacle(boolean isObstacle)
    {
        super.setObstacle(isObstacle);
    }

    /**
     * Generates a string representation of the {@link TyreSpikesObstacle}.
     *
     * @return A String representation of the {@link TyreSpikesObstacle}.
     */
    @Override
    public String toString()
    {
        return "TyreSpikesObstacle{" +
        "type=" + getType() + '\'' +
        ",fuelPoints=" + getFuelPoints() +
        ", damagePoints=" + getDamagePoints() +
        ", isObstacle=" + isObstacle() +
        "}";
    }
}
