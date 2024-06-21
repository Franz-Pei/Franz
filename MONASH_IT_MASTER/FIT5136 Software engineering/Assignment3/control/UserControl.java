package control;

import entity.User;

/**
 * This class represents the control layer for managing user-related operations.
 *
 * @author Zhenbang Zhao
 * @version 2.0
 * @since 2024-05-18
 */
public class UserControl {
    /**
     * Parses a string into a User object.
     *
     * <p>The input string should have the following format: "loginName,passWord,role"
     * where "loginName" is the user's login name, "passWord" is the user's password,
     * and "role" is the user's role (0 for customer, 1 for admin).
     *
     * @param line The input string to be parsed.
     * @return A User object created from the input string.
     */
    public static User parseUser(String line) {
        String[] parts = line.split(",");
        return new User(parts[0],parts[1],Integer.parseInt(parts[2]));
    }
}
