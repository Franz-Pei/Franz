"""
StudentID:33429472
StudentName:Ziqi Pei
"""

import re
import time
from matplotlib import pyplot as plt


from operation_order import OrderOperation
from operation_user import UserOperation
from opreation_product import ProductOperation

"""
        Validates the format of an email address.

        Parameters:
        - user_email (str): The email address to validate.

        Returns:
        - valid (bool): True if the email address is valid, False otherwise.
"""

class CustomerOperation:
    HEADER = ['user_id','user_name','user_password','user_register_time','user_role','user_email','user_mobile']
    @classmethod
    def validate_email(self,user_email):
        pattern = r'^[\w_]+@[a-zA-Z]+\.[a-zA-Z]+$'
        if re.match(pattern,user_email):
            return True
        return False

    """
           Validates the format of a mobile phone number.

           Parameters:
           - user_mobile (str): The mobile phone number to validate.

           Returns:
           - valid (bool): True if the mobile phone number is valid, False otherwise.
    """

    @classmethod
    def validate_mobile(self,user_mobile: str):
        if len(user_mobile) == 10 and user_mobile.isdigit() and (user_mobile.startswith('03') or user_mobile.startswith('04')):
            return True
        return False
    @classmethod
    def register_customer(self,user_name, user_password,user_email,user_mobile):
        if  UserOperation.check_username_exist(user_name) and user_name == "username":
            print("This account already exists!")
            return False
        if not UserOperation.validate_username(user_name):
            print("The account number must be characters, and the length must be greater than 4!")
            return False
        if not UserOperation.validate_password(user_password):
            print("The password must be a combination of numbers and characters, and the length must be greater than or equal to 5!")
            return False
        if not self.validate_mobile(user_mobile):
            print("The format of the mobile phone number is wrong, it must start with 03 or 04, and the length must be 10!")
            return False
        if not self.validate_mobile(user_mobile):
            print("The format of the mobile phone number is wrong, it must start with 03 or 04, and the length must be 10!")
            return False
        user_id = UserOperation.generate_unique_user_id()
        register_time = time.strftime('%d-%m-%Y_%H:%M:%S',time.localtime())
        data = [user_id, user_name, UserOperation.encrypt_password(user_password), register_time, "customer", user_email, user_mobile]
        self.append_write_file(data)
        return True

    """
            Appends data to the users file.

            Parameters:
            - arr (list): The data to append to the file.
    """
    @classmethod
    def append_write_file(cls , arr):
        dataStr = ','.join(map(str,arr)) + "\n"
        with open('./data/users.txt', 'a') as file:
            file.write(dataStr)

    @classmethod
    def show_profile(self, currUser):
        print("user_id:"+str(currUser.user_name)+"\n"+"user_email:"+ str(currUser.user_email)+"\n"\
        +"user_mobile:"+str(currUser.user_mobile)+"\n"+"user_role:" + str(currUser.user_role)+"\n"\
        +"user_register_time:"+str(currUser.user_register_time)
        )


    @classmethod
    def upadate_profile(self,attribute_name, value, customer_object):
        if not UserOperation.check_username_exist(value):
            print("This count_id have exist")
            return False
        if not self.validate_email(customer_object.user_email):
            print("This email format is error!")
            return False
        if not self.validate_mobile(customer_object.user_mobile):
            print("The format of the mobile phone number is wrong, it must start with 03 or 04, and the length must be 10!")
            return False
        data = UserOperation.read_user_data()
        ds = ""
        for row in data.itertuples():
            agr = [row.user_id, row.user_name, row.user_password,\
                    row.user_register_time,row.user_role]
            if row.user_id == customer_object.user_id:
                agr.append(customer_object.user_email)
                agr.append(customer_object.user_mobile)
            else:
                agr.append(row.user_email)
                agr.append(row.user_mobile)
            ds += ','.join(map(str,agr))+"\n"

        with open('./data/users.txt','w',encoding="utf-8") as file:
            file.write(ds)
        return True

    """
            Deletes a customer.

            Parameters:
            - customer_id (str): The ID of the customer to delete.

            Returns:
            - success (bool): True if the deletion was successful, False otherwise.
    """


    @classmethod
    def delete_customer(self,customer_id):
        if not UserOperation.check_id_exist(customer_id):
            print("user_id is not exist!")
            return False
        users = UserOperation.read_user_data()
        users_str = ""
        for row in users.itertuples():
            if row.user_id != customer_id:
                arr = [row.user_id, row.user_name, row.user_password, row.user_register_time,row.user_role,row.user_email,row.user_mobile]
                users_str += ",".join(map(str, arr))+"\n"
        with open('./data/users.txt','w',encoding="utf-8") as file:
            file.write(users_str)
        return True

    @classmethod
    def get_product(self,pro_id):
        if not ProductOperation.check_product_id_exit(pro_id):
            return []
        products = ProductOperation.read_products_data()
        product = products[products.pro_id == int(pro_id)]
        return product

    """
            Generates consumption figures.

            This method generates a figure showing the consumption of each customer.
    """

    @classmethod
    def generate_consumption_figures(self):
        orders = OrderOperation.read_order_data()
        products = ProductOperation.read_products_data()
        data = {}
        for order in orders.itertuples():
            for product in products.itertuples():
                if order.pro_id == product.pro_id:
                    if order.user_id in data.keys():
                        data[order.user_id] = round(data.get(order.user_id) +float(product.pro_current_price),2)
                    else:
                        data.setdefault(order.user_id,float(product.pro_current_price))
        figure = plt.figure(figsize=(20, 15))
        x = data.keys()
        y = []
        for i in x:
            y.append(data.get(i))
        plt.bar(x, y)
        plt.xticks(fontsize=30)
        plt.yticks(fontsize=30)
        plt.xlabel("ProductID", fontsize=30)
        plt.ylabel("Consumption", fontsize=30)
        plt.grid(alpha=0.5)
        plt.savefig("./data/figure/product._sales_valume.png")
        figure.show()