"""
StudentID:33429472
StudentName:Ziqi Pei
"""

"""
Represents an admin user.

Inherits from the User class.
"""

from model_user import User

class Admin(User):
    def __init__(self,
                user_id = 'u_00000000001',
                user_name='admin',
                user_password='password',
                user_register_time='00-00-0000_00:00:00',
                user_role='admin'
                 ):
        super().__init__(user_id,user_name,user_password,user_register_time,user_role)

    """
    Initializes an Admin object.

    Parameters:
    - user_id (str): The ID of the admin user.
    - user_name (str): The name of the admin user.
    - user_password (str): The password of the admin user.
    - user_register_time (str): The registration time of the admin user.
    - user_role (str): The role of the admin user.
    """

    def __str__(self):
        return super().__str__()
