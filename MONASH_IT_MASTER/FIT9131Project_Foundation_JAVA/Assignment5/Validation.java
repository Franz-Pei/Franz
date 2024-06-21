/**
 * Validation calss provides methods for  validating various inputs.
 *
 * @author: Ziqi Pei
 * @Version:3.0
 */
public class Validation
{
    private boolean initialized;// Flag to indicate whether the validaor is initialized
    /**
     * Default constructor initializes the validaor.
     */
    public Validation()
    {
        initialize();
    }

    /**
     * Private method to initialized the Validator.
     */
    private void initialize()
    {
        System.out.println("Validator initialized");
        initialized = true;
    }
    
    /**
     * Checks if a string is blank(null or empty).
     *
     * @param input The input string to be checked.
     * @return True if the input is blank, false otherwise.
     */
    public boolean isBlank(String input)
    {
        if(!initialized)
        {
            System.out.println("Validator not initialized.");
            return false;
        }
        return input == null || input.trim().isEmpty();
    }
    
    /**
     * Validates a player name based on length and character pattern.
     *
     * @param playerName The player name to be validated.
     * @return True is the player name is valid, false otherwise.
     */
    public boolean isValidPlayerName(String playerName)
    {
        return playerName.length() >= 5 && playerName.length() <= 10 && playerName.matches("[a-z]+");
    }

    /**
     * Validates a vehicle type to ensure it is not null or empty.
     *
     * @param vehicleType The vehicle type to be validated.
     * @return True if the vehicle is valid, false otherwise.
     */
    public boolean isValidVehicleType(String vehicleType)
    {
        return vehicleType != null && !vehicleType.isEmpty();
    }

    /**
     * Validates a difficulty level to ensure it is one  of "Easy," "Moderate", or "Hard."
     * @param difficultyLevel The difficulty level to be validated.
     * @return True if the difficulty level is valid, false otherwise.
     */
    public boolean isValidDifficultyLevel(String difficultyLevel)
    {
        return difficultyLevel != null 
                && (difficultyLevel.equals("Easy") 
                || difficultyLevel.equals("Moderate") 
                || difficultyLevel.equals("Hard"));
    }

    /**
     * Validates a general name based on length and character pattern.
     *
     * @param choice The movedirection to be validated.
     * @return A validation message or null if the name is valid.
     */
    public String isValidateName(String name)
    {
        if(!initialized)
        {
            System.out.println("Validator not initialized.");
        }
        if(!isBlank(name) && stringLengthRange(name, 5, 10) && name.matches("[a-z]+"))//regex
        {
            return null;
        }
        else
        {
            return "Invalid name. Please enter a name between 5 and 10 characters, containing only lowcase letters.";
        }
    }
    
    /**
     * Validation a player name.
     * @param name The name to be validated.
     * @return True if the name is valid, false otherwise.
     */
     public boolean isValidateNameLength(String name)
     {
        return name.length() >= 5 && name.length() <= 10 && name.matches("^[a-z]+$");
     }

    /**
     * Check if an object is a String or a Character.
     *
     * @param input The object to be checked.input is a String or a Character, false otherwise.
     */
    public boolean isStringOrChar(Object input)
    {
        return input instanceof String || input instanceof Character;
    }
    /**
     * Validates a move direction to ensure it is not blank and matches predefined values.
     *
     * @param moveDirection The move direction to be validated.
     * @return A validation message or null if the move direction is valid.
     */
    public String isValidMoveDirection(int choice)
    {
        if(!initialized)
        {
            System.out.println("Validator not initialized.");
            return "Validator not initialized";
        }
        if(numericRange(choice, 1, 5))
        {
            return null;//Valid move direction
        }
        else
        {
            return "Invalid move direction. Please enter a valid  move direction(1 to 5).";
        }
    }

    /**
     * Checks if the length of a string falls within the specified range.
     *
     * @param input The input string to be checked.
     * @param minLength The minimum allowed length.
     * @param maxLength The maximum allowed length.
     * @return True if the length is within the specified range, false otherwise.
     **/
    public boolean stringLengthRange(String input, int minLength, int maxLength)
    {
        if(!initialized)
        {
            System.out.println("Validator not initialized.");
            return false;
        }
        return input.length() >= minLength && input.length() <= maxLength;
    }
    /**
     * Checks if a numeric value falls within the specified range.
     *
     * @param value The numeric value to be checked.
     * @param minValue The minmum allowed value.
     * @param maxValue The maximum allowed value.
     * @return True if the value us within the specified range.
     */
    public boolean numericRange(int value, int minValue, int maxValue)
    {
        if(!initialized)
        {
            System.out.println("Validator not initialized.");
            return false;
        }
        return value >= minValue && value <= maxValue;
    }

}
