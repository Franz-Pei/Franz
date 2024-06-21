package exception;

/**
 * Represents a utility class for common operations.
 *
 * @author Ziqi Pei,Shaohong Pan
 * @version 2.0
 * @since 2024-05-15
 */
public class Utils {

    /**
     * Checks if the given input string matches a specified regular expression pattern.
     *
     * <p>In this case, the regular expression pattern used is "\\d+", which matches
     * any string consisting of one or more digits.
     *
     * @param input The input string to be checked.
     * @return true if the input string matches the pattern, false otherwise.
     */
    public static boolean matches(String input ) {
        String regex = "\\d+";
        return input.matches(regex);
    }
}
