"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

from random import randint
import os

unit_path = os.path.join("data", "unit.txt")


# Creating Unit class
class Unit:
    def __init__(self, unit_id="", unit_code="", unit_name="", unit_capacity=0):
        self.unit_id = self.generate_unit_id()
        self.unit_code = unit_code
        self.unit_name = unit_name
        self.unit_capacity = unit_capacity

    def __str__(self):
        return ",".join(str(x) for x in self.__dict__.values())

    def generate_unit_id(self):
        """
        Input: N/A
        Output: a 7-digit number
        Description: generate_unit_id() functions generates a random 7-digit number and assigns it to unit_id
        """

        unit_id = str(randint(1000000, 9999999))
        with open(unit_path, "r", encoding="utf-8") as file:
            # Creating while loop to generate unique unit id if the generated unit id already exists for other unit in
            # unit.txt
            while unit_id in file.read():
                unit_id = str(randint(1000000, 9999999))
            return unit_id
