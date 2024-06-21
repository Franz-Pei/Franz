/**
*The Quokka class represents a quokka in the "QuokkaSelfieQuestSimulation game"
*A quokka is a small marsuroial native to Austria
*The Quokka class includes information about the quokka identity code,baby status and alive status.
*It also contains a list of food counsumed by the quokka
*@author Ziqi Pei
*@version 6.2
*/
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Quokka {
    private String identiCode; // Unique identifier code for the quokka
    private boolean hasBaby; // Indicates whether the quokka has a baby
    private boolean alive; // Indicates whether the quokka is alive

    private String parentCode = ""; // Identifier code of the parent quokka (if applicable)

    private List<QuokkaFood> quokkaFoods = new ArrayList<>(); // List of food consumed by the quokka

    /**
     * Constructs a Quokka object with the given identifier code, baby status, and alive status.
     *
     * @param identiCode The identifier code of the quokka
     * @param hasBaby    Whether the quokka has a baby
     * @param alive      Whether the quokka is alive
     */
    public Quokka(String identiCode, boolean hasBaby, boolean alive) {
        this.identiCode = identiCode;
        this.hasBaby = hasBaby;
        this.alive = alive;
    }

    /**
     * Constructs a Quokka object with the given identifier code and baby status.
     * The alive status is set to true by default.
     *
     * @param identiCode The identifier code of the quokka
     * @param hasBaby    Whether the quokka has a baby
     */
    public Quokka(String identiCode, boolean hasBaby) {
        this.identiCode = identiCode;
        this.hasBaby = hasBaby;
        this.alive = true;
    }

    /**
     * Returns the identifier code of the quokka.
     *
     * @return The identifier code of the quokka
     */
    public String getIdentiCode() {
        return identiCode;
    }

    /**
     * Returns the identifier code of the parent quokka (if applicable).
     *
     * @return The identifier code of the parent quokka
     */
    public String getParentCode() {
        return parentCode;
    }

    /**
     * Sets the identifier code of the parent quokka.
     *
     * @param parentCode The identifier code of the parent quokka
     */
    public void setParentCode(String parentCode) {
        this.parentCode = parentCode;
    }

    /**
     * Sets the baby status of the quokka.
     *
     * @param hasBaby Whether the quokka has a baby
     */
    public void setHasBaby(boolean hasBaby) {
        this.hasBaby = hasBaby;
    }

    /**
     * Returns whether the quokka has a baby.
     *
     * @return Whether the quokka has a baby
     */
    public boolean getHasBaby() {
        return this.hasBaby;
    }

    /**
     * Returns the list of food consumed by the quokka.
     *
     * @return The list of quokka foods
     */
    public List<QuokkaFood> getQuokkaFoods() {
        return quokkaFoods;
    }

    /**
     * Returns whether the quokka is alive.
     *
     * @return Whether the quokka is alive
     */
    public boolean isAlive() {
        return this.alive;
    }

    /**
     * Sets the alive status of the quokka.
     *
     * @param alive Whether the quokka is alive
     */
    public void setAlive(boolean alive) {
        this.alive = alive;
    }

}

