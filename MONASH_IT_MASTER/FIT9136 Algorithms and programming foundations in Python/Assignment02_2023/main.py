"""
Group Number: 18
Members Name: 1. Phakhanan Rataphaibul ID 33654735
              2. Dhruvi Thakkar ID 33322910
              3. Ziqi Pei ID 33429472
"""

import os.path
import random
import re
from os import system, name

from user import User
from unit import Unit
from user_student import UserStudent
from user_admin import UserAdmin
from user_teacher import UserTeacher

user_path = os.path.join("data", "user.txt")
unit_path = os.path.join("data", "unit.txt")


def main():
    generate_test_data()

    while True:
        display()

        selection = input("Please enter your selection: ")

        if selection.strip() == "1":

            userName = input("\nPlease enter your username: ")
            userPassword = input("\nPlease enter your password: ")

            user1 = User(user_name=userName.strip(), user_password=userPassword.strip())

            user_data = user1.login(user_name=userName.strip(), user_password=userPassword.strip())

            if user_data is None:
                print("\nPlease enter valid details. \n")

            else:

                if user_data[3] == "AD":
                    ua = UserAdmin(user_data[0], user_data[1], user_data[2], user_data[3], user_data[4])

                    while True:
                        main_menu(user=ua)

                        ad_menu = input("Please enter your selection: ")

                        if ad_menu.strip() == "1":
                            print("\nUsername is case-sensitive.")
                            search = input("\nPlease enter the username: ")
                            ua.search_user(search.strip())

                        elif ad_menu.strip() == "2":
                            print("\n")
                            ua.list_all_users()

                        elif ad_menu.strip() == "3":
                            print("\n")
                            ua.list_all_units()

                        elif ad_menu.strip() == "4":
                            search = input("\nPlease enter the username: ")
                            ua.enable_disable_user(search.strip())

                        elif ad_menu.strip() == "5":

                            while True:

                                uname = input("\nPlease enter the username: ")

                                with open(user_path, "r", encoding="utf-8") as file:
                                    info = file.read()

                                found = re.search(".*" + uname.strip() + ",.*", info)

                                if found:
                                    print("\nUser name is already taken. Please select a different user name.")
                                else:
                                    break

                            upassword = input("\nPLease enter the password: ")

                            while True:
                                urole = input("\nPlease enter user's role: ")

                                if urole.strip().upper() == "TA" or urole.strip().upper() == "ST":
                                    break
                                else:
                                    print("\nUser can have the following roles: \n")
                                    print("\tEnter 'TA' for teacher")
                                    print("\tEnter 'ST' for Student \n")

                            if urole.strip().upper() == "TA":
                                user_obj = UserTeacher(
                                    user_name=uname.strip(),
                                    user_password=upassword,
                                    user_role=urole
                                )
                                ua.add_user(user_obj=user_obj)
                            elif urole.strip().upper() == "ST":
                                user_obj = UserStudent(
                                    user_name=uname.strip(),
                                    user_password=upassword,
                                    user_role=urole
                                )
                                ua.add_user(user_obj=user_obj)
                            else:
                                print("\nWrong Information.")
                                print("\nPlease enter 'TA' for teacher or 'ST' for student.")

                        elif ad_menu.strip() == "6":
                            search = input("\nPlease enter the username: ")
                            ua.delete_user(search.strip())

                        elif ad_menu.strip() == "7":
                            print("\nYou have logged out successfully!")
                            break

                        else:
                            print("\nPlease enter a valid input from '1' to '7'")

                elif user_data[3] == "TA":
                    ut = UserTeacher(user_data[0], user_data[1], user_data[2], user_data[3], user_data[4])

                    while True:
                        main_menu(user=ut)

                        ut_menu = input("Please enter your selection: ")

                        if ut_menu.strip() == "1":
                            ut.list_teach_units()

                        elif ut_menu.strip() == "2":

                            while True:
                                u_code = input("\nPlease enter the code of the unit: ")

                                with open(unit_path, "r", encoding="utf-8") as file:
                                    info = file.read()
                                found = re.search(".*" + u_code.strip() + ",.*", info)
                                if found:
                                    print("\nThe is already a unit with unit code:", u_code)
                                    print("\nPlease enter different unit code.")
                                else:
                                    break

                            while True:
                                u_name = input("\nPlease enter the name of the unit: ")

                                with open(unit_path, "r", encoding="utf-8") as file:
                                    info = file.read()
                                found = re.search(".*" + u_name.strip() + ",.*", info)
                                if found:
                                    print("\nThe is already a unit with unit code:", u_name)
                                    print("\nPlease enter different unit name.")
                                else:
                                    break

                            unit_obj = Unit(
                                unit_code=u_code.strip(),
                                unit_name=u_name.strip(),
                            )

                            ut.add_teach_unit(unit_obj=unit_obj)

                        elif ut_menu.strip() == "3":
                            u_code = input("\nPlease enter the code of the unit: ")
                            ut.delete_teach_unit(unit_code=u_code.strip())

                        elif ut_menu.strip() == "4":

                            while True:
                                u_code = input("\nPlease enter the code of the unit: ")

                                with open(unit_path, "r", encoding="utf-8") as file:
                                    info = file.read()

                                found = re.search(".*" + u_code.strip() + ",.*", info)

                                if found:
                                    print("\n")
                                    ut.list_enrol_students(unit_code=u_code.strip())
                                    break
                                else:
                                    print("\nThere is no unit with unit code:", u_code)

                        elif ut_menu.strip() == "5":

                            while True:

                                u_code = input("\nPlease enter the code of the unit: ")
                                with open(unit_path, "r", encoding="utf-8") as file:
                                    info = file.read()

                                found = re.search(".*" + u_code.strip() + ",.*", info)

                                if found:
                                    ut.show_unit_avg_max_min_score(u_code.strip())
                                    break
                                else:
                                    print("\nThere is no unit with unit code:", u_code)

                        elif ut_menu.strip() == "6":
                            print("\nYou have logged out successfully!")
                            break

                        else:
                            print("\nPlease enter a valid input from '1' to '6'")

                elif user_data[3] == "ST":
                    us = UserStudent(user_data[0], user_data[1], user_data[2], user_data[3], user_data[4])

                    while True:
                        main_menu(user=us)

                        us_menu = input("Please enter your selection: ")

                        if us_menu.strip() == "1":
                            us.list_availble_units()

                        elif us_menu.strip() == "2":
                            us.list_enrolled_units()

                        elif us_menu.strip() == "3":
                            enrol_unit = input("\nPlease enter the code of unit you want to enrol in: ")
                            us.enrol_a_unit(enrol_unit.strip())

                        elif us_menu.strip() == "4":
                            drop_unit = input("\nPlease enter the code of unit you want to drop: ")
                            us.drop_a_unit(drop_unit.strip())

                        elif us_menu.strip() == "5":
                            check_score = input("\nPlease enter the unit code to check score: ")
                            if len(check_score.strip()) == 7 or len(check_score.strip()) == 0:
                                us.check_score(check_score.strip())
                            else:
                                print("\nLength of unit code must be equal to 7 characters.")

                        elif us_menu.strip() == "6":
                            gen_score = input("\nPlease enter the unit_code to generate score: ")

                            if len(gen_score) == 7:
                                us.generate_score(gen_score.strip())
                            else:
                                print("\nLength of unit code must be equal to 7 characters.")

                        elif us_menu.strip() == "7":
                            print("\nYou have logged out successfully!")
                            break

                        else:
                            print("\nPlease enter a valid input from '1' to '7'")

        elif selection.strip() == "2":
            print("\nYou have successfully exited the STUDENT INFORMATION MANAGEMENT SYSTEM !!!")
            break

        else:
            print("\nInvalid Input. Try again with a valid input.")
            print("\nEnter '1' for Login or '2' for Exit.")


def display():
    print("\nWelcome to the STUDENT INFORMATION MANAGEMENT SYSTEM !!! \n")
    print("\t 1. Login to the application")
    print("\t 2. Exit the application \n")


def main_menu(user):
    if user.user_role == "AD":
        user.admin_menu()

    elif user.user_role == "TA":
        user.teacher_menu()

    elif user.user_role == "ST":
        user.student_menu()


def generate_test_data():
    open(user_path, "w").close()
    Admin = UserAdmin(user_name="admin", user_password="password")
    Admin.add_user(Admin)

    Teacher1 = UserTeacher(user_name="Chaya", user_password="qwerty")
    Admin.add_user(Teacher1)

    Teacher2 = UserTeacher(user_name="Rebekah", user_password="savings30")
    Admin.add_user(Teacher2)

    Teacher3 = UserTeacher(user_name="Jeremy", user_password="dogcat&66")
    Admin.add_user(Teacher3)

    students = [
        UserStudent(user_name="faith", user_password="Hello11"),
        UserStudent(user_name="hope", user_password="Michael14"),
        UserStudent(user_name="landon", user_password="kirby_776"),
        UserStudent(user_name="lizzie", user_password="saltzman12"),
        UserStudent(user_name="milton", user_password="greasly"),
        UserStudent(user_name="caroline", user_password="2468Hirain"),
        UserStudent(user_name="stefan", user_password="Salvatore!"),
        UserStudent(user_name="emily", user_password="Butterfly"),
        UserStudent(user_name="josie", user_password="marshall"),
        UserStudent(user_name="cleo", user_password="petra5678")
    ]

    for student_data in students:
        Admin.add_user(student_data)

    open(unit_path, "w").close()

    unit1 = Unit(unit_code="FIT9136", unit_name="Python", unit_capacity=random.randrange(10, 101, 5))

    unit2 = Unit(unit_code="EPM5029", unit_name="Java Basics", unit_capacity=random.randrange(10, 101, 5))

    unit3 = Unit(unit_code="ETC5510", unit_name="C Programming", unit_capacity=random.randrange(10, 101, 5))

    Teacher1.add_teach_unit(unit1)
    Teacher2.add_teach_unit(unit2)
    Teacher3.add_teach_unit(unit3)

    for student_data in students:
        student_data.enrol_a_unit(unit_code=unit1.unit_code)
        student_data.enrol_a_unit(unit_code=unit2.unit_code)
        student_data.enrol_a_unit(unit_code=unit3.unit_code)

    from os import system, name

    if name == "nt":
        _ = system("cls")

    else:
        _ = system("clear")


if __name__ == "__main__":
    main()
