/**
*The RandomSimulator class represents a random number generator simulator.
*It generatores random number within a specified range.
*@author Ziqi Pei
*@version 6.2
*/
import java.util.Random;


public class RandomSimulator {
    private int min;
    private int max;


    public RandomSimulator(int min, int max) {
        this.min = min;
        this.max = max;
    }


    public int getRandomNumber() {
        Random random = new Random();
        int randomNum = random.nextInt(max - min + 1) + min;
        return randomNum;
    }


    public int getMin() {
        return min;
    }


    public void setMin(int min) {
        this.min = min;
    }


    public int getMax() {
        return max;
    }
    public void setMax(int max) {
        this.max = max;
    }
}
