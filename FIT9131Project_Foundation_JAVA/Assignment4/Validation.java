/**
 * The Validation class provides method for data validation and input validation.
 */
public class Validation
{
    /**
     * Default constructor for the Validation class
     */
    public Validation()
    {
        // Construct , can be left Empty
    }

    /**
     * Checks if a string is blank or contains only whitespace characters).
     *
     *
     * @param input The input String to be checked.
     * @retrun if the string is blank, false otherwise.
     */
    public boolean isBlank(String input)
    {
        return input == null || input.trim().isEmpty();
    }

    /**
     * Check if the length of aString falls within a specified range.
     *
     * @param input The input String to be checked.
     * @param min The minimum allowed length.
     * @param max The maximum allow length.
     * @return true if the string's length is within the specified  range, false otherwise.
     */
    public boolean stringLengthRange(String input,int min,int max)
    {
        if(isBlank(input))
        {
            return false;
        }
        int length = input.trim().length();
        return length >= min && length <= max;
    }
    
    /**
     * Converts a string input to an integer and checks if ot falls with a specified range.
     *
     * @param input The input String to be converted to an integer.
     * @param lowRange The minmum allowed integer value.
     * @param highRange The maximun allowed integer value.
     * @return The converted integer value if it's within the specified range or -1 if invalid.
     */
    public int acceptInputInRange(String input,int lowRange,int highRange) 
    {
        try
        {
            int result = Integer.parseInt(input);
            if(result < lowRange || result > highRange)
            {
                throw new IllegalArgumentException("Your input must be an integer between "+ lowRange + "and" + highRange);
            }
            return result;
        } 
        catch(NumberFormatException e)
        {
            System.out.println("Your input must be an Integer");
            return - 1;
        }
        catch(IllegalArgumentException e)
        {
            System.out.println(e.getMessage());
            return - 1;
        }
    }
    
    /**
     * Checks if a string can be parsed as an integer.
     *
     * @param input The input string to be checked.
     * @return true if the String can be parsed as an integer.
     */
    public boolean isInteger(String input)
    {
        try
        {
            Integer.parseInt(input);
            return true;
        } catch(NumberFormatException e)
        {
            return false;
        }
    }
}
