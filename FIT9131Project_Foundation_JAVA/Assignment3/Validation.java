/**
 * The Validation class provides static method for validating various input and values
 * in the Learndle game.
 *
 * @author[Ziqi Pei]
 * @version 3.0
 */
public class Validation
{
    /**
     * Validates that a name consists only of alphabetic characters.
     *
     * @ param name the name to validate
     * @ return true if the name contatins only alphabetic characters, otherwise false
     */
    public static boolean validateNameAlphabetic(String name)
    {
        return name.chars().allMatch(Character :: isLetter);
    }

    /**
     * Validates that the maximum game score is within the valida range(0 to 50).
     *
     * @param maxScore the maximum game score to validate
     * @return true if the maximum gane score is within the valid range,otherwise false
     */
    public static boolean validateMaxGameScore(int maxScore)
    {
       return maxScore >= 0 && maxScore <= 50;
    }

    /**
     * Validate that a guess word has the same length as the hidden word.
     *
     * @param guessWord the guess word
     * @param hiddenWord the hidden word
     * @return true if the guess word has the same length as the hidden word, otherwise false
     */
    public static boolean validateGuessWord(String guessWord, String hiddenWord)
    {
        return guessWord.length() == hiddenWord.length();
    }

    /**
     * Validates that a word length is within the specified valid range.
     *
     * @param length the word length to validate
     * @return true if the word Length is within the valid range,otherwise false
     */
    public static boolean validateWordLength(int length, int minLength,int maxLength)
    {
        return length >= minLength && length <= maxLength;
    }

    /**
     * Validate that a name adheres to specific rules: it must contain only lowcase alphabetic characters
     * and have a length between 1 and 8 characters.
     *
     * @param name the name to validate
     * @return true if the name adheres to the specified rules,oterwise false
     */
    public static boolean validateName(String name)
    //ASCII
    {
        if(name.trim().length() < 1 || name.trim().length() > 8)
        {
            return false;
        }
        for (int i = 0; i < name.length(); i++)
        {
            int tempInt = (int) name.charAt(i);
            if (tempInt < 97 || tempInt > 122)
            {
                return false;
            }
        }
        return true;
    }
}
