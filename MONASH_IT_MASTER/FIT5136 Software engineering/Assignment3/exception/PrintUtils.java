package exception;

import entity.Product;

import java.util.List;

/**
 * Represents a utility class for printing data in a tabular format.
 *
 * <p>The PrintUtils class provides methods for displaying a list of products in a
 * tabular format, including generating header rows, data rows, and padding strings
 * with spaces for alignment.
 *
 * @author Ziqi Pei,Shaohong Pan
 * @version 5.0
 * @since 2024-05-13
 */
public class PrintUtils {

    /**
     * Outputs the list of products in a tabular format to the console.
     *
     * @param products The list of products to be displayed.
     */
    public static void showProducts(List<Product> products) {
        String[] headers = {"Id", "Name", "Price"};
        System.out.println(getHeaderRow(headers));
        for (Product row : products) {
            System.out.println(getDataRow(row));
        }
    }

    /**
     * Generates the header row for the tabular display.
     *
     * @param headers The array of header strings.
     * @return The header row as a string.
     */
    public static String getHeaderRow(String[] headers) {
        StringBuilder row = new StringBuilder();
        for (int i = 0; i < headers.length; i++) {
            row.append(getStringWithPadding(headers[i], 10, ' '));
        }
        return row.toString();
    }

    /**
     * Generates a data row for the tabular display based on a Product object.
     *
     * @param data The Product object to be displayed.
     * @return The data row as a string.
     */
    public static String getDataRow(Product data) {
        StringBuilder row = new StringBuilder();
        row.append(getStringWithPadding(data.getId().toString(), 10, ' '));
        row.append(getStringWithPadding(data.getName(), 10, ' '));
        row.append(getStringWithPadding(data.getPrice().toString(), 10, ' '));
        return row.toString();
    }

    /**
     * Pads a given string with a specified character to a specified length.
     *
     * @param str     The string to be padded.
     * @param length  The desired length of the padded string.
     * @param padChar The character to be used for padding.
     * @return The padded string.
     */
    public static String getStringWithPadding(String str, int length, char padChar) {
        StringBuilder paddedStr = new StringBuilder(str);
        while (paddedStr.length() < length) {
            paddedStr.append(padChar);
        }
        return paddedStr.toString();
    }

}
