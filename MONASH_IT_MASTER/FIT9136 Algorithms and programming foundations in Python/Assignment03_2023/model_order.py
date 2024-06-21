"""
StudentID:33429472
StudentName:Ziqi Pei
"""

"""
  Represents an order.

  Attributes:
  - order_id (str): The ID of the order.
  - user_id (str): The ID of the user placing the order.
  - pro_id (str): The ID of the product in the order.
  - order_time (str): The time when the order was placed.
  """
class Order:
    def __init__(self,
                 order_id='0_33426',
                 user_id='u_7654981208',
                 pro_id='001',
                 order_time='00-00-0000_00:00:00'):
        self.order_id = order_id
        self.user_id = user_id
        self.pro_id = pro_id
        self.order_time = order_time

    def __str__(self):
        return f"{{'order_id':'{self.order_id}''user_id':{self.user_id},'pro_id':{self.pro_id},'order_time':'order_time':{self.order_time}'}}"
