"""
StudentID:33429472
StudentName:Ziqi Pei
"""

"""
   Represents a product.

   Attributes:
   - pro_id (str): The ID of the product.
   - pro_model (str): The model of the product.
   - pro_category (str): The category of the product.
   - pro_name (str): The name of the product.
   - pro_current_price (float): The current price of the product.
   - pro_raw_price (float): The raw price of the product.
   - pro_discount (float): The discount applied to the product.
   - pro_likes_count (int): The number of likes the product has received.
   """
class Product:
    def __init__(self,
                    pro_id="p_535267891",
                    pro_model='default_model',
                    pro_category='default_category',
                    pro_name='default_product',
                    pro_current_price=0.0,
                    pro_raw_price=0.0,
                    pro_discount=0.0,
                    pro_likes_count=0):
        self.pro_id = pro_id
        self.pro_model = pro_model
        self.pro_category = pro_category
        self.pro_name = pro_name
        self.pro_current_price = pro_current_price
        self.pro_raw_price = pro_raw_price
        self.pro_discount = pro_discount
        self.pro_likes_count = pro_likes_count

    def __str__(self):
        return f"{{'pro_id':'{self.pro_id}','pro_model:'{self.pro_model},'pro_category':{self.pro_category}',"\
               f"'pro_name':'{self.pro_name}','pro_current_price':'{self.pro_current_price}',"\
               f"'pro_raw_price':'{self.pro_raw_price}','pro_discount':{self.pro_discount},'pro_likes_count':':'{self.pro_likes_count}'}}"