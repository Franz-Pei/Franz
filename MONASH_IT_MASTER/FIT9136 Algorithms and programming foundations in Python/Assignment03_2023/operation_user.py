"""
StudentID:33429472
StudentName:Ziqi Pei
"""

import pandas as pd
import re
import string

from model_admin import Admin
from model_customer import Customer

class UserOperation:
    """
    A class that handles user-related operations.
    """

    @classmethod
    def read_user_data(self):
        pd.set_option('display.max.columns',None)
        pd.set_option('display.max_rows', None)
        pd.set_option('display.width', 1000)
        users = pd.read_csv("./data/users.txt",sep=",",names=["user_id","user_name","user_password","user_register_time","user_role","user_email","user_mobile"], encoding='utf-8')
        return  users

    @classmethod
    def generate_unique_user_id(self):
        total_user_amount = len(self.read_user_data())
        return'u_'+ str(total_user_amount).zfill(10)

    """
            Encrypts a user password.

            Parameters:
            - user_password (str): The user password to encrypt.

            Returns:
            - encrypted_password (str): The encrypted password.
    """


    @classmethod
    def encrypt_password(self, user_password):
        # “admin1  ^^qwayrdoimoaidfnbh1$$
        letters = string.ascii_letters
        encrypted_password = ''
        for i, char in enumerate(user_password):
            encrypted_password += letters[i * 2: i * 2 +2] + char # 0:2 2:4 4:6 6:8
        return '^^' + encrypted_password + '$$'

    @classmethod
    def decrypt_password(self,encrypted_password):
        password = ''
        encrypted_password = encrypted_password[2: -2]
        for i in range(0,len(encrypted_password),3):
            password += encrypted_password[i+2]
        return password

    """
            Checks if a user ID exists.

            Parameters:
            - id (str): The user ID to check.

            Returns:
            - exists (bool): True if the user ID exists, False otherwise.
    """

    @classmethod
    def check_id_exist(self,id):
        data = UserOperation.read_user_data()
        for row in data.itertuples():
            if row['user_id'] == id:
                return True
        return False

    @classmethod
    def check_username_exist(self, user_name):
        if user_name in ["admin", "customer"]:
            return True
        data = UserOperation.read_user_data()
        for row in data.itertuples():
            if row.user_name == user_name:
                return True
        return False

    @classmethod
    def validate_username(self, user_name):
        return(user_name.isalpha() or user_name.replace('_','').isalpha()) and len(user_name) > 4

    @classmethod
    def validate_password(self, user_password):
        if re.search(r'[a-zA-Z]',user_password) and re.search(r'\d', user_password):
            if(len(user_password) >= 5):
                return True
        return False

    """
          Logs in a user.

          Parameters:
          - user_name (str): The username of the user.
          - user_password (str): The password of the user.

          Returns:
          - user (User): The logged-in user object.
    """


    @classmethod
    def login(self, user_name, user_password):
        if user_name == "admin":
            if user_password == "password":
                return Admin()
        elif user_name == "customer":
            if user_password == "password":
                return Customer()
        data = UserOperation.read_user_data()
        for row in data.itertuples():
            if row.user_name == user_name \
                    and UserOperation.decrypt_password(row.user_password) == user_password:
                if row.user_role == 'customer':
                    return Customer(row.user_id, row.user_name, row.user_password,
                                    row.user_register_time, row.user_role, row.user_email, row.user_mobile)
                else:
                    return Admin(row.user_id, row.user_name, row.user_password,
                                 row.user_register_time, row.user_role)





