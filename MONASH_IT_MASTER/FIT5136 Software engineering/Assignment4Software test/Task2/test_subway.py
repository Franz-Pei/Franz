from subway import *
import unittest

# Define a test class that inherits from unittest.TestCase
class TestSubway(unittest.TestCase):

	# Test the get_food_type_price function
	def test_get_food_type_price(self):
		# Assert that get_food_type_price('sub') returns 2
		self.assertEqual(get_food_type_price('sub'), 2)
		# Assert that get_food_type_price('salad') returns 5
		self.assertEqual(get_food_type_price('salad'), 5)
		# Assert that get_food_type_price('wrap') returns 3
		self.assertEqual(get_food_type_price('wrap'), 3)
	
	# Test the get_size_surcharge function
	def test_get_size_surcharge(self):
		# Assert that get_size_surcharge('6-inch') returns 2
		self.assertEqual(get_size_surcharge('6-inch'), 2)
		# Assert that get_size_surcharge('footlong') returns 4
		self.assertEqual(get_size_surcharge('footlong'), 4)
		# Assert that get_size_surcharge('') returns 0
		self.assertEqual(get_size_surcharge(''),0)

	# Test the get_bread_surcharge function
	def test_get_bread_surcharge(self):
		# Assert that get_bread_surcharge('gluten-free') returns 1
		self.assertEqual(get_bread_surcharge('gluten-free'), 1)
		# Assert that get_cheese_surcharge('no') returns 0
		self.assertEqual(get_cheese_surcharge('no'), 0)
		# Assert that get_cheese_surcharge('maybe') returns None
		self.assertEqual(get_cheese_surcharge('maybe'), None)
	
	# Test the get_meat_cost function
	def test_get_meat_cost(self):
		# Assert that get_meat_cost('meatball', 'sub') returns 3
		self.assertEqual(get_meat_cost('meatball', 'sub'), 3)
		# Assert that get_meat_cost("wagyu steak", 'wrap') returns 6
		self.assertEqual(get_meat_cost("wagyu steak", 'wrap'), 6)
		# Assert that get_meat_cost('wagyu steak', 'sub') returns -1
		self.assertEqual(get_meat_cost('wagyu steak', 'sub'), -1)
	
	# Test the valid_inputs function
	def test_invalid_inputs_function(self):
		# Assert that valid input returns True
		self.assertTrue(valid_inputs('sub', '6-inch', 'garlic', 'yes', 'standard', 'meatball'))
		# Assert that invalid input returns False
		self.assertFalse(valid_inputs('burger','6-inch', 'garlic', 'yes', 'standard', 'meatball'))
		# Assert that invalid input returns False
		self.assertFalse(valid_inputs('sub', '', 'garlic', 'yes', 'standard', 'meatball'))

	# Test the behavior of subway_price function when receiving invalid inputs
	def test_invalid_inputs(self):
		# Assert that invalid input returns -1
		self.assertEqual(subway_price("Burger", "6-inch", "Garlic", "Yes", "Standard", "Meatball"), -1)
		self.assertEqual(subway_price("Sub", "Footlong", "Rye", "Yes", "Standard", "Meatball"), -1)
		self.assertEqual(subway_price("Sub", "Footlong", "Garlic", "Maybe", "Standard", "Meatball"), -1)
		self.assertEqual(subway_price("Sub", "Footlong", "Garlic", "Yes", "Extra", "Meatball"), -1)
		self.assertEqual(subway_price("Sub", "Footlong", "Garlic", "Yes", "Standard", "Chicken"), -1)
		self.assertEqual(subway_price("Sub", "", "Garlic", "Yes", "Standard", "Meatball"), -1)

	# Test the price calculation of subway_price function for subs
	def test_sub_prices(self):
		# Assert that sub price calculation is correct
		self.assertEqual(subway_price("Sub", "6-inch", "Garlic", "No", "Standard", "Meatball"), 10)
		self.assertEqual(subway_price("Sub", "Footlong", "Plain", "Yes","Premium", "BLT"), 15)
		self.assertEqual(subway_price("Sub", "Footlong", "Wholewheat", "No", "Standard", "Standard Steak"), 13)
		self.assertEqual(subway_price("Sub", "6-inch", "Gluten-Free", "Yes", "Premium", "Standard Steak"), 14)
		self.assertEqual(subway_price("Sub", "Footlong", "Garlic", "Yes", "Premium", "Wagyu Steak"), -1)

	# Test the price calculation of subway_price function for salads
	def test_salad_prices(self):
		# Assert that salad price calculation is correct
		self.assertEqual(subway_price("Salad", "", "Garlic", "No", "Standard", "Meatball"), 11)
		self.assertEqual(subway_price("Salad", "", "Plain", "Yes", "Premium", "BLT"), 14)
		self.assertEqual(subway_price("Salad", "", "Wholewheat", "No", "Standard", "Standard Steak"), 12)
		self.assertEqual(subway_price("Salad", "", "Gluten-Free", "Yes", "Premium", "Standard Steak"), 15)
		self.assertEqual(subway_price("Salad", "", "Garlic", "No", "Standard", "Wagyu Steak"), -1)
	
	# Test the price calculation of subway_price function for wraps
	def test_wrap_price(self):
		# Assert that wrap price calculation is correct
		self.assertEqual(subway_price("Wrap", "", "Garlic", "No", "Standard", "Meatball"), 9)
		self.assertEqual(subway_price("Wrap", "", "Plain", "Yes", "Premium", "BLT"), 12)
		self.assertEqual(subway_price("Wrap", "", "Wholewheat", "No", "Standard", "Standard Steak"), 10)
		self.assertEqual(subway_price("Wrap", "", "Gluten-Free", "Yes", "Premium", "Standard Steak"), 13)
		self.assertEqual(subway_price("Wrap", "", "Garlic", "No", "Standard", "Wagyu Steak"), 12)
		


unittest.main()
