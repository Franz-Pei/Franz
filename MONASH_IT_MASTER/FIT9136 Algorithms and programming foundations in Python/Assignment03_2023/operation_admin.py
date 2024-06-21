"""
StudentID:33429472
StudentName:Ziqi Pei
"""

import csv
import time

from matplotlib import pyplot as plt

from operation_order import OrderOperation
from operation_user import UserOperation
from model_customer import Customer
from operation_customer import CustomerOperation
from opreation_product import ProductOperation

"""
Provides operations and functionality for the admin user.
"""
class AdminOperation:

    @classmethod
    def add_customer(self,user_name):
        if UserOperation.check_username_exist(user_name):
            print("This account have exist!")
            return False
        if not UserOperation.validate_username(user_name):
            print("The account number must be characters, and the length must be greater than 4!")
            return False
        cid = UserOperation.generate_unique_user_id()
        register_time = time.strftime('%d-%m-%Y_%H:%M:%S',time.localtime())
        c = Customer(user_id= cid, user_name=user_name, user_password="123456", user_register_time=register_time)
        arr = [c.user_id, c.user_name, UserOperation.encrypt_password(c.user_password), c.user_register_time, c.user_role, c.user_email,c.user_mobile]
        CustomerOperation.append_write_file(arr)
        return True

    """
            Retrieves a list of customers and their information.

            Parameters:
            - page_number (int): The page number of the customer list to retrieve.

            Returns:
            - customers (DataFrame): The list of customers.
            - page_number (int): The current page number.
            - total_page (int): The total number of pages.
    """
    @classmethod
    def show_customer(self,page_number):
        users = UserOperation.read_user_data()
        users_cus = users[users.user_role == "customer"]
        total_page = int((len(users_cus) - 1) / 10 + 1)
        return users_cus[(page_number - 1) * 10:page_number * 10],page_number,total_page

    def register_admin(self):
        admin_username = "Admin"
        if UserOperation.check_username_exist(admin_username):
            return
        id_user = UserOperation.generate_unique_user_id()
        admin_data = {
            'user_id' : id_user,
            'user_name' : 'admin_user_name',
            'user_password' :'admin123',
            'user_register_time' : time.strftime('%d-%m-%Y_%H:%M:%S',time.localtime()),
            'user_role' : 'admin',
            'user_email' : '',
            'user_mobile' : '',
        }
        with open('./data/user.txt','a') as file:
            writer = csv.DictWriter(file, fieldsname = UserOperation.HEADER)
            writer.writerow(admin_data)

    """
            Generates all statistical figures.

            This method generates a figure showing the top 10 products by sales volume.
    """
    @classmethod
    def generate_all_statistics(self):
        orders = OrderOperation.read_order_data()
        products = ProductOperation.read_products_data()
        data = {}
        for order in orders.itertuples():
            for product in products.itertuples():
                if order.pro_id == product.pro_id:
                    pro_id = str(product.pro_id)
                    if product.pro_id in data.keys():
                        data[pro_id] = data.get(pro_id) + 1
                    else:
                        data.setdefault(pro_id, 1)
        sort_data = sorted(data.items(), key=lambda kv: (kv[1], kv[0]), reverse=True)[:10]
        figure = plt.figure(figsize=(20,15))
        x = []
        y = []
        for i in sort_data:
            x.append(i[0])
            y.append(i[1])
        plt.bar(x,y)
        plt.xticks(fontsize=30)
        plt.yticks(fontsize=30)
        plt.xlabel("ProductID",fontsize=30)
        plt.ylabel("account",fontsize=30)
        plt.grid(alpha=0.5)
        plt.savefig("./data/figure/product._sales_valume.png")
        figure.show()