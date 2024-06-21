"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

# Importing randint from random library
# Importing re
from random import randint
import re
import os

user_path = os.path.join("data", "user.txt")


# Creating User class
class User:

    def __init__(self, user_id="", user_name="", user_password="", user_role="", user_status="ENABLE"):
        self.user_id = self.generate_user_id()
        self.user_name = user_name
        self.user_password = self.encrypt(user_password)
        self.user_role = user_role
        self.user_status = user_status

    def __str__(self):
        return ",".join(str(x) for x in self.__dict__.values())

    def generate_user_id(self):

        """
        Input: N/A
        Output: a 5-digit number
        Description: generate_user_id() functions generates a random 5-digit number and assigns it to user_id
        """

        user_id = str(randint(10000, 99999))  # Generating a random user id and converting it to string

        with open(user_path, "r", encoding="utf-8") as file:
            # Creating while loop to generate unique user id if generated user id already exists for other user in
            # user.txt
            while user_id in file.read():
                user_id = str(randint(10000, 99999))
            return user_id

    def check_username_exist(self, user_name):

        """
        Input: user_name
        Output: Returns True if the use_name exists else returns False
        Description: check_username_exist() is a function which checks whether a user_name exists in data/user.txt file
        """

        with open(user_path, "r", encoding="utf-8") as file:
            # Using regex (regular expression) to check if username exists in user.txt
            if re.search(".*" + user_name + ",.*", file.read()):
                return True
            else:
                return False

    def encrypt(self, user_password):

        """
        Input: user_password
        Output: an encrypted password
        Description: encrypt() function encrypts the password entered by the user and stores encrypted value
        """

        str_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        str_2 = "!#$%&()*+-./:;<=>?@\^_`{|}~"
        encrypted_pass = ""

        # Creating for loop to convert each character in password
        for x in range(0, len(user_password)):
            asc = ord(user_password[x])  # Getting ASCII code of each character
            rem_1 = asc % len(str_1)  # Getting the remainder of the ASCII code by dividing by length of the str_1
            ch_1 = str_1[rem_1]
            rem_2 = x % len(str_2)
            ch_2 = str_2[rem_2]
            encrypted_pass += ch_1 + ch_2

        return "^^^" + encrypted_pass + "$$$"

    def login(self, user_name, user_password):

        """
        Input: user_name, user_password
        Output: user information, returns none if user id disabled
        Description: login() function authenticates a login attempt of user.
        """

        with open(user_path, "r", encoding="utf-8") as file:

            # Using regex (regular expression) to check if username exists in user.txt
            if re.search(".*" + user_name + ",.*", file.read()):
                file.seek(0)

                # Creating loop and iterating over file.readlines()
                # Using file.readlines() because it will five list
                for x in file.readlines():
                    data = x.strip().split(',')  # Storing the data of each user in data variable
                    if data[1] == user_name:  # Checking if username matches
                        if data[2] == self.encrypt(user_password):  # Checking if password matches
                            if data[4] == "ENABLE":  # Checking if user is enabled
                                return data
                            else:
                                print("\nUser is disabled.")
                                return None
                        else:
                            print("\nInvalid password")
                            return None

            # If user is not present in user.txt
            else:
                print("\nUser doesn't exists.")
                return None
