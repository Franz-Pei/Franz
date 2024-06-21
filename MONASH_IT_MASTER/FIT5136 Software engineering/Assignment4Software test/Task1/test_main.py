# test_main.py
from main import cost, is_invalid_input, calculate_eco_cost, calculate_heay_cost
import unittest    

class TestMain(unittest.TestCase):

    def test_cost(self):
        """
        Test the cost function with various inputs.
        """
        # Test case for eco mode with Monash student
        self.assertEqual(cost(True, 'eco', 10, 30), 38.0)
        # Test case for heavy mode with non-Monash student
        self.assertEqual(cost(False, 'heavy', 15, 45), 72.0)
        # Test case for heavy mode with Monash student
        self.assertEqual(cost(True, 'heavy', 20, 60), 81.6)
    
    def test_is_invalid_input(self):
        """
        Test the is_invalid_input function with various invalid inputs.
        """
        # Test case with invalid monash_student input
        self.assertTrue(is_invalid_input('not_a_bool','eco', 10, 30))
        # Test case with invalid mode input
        self.assertTrue(is_invalid_input(True, 'invalid_mode', 10, 30))
        # Test case with invalid weight input
        self.assertTrue(is_invalid_input(True, 'eco', 'not_an_int', 30))
        # Test case with valid inputs
        self.assertFalse(is_invalid_input(True,'eco', 10, 30))
        # Test case with weight below the minimum
        self.assertTrue(is_invalid_input(True, 'eco', 0, 30))
        # Test case with weight above the maximum
        self.assertTrue(is_invalid_input(True, 'eco', 21, 30))
    
    def test_calculate_eco_cost(self):
        """
        Test the calculate_eco_cost function with various inputs.
        """
        # Test case for non-Monash student
        self.assertEqual(calculate_eco_cost(5, 30, False), 35)
        # Test case for Monash student with discount
        self.assertEqual(calculate_eco_cost(10, 60, True), 66.5)
        # Test case for Monash student with discount
        self.assertEqual(calculate_eco_cost(5, 30, True), 33.25)
    
    def test_calculate_heay_cost(self):
        """
        Test the calculate_heay_cost function with various inputs.
        """
        # Test case for non-Monash student
        self.assertEqual(calculate_heay_cost(8, 40, False), 57.6)
        # Test case for Monash student without discount
        self.assertEqual(calculate_heay_cost(10, 60, True), 69.6)
        # Test case for Monash student with discount
        self.assertAlmostEqual(calculate_heay_cost(8, 40, True), 48.0)

    def test_invalid_inputs(self):
        """
        Test the cost function with various invalid inputs.
        """
        # Test case with invalid mode
        self.assertEqual(cost(True, 'invalid', 10, 30),0)
        # Test case with invalid weight
        self.assertEqual(cost(True, 'eco', '10', 30),0)
        # Test case with invalid drying_time
        self.assertEqual(cost(True, 'eco', 10, '30'), 0)
        # Test case with weight below the minimum
        self.assertEqual(cost(True, 'eco', 0, 30), 0)
        # Test case with weight above the maximum
        self.assertEqual(cost(True, 'eco', 25, 30), 0)
        # Test case with drying_time below the minimum
        self.assertEqual(cost(True, 'eco', 10, 2), 0)
        # Test case with drying_time above the maximum
        self.assertEqual(cost(True, 'eco', 10, 70),0)
        # Test case with invalid monash_student input
        self.assertEqual(cost('not_a_bool', 'eco', 10, 30),0)
    
    def test_eco_mode(self):
        """
        Test the cost function in eco mode with various inputs.
        """
        # Test case for non-Monash student
        self.assertEqual(cost(False, 'eco', 5, 30), 35)
        # Test case for Monash student without discount
        self.assertEqual(cost(True, 'eco', 4, 29), 33)
        # Test case for Monash student with discount
        self.assertAlmostEqual(cost(True, 'eco', 5, 30), 33.25)
        # Test case for Monash student without discount
        self.assertAlmostEqual(cost(True, 'eco', 10, 60), 66.5)
        # Test case for Monash student without discount
        self.assertEqual(cost(True, 'eco', 4, 20), 24.0)

    def test_heavy_mode(self):
        """
        Test the cost function in heavy mode with various inputs.
        """
        # Test case for Monash student without discount
        self.assertAlmostEqual(cost(True, 'heavy', 10, 50), 60.0)
        #Test case for non-Monash student
        self.assertEqual(cost(False, 'heavy', 8, 40), 57.6)
        # Test case for Monash student with discount
        self.assertAlmostEqual(cost(True, 'heavy', 7, 39), 55.2)
        # Test case for Monash student with discount
        self.assertAlmostEqual(cost(True, 'heavy', 8, 40), 48.0)
        # Test case for Monash student without discount
        self.assertEqual(cost(True, 'heavy', 10, 60), 69.6)
        

if __name__ == '__main__':
    unittest.main()
