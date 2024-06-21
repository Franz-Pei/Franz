"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

import os.path
import re

from user import User
from random import randint

from user import User
from random import randint

unit_path = os.path.join("data", "unit.txt")
user_path = os.path.join("data", "user.txt")


# Creating UserStudent class
class UserStudent(User):
    def __init__(self, user_id="", user_name="", user_password="", user_role='ST', user_status='ENABLE',
                 enrolled_units=[]):
        # pass some attributes from class User
        super().__init__(user_id, user_name, user_password, user_role, user_status)
        self.user_role = 'ST'
        self.enrolled_units = enrolled_units

    def __str__(self):
        return ",".join(str(x) for x in self.__dict__.values())

    def student_menu(self):

        """
        Input: N/A
        Output: N/A
        Description: student_menu() function displays operations that can be performed by student
        """

        print("\nYou have the following options: ")
        print("\t1. List available units")
        print("\t2. List enrolled units")
        print("\t3. Enrol a unit")
        print("\t4. Drop a unit")
        print("\t5. Check your score")
        print("\t6. Generate score")
        print("\t7. Log out\n")

    def list_availble_units(self):

        """
        Input: N/A
        Output: N/A
        Description: list_available_units() function displays all units that are currently available.
        """

        available_units = ""
        unit_found = 0
        with open(user_path, "r", encoding="utf-8") as file:
            values = file.readlines()
        for x in range(0, len(values)):  # Iterating over a list to find the particular user
            data = values[x].strip().split(",", 5)
            if data[1] == self.user_name:
                with open(unit_path, "r") as file:
                    unit_list = file.readlines()
                    if len(data) == 5: # Checking if the particular user is enrolled in any units
                        for unit in unit_list:  # Iterating over each line in unit.txt
                            data = unit.split(',')
                            if int(data[3]) > 0:  # Checking if the capacity of a specific unit is > 0
                                unit_found += 1
                                available_units += "\nUnit " + str(data[1]) + " is currently available\n"
                        if unit_found <= 0:
                            available_units += "No units are currently available.\n"
                        print(available_units)
                    else: # The particular user is enrolled in at least one unit
                        units = data[-1]
                        list_tuples = eval(units) # Converting string to list using built-in eval()
                        if len(list_tuples) == 3: # Checking if the particular user is enrolled in 3 units
                            print("\nYou have enrolled a maximum of 3 units, there is no unit available to enrol.")
                        else:
                            temp_unit = []
                            enrol_list = []
                            # Iterating over a list of units found in unit.txt file to append the unit code to a list
                            for y in range(0, len(unit_list)):
                                unit_data = unit_list[y].strip().split(',')
                                if int(unit_data[3]) > 0:
                                    temp_unit.append(unit_data[1])
                            # Iterating over a list of units enrolled by the user to append the unit code to a list
                            for item in list_tuples:
                                enrol_list.append(item[0])
                            print(enrol_list)
                            # Subtract the set of units in unit.txt file with the set of units enrolled by th user
                            result = set(temp_unit) - set(enrol_list)
                            for each in result:
                                available_units += "\nUnit " + str(each) + " is currently available"
                            print(available_units)

    def list_enrolled_units(self):

        """
        Input: N/A
        Output: N/A
        Description: list_enrolled_units() function displays all units that the current student are enrolled in.
        """

        with open(user_path, "r", encoding="utf-8") as file:
            values = file.readlines()
        for x in range(0, len(values)):  # Iterating over a list to find the particular user
            data = values[x].strip().split(",", 5)
            if data[1] == self.user_name:
                if len(data) == 5:  # Checking if the particular user is enrolled in any units
                    print("\nYou are currently not enrolled in any units.\n")
                else:
                    units = data[-1]
                    list_tuples = eval(units)  # Converting string to list using built-in eval()
                    print("\nYour enrolled units are: ")
                    for y in range(0, len(list_tuples)):  # Iterating over a list of enrolled units to print unit code
                        print(" - " + str(list_tuples[y][0]))

    def enrol_a_unit(self, unit_code):

        """
        Input: unt_code
        Output: N/A
        Description: enrol_a_unit() function adds a specific unit to the current student's enrolled_unit list
        and initialize the score as -1.
        """

        with open(unit_path, 'r', encoding="utf-8") as file:
            unit_values = file.read()
            file.seek(0)
        # Using regex(regular expression) to find whether the unit exists in unit.txt file or not
        unit_found = re.findall(".*"+unit_code+",.*", unit_values)
        if unit_found:
            check_capacity = unit_found[0].split(',')
            if int(check_capacity[-1]) > 0:  # Checking if the specific unit is still available
                with open(user_path, "r", encoding="utf-8") as file:
                    values = file.readlines()
                for y in range(0, len(values)):  # Iterating over a list to find the particular user
                    data = values[y].strip().split(",", 5)
                    if data[1] == self.user_name:
                        if len(data) == 5:  # Checking if the particular user is not enrolled in any units
                            data.append([(unit_code, -1)])  # Appending a list of tuples of unit_code and score to list
                            data[-1] = str(data[-1])
                            values[y] = ",".join(data) + "\n"
                            print("\nSuccessfully enrolled in", unit_code)
                            with open(user_path, "w", encoding="utf-8") as file:
                                file.write("".join(values))
                        else:
                            # Using regex(regular expression) to check if a particular user is already enrolled in unit
                            if re.findall(".*" + unit_code + ".*", data[-1]):
                                print("\nYou are already enrolled in", unit_code)
                            else:  # If not enrolled in the unit
                                units = data[-1]
                                list_tuples = eval(units)  # Converting string to list using built-in eval()
                                if len(list_tuples) < 3:  # Checking if the particular user is enrolled in 3 units
                                    list_tuples.append((unit_code, -1))
                                    print("\nSuccessfully enrolled in", unit_code)
                                    data[-1] = str(list_tuples)
                                    values[y] = ",".join(data) + "\n"
                                    with open(user_path, "w", encoding="utf-8") as file:
                                        file.write("".join(values))
                                    with open(unit_path, "w", encoding="utf-8") as file:
                                        unit_data = unit_found[0].split(',')
                                        reduce = int(unit_data[-1]) - 1
                                        unit_data[-1] = str(reduce)
                                        unit_values = re.sub(".*"+unit_code+".*", ",".join(unit_data), unit_values)
                                        file.write(unit_values)
                                else:
                                    print("\nYou cannot enrol in more than 3 units.")
            else:
                print("You cannot enrol in", unit_code, "\n")
                print(unit_code, "has reached its maximum capacity.")
        else:
            print("\nThere is no unit with unit code:", unit_code)

    def drop_a_unit(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: drop_a_unit() function removes a specific unit from the current student's enrolled_unit list.
        """

        with open(unit_path, 'r', encoding="utf-8") as file:
            unit_values = file.read()
            file.seek(0)
        # Using regex(regular expression) to find whether the unit exists in unit.txt file or not
        unit_found = re.findall(".*"+unit_code+",.*", unit_values)
        if unit_found:
            with open(user_path, "r", encoding="utf-8") as file:
                values = file.readlines()
                for y in range(0, len(values)):  # Iterating over a list to find the particular user
                    data = values[y].strip().split(",", 5)
                    if data[1] == self.user_name:
                        # Using regex(regular expression) to find whether the particular user is enrolled in the unit
                        enrol_unit_found = re.findall(unit_code, str(data))
                        if enrol_unit_found:
                            units = data[-1]
                            list_tuples = eval(units)  # Converting string to list using built-in eval()
                            for unit in list_tuples:  # Iterating over a list to find the particular unit
                                if unit_code == str(unit[0]):
                                    list_tuples.remove(unit)  # Removing the unit from the list
                                    print("\nSuccessfully dropped unit", unit_code)
                                    data[-1] = str(list_tuples) + "\n"
                                    values[y] = ",".join(data)
                                    with open(user_path, "w", encoding="utf-8") as file1:
                                        file1.write("".join(values))
                                    with open(unit_path, "w", encoding="utf-8") as file2:
                                        unit_data = unit_found[0].split(',')
                                        reduce = int(unit_data[-1]) - 1
                                        unit_data[-1] = str(reduce)
                                        unit_values = re.sub(".*" + unit_code + ".*", ",".join(unit_data), unit_values)
                                        file2.write(unit_values)
                        else:
                            print(f"You are not enrolled in the unit {unit_code}.\n")
        else:
            print("\nThere is no unit with unit code:", unit_code)

    def check_score(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: check_score() function display the score for a specific unit, if the input field is empty
        display the scores for all units the current student is enrolled in.
        """

        with open(unit_path, 'r', encoding="utf-8") as file:
            unit_values = file.read()
            file.seek(0)
        # Using regex(regular expression) to find whether the unit exists in unit.txt file or not
        unit_found = re.findall(".*"+unit_code+",.*", unit_values)

        if len(unit_code) > 0:  # Checking if the input field is not empty
            if unit_found:
                with open(user_path, "r", encoding="utf-8") as file:
                    values = file.readlines()
                for x in range(0, len(values)):  # Iterating over a list to find the particular user
                    data = values[x].strip().split(",", 5)
                    if data[1] == self.user_name:
                        enrol_unit_found = re.findall(unit_code, str(data))
                        if enrol_unit_found:
                            units = data[-1]
                            list_tuples = eval(data[-1])
                            for y in range(0, len(list_tuples)):  # Iterating over list to find particular unit & socre
                                if unit_code == str(list_tuples[y][0]):
                                    print(f"\nYour score for unit {unit_code} is " + str(list_tuples[y][1]))
                        else:
                            print(f"\nYou are not enrolled in the unit {unit_code}.")
            else:
                print("\nThere is no unit with unit code:", unit_code)
        else:  # If the input field is empty
            with open(user_path, "r", encoding="utf-8") as file:
                values = file.readlines()
            for x in range(0, len(values)):  # Iterating over a list to find the particular user
                data = values[x].strip().split(",", 5)
                if data[1] == self.user_name:
                    units = data[-1]
                    list_tuples = eval(units)  # Converting string to list using built-in eval()
                    # Iterating over a list to display the scores for all units the particular user is enrolled in
                    for y in range(0, len(list_tuples)):
                        print(f"\nYour score for unit " + str(list_tuples[y][0]) + " is " + str(list_tuples[y][1]))

    def generate_score(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: generate_score() function randomly generates score between 0 and 100 for a specific unit that
        the current student is enrolled in.
        """

        with open(unit_path, 'r', encoding="utf-8") as file:
            unit_values = file.read()
            file.seek(0)
        # Using regex(regular expression) to find whether the unit exists in unit.txt file or not
        unit_found = re.findall(".*"+unit_code+",.*", unit_values)

        if unit_found:
            with open(user_path, "r", encoding="utf-8") as file:
                values = file.readlines()
            for x in range(0, len(values)):  # Iterating over a list to find the particular user
                data = values[x].strip().split(",", 5)
                if data[1] == self.user_name:
                    # Using regex(regular expression) to find whether the particular user is enrolled in the unit
                    enrol_unit_found = re.findall(unit_code, str(data))
                    if enrol_unit_found:
                        units = data[-1]
                        list_tuples = eval(data[-1])  # Converting string to list using built-in eval()
                        for y in range(0, len(list_tuples)):  # Iterating over a list to find the particular unit
                            if unit_code == str(list_tuples[y][0]):
                                new_score = list_tuples[y][1]
                                new_score = str(randint(0, 100))  # Random score between 0 and 100 to particular unit
                                print(f"\nYour score for unit {unit_code} is " + new_score)
                                list_tuples[y] = (list_tuples[y][0], new_score)  # Assign the random score to the list
                        data[-1] = str(list_tuples) + "\n"
                        values[x] = ",".join(data)
                        with open(user_path, "w", encoding="utf-8") as file:
                            file.write("".join(values))
                        with open(unit_path, "w", encoding="utf-8") as file:
                            unit_data = unit_found[0].split(',')
                            reduce = int(unit_data[-1]) - 1
                            unit_data[-1] = str(reduce)
                            unit_values = re.sub(".*" + unit_code + ".*", ",".join(unit_data), unit_values)
                            file.write(unit_values)

                    else:
                        print(f"\nYou are not enrolled in the unit {unit_code}.")
        else:
            print("\nThere is no unit with unit code:", unit_code)
