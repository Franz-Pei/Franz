/**
 * The Shark class represents a specific type of animal, the shark
 * It extends the Animal class and provides shark-specific properties and behaviors
 */

public class Shark extends Animal
{
    private String id;

    /**
     * Constructor for creating a Shark instance with a specified ID
     * @param id the unique idenifer for the shark.
     */
    public Shark(String id)
    {
        //isHunter
        super(true);
        this.id = id;
    }

    /**
     * Retrive s the ID of the shark.
     *
     * @return  The unique identifer of the shark.
     */
    public String getId()
    {
        return this.id;
    }

    /**
     * Set the ID of the shark.
     *
     * @param id The new unique identifer for the shark.
     */
    public void setId(String id)
    {
        this.id = id;
    }

    /**
     * Generate a string representation of the Shark object.
     *
     * @return  A String containing information about the shak, including its ID.
     */
    @Override
    public String toString()
    {
        return "Shark {" +
                "id =" + id +
                "}";
    }

}
