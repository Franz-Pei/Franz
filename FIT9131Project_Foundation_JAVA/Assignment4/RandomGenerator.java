import java.util.Random;
/**
 * The {@link RandomGenerator} class peovides methods for generating random numbers and events.
 */
public class RandomGenerator
{
    private Random random;

    /**
     * Default Constructor , initialize the random number genertaor.
     */
    public RandomGenerator()
    {
        this.random = new Random();
    }
    
    /**
     * Generates a random integer within the specified range.
     *
     * @param min Minimun value(inclusive)
     * @param max Maximum value(inclusive)
     * @return The generated random integer
     * @throws IllegalArgumentException if min is greater than max
     */
    public int generateRandomInt(int min, int max)
    {
        if(min > max)
        {
            throw new IllegalArgumentException("Min value must be less than or equal to max value");
        }
        return random.nextInt((max - min) + 1) + min;
    }

    /**
     * Generates a random double-prescision floating-points numbers.
     *
     * @return The geneated random double
     */
    public double generateRandomDouble()
    {
        return random.nextDouble();
    }

    /**
     * Generates a random event based on the given probability.
     *
     * @param probability The probability of the event occurring (in the range [0.0,1.0])
     * @return true if the random number is less than or equal to the probability, otherwise false
     * @throws IllegalArgumentException if the probability is not within the range[0.0, 10]
     */
    public boolean generateRandomEvent(double probability)
    {
        if(probability < 0.0 || probability > 1.0)
        {
            throw new IllegalArgumentException("probability must be in the range[0.0, 1.0]");
        }
        return random.nextDouble() <= probability;
    }
}
