"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

from user import User

import re
import os

user_path = os.path.join("data", "user.txt")
unit_path = os.path.join("data", "unit.txt")


class UserAdmin(User):

    def __init__(self, user_id="", user_name="", user_password="", user_role="AD", user_status="ENABLE"):
        super().__init__(user_id, user_name, user_password, user_role, user_status)
        self.user_role = 'AD'

    def __str__(self):
        return ",".join(str(x) for x in self.__dict__.values())

    def admin_menu(self):

        """
        Input: N/A
        Output: Admin Menu
        Description: admin_menu() function displays operations that can be performed by admin
        """

        print("\nYou have the following options: ")
        print("\t1. Search user information")
        print("\t2. List all users' information")
        print("\t3. List all units' information")
        print("\t4. Enable/Disable user")
        print("\t5. Add user")
        print("\t6. Delete user")
        print("\t7. Log out\n")

    def search_user(self, user_name):

        """
        Input: user_name
        Output: Prints users' data depending upon whether user exists or not
        Description: search_user() function searches for a user in user.txt
        """

        with open(user_path, "r", encoding="utf-8") as file:

            # Using regex (regular expression) to find whether user exists or not
            found = re.search(".*" + user_name + ",.*", file.read())

            if found:  # if found then getting the value of that specific user
                file.seek(0)
                values = file.read()
                data = re.findall(".*"+user_name+".*", values)
                print("\n" + data[0])

            else:
                print("\nUser doesn't exist.")

    def list_all_users(self):

        """
        Input: N/A
        Output: Information of all users
        Description: list_all_users() function displays the information of all users in user.txt
        """

        with open(user_path, "r", encoding="utf-8") as file:

            # file.readlines() returns values in form of list
            # Iterating over list to get values
            for x in file.readlines():
                print(x)

    def list_all_units(self):

        """
        Input: N/A
        Output: Information of all units
        Description: list_all_units() function displays the information of all units in unit.txt
        """

        with open(unit_path, "r", encoding="utf-8") as file:

            # file.readlines() returns values in form of list
            # Iterating over list to get values
            for x in file.readlines():
                print(x)

    def enable_disable_user(self, user_name):

        """
        Input: user_name
        Output: N/A
        Description: enable_disable_user() function changes the status of user to ENABLE or DISABLE
        """

        with open(user_path, "r", encoding="utf-8") as file:
            info = file.read()

            # Using regex(regular expression) to find whether user exists or not
            found = re.search(".*" + user_name + ",.*", info)

            if found:  # if user exists
                file.seek(0)
                values = file.readlines()  # Getting values in list
                for x in range(0, len(values)):  # Iterating over list
                    data = values[x].strip().split(',')
                    if data[1] == user_name:  # Getting username in data[1]
                        if data[4] == "ENABLE":  # Checking users' status
                            data[4] = "DISABLE"  # if its 'ENABLE' converting to 'DISABLE'
                        else:
                            data[4] = "ENABLE"  # if its 'DISABLE' converting to 'ENABLE'
                        print("\nUsers' status hase been changed successfully !!")
                        data = ",".join(data) + "\n"
                        values[x] = data
                        break

                # Overwriting the file with new user status value
                with open(user_path, "w") as file1:
                    file1.write("".join(values))

            else:  # if user does not exist
                print("\nUser not found.")

    def add_user(self, user_obj):

        """
        Input: user_obj, an instance of UserTeacher or UserStudent class
        Output: N/A
        Description: add_user() function adds a user to system - user.txt file
        """

        # Appending new user to user.txt using the values obtained from user_obj
        with open(user_path, "a", encoding="utf-8") as file:
            file.write(user_obj.user_id + "," + user_obj.user_name + "," + user_obj.user_password + "," +
                       user_obj.user_role + "," + user_obj.user_status + "\n")
        print("\nUser has been added successfully !!")

    def delete_user(self, user_name):

        """
        Input: user_name
        Output: N/A
        Description: delete_user() function searches for a user and then deletes it
        """

        with open(user_path, "r", encoding="utf-8") as file:
            values_read = file.read()
            found = re.search(".*" + user_name + ",.*", values_read)  # Checking whether user exist
            file.seek(0)
            values = file.readlines()

        if found:  # if user exists
            for x in range(0, len(values)):  # iterating over list to find the index at which user exists
                data = values[x].strip().split(',')
                if data[1] == user_name:
                    data = ",".join(data) + "\n"
                    values.pop(x)  # removing the value out of list
                    print("\nUser", user_name, "has been deleted successfully !!")
                    break

                elif data[1] == user_name and data[3] == "TA":
                    data

                else:
                    continue

            # overwriting the file with new data without the deleted user
            with open(user_path, "w") as file:
                file.write("".join(values))

        else:
            print("\nThere is no user with name:", user_name)
