/**
*The QuokkaFood class represent the food consumed by a quokka in the "Quokka SelfieQuest"simulation game.
*@author Ziqi Pei
*@version 6.2
*/
public class QuokkaFood {

    private int day = 0; // The day for which the food is recorded
    private int food = 0; // The amount of food consumed

    /**
     * Returns the day for which the food is recorded.
     *
     * @return The day
     */
    public int getDay() {
        return day;
    }

    /**
     * Sets the day for which the food is recorded.
     *
     * @param day The day to set
     */
    public void setDay(int day) {
        this.day = day;
    }

    /**
     * Returns the amount of food consumed.
     *
     * @return The amount of food
     */
    public int getFood() {
        return food;
    }

    /**
     * Sets the amount of food consumed.
     *
     * @param food The amount of food to set
     */
    public void setFood(int food) {
        this.food = food;
    }
}

