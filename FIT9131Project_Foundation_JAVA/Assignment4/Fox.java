/**
 * The Fox class represents a fox, which is a type of animal that inherits from the Animal class.
 * It has an additonal "id" attribute specific to a fox.
 *
 * @author Ziqi Pei
 * @version 3.0
 */
public class Fox extends Animal
{
    private String id;

    /**
     * Construtor to create a FOX object with a specified 'id'.
     * It set the 'isHunter' state of the fox by calling the superclass constructor with 'true'.
     *
     * @param id The unique identifer for the fox.
     */
    public Fox(String id)
    {
        super(true);//Inherit Animal calss isHunter state equals true
        this.id = id;
    }

    /**
     * Accessor method to retrive the 'id' of the fox.
     *
     * @return The  unique identifer of the fox.
     */
    public String getId()
    {
        return this.id;
    }

    /**
     * Mutator method to set the 'id' of the fox.
     *
     * @param id The unique identifer to set the fox
     */
    public  void setId(String id)
    {
        this.id = id;
    }

    /**
     * Convert Fox object to a string representation.
     *
     * @return A String representing the Fox object.
     *
     */
    @Override
    public String toString()
    {
        return "Fox{" +
                "id=" + id + 
                "}";
    }
}
