"""
StudentID:33429472
StudentName:Ziqi Pei
"""

from model_user import User

"""
Represents a customer user.

Inherits from the User class.
"""

class Customer(User):
    def __init__(self,
                 user_id='u_021201220',
                 user_name='customer',
                 user_password='password',
                 user_register_time='00-00-0000_00:00:00',
                 user_role='customer',
                 user_email='123@gamil.com',
                 user_mobile="0312345678"):
        super().__init__(user_id, user_name, user_password, user_register_time, user_role)
        self.user_email = user_email
        self.user_mobile = user_mobile

    """
     Initializes a Customer object.

     Parameters:
            - user_id (str): The ID of the customer user.
            - user_name (str): The name of the customer user.
            - user_password (str): The password of the customer user.
            - user_register_time (str): The registration time of the customer user.
            - user_role (str): The role of the customer user.
            - user_email (str): The email of the customer user.
            - user_mobile (str): The mobile number of the customer user.
    """

    def __str__(self):
        return f"{{'user_id':'{self.user_id}','user_name':'{self.user_name}','user_password':'{self.user_password}'," \
               f"'user_register_time':'{self.user_register_time}','user_role': '{self.user_role}'," \
               f"'user_email':'{self.user_email}','user_mobile':'{self.user_mobile}'}}"
