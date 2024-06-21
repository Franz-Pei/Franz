"""
StudentID:33429472
StudentName:Ziqi Pei
"""

"""
  Represents a user.

  Attributes:
  - user_id (str): The ID of the user.
  - user_name (str): The name of the user.
  - user_password (str): The password of the user.
  - user_register_time (str): The registration time of the user.
  - user_role (str): The role of the user.
  """
class User:
    def __init__(self,
                user_id = 'u_4252672890',
                user_name='username',
                user_password='password',
                user_register_time='00-00-0000_00:00:00',
                user_role='customer'
                ):
        self.user_id = user_id
        self.user_name = user_name
        self.user_password = user_password
        self.user_register_time = user_register_time
        self.user_role = user_role

    def __str__(self):
        return f"{{'user_id':'{self.user_id}','user_name':'{self.user_name}','user_password':'{self.user_password}'," \
               f"'user_register_time':'{self.user_register_time}','user_role':'{self.user_role}'}}"


