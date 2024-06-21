import java.util.Random;

/**
 * RandomGenerator is a utility class for generating random numbers.
 *
 * @author: Ziqi Pei
 * @version:3.0
 */
public class RandomGenerator
{   
    private Random random;// Instanece variable to hold the Random object

    /**
     * Default constantor that initializes the RandomGenerator with a new Ramdom object.
     */
    public RandomGenerator()
    {
        this.random = new Random();
    }

    /**
     * Generate a random interger within the specified range.
     *
     * @param min The minimum value (inclusive) of the range.
     * @param max The maximum value(inclusive) of the range.
     * @return A randomly generated Integer within the specified range.
     * @throws IllegalArguementException if the min value is greater than the max value. 
     */
    public int generateRandomInt(int min, int max)
    {
        if(min > max)
        {
            throw new IllegalArgumentException("Min value must be less than or equal to max value");
        }
        return random.nextInt((max - min) + 1 ) + min;
        // This part calculate the rangre of the random  randon.nextInt generate pseudo-random integer between0
    }

    /**
     * Generates a random double between 0.0(inclusive) and 1.0(exclusive).
     *
     * @return A randomly generated double between 0.0 (inclusive) and 1.0(exclusive)
     */ 
    public double generateRandomDouble()
    {
        return random.nextDouble();
    }
    
    public void testRandomGenerator()
    {
    //     RandomGenerator randomGenerator = new RandomGenerator();
    //     int randomInt = randomGenerator.generateRandomInt(2, 5);
    //     System.out.println("Generate Random Integer" + randomInt);

    //    RandomGenerator randomGenerator1 = new RandomGenerator();
    //     double randomDouble = randomGenerator1.generateRandomDouble();
    //     System.out.println("Generate Random Integer" + randomDouble);
    }
}





