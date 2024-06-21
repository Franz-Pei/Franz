"""
StudentID:33429472
StudentName:Ziqi Pei
"""

from model_customer import Customer
from operation_order import OrderOperation
from opreation_product import ProductOperation
from operation_customer import CustomerOperation
from operation_admin import AdminOperation
from io_interface import IOInterface
from operation_user import UserOperation

currentUser = {}

"""
-Controls the login process and menu options for the user.
"""

def login_control():
    global currentUser
    while True:
        if currentUser == {}:
            IOInterface.main_menu()
            option = IOInterface.get_user_input("Enter your choice: ", 1)[0]
            if option == '1':
                IOInterface.login_menu()
                type = IOInterface.get_user_input("Enter your choice: ",1)[0]
                if type == '1':
                    currentUser = Customer()
                    IOInterface.print_message("Login successful.")
                elif type == '2':
                    username = IOInterface.get_user_input("Enter username: ",1)[0]
                    password = IOInterface.get_user_input("Enter password: ",1)[0]
                    user = UserOperation.login(username,password)
                    if user:
                        currentUser = user
                        IOInterface.print_message("Login successful.")
                    else:
                        IOInterface.print_error_message("logi_control","Login failed")
                else:
                    print("Input error,Please re-enter again")
            elif option == '2':
                username = IOInterface.get_user_input("Enter username:",1)[0]
                password = IOInterface.get_user_input("Enter password: ",1)[0]
                email = IOInterface.get_user_input("Enter email: ", 1)[0]
                mobile = IOInterface.get_user_input("Enter mobile: ", 1)[0]
                register_result = CustomerOperation.register_customer(user_name=username,user_password=password,user_email=email,user_mobile=mobile)

                if register_result:
                    IOInterface.print_message("Registeration successful. Please login.")
                else:
                    IOInterface.print_error_message("login_contoral", "Registeration failed")
            elif option == '3':
                IOInterface.print_message("Exiting the system.Goodbye!")
                break
            else:
                IOInterface.print_error_message("login_control","Invalid option chosen")
        else:
            if currentUser.user_role == 'admin':
                admin_control()
            else:
                customer_control()

"""
Checks if the current user is authenticated with the given role.

Parameters:
- role (str): The role to check against.

Returns:
- authenticated (bool): True if the user is authenticated, False otherwise.
"""
def isAuth(role):
    if currentUser == {}:
        print("You have not logged in, please log in first!")
        return False
    elif currentUser.user_role != role:
        print("Customers can log in, permission error!")
        return False
    return True

"""
 Controls the menu options and actions for the customer user.
 """

def customer_control():
    global currentUser
    while True:
        if not isAuth("customer"):
            break
        IOInterface.customer_menu()
        option = input("Enter your choice: ")
        if option == '1':
            CustomerOperation.show_profile(currentUser)
            enter()
        elif option == '2':
            email = input("Enter email:")
            mobile = input("Enter mobile: ")
            currentUser.user_email = email
            currentUser.user_mobile = mobile
            CustomerOperation.upadate_profile("user_name",currentUser.user_name, currentUser)
            enter()
        elif option == '3':
            option_1()
        elif option == '4':
            page_number = input("Enter page_number:")
            IOInterface.show_list(currentUser.user_role,'Order',OrderOperation.get_order_list(page_number=int(page_number)))
            enter()
        elif option == '5':
            OrderOperation.generate_single_customer_consumption_figure(currentUser.user_id)
            enter()
        elif option == '6':
            CustomerOperation.generate_consumption_figures()
            enter()
        elif option == '7':
            pro_id = input('Please enter the product id you want to get: ')
            product = CustomerOperation.get_product(pro_id)
            if len(product) == 0:
                print("Product_id is not exist!")
                break
            IOInterface.print_object(product)
            enter()
        elif option == '8':
            currentUser = {}
            print("Logging out...")
            break
        else:
            print("Invalid option, please try again.")

"""
Controls the menu options and actions for the admin user.
"""
def admin_control():
    global currentUser
    while True:
        if not isAuth("admin"):
            break
        IOInterface.admin_menu()
        option = input("Please press enter to continue...")
        if option == "1":
            option_1()
        elif option == '2':
            user_name = input("Enter username:")
            res = AdminOperation.add_customer(user_name)
            if res:
                IOInterface.print_message("Add consumer successfully!")
            else:
                IOInterface.print_error_message("AdminOperation","Failed to add consumer!")
        elif option == '3':
            page_number = input ("Enter page_number:")
            IOInterface.show_list(currentUser.user_role,'Customer',AdminOperation.show_customer(int(page_number)))
            enter()
        elif option == '4':
            page_number =input("Enter page_number:")
            IOInterface.show_list(currentUser.user_role,'Order',OrderOperation.get_order_list(page_number=int(page_number)))
            enter()
        elif option == '5':
            OrderOperation.generate_test_order_data()
            print("Test data generated successfully.")
            enter()
        elif option == '6':
            AdminOperation.generate_all_statistics()
            print("All statical figures generated successfully.")
            enter()
        elif option == '7':
            ProductOperation.generate_discount_fingure()
            print("All statical figures generated successfully.")
            enter()
        elif option == '8':
            ProductOperation.generate_likes_count_figure()
            print("All statical figures generated successfully.")
            enter()
        elif option == '9':
            ProductOperation.generate_discount_likes_count_figure()
            print("All statical figures generated successfully.")
            enter()
        elif option =='10':
            OrderOperation.delete_all_orders()
            enter()
        elif option == '11':
            customer_id = input("Enter the customer ID to delete:")
            CustomerOperation.delete_customer(customer_id)
            print(f"Customer with ID {customer_id} deleted successfully.")
            enter()
        elif option =='12':
            order_id = input("Enter the order ID to delete:")
            OrderOperation.delete_order(order_id)
            print(f"Order with ID {order_id} deleted successfully.")
            enter()
        elif option == '13':
            product_id = input("Enter the product ID to delete: ")
            ProductOperation.delete_product(product_id)
            print(f"Product with ID{product_id} deleted successfully.")
            enter()
        elif option == '14':
            currentUser = {}
            print("Logging out...")
            break
        else:
            print("Invalid option, please try again")



def enter():
    while True:
        enter = input("Please enter to continue...")
        if enter == "":
            break

"""
Handles the actions for option 1 in the menu.
"""

def option_1():
    pro_name = input("Enter pro_name:")
    while True:
        pro_category = input(
            "Enter pro_category(accessories,bags,beauty,house,jewelry,kids,men,shoes,women):\n")
        if pro_category in ["accessories","bags","beauty","house","jewelry","kids","men","shoes",
                            "women"]:
            break
        else:
            print("Input error(This category is only type to: accessories,bags,beauty,house,jewelry,kids,men,shoes,women),please reinput again")
    page_number = input("Enter page_number:")
    IOInterface.show_list(currentUser.user_role, 'Product',
                          ProductOperation.get_product_list(pro_name, pro_category, int(page_number)))
    enter()

def main():
    products = ProductOperation.read_products_data()
    if len(products) == 0:
        ProductOperation.extract_products_from_file()
    login_control()

main()
