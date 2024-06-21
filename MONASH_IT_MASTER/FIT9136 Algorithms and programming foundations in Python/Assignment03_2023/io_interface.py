"""
StudentID:33429472
StudentName:Ziqi Pei
"""

class IOInterface:
    """
       This class represents an input/output interface for the program.
    """

    @classmethod
    def get_user_input(self, message, num_of_args):
        user_input = input(message).split()
        args = user_input[:num_of_args]
        args += [''] * (num_of_args - len(user_input))
        return args

    """
    Displays the login menu options.
    """
    @classmethod
    def login_menu(self):
        print("===== Login Menu =====")
        print("1.Initial account login")
        print("2.Login in with exist account")

    """
    Displays the main menu options.
    """

    @classmethod
    def main_menu(self):
        print("=====Login Menu ======")
        print("1.Login")
        print("2.Register")
        print("3.Quit")

    """
    Displays the customer menu options.
    """
    @classmethod
    def admin_menu(admin):
        print("=====Admin Menu ======")
        print("1.Show products")
        print("2.Add customers")
        print("3.Show customers")
        print("4.Show Orders")
        print("5.Generate test data")
        print("6.Generate all statistical figures")
        print("7.generate_discount_figure")
        print("8.Generate_likes_count_figures")
        print("9.Generate_discount_likes_count_figure")
        print("10.Delete all data")
        print("11.Delete customer using customer id")
        print("12.Delete order using order id")
        print("13.Delete product using product id")
        print("14.Logout")

    """
     Displays a list of objects based on user role and list type.

    Parameters:
    - user_role (str): The role of the user ('admin' or 'customer').
    - list_type (str): The type of list to display.
    - object_list (list): The list of objects to display.
    """
    @classmethod
    def customer_menu(slf):
        print("=====Customer Menu ======")
        print('1.Show profile')
        print('2.Update profile')
        print('3 Show products')
        print('4.Show history orders')
        print('5.Generate single customer consumption figure')
        print('6.Generate all consumption figures')
        print('7.Get product using product id')
        print('8.Logout')

    @classmethod
    def show_list(self, user_role, list_type, object_list):
        if user_role == 'admin' or (user_role == 'customer' and list_type in ["Product", "Order"]):
            print(f"====={list_type} List =====")
            objects = object_list[0]
            page_number = object_list[1]
            total_page = object_list[2]
            if page_number > total_page:
                print(f"Current page: {page_number},total pages:{total_page},当前页大于总页数了!")
            elif len(objects) == 0:
                print("No items found")
            else:
                print(f"Page{page_number}/{total_page}:")
                print(objects.head(10))
        else:
            print("You do not have permission to view this list.")

    """
     Prints an error message.

    Parameters:
    - error_source (str): The source of the error.
    - error_message (str): The error message to display.
    """
    @classmethod
    def print_error_message(cls, error_source, error_message):
        print(f"Error in {error_source}: {error_message}")

    """
     Prints a general message.

     Parameters:
     - message (str): The message to display.
     """
    @classmethod
    def print_message(cls, message):
        print(message)

    """
    Prints the target object.

    -Parameters:
    - target_object : The object to print.
    """

    @classmethod
    def print_object(cls, target_object):
        print(target_object)