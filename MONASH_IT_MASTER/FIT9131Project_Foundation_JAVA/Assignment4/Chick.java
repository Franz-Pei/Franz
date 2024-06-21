/**
 * The chick class represents a type of animal, specifcally a chick. 
 * It inherits from the abstract Animal class.
 * Chick are not considered hunters, and they have attribute for tracking their age and whether they are prey.
 *
 * @author Ziqi Pei
 * @version 5.0
 */
public class Chick extends Animal
{
    private String id;
    private int month;
    private boolean isPrey;

    /**
     * Constructor for initailzing a chick object witj the given iD.
     * 
     * @parm id The unique identifier for the chick.
     */
    public Chick(String id)
    {
        super(false);// extend  boolean isHunter false
        this.month = 0;
        this.isPrey = false;//default egg can not be Prey
        this.id = id;
    }

    /**
     * Accessor metod to retrive the age of the chick in months. 
     *
     * @return The age of the chick in months.
     */
    public int getMonth()
    {
        return this.month;
    }

    /**
     * Accessor method to retrieve the age of the chick in months.
     *
     * @return The age of the chick in months.
     */
    public void setMonth()
    {
        this.month += 1;
    }
    /**
     * Accessor method to check if the chick cosidered prey.
     *
     * @return True if the chick is considered prey, false otherwise.
     */
    public void prey()
    {
        this.isPrey = true;
    }

    /**
     * Accessor method to check if the chick is considered prey.
     *
     * @return True if the chick is considered prey, false is not prey
     */
    public boolean getIsPrey()
    {
        return this.isPrey;
    }

    /**
     * Mutator metjod to set the unique identifier of the chick.
     *
     * @param id The ID to set for the chick.
     */
    public void setId(String id)
    {
        this.id = id;
    }

    /**
     * Accessor method to retrive the unique identifer of the chick.
     *
     * @return The ID of the Chick
     */
    public void setMonth(int month)
    {
        this.month = month;
    }

    /**
     * Accessor method to retrive the unique Identifier of the chick.
     *
     * @return The ID of the chicks
     */
    public boolean isPrey()
    {
        return isPrey;
    }

    /**
     * Marks or unmarkd the chick as prey.
     *
     * @param prey Set to true if the chick is considered pry. false otherwise.
     */
    public void setPrey(boolean prey)
    {
        isPrey = prey;
    }

    /**
     * Accesor amethod to retrive the unique indentifer of the chick
     *
     * @return The Id of the chick.
     */
    public String getId()
    {
        return id;
    }

    /**
     * Return a string representation of the chick object, indicate its id,age in monhs and prey status.
     *
     * @return A String describing the chick's properties.
     */
    @Override
    public String toString()
    {
        return "Chick {" + "id=" + id +
                ",month =" + month +
                "isPrey = " + isPrey +
                "}";
    }
}
