package entity;

import control.SupermarketControl;
import exception.FileUtils;
import exception.PrintUtils;
import exception.Utils;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Represents a supermarket in the system.
 *
 * <p>The supermarket holds a list of products and a shopping cart. It provides
 * functionality to manage the products, shopping cart, and user associated with
 * the supermarket.
 *
 * @author Jiabao Li
 * @version 3.0 Refactor from Supermarket Boundary to SuperMarket Entity
 * @since 2024-05-11
 */
public class Supermarket {

    private List<Product> products;
    public static final String filePath =System.getProperty("user.dir")+"/"+ "entity/Supermarket.txt";
    private FileUtils fileUtils;
    private ShoppingCart shoppingCart;
    private User user;

    /**
     * Constructs a new Supermarket object and initializes the file utilities and product list.
     */
    public Supermarket() {
        this.fileUtils = new FileUtils(filePath);
        this.products = fileUtils.LoadProduct();
    }

    /**
     * Returns the list of products in the supermarket.
     *
     * @return The list of products in the supermarket.
     */
    public List<Product> getProducts() {
        return products;
    }

    public FileUtils getFileUtils() {
        return fileUtils;
    }

    /**
     * Sets the list of products in the supermarket.
     *
     * @param products The list of products to be set.
     */
    public void setProducts(List<Product> products) {
        this.products = products;
    }

    /**
     * Sets the file utilities object used for loading and saving the product list.
     *
     * @param fileUtils The file utilities object to be set.
     */
    public void setFileUtils(FileUtils fileUtils) {
        this.fileUtils = fileUtils;
    }

    /**
     * Returns the shopping cart associated with the supermarket.
     *
     * @return The shopping cart associated with the supermarket.
     */
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    /**
     * Sets the shopping cart associated with the supermarket.
     *
     * @param shoppingCart The shopping cart to be associated with the supermarket.
     */
    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    /**
     * Returns the user associated with the supermarket.
     *
     * @return The user associated with the supermarket.
     */
    public User getUser() {
        return user;
    }

    /**
     * Sets the user associated with the supermarket.
     *
     * @param user The user to be associated with the supermarket.
     */
    public void setUser(User user) {
        this.user = user;
    }



}
