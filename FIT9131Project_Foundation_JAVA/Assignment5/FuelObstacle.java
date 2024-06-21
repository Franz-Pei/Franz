/**
 * Represent a specific type of obstacle in the game that provideds fuel points.
 * Extends the base class Obstacle.
 *
 * author:Ziqi Pei
 * version: 3.0
 */
public class FuelObstacle extends Obstacle
{

    /**
     * Defaut constructor for FuelObstacle. 
     * Initialized tye type to "F", fuel points to 10, damage points to 0, and marks it as an obstacle.
     */
    public FuelObstacle()
    {
        super("F", 10, 0, true);
    }

    /**
     * Parameterized constructor for fuelObstacle.
     *
     * @param type       The type of the obstacle.
     * @param fuelPoints The amount of fuel points provided by the obstacle.
     * @param damagePoints The amount of damage points coused by the obstacle.
     * @param isObstacle  A boolean indicating whether the object is an obstacle.
     */
    public FuelObstacle(String type, int fuelPoints, int damagePoints, boolean isObstacle)
    {
        super(type, fuelPoints, damagePoints, isObstacle);
    }

    /**
     * Retrieves the type of the obstacle.
     *
     * @return The type of the obstacle.
     */
    @Override
    public String getType()
    {
        return super.getType();
    }  

    /**
     * Retrives the amount of damage points caused by the obstacle.
     *
     * @return The amount of damage points.
     */
    @Override
    public int getFuelPoints()
    {
        return super.getFuelPoints();
    }

    /**
     * Retrives the amount of damage points caused by the obstacle.
     * 
     * @return The amount of damage points.
     */
    @Override
    public int getDamagePoints()
    {
        return super.getDamagePoints();
    }

    /**
     * Checks if the object is an obstcle.
     *
     * @return True if the object is an obstacle, false otherwise.
     */
    @Override
    public boolean isObstacle()
    {
        return super.isObstacle();
    }

    /**
     * Sets the type of the obstacle.
     *
     * @param type The new type for the obstacle.
     */
    @Override
    public void setType(String type)
    {
        super.setType(type);
    }

    /**
     * Sets the amount of fuel points provided by the obtstacle.
     *
     * @param fuelPoints The new amount of fuel points.
     */
    @Override
    public void setFuelPoints(int fuelPoints)
    {
        super.setFuelPoints(fuelPoints);
    }

    /**
     * Sets the amount of damage points caused by the obstacle.
     *
     * @param damagePoints The new amount og damage points.
     */
    @Override
    public void setDamagePoints(int damagePoints)
    {
        super.setDamagePoints(damagePoints);
    }

    /**
     * Sets wheather the object is an obstacle or not.
     *
     * @param isObstacle A boolean indicating whether  the object is an obstacle.
     */
    @Override
    public void setObstacle(boolean isObstacle)
    {
        super.setObstacle(isObstacle);
    }

    /**
     * Converts the FuelObstacle object to a string representation.
     *
     * @return A String representing the FuelObstacle object.
     */
    @Override
    public String toString()
    {
        return "FuelObstacle{" +
        "type=" + getType() + '\'' +
        ",fuelPoints=" + getFuelPoints() +
        ", damagePoints=" + getDamagePoints() +
        ", isObstacle=" + isObstacle() +
        "}";
    }

}
