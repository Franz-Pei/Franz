/**
 * The Cat class represents a type of animal specifically a cat. It inherits from the abstract Animal class.
 * Cats are considered hunter in this implentation and can be either alive or decase
 *
 * @author Ziqi Pei
 * @version 3.0
 */
public class Cat extends Animal
{
    private String id;

    /**
     * Constructor for initlzing a cat object with the given ID.
     *
     * @parm id The unique identifer for the cat. 
     */
    public Cat(String id)
    {
        super(true); //Indicates that cats are hunters.
        this.id = id;
    }

    /**
     * Accessor method to retrive the unique Identifier of the cat.
     *
     * @return The ID of the cats.
     */
    public String getId()
    {
        return this.id;
    }
    
    /**
     *Mutator method to set the unqiue Identifier of the cat.
     *
     *@param id The Id to set for the cat
     */
    public void setId(String id)
    {
        this.id = id;
    }

    /**
     * Returns a string representation of the Cats object, including it unique identifer.
     *
     * @return A string descrbing the cat's ID.
     */
    @Override
    public String toString()
    {
        return "Cat {" +
                "id =" + id +
                "}";
    }
    
}
