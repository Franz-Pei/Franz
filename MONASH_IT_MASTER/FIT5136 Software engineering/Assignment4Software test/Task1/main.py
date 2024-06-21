# Minimum weight allowed for the Laundry service
MIN_WEIGHT = 1
#Maximum weight allowed for the Laundry service
MAX_WEIGHT = 20
# Minimum drying time allowed for the Laundry service
MIN_DRYING_TIME = 5
#Maximum drying time allowed for the Laundry service
MAX_DRYING_TIME = 60
#Cost per weight unit for the eco mode
ECO_WEIGHT_COST = 1
#Cost per drying time unit for the eco mode
ECO_DRYING_COST = 1
# Cost per weight unit for the heavy mode
HEAVY_WEIGHT_COST = 1.2
# Cost per drying time unit for the heavy mode
HEAVY_DRYING_COST = 1.2
# Discount factor for Monash students in eco mode
ECO_DISCOUNT = 0.95
# Discount factor for Monash students in heavy mode
HEAVY_DISCOUNT = 0.8


def cost(monash_student, mode, weight, drying_time):
    """
    Calculates the cost of the laundry service based on the given parameters.

    Args:
        monash_student (bool): True if the user is a Monash student, False otherwise.
        mode (str): The mode of the laundry service, either 'eco' or 'heavy'.
        weight (int): The weight of the laundry in kilograms.
        drying_time (int): The drying time in minutes.

    Returns:
        float: The cost of the laundry service rounded to two decimal places.
    """
    if is_invalid_input(monash_student, mode, weight, drying_time):
        return 0
    if mode == 'eco':
        calculate_cost = calculate_eco_cost(weight, drying_time, monash_student)
    else:
        calculate_cost = calculate_heay_cost(weight, drying_time, monash_student)
    return round(calculate_cost, 2)
    

def is_invalid_input(monash_student, mode, weight, drying_time):
    """
    Checks if the input parameters are valid.

    Args:
        monash_student (bool): True if the user is a Monash student, False otherwise.
        mode (str): The mode of the laundry service, either 'eco' or 'heavy'.
        weight (int): The weight of the laundry in kilograms.
        drying_time (int): The drying time in minutes.

    Returns:
        bool: True if any of the input parameters are invalid, False otherwise.
    """
    if not isinstance(monash_student, bool):
        return True
    if mode not in['eco', 'heavy']:
        return True
    if not isinstance(weight, int):
        return True
    if not isinstance(drying_time, int):
        return True
    if weight < MIN_WEIGHT or weight > MAX_WEIGHT:
        return True
    if drying_time < MIN_DRYING_TIME or drying_time > MAX_DRYING_TIME:
        return True
    return False

def calculate_eco_cost(weight, drying_time, monash_student):
    """
    Calculates the cost of the eco mode laundry service.

    Args:
        weight (int): The weight of the laundry in kilograms.
        drying_time (int): The drying time in minutes.
        monash_student (bool): True if the user is a Monash student, False otherwise.

    Returns:
        float: The cost of the eco mode laundry service.
    """
    calculate_cost = weight * ECO_WEIGHT_COST + drying_time * ECO_DRYING_COST
    if monash_student and weight >= 5 and drying_time >= 30:
        calculate_cost *= ECO_DISCOUNT
    return calculate_cost

def calculate_heay_cost(weight, drying_time, monash_student):
    """
    Calculates the cost of the heavy mode laundry service.

    Args:
        weight (int): The weight of the laundry in kilograms.
        drying_time (int): The drying time in minutes.
        monash_student (bool): True if the user is a Monash student, False otherwise.

    Returns:
        float: The cost of the heavy mode laundry service.
    """
    weight_cost = weight * HEAVY_WEIGHT_COST
    drying_cost = drying_time * HEAVY_DRYING_COST
    if monash_student and weight >= 8 and drying_time >= 40:
        drying_cost *= HEAVY_DISCOUNT
    calculate_cost = weight_cost + drying_cost
    return calculate_cost

    
