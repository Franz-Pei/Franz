package exception;

/**
 * Represents a custom exception in the application.
 *
 * <p>The AppException class is used to handle custom exceptions with a code and a custom message.
 * It extends the RuntimeException class.
 *
 * @author Shaohong Pan
 * @version 3.0
 * @since 2024-05-12
 */
public class AppException extends RuntimeException {

    private Integer code;
    private String customMessage;

     /**
     * Constructs a new AppException with default values.
     */
    public AppException() {}

    /**
     * Constructs a new AppException with the specified code and custom message.
     *
     * @param code          The code associated with the exception.
     * @param customMessage The custom message describing the exception.
     */
    public AppException(Integer code,String customMessage) {
        this.code = code;
        this.customMessage = customMessage;
    }

    /**
     * Returns the code associated with the exception.
     *
     * @return The code associated with the exception.
     */
    public Integer getCode() {
        return code;
    }

    /**
     * Sets the code associated with the exception.
     *
     * @param code The code to be set.
     */
    public void setCode(Integer code) {
        this.code = code;
    }

    /**
     * Returns the custom message associated with the exception.
     *
     * @return The custom message associated with the exception.
     */
    public String getCustomMessage() {
        return customMessage;
    }

    /**
     * Sets the custom message associated with the exception.
     *
     * @param customMessage The custom message to be set.
     */
    public void setCustomMessage(String customMessage) {
        this.customMessage = customMessage;
    }
}

