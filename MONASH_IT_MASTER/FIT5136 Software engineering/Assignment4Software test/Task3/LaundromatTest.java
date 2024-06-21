import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*; 
import java.io.*;

/**
 * This is a test class to test the various functionalities and edge cases of the Laundromat class.
 */
public class LaundromatTest {

    // Declare a static Laundromat object for testing
    private static Laundromat laundromat;

    /**
     * Initialize the Laundromat object before all test cases are executed.
     */
    @BeforeAll
    static void setup(){
        laundromat = new Laundromat();
    }

    /**
     * Test if the initial parameters of the Laundromat object are correct.
     */
    @Test
    void testInitLaundromat() {

        // Assert mimum weight allowed
        assertEquals(1.0, laundromat.getMinWeightAllowed(), "Minimum weight allowed should be 1.0");
        // Assert maximum weight allowed
        assertEquals(20.0, laundromat.getMaxWeightAllowed(),"Maximum weight allowed should be 20.0");
        //Assert mimum drying time allowed
        assertEquals(5.0, laundromat.getMinDryingTimeAllowed(), "Minimum drying time allowed should be 5.0");
        //Assert maximum drying time allowed
        assertEquals(60.0, laundromat.getMaxDryingTimeAllowed(), "Maximum drying time allowed should be 60.0");
        //Assert cost per weight unit for the eco mode
        assertEquals(1.0, laundromat.getEcoModeWeightCost(), "Cost per weight unit for the eco mode should be 1.0");
        //Assert cost per drying time unit for eco mode
        assertEquals(1.0, laundromat.getEcoModeDryingCost(), "Cost per weight unit for the eco mode should be 1.0");
        //Assert cost per weight unit for the heavy mode
        assertEquals(1,0, laundromat.getHeavyModeWeightCost(), "Cost per drying time unit for the eco mode should be 1.0");
        //Assert cost per weight units for the heavy mode
        assertEquals(1.2, laundromat.getHeavyModeWeightCost(), "Cost per weight unit for the heavy mode should be 1.2");
        //Assert cost per drying time unit for the heavy mode
        assertEquals(1.2, laundromat.getHeavyModeDryingCost(), "Cost per drying time unit for the heavy mode should be 1.2");
        //Assert discount factor for Monash students in eco mode
        assertEquals(0.95, laundromat.getEcoModeStudentDiscount(), "Discount factor for Monash students in eco mode should be 0.95");
        //Assert discount factor for Monash student in heavy mode
        assertEquals(0.8, laundromat.getHeavyModeStudentDiscount(), "Discount factor for Monash students in heavy mode should be 0.8");
    }

    /**
     * Test if the setters of the Laundromat object are working correctly.
     */
    @Test
    void testSetters()
    {
        laundromat.setMinWeightAllowed(2.0);
        assertEquals(2.0, laundromat.getMinWeightAllowed(), "Minimum weight allowed should be updated.");

        laundromat.setMaxWeightAllowed(25.0);
        assertEquals(25.0, laundromat.getMaxWeightAllowed(), "Maximum weight allowed should be updated");

        laundromat.setMinDryingTimeAllowed(10.0);
        assertEquals(10.0, laundromat.getMinDryingTimeAllowed(), "Minimum drying time allowed should be updated");

        laundromat.setMaxDryingTimeAllowed(90.0);
        assertEquals(90.0, laundromat.getMaxDryingTimeAllowed(), "Maximum drying time allowed should be updated");

        laundromat.setEcoModeWeightCost(1.5);
        assertEquals(1.5, laundromat.getEcoModeWeightCost(),"Eco mode weight cost should be updated");

        laundromat.setEcoModeDryingCost(2.0);
        assertEquals(2,0, laundromat.getEcoModeDryingCost(), "Heavy mode weight cost should be updated");

        laundromat.setHeavyModeWeightCost(1.8);
        assertEquals(1.8, laundromat.getHeavyModeWeightCost(),"Heavy mode weight cost should be updated");

        laundromat.setHeavyModeDryingCost(2.2);
        assertEquals(2.2, laundromat.getHeavyModeDryingCost(), "Heavy mode drying cost should be updated");

        laundromat.setEcoModeStudentDiscount(0.9);
        assertEquals(0.9, laundromat.getEcoModeStudentDiscount(),"Eco mode student discount should be updated");

        laundromat.setHeavyModeStudentDiscount(0.7);
        assertEquals(0.7, laundromat.getHeavyModeStudentDiscount(), "Heavy mode student discount should be updated");
    }

    /**
     * Test the cost calculation method with valid inputs.
     */
    @Test 
    void testCost(){
        assertEquals(38.0,laundromat.cost(true,"eco", 10, 30), "Eco mode with Monash student");
        assertEquals(72.0,laundromat.cost(false,"heavy",15, 45), "Heavy mode with non-Monash student");
        assertEquals(81.6, laundromat.cost(true, "heavy", 20, 60), "Heavy mode with Monash student");
    
    }

    @Test
    void testCostWithInvalidInputs() {
        // Test case for eco mode with Monash student
        assertEquals(38.0, laundromat.cost(true, "eco", 10, 30), "Eco mode with Monash student");
        // Test case for heavy mode with non-Monash student
        assertEquals(72.0, laundromat.cost(false, "heavy", 15, 45), "Heavy mode with non-Monash student");
        // Test case for heavy mode with Monash student
        assertEquals(81.6, laundromat.cost(true, "heavy", 20, 60), "Heavy mode with Monash student");
    }

    @Test
    void testCostEcoMode() {
        // Test case for non-Monash student
        assertEquals(35, laundromat.cost(false, "eco", 5, 30), "Non-Monash student in eco mode");
        // Test case for Monash student without discount
        assertEquals(33, laundromat.cost(true, "eco", 4, 29), "Monash student without discount in eco mode");
        // Test case for Monash student with discount
        assertEquals(33.25, laundromat.cost(true, "eco", 5, 30), "Monash student with discount in eco mode");
        // Test case for Monash student without discount
        assertEquals(66.5, laundromat.cost(true, "eco", 10, 60), "Monash student without discount in eco mode");
        // Test case for Monash student without discount
        assertEquals(24.0, laundromat.cost(true, "eco", 4, 20), "Monash student without discount in eco mode");
    }

    /**
     * Test the cost calculation for invalid mode.
     */
    @Test 
    void testCalculateHeavyCost(){
        assertEquals(57.6, laundromat.calculateHeavyCost(8, 40,false), "Non-Monash student in heavy mode");
        assertEquals(69.6, laundromat.calculateHeavyCost(10, 60, true), "Monash student without discount in heavy mode");
    }

    @Test
    void testStudentDiscountHeavyMode() {
        // Test case for Monash student without discount
        assertEquals(60.0, laundromat.cost(true, "heavy", 10, 50), "Monash student without discount in heavy mode");
        // Test case for non-Monash student
        assertEquals(57.6, laundromat.cost(false, "heavy", 8, 40), "Non-Monash student in heavy mode");
        // Test case for Monash student with discount
        assertEquals(55.2, laundromat.cost(true, "heavy", 7, 39), "Monash student with discount in heavy mode");
        // Test case for Monash student with discount
        assertEquals(48.0, laundromat.cost(true, "heavy", 8, 40), "Monash student with discount in heavy mode");
        // Test case for Monash student without discount
        assertEquals(69.6, laundromat.cost(true, "heavy", 10, 60), "Monash student without discount in heavy mode");
    }

    @Test
    void testWithInvalidInputs(){
        assertFalse(laundromat.isInvalidInput(false, "eco", 10, 30), "Invalid monash_student input");
        assertTrue(laundromat.isInvalidInput(true, "invalid_mode", 10, 30), "Invalid mode input");
        assertFalse(laundromat.isInvalidInput(true, "eco", 10, 30), "Invalid weight input");
        assertFalse(laundromat.isInvalidInput(true, "eco", 10, 30), "Valid inputs");
        assertTrue(laundromat.isInvalidInput(true,"eco", 0, 30),"Weight below the minimum");
        assertTrue(laundromat.isInvalidInput(true, "eco", 21, 30),"Weight above the maximum");
        
    }

    @Test 
    void testCalculateEcoCst(){
        assertEquals(35,laundromat.calculateEcoCost(5, 30, false), "Non-Monash student in eco mode");
        assertEquals(66.5,laundromat.calculateEcoCost(10, 60,true), "Monash student with discount in eco mode");
        assertEquals(33.25, laundromat.calculateEcoCost(5, 30, true), "Monash student with discount in eco mode");
        assertEquals(33.25, laundromat.calculateEcoCost(5, 30, true), "Monash student with discount in eco mode");
    }

    
    @Test
    void testInvalidInput(){
        assertEquals(0, laundromat.cost(true, "invalid", 10, 30), "Invalid mode input");
        assertEquals(0, laundromat.cost(true, "eco", 0, 30),"Weight below the minimum");
        assertEquals(0, laundromat.cost(true, "eco", 10, 2), "Drying_time below the minimum");
        // Test case with drying_time above the maximum
        assertEquals(0, laundromat.cost(true, "eco", 10, 70), "Drying_time above the maximum");
    }
    
    /**
     * Test the cost calculation for eco mode with Monash student.
     */
    @Test 
    void testCostEcoModeMonashStudent()
    {
        double weight = 10.0;
        double drying_time = 60.0;
        boolean isMonashStudent = true;
        String mode = "eco";
        double expectedCost = laundromat.calculateEcoCost(weight, drying_time, isMonashStudent);
        expectedCost = Math.round(expectedCost * 100.0) / 100.0;
        double actualCost = laundromat.cost(isMonashStudent, mode, weight, drying_time);
        assertEquals(expectedCost, actualCost, "Cost for eco mode");
    }

    /**
     * Test the cost calculation for heavy mode.
     */
    @Test
    void testCostHeavyMode()
    {
        double weight = 15.0;
        double dryingTime = 45.0;
        boolean isMonashStudent = false;
        String mode = "heavy";
        double expectedCost = laundromat.calculateHeavyCost(weight, dryingTime, isMonashStudent);
        expectedCost = Math.round(expectedCost * 100) / 100.0;
        double actualCost = laundromat.cost(isMonashStudent, mode, weight, dryingTime);
        assertEquals(expectedCost, actualCost, "Cost for heavy mode");
    }

    /**
     * Test the cost calculation for invalid mode.
     */
    @Test
    void testCostInvalidMode()
    {
        double weight = 10.0;
        double dryingTime = 30.0;
        boolean isMonashStudent = true;
        String mode = "invalid";
        double actualCost = laundromat.cost(isMonashStudent, mode, weight, dryingTime);
        assertEquals(0.0, actualCost, "Cost for invalid mode should be 0");
    }

    /**
     * Test the cost calculation for eco mode with non-Monash student.
     */
    @Test
    void testCostEcoModeNonMonashStudent()
    {
        double weight = 10.0;
        double dryingTime = 30.0;
        boolean isMonashStudent = false;
        String mode = "eco";
        double expectedCost = weight * laundromat.getEcoModeWeightCost() + dryingTime * laundromat.getEcoModeDryingCost();
        expectedCost = Math.round(expectedCost * 100.0) / 100.0;
        double actualCost = laundromat.cost(isMonashStudent, mode, weight, dryingTime);
        assertEquals(expectedCost, actualCost, "Cost for eco mode with non-Monash student");
    }

    /**
     * Test the cost calculation for heavy mode with Monash student without discount.
     */
    @Test
    void testCostHeavyModeMonashStudent()
    {
        double weight = 15.0;
        double dryingTime = 50.0;
        boolean isMonashStudent = true;
        String mode = "heavy";
        double expectedCost = laundromat.calculateHeavyCost(weight, dryingTime, isMonashStudent);
        expectedCost = Math.round(expectedCost * 100) / 100.0;
        double actualCost = laundromat.cost(isMonashStudent, mode,weight,dryingTime);
        assertEquals(expectedCost, actualCost, "Cost for heavy mode with Monash student without discount");
    }

    /**
     * Test the handling of invalid inputs at boundaries.
     */
    @Test 
    void testInvalidInputAtBoundaris()
    {
        assertTrue(laundromat.isInvalidInput(false, "eco", 0.999, 30), "weight just below mimum should be invalid");
        assertTrue(laundromat.isInvalidInput(false, "eco", 20.001, 30), "Weight just above maximum should be invalid");
        assertTrue(laundromat.isInvalidInput(false, "eco", 10, 4.999),"Drying time just below minimum should be invalid");
        assertTrue(laundromat.isInvalidInput(false, "eco", 10, 60.001), "Drying time just above maximum should be invalid");
        assertFalse(laundromat.isInvalidInput(false, "eco", 1.0, 5.0), "Minimum weight and drying time should be valid");
        assertFalse(laundromat.isInvalidInput(false, "eco", 20.0, 60.0),"Maximum weight and drying time should be valid");
    }

}
