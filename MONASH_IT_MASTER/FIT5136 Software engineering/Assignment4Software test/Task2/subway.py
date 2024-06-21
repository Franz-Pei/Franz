def get_food_type_price(food_type):
	"""
    Get the base price for a given food type
    :param food_type: str, representing the food type, either "sub", "salad", or "wrap"
    :return: int, the base price for the given food type
    """
	base_prices = {
		'sub' : 2,
		'salad' : 5,
		'wrap' : 3
	}
	return base_prices[food_type]

def get_size_surcharge(size):
	"""
    Get the surcharge for a given size
    :param size: str, representing the size, either "6-inch", "footlong", or an empty string ""
    :return: int, the surcharge for the given size
    """
	size_surcharges = {
		'6-inch' : 2,
		'footlong': 4,
		'':0
	}
	return size_surcharges[size]

def get_bread_surcharge(bread):
	"""
    Get the surcharge for a given bread type
    :param bread: str, representing the bread type, either "garlic", "plain", "wholewheat", or "gluten-free"
    :return: int, the surcharge for the given bread type
    """
	bread_surcharges = {
		'gluten-free' : 1,
		'garlic' : 0,
		'plain' : 0,
		'wholewheat' : 0
	}
	return bread_surcharges[bread]

def get_cheese_surcharge(cheese):
	"""
    Get the surcharge for adding cheese or not
    :param cheese: str, representing whether to add cheese or not, either "yes" or "no"
    :return: int, the surcharge for adding cheese or not
    """
	cheese_surcharges = {
		'yes' : 1,
		'no' : 0
	}
	if cheese in cheese_surcharges:
		return cheese_surcharges[cheese]
	else:
		return None

def get_veggies_surcharge(veggies):
	"""
    Get the surcharge for a given type of veggies
    :param veggies: str, representing the type of veggies, either "standard" or "premium"
    :return: int, the surcharge for the given type of veggies
    """
	veggies_surcharges = {
		'standard' : 3,
		'premium' : 4
	}
	return veggies_surcharges[veggies]

def get_meat_cost(meat, food_type):
	"""
    Get the cost of the meat, and handle the special case where Wagyu Steak is only available for Wrap
    :param meat: str, representing the type of meat, either "meatball", "blt", "standard steak", or "wagyu steak"
    :param food_type: str, representing the food type, used to determine if Wagyu Steak is valid
    :return: int, the cost of the given meat, or -1 if Wagyu Steak is not compatible with the food type
    """
	meat_costs = {
		'meatball' : 3,
		'blt' : 4,
		'standard steak' : 4,
		'wagyu steak' : 6
	}
	if meat == "wagyu steak" and food_type == "wrap":
		return meat_costs[meat]
	elif meat == "wagyu steak" and food_type != "wrap":
		return -1
	else:
		return meat_costs[meat]

def valid_inputs(food_type, size,bread, cheese, veggies, meat):
	"""
    Validate the input parameters for validity
    :param food_type: str, representing the food type
    :param size: str, representing the size
    :param bread: str, representing the bread type
    :param cheese: str, representing whether to add cheese or not
    :param veggies: str, representing the type of veggies
    :param meat: str, representing the type of meat
    :return: bool, indicating whether the input parameters are valid or not
    """
	valid_inputs = {
		'food_type' : ['sub', 'salad', 'wrap'],
		'size' : ['6-inch', 'footlong', ''],
		'bread' : ['garlic', 'plain', 'wholewheat', 'gluten-free'],
		'cheese' : ['yes', 'no'],
		'veggies' : ['standard', 'premium'],
		'meat' : ['meatball', 'blt', 'standard steak', 'wagyu steak']
	}
	for param, value in [(food_type, 'food_type'), (size, 'size'), (bread, 'bread'), (cheese, 'cheese'), (veggies,'veggies'),(meat,'meat')]:
			if param not in valid_inputs[value]:
				return False
	if food_type == 'sub' and size == '':
		return False
	return True

def subway_price(food_type, size, bread, cheese, veggies, meat):
	"""
	food_type: str ("Sub", "Salad", "Wrap")
	size: 		str ("6-inch", "Footlong")
	cheese: 	str ("Yes", "No")
	bread: 		str ("Garlic", "Plain", "Wholewheat", "Gluten-Free")
	veggies: 	str ("Standard", "Premium")
	meat: 		str ("Meatball", "BLT", "Standard Steak", "Wagyu Steak")

	Returns: int (final price or -1 if input is invalid)
	"""
	food_type = food_type.lower()
	size = size.lower()
	bread = bread.lower()
	cheese = cheese.lower()
	veggies = veggies.lower()
	meat = meat.lower()

	# If the input parameters are invalid, return -1 directly
	if not valid_inputs(food_type, size, bread, cheese, veggies, meat):
		return -1

	# Get the base price for the food type
	base_price = get_food_type_price(food_type)
	# Get the surcharge for the size
	size_surcharge = get_size_surcharge(size)
	# Get the surcharge for the bread type
	bread_surcharge = get_bread_surcharge(bread)
	# Get the surcharge for adding cheese or not
	cheese_surcharge = get_cheese_surcharge(cheese)
	# Get the surcharge for the type of veggies
	veggies_surcharge = get_veggies_surcharge(veggies)
	# Get the cost of the meat, and handle the special case where Wagyu Steak is only available for Wrap
	meat_cost = get_meat_cost(meat, food_type)

	# If meat_cost is -1, it means Wagyu Steak is not compatible with the food type
	if meat_cost == -1:
		return -1

	# Calculate the total price by adding the prices of all components
	total_price = base_price + size_surcharge + bread_surcharge + cheese_surcharge + veggies_surcharge + meat_cost
	return total_price


