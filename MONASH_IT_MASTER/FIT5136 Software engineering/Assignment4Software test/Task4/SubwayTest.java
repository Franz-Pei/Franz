import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*; 
import java.io.*;

/**
 * This class contains unit tests for the Subway class.
 */
public class SubwayTest {

    /**
     * Tests the validInputs method with valid and invalid inputs.
     */
    @Test
    void testInitSubway() {
        //test validInputs method validable
        assertTrue(Subway.validInputs("sub", "6-inch", "garlic", "yes", "standard", "meatball"));
        assertTrue(Subway.validInputs("salad", "", "plain", "no", "premium", "blt"));
        assertTrue(Subway.validInputs("wrap", "", "wholewheat", "no", "standard", "standard steak"));

        //test invalid output
        assertFalse(Subway.validInputs("burger", "6-inch", "garlic", "yes", "standard", "meatball"));
        assertFalse(Subway.validInputs("sub", "", "garlic", "yes", "standard", "meatball"));
        assertFalse(Subway.validInputs("wrap", "footlong", "garlic", "yes", "Standard", "meatball"));
    }

    /**
     * Tests the getSizeSurcharge method with an invalid input.
     */
    @Test 
    void testGetSizeSurchargeInvalid(){
        assertEquals(-1, Subway.getSizeSurcharge("invalid"));
    }

    /**
     * Tests the getBreadSurcharge method with an invalid input.
     */
    @Test 
    void testGetBreadSurchargeInvalid(){
        assertEquals(-1, Subway.getBreadSurcharge("invalid"));
    }

    /**
     * Tests the getCheeseSurcharge method with an invalid input.
     */
    @Test 
    void testGetCheeseSurchargeInvalid(){
        assertEquals(-1, Subway.getCheeseSurcharge("invalid"));
    }

    /**
     * Tests the getMeatCost method with an invalid input.
     */
    @Test 
    void testGetMeatCostInvalid(){
        assertEquals(-1, Subway.getMeatCost("invalid", "sub"));
    }

    /**
     * Tests the validInputs method with an invalid food type.
     */
    @Test
    void testValidInputsInvalidFoodType(){
        assertFalse(Subway.validInputs("burger", "6-inch", "garlic", "yes", "standard", "meatball"));
    }

    /**
     * Tests the getVeggiesSurcharge method with an invalid veggies input for a salad.
     */
    @Test
    void testGetVeggiesSurchargeInvalidVeggiesSalad(){
        assertEquals(3, Subway.getVeggiesSurcharge("invalid", "salad"));
    }

    /**
     * Tests the getVeggiesSurcharge method with an invalid veggies input for a non-salad item.
     */
    @Test
    void testGetVeggiesSurchargeInvalidVeggiesNonSalad(){
        assertEquals(-1, Subway.getVeggiesSurcharge("invalid", "sub"));
    }

    /**
     * Tests the subway_price method with invalid inputs.
     */
    @Test
    void testSubwayPriceInvalidInputs(){
        assertEquals(-1, Subway.subway_price("burger", "6-inch", "garlic", "yes","standard", "meatball"));
    }

    /**
     * Tests the subway_price method with valid and invalid combinations.
     */
    @Test
    void testCost() {
        //test legal combinations
        assertEquals(11, Subway.subway_price("sub", "6-inch", "garlic", "yes", "standard", "meatball"));
        assertEquals(15, Subway.subway_price("sub", "footlong", "plain", "yes", "premium", "blt"));
        assertEquals(13, Subway.subway_price("sub", "footlong", "wholewheat", "no", "standard", "standard steak"));
        assertEquals(14, Subway.subway_price("sub", "6-inch", "gluten-free", "yes", "premium", "standard steak"));

        assertEquals(-1, Subway.subway_price("sub", "footlong", "garlic", "yes", "premium", "wagyu steak"));
        assertEquals(-1, Subway.subway_price("burger", "6-inch", "garlic", "yes", "standard", "meatball"));
    }

    /**
     * Tests the subway_price method with different input cases.
     */
    @Test
    void testSubwayPrice(){
        assertEquals(11, Subway.subway_price("Sub", "6-inch", "Garlic", "Yes", "Standard", "Meatball"));
        assertEquals(15, Subway.subway_price("Sub", "Footlong", "Plain", "Yes", "Premium", "BLT"));
        assertEquals(13, Subway.subway_price("Sub", "Footlong", "Wholewheat", "No", "Standard", "Standard Steak"));
        assertEquals(14, Subway.subway_price("Sub", "6-inch", "Gluten-Free","Yes", "Premium", "Standard Steak"));
        assertEquals(-1, Subway.subway_price("Sub", "Footlong", "Garlic", "Yes", "Premium", "Wagyu Steak"));
    }

    /**
     * Tests the getFoodTypePrice method with different food types.
     */
    @Test 
    void testGetFoodTypePrice(){
        assertEquals(2, Subway.getFoodTypePrice("sub"));
        assertEquals(5, Subway.getFoodTypePrice("salad"));
        assertEquals(3, Subway.getFoodTypePrice("wrap"));
    }

    /**
     * Tests the getSizeSurcharge method with different sizes.
     */
    @Test
    void testGetSizeSurcharge(){
        assertEquals(2, Subway.getSizeSurcharge("6-inch"));
        assertEquals(4, Subway.getSizeSurcharge("footlong"));
        // Empty string represents no size for salad/wrap
        assertEquals(0, Subway.getSizeSurcharge(""));
    }

    /**
     * Tests the getBreadSurcharge method with different bread types.
     */
    @Test
    void testGetBreadSurcharge(){
        assertEquals(1, Subway.getBreadSurcharge("gluten-free"));
        assertEquals(0, Subway.getBreadSurcharge("garlic"));
    }

    /**
     * Tests the getCheeseSurcharge method with different cheese options.
     */
    @Test
    void testGetCheeseSurcharge(){
        assertEquals(1, Subway.getCheeseSurcharge( "yes"));
        assertEquals(0, Subway.getCheeseSurcharge("no"));
    }

    /**
     * Tests the getMeatCost method with different meat types and food types.
     */
    @Test
    void tesGetMeatCost(){
        assertEquals(3, Subway.getMeatCost("meatball", "sub"));
        assertEquals(4, Subway.getMeatCost("blt", "sub"));
        assertEquals(6, Subway.getMeatCost("wagyu steak", "wrap"));
        assertEquals(-1, Subway.getMeatCost("wagyu steak", "sub"));
    }

    /**
     * Tests the validInputs method with valid and invalid inputs.
     */
    @Test 
    void testValidInputs(){
        assertTrue(Subway.validInputs("sub", "6-inch", "garlic", "yes", "standard", "meatball"));
        assertFalse(Subway.validInputs("burger", "6-inch", "garlic", "yes", "standard", "meatball"));
        assertFalse(Subway.validInputs("sub", "", "garlic", "yes", "standard", "meatball"));
    }
    
    /**
     * Tests the validInputs method with all invalid inputs.
     */
    @Test 
    void testValidInputsAllInvalid(){
        assertFalse(Subway.validInputs("invalid", "invalid", "Invalid", "invalid", "invalid", "invalid"));
    }

    /**
     * Tests the subway_price method with an invalid food type.
     */
    @Test 
    void testSubwayPriceInvalidFoodType(){
        assertEquals(-1, Subway.subway_price("invalid", "6-inch", "garlic", "yes", "standard", "meatball"));
    }
    
    /**
     * Tests the subway_price method with various invalid inputs.
     */
    @Test 
    void testInValidInputs(){
        assertEquals(-1,Subway.subway_price("Burger", "6-inch", "Garlic", "Yes", "Standard", "Meatball"));
        // Invalid bread type
        assertEquals(-1,Subway.subway_price("Sub", "Footlong", "Rye", "Yes", "Standard", "Meatball"));
        // Invalid cheese option
        assertEquals(-1,Subway.subway_price("Sub", "Footlong", "Garlic", "Maybe", "Standard", "Meatball"));
        // Invalid veggies option
        assertEquals(-1,Subway.subway_price("Sub", "Footlong", "Garlic", "Yes", "Extra", "Meatball"));
        // Invalid meat optio
        assertEquals(-1,Subway.subway_price("Sub", "Footlong", "Garlic", "Yes", "Standard", "Chicken"));
        // Empty size is invalid for subs
        assertEquals(-1,Subway.subway_price("Sub", "", "Garlic", "Yes", "Standard", "Meatball"));
    }

    /**
     * Tests the subway_price method with different salad combinations.
     */
    @Test 
    void testSaladPrices(){
        assertEquals(11,Subway.subway_price("Salad", "", "Garlic", "Yes", "Standard", "Meatball"));
        assertEquals(12,Subway.subway_price("Salad", "", "Plain", "Yes", "Standard", "BLT"));
        assertEquals(12,Subway.subway_price("Salad", "", "Wholewheat", "No", "Standard", "Standard Steak"));
        assertEquals(13,Subway.subway_price("Salad", "", "Gluten-Free", "Yes", "Premium", "Standard Steak"));
        // wagyu steak is not allowed for salads
        assertEquals(-1,Subway.subway_price("Salad", "", "Garlic", "Yes", "Standard", "Wagyu Steak"));
    }

    /**
     * Tests the subway_price method with different wrap combinations.
     */
    @Test 
    void testWrapPrices(){
        // wagyu steak is allowed for wraps
        assertEquals(13,Subway.subway_price("Wrap", "", "Garlic", "Yes", "Standard", "Wagyu Steak"));
        assertEquals(12,Subway.subway_price("Wrap", "", "Plain", "Yes", "Premium", "Standard Steak"));
        assertEquals(9,Subway.subway_price("Wrap", "", "Wholewheat", "No", "Standard", "Meatball"));
        assertEquals(13,Subway.subway_price("Wrap", "", "Gluten-Free", "Yes", "Premium", "BLT"));
    }


}
