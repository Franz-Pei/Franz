import java.util.List;
import java.util.ArrayList;

/**
 * The Penguin class represents a penguin animal and inclued information about attributes.
 * Penguins hav an Id,gender (male or female) a mate Id for pairing , and list of chick IDs.
 *
 * @author Ziqi Pei
 * @version 5.0
 */
public class Penguin extends Animal
{
    private String id;
    private boolean isMale;
    private String mateId; // this Field is give a couple Penguin a marriage certificate
    private List<String> chickIds; // easy complier when chick grow up or accident death
     
     /**
      * Constructor to create a Penguin Object with the given ID and gender.
      *
      * @param id The unique ID of the penguin.
      * @paramisMale A {@link Boolean}indicateing whether the penguin is male(true) or female (false)
      */
    public Penguin(String id, boolean isMale)
    {
        super(false);// Inherit isHunter equal isHunter is not true
        this.id = id;
        this.isMale = isMale;
        this.mateId = "";
        this.chickIds = new ArrayList<>();
    }

    /**
     * Set the ID of the penguin
     *
     * @param id The unique ID to set for the {@link Penguin}
     */
    public void setId(String id)
    {
        this.id = id;
    }

    /**
     * Check if the penguin is male.
     *
     * @return True if the penguin is male , false if female.
     */
    public boolean isMale()
    {
        return isMale;
    }

    /**
     * Set the gender of the penguin.
     *
     * @param male A boolean value indicating whether the penguin is male(true) or female（false）
     */
    public void setMale(boolean male)
    {
        isMale = male;
    }
    
    /**
     * Set the mate Id for the penguin. indicating their mate in a couple.
     *
     * @param matedid The ID of the male penguin.
     */
    public void setMateId(String mateId)
    {
        this.mateId = mateId;
    }
    
    /**
     * Get the number of chicks associated with the penguin.
     *
     * @return The number of chick IDs in the list.
     */
    public int getChickNumber()
    {
        return this.chickIds.size();
    }

    /**
     * Add a chick ID to the list of chick IDs
     *
     * @param chickId The ID of the chick to add.
     */
    public void setChickNumber(String chickId)
    {
        this.chickIds.add(chickId);
    }

    /**
     * Get the list of chick Id associate with the penguin.
     *
     * @return Alist of chick IDs
     */
    public List<String> getChickIds()
    {
        return this.chickIds;
    }

    /**
     * Get the mate ID  of the penguin, indicating their mate in a couple.
     *
     * @return The mate ID of the penguin.
     */
    public String getMateId()
    {
        return this.mateId;
    }

    /**
     *Get the ID of the penguin.
     *
     *@return The unique ID of the penguin.
     */
    public String getId()
    {
        return this.id;
    }
    
    /**
     * Check if the penguin is male.
     *
     * @return True if the penguin is male, false if female.
     */
    public boolean getIsMale()
    {
        return this.isMale;
    }

    /**
     * Set the mateID for the penguin, indicating their mate in a couple.
     *
     * @param mateId The ID of the mate penguin.
     */
    public void mate(String mateId)
    {
        this.mateId = mateId;
    }

    /**
     * Convert the Penguin object to a string representation.
     *
     * @return A String representing the Penguin object.
     */
    @Override
    public String toString()
    {
        return "Penguin{" + 
                "id =" + id +
                ", isMale =" + isMale +
                ", mateId =" + mateId +
                ", chickid = " + chickIds +
                "}";
    }
}
