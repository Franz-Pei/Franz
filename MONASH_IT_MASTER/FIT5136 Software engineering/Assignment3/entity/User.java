package entity;

import exception.AppException;
import exception.FileUtils;

import java.util.List;
import java.util.Objects;
import java.util.Scanner;
import java.util.regex.Pattern;


/**
 * Represents a user in the supermarket system.
 *
 * <p>The User class holds information about a user, including their login name, password,
 * and role (customer or admin). It provides methods for loading and managing user data
 * from a file.
 *
 * @author Shaohong Pan
 * @version 6.0
 * @since 2024-05-12
 */
public class User {
    private static final String filePath =System.getProperty("user.dir")+"/"+ "entity/User.txt";
    private String loginName;
    private FileUtils fileUtils;
    private String passWord;
    private int role;
    private List<User> userList;

    /**
     * Returns the customer user from the user list.
     *
     * @return The customer user object, or null if not found.
     */
    public  User getCustomer() {
        User select=this.userList.stream().filter(x->x.role==0).findFirst().orElse(null);
        return select;
    }

    /**
     * Returns the admin user from the user list.
     *
     * @return The admin user object, or null if not found.
     */
    public  User getAdmin() {
        User select=this.userList.stream().filter(x->x.role==1).findFirst().orElse(null);
        return select;
    }

    /**
    * Returns the login name of the user.
    *
    * @return The login name of the user.
    */
    public String getLoginName() {
        return loginName;
    }

    /**
    * Sets the login name of the user.
    *
    * @param loginName The login name to be set.
    */
    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    /**
    * Returns the password of the user.
    *
    * @return The password of the user.
    */
    public String getPassWord() {
        return passWord;
    }

    /**
    * Sets the password of the user.
    *
    * @param passWord The password to be set.
    */
    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    /**
     * Constructs a new User object and initializes the user list from the file.
     *
     * <p>If the user list is empty, it creates a default customer and admin user.
     */
    public User() {
        this.fileUtils = new FileUtils(filePath);
        this.userList = fileUtils.LoadUser();
        if (this.userList.isEmpty()){
            fileUtils.WriteUser(new User("member@student.monash.edu","Monash1234",0));
            fileUtils.WriteUser(new User("admin@merchant.monash.edu","12345678",1));
            List result = fileUtils.LoadUser();
            this.userList =result;
        }
    }

    /**
     * Constructs a new User object with the given login name and password.
     *
     * @param loginName The login name of the user.
     * @param passWord  The password of the user.
     */
    public User(String loginName, String passWord) {
        this.loginName = loginName;
        this.passWord = passWord;
    }

    /**
     * Constructs a new User object with the given login name, password, and role.
     *
     * @param loginName The login name of the user.
     * @param passWord  The password of the user.
     * @param role      The role of the user (0 for customer, 1 for admin).
     */
    public User(String loginName, String passWord,int role) {
        this.loginName = loginName;
        this.passWord = passWord;
        this.role = role;
    }

    /**
    * Returns a string representation of the User object in the format "loginName,passWord,role".
    *
    * @return A string representation of the User object.
    */
    @Override
    public String toString() {
        return loginName+","+passWord+","+role;
    }

    /**
    * Checks if the current User object is equal to the specified object.
    *
    * <p>Two User objects are considered equal if their login names and passwords are equal.
    *
    * @param o The object to be compared with the current User object.
    * @return true if the objects are equal, false otherwise.
    */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(loginName, user.loginName) && Objects.equals(passWord, user.passWord);
    }


    /**
    * Sets the role of the user.
    *
    * @param role The role to be set (0 for customer, 1 for admin).
    */
    public void setRole(int role) {
        this.role = role;
    }

    /**
    * Returns the role of the user.
    *
    * @return The role of the user (0 for customer, 1 for admin).
    */
    public int getRole() {
        return this.role;
    }

    /**
    * Returns the file utilities object used for loading and saving user data.
    *
    * @return The file utilities object.
    */
    public FileUtils getFileUtils() {
        return fileUtils;
    }

    /**
    * Sets the file utilities object used for loading and saving user data.
    *
    * @param fileUtils The file utilities object to be set.
    */
    public void setFileUtils(FileUtils fileUtils) {
        this.fileUtils = fileUtils;
    }

    /**
    * Returns the list of users.
    *
    * @return The list of users.
    */
    public List<User> getUserList() {
        return userList;
    }

    /**
    * Sets the list of users.
    *
    * @param userList The list of users to be set.
    */
    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
}
