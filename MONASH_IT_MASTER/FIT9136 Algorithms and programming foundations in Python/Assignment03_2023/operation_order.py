"""
StudentID:33429472
StudentName:Ziqi Pei
"""

import csv
import random
import time
import pandas as pd

from matplotlib import pyplot as plt
from opreation_product import ProductOperation
from model_customer import Customer
from operation_user import UserOperation

"""
       Reads the order data from the file.

       Returns:
       - orders (DataFrame): The order data.
"""


class OrderOperation:
    HEADER = ['order_id','user_id','pro_id','order_time']
    @classmethod
    def read_order_data(self):
        pd.set_option('display.max_columns', None)
        pd.set_option('display.max_rows', None)
        pd.set_option('display.width', 1000)
        orders = pd.read_csv("./data/orders.txt", sep=",",
                               names=["order_id", "user_id", "pro_id", "order_time"], encoding='utf-8')
        return orders

    @classmethod
    def generate_unique_order_id(self):
        total_order_amount = len(OrderOperation.read_order_data())
        return 'u_' + str(total_order_amount).zfill(5)

    """
           Creates a new order.

           Parameters:
           - customer_id (str): The ID of the customer placing the order.
           - product_id (str): The ID of the product being ordered.
           - create_time (str): The timestamp of when the order was created. Defaults to the current time.

           Returns:
           - success (bool): True if the order creation was successful, False otherwise.
    """


    @classmethod
    def create_an_order(self, customer_id, product_id,create_time=time.strftime('%d-%m-%Y_%H:%M:%S',time.localtime())):
        order_id = OrderOperation.generate_unique_order_id()
        order_data = {
            'order_id': order_id,
            'customer_id' :customer_id,
            'pro_id' : product_id,
            'create_time' : create_time
        }

        try:
            with open('./data/orders.txt','a') as file:
                writer = csv.DictWriter(file, fieldnames=OrderOperation.HEADER)
                writer.writerow(order_data)
            return True
        except IOError as e:
            print(f"Error writing to file: {e} ")
            return False

    @classmethod
    def check_order_exit(self, order_id):
        orders = OrderOperation.read_order_data()
        for row in orders.itertuples():
            if row.order_id == order_id:
                return True
        return False

    @classmethod
    def delete_order(self, order_id):
        if not self.check_order_exit(order_id):
            print("This oreder have not exist！")
            return False
        orders = OrderOperation.read_order_data()
        orders_str = ""
        for row in orders.itertuples():
            if row.order_id != order_id:
                arr = [row.order_id, row.user_id, row.pro_id, row.order_time]
                orders_str += ",".join(map(str, arr))+"\n"
        with open('./data/orders.txt','w',encoding="utf-8") as f:
            f.write(orders_str)
        return True

    """
            Retrieves a list of orders.

            Parameters:
            - customer_id (str): The ID of the customer to retrieve orders for. Defaults to "0" to retrieve all orders.
            - page_number (int): The page number to retrieve. Defaults to 1.

            Returns:
            - order_list (DataFrame): The list of orders.
            - current_page (int): The current page number.
            - total_pages (int): The total number of pages.
    """

    @classmethod
    def get_order_list(self, customer_id="0", page_number=1):
        orders = OrderOperation.read_order_data()
        if customer_id != "0":
            ord_customer = orders[orders.user_id == customer_id]
            total_page = int((len(ord_customer) - 1) / 10 + 1)
            return ord_customer[(page_number - 1) * 10 : page_number], page_number, total_page
        else:
            total_page = int((len(orders) - 1) / 10 + 1)
            return orders[(page_number - 1) * 10 : page_number], page_number, total_page

    @classmethod
    def generate_test_order_data(self):
        products = ProductOperation.read_products_data()
        for i in range(1,11):
            c_id = UserOperation.generate_unique_user_id()
            register_time = time.strftime('%d-%m-%Y_%H:%M:%S', time.localtime())
            cus = Customer(user_id=c_id, user_name="cus{}".format(i), user_register_time=register_time)
            c_arr = [cus.user_id, cus.user_name, UserOperation.encrypt_password(cus.user_password), cus.user_register_time, cus.user_role, cus.user_email, cus.user_mobile]
            self.write_file("./data/users.txt", c_arr)
            order_num = random.randint(50,200)
            for j in range(order_num):
                o_id = self.generate_unique_order_id()
                pro_id = random.choice(products['pro_id'])
                order_time = OrderOperation.generate_random_time()
                o_arr = [o_id, c_id, pro_id, order_time]
                self.write_file("./data/orders.txt", o_arr)

    @classmethod
    def write_file(self, path, arr):
        arr_str = ",".join(map(str, arr)) + "\n"
        with open(path, 'a', encoding="utf-8") as file:
            file.write(arr_str)

    @classmethod
    def generate_random_time(self):
        temp = time.strftime('%d-%m-%Y_%H:%M:%S')
        random_month = random.randint(1,12)
        final_time = '-'.join([temp.split('-')[0] , str(random_month)] + temp.split('-')[2:])
        return final_time

    @classmethod
    def generate_single_customer_consumption_figure(self, customer_id):
        orders = OrderOperation.read_order_data()
        if len(orders) == 0:
            print("You have not order, Can not seeing order")
            return
        data = {}
        orders_by_user_id = orders[orders.user_id == customer_id]
        products = ProductOperation.read_products_data()
        for order in orders_by_user_id.itertuples():
            month = int(order.order_time.split("_")[0].split("-")[1])
            for product in products.itertuples():
                if order.pro_id == product.pro_id:
                    if month in data.keys():
                        data[month] = round(data.get(month) + float(product.pro_current_price), 2)
                    else:
                        data.setdefault(month, float(product.pro_current_price))
        figure = plt.figure(figsize=(20, 15))
        x = sorted(data)
        y = []
        for i in x:
            y.append(data.get(i))
        plt.bar(x, y)
        plt.xticks(fontsize=30)
        plt.yticks(fontsize=30)
        plt.xlabel("mouth", fontsize=30)
        plt.ylabel("Consumption", fontsize=30)
        plt.grid(alpha=0.5)
        plt.savefig("./data/figure/consumption.png")
        figure.show()

    def generate_all_customers_consuption_figure(self):
        customers = OrderOperation.generate_test_order_data()[1]
        customer_ids = []
        total_consumptions = []

        for c in customers:
            OrderOperation.generate_single_customer_consumption_figure(c.user_id)
            customer_ids.append(c.user_id)
            total_consumptions.append(sum(OrderOperation.generate_single_customer_consumption_figure(c.user_id)[1]))

        plt.figure()
        plt.bar(customer_ids,total_consumptions)
        plt.xlabel("Customer IDs")
        plt.ylabel("Total Consumption")
        plt.title("All Customers Total Consumption")
        plt.savefig("all_customers_consumption.png")

    """
            Generates a figure showing the top 10 best sellers.
    """

    def generate_all_top_10_best_sellers_figure(self):
        orders = OrderOperation.generate_test_order_data()[0]
        product_sales = {}

        for order in orders:
            product_id = order.pro_id
            if product_id not in product_sales:
                product_sales[product_id] = 1
            else:
                product_sales[product_id] += 1

        sorted_products = sorted(product_sales.items(), key=lambda x: x[1], reverse=True)
        top_10_products = sorted_products[:10]
        product_ids = [ProductOperation.get_product_by_id(product_id).pro_name for product_id,_ in top_10_products]
        product_sales = [sales for _, sales in top_10_products]

        plt.figure()
        plt.bar(product_ids,product_sales)
        plt.xlabel("Product IDs")
        plt.ylabel("Sales")
        plt.title("Top 10 Best Sellers")
        plt.savefig("top_10_best_sellers.png")

    """
            Deletes all orders.

            Returns:
            - success (bool): True if the deletion was successful, False otherwise.
    """


    @classmethod
    def delete_all_orders(self):
        try:
            with open('/data/orders.txt','w') as file:
                file.write("")
            print("All orders deleted successfully!")
        except IOError as e:
            print(f"Error writing to file: {e}")
