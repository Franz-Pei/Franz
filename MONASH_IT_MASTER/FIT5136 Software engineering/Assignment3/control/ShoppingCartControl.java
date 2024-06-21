package control;

import entity.Product;
import entity.ShoppingCart;
import entity.User;

import java.util.regex.Pattern;

/**
 * This class represents the control layer for managing the shopping cart.
 *
 * @author Ziqi Pei
 * @version 2.0(Refactor by Shopping Cart to SuperMartketControl)
 * @since 2024-05-12
 */
public class ShoppingCartControl {
    private static final Pattern BANK_CARD_PATTERN = Pattern.compile("^\\d{16,19}$");
    public ShoppingCart shoppingCart;
    private  User user;


    /**
     * Gets the current shopping cart.
     *
     * @return The shopping cart object.
     */
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    /**
     * Sets the current shopping cart.
     *
     * @param shoppingCart The shopping cart object to be set.
     */
    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    /**
     * Validates the provided CVV (Card Verification Value) using a regular expression pattern.
     *
     * @param cvv The CVV to be validated.
     * @return true if the CVV is valid (3 digits), false otherwise.
     */
    public static boolean isValidCVV(String cvv) {
        String cvvPattern = "\\b\\d{3}\\b";;
        return cvv.matches(cvvPattern);
    }

    /**
     * Validates the provided bank card number using a regular expression pattern.
     *
     * @param cardNumber The bank card number to be validated.
     * @return true if the bank card number is valid (16-19 digits), false otherwise.
     */
    public static boolean isValidBankCardNumber(String cardNumber) {
        return BANK_CARD_PATTERN.matcher(cardNumber).matches();
    }

    /**
     * Adds a product to the shopping cart for the current user.
     *
     * @param product      The product to be added to the shopping cart.
     * @param user         The user object representing the current user.
     * @param shoppingCart The shopping cart object where the product will be added.
     */
    public void AddProductsToShoppingCart(Product product, User user,ShoppingCart shoppingCart) {
        this.user=user;
        shoppingCart.getFileUtils().WriteProduct(product);
        shoppingCart.setProducts( shoppingCart.getFileUtils().LoadProduct());
    }
}
