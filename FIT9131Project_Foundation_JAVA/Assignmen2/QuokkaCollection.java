20202020/**
*The QuokkaCollection class represents a collection of quokkas in the "QuokkaSelfieQuest"simulation game.
*It maintains alist of quokkas and provides methods for accessing and manipulating the collection.
*@author Ziqi Pei
*@version 6.2
*/
import java.util.ArrayList;
import java.util.List;

public class QuokkaCollection {
    private List<Quokka> quokkas = new ArrayList<>(); // List of quokkas in the collection

    /**
     * Constructs an empty QuokkaCollection.
     */
    public QuokkaCollection() {
        quokkas = new ArrayList<>();
    }

    /**
     * Returns the list of quokkas in the collection.
     *
     * @return The list of quokkas
     */
    public List<Quokka> getQuokkas() {
        return quokkas;
    }

    /**
     * Returns the number of quokkas in the collection.
     *
     * @return The number of quokkas
     */
    public int getNumberOfQuokkas() {
        return this.quokkas.size();
    }

    /**
     * Returns the number of baby quokkas in the collection.
     *
     * @return The number of baby quokkas
     */
    public int getNumberOfBabies() {
        int count = 0;
        for (Quokka quokka : quokkas) {
            if (!quokka.getParentCode().equals("")) {
                count++;
            }
        }
        return count;
    }

    /**
     * Returns the number of alive quokkas in the collection.
     *
     * @return The number of alive quokkas
     */
    public int getNumberOfAliveQuokkas() {
        int count = 0;
        for (Quokka quokka : quokkas) {
            if (quokka.isAlive()) {
                count++;
            }
        }
        return count;
    }
}

