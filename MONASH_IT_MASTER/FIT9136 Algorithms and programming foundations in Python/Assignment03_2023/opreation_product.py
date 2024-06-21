"""
StudentID:33429472
StudentName:Ziqi Pei
"""

from collections import Counter
import matplotlib.pyplot as plt
from model_product import Product
import pandas as pd
import re


"""
    A class that handles product-related operations.
"""
class ProductOperation:
    HEADER = ['pro_id','pro_model','pro_category','pro_name','pro_current_price','pro_raw_price',
              'pro_discount','pro_likes_count']

    @classmethod
    def read_products_data(self):
        pd.set_option('display.max_columns', None)
        pd.set_option('display.max_rows', None)
        pd.set_option('display.width', 1000)
        products = pd.read_csv("./data/products.txt", sep=",",
                               names=["pro_id", "pro_model", "pro_category", "pro_name", "pro_current_price",
                                      "pro_raw_price", "pro_discount", "pro_likes_count"], encoding='utf-8')
        return products

    """
            Retrieves a list of products based on the given filters.

            Parameters:
            - pro_name (str): The name of the product to filter by.
            - pro_category (str): The category of the product to filter by.
            - page_number (int): The page number of the results.

            Returns:
            - product_list (DataFrame): The filtered list of products.
            - page_number (int): The current page number.
            - total_page (int): The total number of pages.
    """


    @classmethod
    def get_product_list(self, pro_name="", pro_category="", page_number=1):
        products = ProductOperation.read_products_data()
        pro_filter = products[products.pro_name.str.contains(pro_name)]
        pro_filter = pro_filter[pro_filter.pro_category.str.contains(pro_category)]
        total_page = int((len(pro_filter) - 1) / 10 + 1)
        return pro_filter[(page_number - 1) * 10:page_number * 10], page_number, total_page

    @classmethod
    def extract_products_from_file(self):
        product_data_files = ["./data/product/accessories.csv", "./data/product/bags.csv",
                              "./data/product/beauty.csv", "./data/product/house.csv",
                              "./data/product/jewelry.csv", "./data/product/kids.csv",
                              "./data/product/men.csv", "./data/product/shoes.csv",
                              "./data/product/women.csv"]
        products = ""
        for data_file in product_data_files:
            data = pd.read_csv(data_file, sep=",", encoding='utf-8')
            for item in data.itertuples():
                name = item.name
                name = name.replace('\"', "")
                filter_name = name if re.search(pattern=r',', string=name) == None else '"{}"'.format(name)
                arr = [item.id, item.model, item.category, filter_name, item.current_price,
                       item.raw_price, item.discount, item.likes_count]
                arrStr = ','.join(map(str, arr))
                products += arrStr+"\n"
        with open('./data/products.txt', 'w', encoding="utf-8") as f:
            f.write(products)

    @classmethod
    def check_product_id_exit(slef, product_id):
        products = ProductOperation.read_products_data()
        for row in products.itertuples():
            if str(row.pro_id) == product_id:
                return True
        return False

    """
    Deletes a product.

    Parameters:
    - product_id (str): The product ID to delete.

     Returns:
    - success (bool): True if the product was deleted successfully, False otherwise.
    """


    @classmethod
    def delete_product(self, product_id):
        if not self.check_product_id_exit(product_id):
            print("商品id不存在！")
            return False
        products = ProductOperation.read_products_data()
        products_str = ""
        for row in products.itertuples():
            if row.pro_id != product_id:
                ["pro_id", "pro_model", "pro_category", "pro_name", "pro_current_price",
                 "pro_raw_price", "pro_discount", "pro_likes_count"]
                arr = [row.pro_id, row.pro_model, row.pro_category, row.pro_name,
                       row.pro_current_price, row.pro_raw_price, row.pro_discount,row.pro_likes_count]
                products_str += ",".join(map(str, arr))+"\n"
        with open('./data/products.csv','w',encoding="utf-8") as f:
            f.write(products_str)


    def get_product_list_by_keyword(keyword:str):
        data = ProductOperation.read_product_data()
        result = []

        for row in data:
            if keyword in row['pro_name'].lower():
                product = Product(row['pro_id'],row['pro_model'],row['pro_category'],row['pro_name'],
                                  row['pro_current_price'],row['pro_raw_price'],row['pro_discount'],
                                  row['pro_likes_count'])
                result. append(product)
            return result


    def get_product_by_id(product_id,):
        data = ProductOperation.read_product_data()
        for row in data:
            if row['pro_id'] == product_id:
                return Product(row['pro_id'],row['pro_model'],row['pro_category'],row['pro_name'],
                                  row['pro_current_price'],row['pro_raw_price'],row['pro_discount'],
                                  row['pro_likes_count'])
        return None

    """
            Generates a figure showing the total number of products per category.
    """


    def generate_category_figure(self):
        data = ProductOperation.read_product_data()
        categories = [row['pro_category'] for row in data]
        category_amount = dict(Counter(categories))
        sorted_categories = sorted(category_amount.items(), key=lambda ele:ele[1],reverse=True)
        category_names = [cate[0] for cate in sorted_categories]
        category_amounts = [cate[1] for cate in sorted_categories]
        plt.figure(figsize=(10,6))
        plt.bar(category_names,category_amounts)
        plt.xlable('Category')
        plt.ylabel('Number of category')
        plt.title('Total Number of Products per Category')
        plt.savefig('./data/figure/category_figure.png')

    @classmethod
    def generate_discount_fingure(self):
        products = ProductOperation.read_products_data()
        discount_value = [float(row.pro_discount) for row in products.itertuples()]
        less_than_30 = sum([1 for discount in discount_value if discount < 30])
        betweeen_30_and_60 = sum([1 for discount in discount_value if 30 <= discount <= 60])
        more_than_60 = sum([1 for discount in discount_value if discount > 60])
        values = [less_than_30, betweeen_30_and_60, more_than_60]
        labels = ['<30%', '30-60%', '60']
        colors = ['red', 'blue', 'black']
        plt.figure(figsize=(8, 6))
        plt.pie(values, labels=labels, colors=colors)
        plt.title('Discount distribution')
        plt.savefig('./data/figure/discount_figure.png')
        plt.show()

    """
          Generates a figure showing the distribution of product discounts.
    """


    @classmethod
    def generate_likes_count_figure(self):
        products = ProductOperation.read_products_data()
        dic = {}
        for row in products.itertuples():
            if row.pro_category not in dic:
                dic[row.pro_category] = (row.pro_likes_count)
            else:
                dic[row.pro_category] = dic[row.pro_category] + int(row.pro_likes_count)
        sorted_categories = sorted(dic.items(), key=lambda ele: ele[1], reverse=True)
        category_name = [cate[0] for cate in sorted_categories]
        likes_counts = [cate[1] for cate in sorted_categories]
        plt.figure(figsize=(10, 6))
        plt.bar(category_name, likes_counts)
        plt.xlabel('Category')
        plt.ylabel('Number of category')
        plt.title('Total Number of Products per Category')
        plt.savefig('./data/figure/category_figure.png')
        plt.show()

    """
           Generates a figure showing the relationship between discount and likes count.
    """


    @classmethod
    def generate_discount_likes_count_figure(self):
        products = ProductOperation.read_products_data()
        like_count = []
        discount = []
        for row in products.itertuples():
            like_count.append(int(row.pro_likes_count))
            discount.append(float(row.pro_likes_count))
        plt.figure(figsize=(10,6))
        plt.scatter(discount,like_count, alpha =0.5)
        plt.xlabel('Discount')
        plt.ylabel('Likes Count')
        plt.grid()
        plt.savefig('./data/figure/discount_likes_figure.png')
        plt.show()
