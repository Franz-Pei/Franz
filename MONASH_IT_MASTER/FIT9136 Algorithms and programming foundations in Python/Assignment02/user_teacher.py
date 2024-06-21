"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

import os
import re

from user import User

user_path = os.path.join("data", "user.txt")
unit_path = os.path.join("data", "unit.txt")


class UserTeacher(User):
    def __init__(self, user_id="", user_name="", user_password="", user_role="TA", user_status="ENABLE",
                 teach_units=[]):

        super().__init__(user_id, user_name, user_password, user_role, user_status)
        self.user_role = 'TA'
        self.teach_units = teach_units

    def __str__(self):
        return ",".join(str(x) for x in self.__dict__.values())

    def teacher_menu(self):

        """
        Input: N/A
        Output: N/A
        Description: teacher_menu() function displays operations that can be performed by teacher
        """
        print("\nYou have the following options: ")
        print("\t1. List all teaching units information")
        print("\t2. Add a unit")
        print("\t3. Delete a unit")
        print("\t4. List all students’ information")
        print("\t5. Show the avg/max/min score of one unit")
        print("\t6. Log out\n")

    def list_teach_units(self):

        """
        Input: N/A
        Output: N/A
        Description: list_teach_unit() function displays the information of all units that are taught by the
        current teacher.
        """

        with open(user_path, "r", encoding="utf-8") as file:
            values = file.read()
            if self.user_name in values:  # Checking whether  the user exists
                file.seek(0)
                data = file.readlines()
                for x in range(0, len(data)):  # Iterating over a list to find the particular user
                    teacher_data = data[x].strip().split(',', 5)
                    if teacher_data[1] == self.user_name:
                        if len(teacher_data) > 5:  # Checking if there are any units in the particular users' list
                            list_units = eval(teacher_data[-1])  # Converting string to list using built-in eval()
                            # Opening unit.txt to get the unit information
                            with open(unit_path, "r", encoding="utf-8") as file1:
                                unit_info = file1.readlines()

                                for z in range(0, len(unit_info)):
                                    unit_data = unit_info[z].strip().split(',')
                                    if unit_data[1] in list_units:  # Checking if unit code matches in both txt files
                                        print("\n" + str(unit_data))
                                    else:
                                        continue
                        else:
                            print("\nYou have no teaching units.")
                    else:
                        continue
            else:
                print("\nUser doesn't exist.")

    def add_teach_unit(self, unit_obj):

        """
        Input: user_obj, an instance of Unit class
        Output: N/A
        Description: add_teach_unit() function adds a unit to unit.txt and adds unit to teacher's teach_unit list
        """

        with open(unit_path, "r", encoding="utf-8") as file:
            values = file.read()
            # Checking whether the unit is already present or not
            unit_found = re.search(".*" + unit_obj.unit_code + ",.*", values)
        if unit_found:
            print("\n" + unit_obj.unit_code + " is already in unit.txt")  # if unit is present
        else:  # if unit is not present appending the information to unit.txt
            with open(unit_path, "a", encoding="utf-8") as file:
                file.write(
                    unit_obj.unit_id + "," +
                    unit_obj.unit_code + "," +
                    unit_obj.unit_name + "," +
                    str(unit_obj.unit_capacity) + "\n"
                )
        with open(user_path, "r", encoding="utf-8") as file:
            values = file.readlines()
        for x in range(0, len(values)):
            data = values[x].strip().split(',', 5)
            if data[1] == self.user_name:  # if unit is not in teach_unit list
                if len(data) == 5:
                    data.append([unit_obj.unit_code])
                    data[-1] = str(data[-1])
                    values[x] = ",".join(data) + "\n"
                    print("\n" + unit_obj.unit_code + " has been added to teaching units.")
                    with open(user_path, "w", encoding="utf-8") as file:
                        file.write("".join(values))
                else:
                    list_teach = eval(data[-1])
                    if unit_obj.unit_code in data[-1]:  # if unit is already in teach_unit list
                        print("\n" + unit_obj.unit_code + " is already in your teaching list.")
                    else:  # if unit is not in teach_unit list
                        list_teach.append(unit_obj.unit_code)
                        print("\n" + unit_obj.unit_code + " has been added to teaching units.")
                        data[-1] = str(list_teach)
                        values[x] = ",".join(data) + "\n"
                        with open(user_path, "w", encoding="utf-8") as file:
                            file.write("".join(values))
            else:
                continue

    def delete_teach_unit(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: delete_teach_unit() function deletes a unit from the teacher's 'teach_units' list and also removes
        it from students' enrol_unit list if there are any students enrolled
        """

        self.unit_code = unit_code
        with open(unit_path, "r", encoding="utf-8") as file:
            unit_values = file.read()
            # Using regex(regular expression) to find whether the unit exists in unit.txt file or not
            unit_found = re.findall(unit_code, str(unit_values))
        if unit_found:
            with open(user_path, "r", encoding="utf-8") as file:
                values = file.readlines()
                for x in range(0, len(values)):  # Iterating over a list to find the particular user
                    data = values[x].strip().split(',', 5)
                    if data[1] == self.user_name:
                        # Using regex(regular expression) to find whether the particular unit is in the teach_units list
                        teach_unit_found = re.findall(unit_code, str(data))
                        if teach_unit_found:
                            units = data[-1]
                            teach_list_tuples = eval(units)  # Converting string to list using built-in eval()
                            for unit in teach_list_tuples:  # Iterating over a list to find the particular unit
                                if unit_code == unit:
                                    teach_list_tuples.remove(unit_code)  # Removing the unit from teach_units list
                                    print("\nSuccessfully deleted teach unit", unit_code)
                                    data[-1] = str(teach_list_tuples) + "\n"
                                    values[x] = ",".join(data)
                                    with open(user_path, "w", encoding="utf-8") as file1:
                                        file1.write("".join(values))
                        else:
                            print(f"\n{unit_code} is not in your teaching unit.")

                    for y in range(0, len(values)):
                        data = values[y].strip().split(',', 5)
                        if data[3] == "ST":  # Checking the role of user
                            if len(data) > 5:  # Checking if the users with user role ST are enrolled in any units
                                # Using regex(regular expression) to find whether users with user role ST are enrolled
                                # the particular unit
                                found = re.search(".*" + unit_code + ".*", data[-1])
                                if found:
                                    units = data[-1]
                                    st_list_tuples = eval(units)  # Converting string to list using built-in eval()
                                    for unit in st_list_tuples:  # Iterating over a list to find the particular unit
                                        if unit_code == str(unit[0]):
                                            # Removing the particular unit from the enrolled_unit list
                                            st_list_tuples.remove(unit)
                                            data[-1] = str(st_list_tuples) + "\n"
                                            values[y] = ",".join(data)
                                            with open(user_path, "w", encoding="utf-8") as file1:
                                                file1.write("".join(values))
                            else:
                                continue
                        else:
                            continue

                # Removing the particular unit from unit.txt file
                with open(unit_path, "r", encoding="utf-8") as file:
                    new_unit_values = file.readlines()
                    with open(unit_path, "w", encoding="utf-8") as file2:
                        for z in range(0, len(new_unit_values)):
                            unit_data = new_unit_values[z].strip().split(',')
                            if unit_code != unit_data[1]:
                                file2.write(new_unit_values[z])
        else:
            print(f"\nUnit {unit_code} does not exist")

    def list_enrol_students(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: list_enrol_students() function displays all the students enrolled in that specific unit
        """

        num_enrol = 0  # Variable to count th total students
        with open(user_path, "r", encoding="utf-8") as file:
            values = file.readlines()
        for x in range(0, len(values)):
            data = values[x].strip().split(',', 5)

            if data[3] == "ST":  # Checking the role of user
                if len(data) > 5:  # If role is student checking if it is enrolled in any units
                    found = re.search(".*" + unit_code + ".*", data[-1])
                    if found:  # If unit found in students' enrol_unit list increasing the value of num_enrol
                        num_enrol += 1

                        print(data)  # Displaying the data of student enrolled in specific unit
                else:
                    continue
            else:
                continue

        if num_enrol == 0:  # If there are no students enrolled
            print("\nThere are no students enrolled in", unit_code)
        else:
            print("\nThere are", num_enrol, "students enrolled in", unit_code)

    def show_unit_avg_max_min_score(self, unit_code):

        """
        Input: unit_code
        Output: N/A
        Description: show_unit_avg_max_min_score() function displays the average, maximum and minimum marks in that unit
        """

        unit_total = []
        with open(user_path, "r", encoding="utf-8") as file:
            values = file.readlines()

        for x in range(0, len(values)):
            data = values[x].strip().split(',', 5)
            if data[3] == "ST":  # Checking whether the user role is student
                if len(data) > 5:  # Checking if the student is enrolled in any units
                    list_tuple = eval(data[-1])
                    for item in list_tuple:
                        if item[0] == unit_code:  # Checking if the unit code matches
                            unit_total.append(item[1])  # If unit code matches then appending it to list unit_total
                else:
                    continue
            else:
                continue

        if len(unit_total) == 0:  # Checking length of unit_total to know if there are any students enrolled in unit
            print("\nThere are no students enrolled in", unit_code)

        else:  # if students are enrolled, finding average, min and max scores
            print("\nAverage score: " + str(sum(unit_total) / len(unit_total)))
            print("Maximum score: " + str(max(unit_total)))
            print("Minimum score: " + str(min(unit_total)))
