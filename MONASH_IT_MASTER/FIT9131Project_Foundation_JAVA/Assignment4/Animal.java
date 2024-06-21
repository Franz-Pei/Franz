/**
 * The Animal class represents an abstract anima,which can be either a hunter or not.
 * It provides basic attributes and methods for an animal in the simulation.
 *
 * @author Ziqi Pei
 * @version 3.0
 */

public abstract class Animal
{
    private boolean isAlive;
    private boolean isHunter;

    /**
     * Constructor for initializing an animal object.
     *
     * @param isHunter Indicates whether the animal is a hunter.
     */
    public Animal(boolean isHunter)
    {
        this.isAlive = true;
        this.isHunter = isHunter;
    }

    /**
     * Get wheaher the animal is a hunter.
     *
     * @return Trur if it's a hunter, false {@link Penguin}
     */
    public boolean getIsHunter()
    {
        return this.isHunter;
    }

    /**
     * Gets wheather the animal isalive.
     *
     * @return True if it's alive , false is dead. 
     */
    public boolean getIsAlive()
    {
        return this.isAlive;
    }

    /**
     * Sets whether the animal is alive.
     *
     * @param isAlive Set to true for a living animal.false for a deacased one.
     */
    public void setIsAlive(boolean isAlive)
    {
        this.isAlive = isAlive;
    }

    /**
     * Set wheather the animal is a hunter.
     *
     * @param Hunter Set to trur if the animal is a hunter , false if it's not.
     */
    public void setHunter(boolean hunter)
    {
        isHunter = hunter;
    }    
    
    /**
     * Checks if the animal is alive;
     *
     * @return True if it's hunter.false otherwise.
     */
    public boolean isAlive()
    {
        return isAlive;
    }

    /**
     * Check if the animal is a hunter.
     *
     * @return True if it's a hunter. false otherwise;
     */
    public boolean isHunter()
    {
        return isHunter;
    }

    /**
     * Marks the animal as decased.
     */
    public void death()
    {
        this.isAlive = false;
    }

    @Override
    public String toString()
    {
        return "Animal {" + 
                "isAlive =" + isAlive +
                ", isHunter =" + isHunter +
                "}";
    }
}
