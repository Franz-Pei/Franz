/**
*Default constructor for DartThrow
*/
public class DartThrow
{
    private int min;
    private int max;

    public DartThrow(){}
/**
* Constructor for DartThrow with parameters min and max
*
* @param min - minimum number for Range}
* @param max - maximum number for range
*/
    public DartThrow(int min, int max)
    {
        this.min = min;
        this.max = max;
    }

/**
* Setter for max Value
*
* @param max -maximum number for {@link Range}
*/
    public void setMax(int Max)
    {
        this.max = max;
    }

/**
* Setter for min Value
*
* @param min -minimum number for  Range
*/
    public void setMin(int min)
    {
        this.min = min;
    }

/**
* Method to throw a dart and return a random number within
*
* @ return - random number within specified {@link Range}
*/
    public int throwDart()
    {
        int n = max - min + 1;
        return (int)(Math.random() * n) + min;
    }

    /**
    *Method to dis play the minimum and maximum range of DartThrow object
    *
    * @return -string containing minimum and maximum range of DartThrow object
    */
    public String tostring()
    {
        return String.format("Rng min:  %d, max: %d", this.min, this.max);
    }
}
