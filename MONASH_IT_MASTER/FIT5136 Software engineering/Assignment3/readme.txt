Read me:
This project build in IntelliJ IDEAWhen First Step Should Git pull Git Rup
https://git.infotech.monash.edu/fit5136/fit5136-s1-2024/thursday-2-4-1.git
Then Should Download SDK， The problem will be fixed then run, Supermarket will print
Supermarket System
This is a command-line application that simulates a supermarket system. It allows merchants (admins) to manage products, including viewing, adding, and deleting products.
Getting Started
To run the application, ensure you have Java installed on your system. Then, navigate to the project directory and run the application.
Usage
Upon starting the application, you will be presented with the following options:
Customer login (Not implemented)
Merchant login
Exit
Merchant Login
As a merchant (admin), you can log in using the following credentials:
Username: admin@merchant.monash.edu
Password: 12345678
Once logged in, you will have the following options:
View goods
Return to the previous step
View Goods
This option displays a list of all available products in the supermarket, along with their IDs, names, and prices.
Add Goods
After viewing the goods, you can choose to add a new product by providing the product name and price.
Delete Goods
You can also delete an existing product by providing its ID.
----------Welcome to the supermarket system.----------
1:Customer login
2:Merchant login
3:Exit
Please enter your choice:
2
Please enter a user name(Enter your email address):
admin@merchant.monash.edu
Please enter a user Password:
12345678
Login is in progress.
login success.
----------Welcome to the supermarket system.----------
1:View goods
2:Return to the previous step
Please enter your choice:
1
Id Name Price
7 water 3
8 cat 60
9 Voost Drink20
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
1
Please enter a Product name:
ESSE Menthol
Please enter a Product price:
22
AddProducts is in progress.
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:Return to the previous step
Please enter your choice:
1
Id Name Price
7 water 3
8 cat 60
9 Voost Drink20
10 ESSE Menthol22
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
2
Please enter a Product Id:
9
DelProducts is in progress.
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:Return to the previous step
Please enter your choice:
1
Id Name Price
7 water 3
8 cat 60
10 ESSE Menthol22
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
2
Please enter a Product Id:
8
DelProducts is in progress.
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:Return to the previous step
Please enter your choice:
1
Id Name Price
7 water 3
10 ESSE Menthol22
----------Welcome to the supermarket admin system.----------
1:Add goods
2:Del goods
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:Return to the previous step
Please enter your choice:
2
3:Return to the previous step
----------Welcome to the supermarket system.----------
1:Customer login
2:Merchant login
3:Exit
Please enter your choice:
1

 First, you can enter option 1 for customer login. 
You will be asked to provide your user name and your password. 
Username:member@student.monash.edu
Password: Monash1234
When you successfully log in, you will also be provided with 3 options: 
1view products,
2. view shopping cart 
3. return to the previous interface. When you choose input option 1, the system will display a product list, which includes 
product id, name and price.
We have two options on this page. 
1First, you can add the items in the list to the shopping cart by entering the item ID.
2. Another option is to return to the previous page. 
When you choose to enter the product ID, the product can be successfully added to the shopping cart. You can also continue to enter other product IDs to add or you can return to the main interface by entering option 2. 
On the main interface, you can view the items you just added to the shopping cart by entering option 2. When you enter this interface you can see the list of items you added to the shopping cart, and you can continue checkout by selecting option 2.
 At the checkout interface we will ask you to provide your username,
1.card number (16 digits) 
2. cvv (3 digits).
 After you provide this information we will display settlement success and display the total price.

----------Welcome to the supermarket system.----------
1:Customer login
2:Merchant login
3:Exit
Please enter your choice:
1
Please enter a user name(Enter your email address):
member@student.monash.edu
Please enter a user Password:
Monash1234
 login success.
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
1
Id        Name      Price     
7         water     3         
10        ESSE Menthol22        
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
1
1:Enter the goods Id
2
Your choice goods doesn't exist.
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
2
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
1
Id        Name      Price     
7         water     3         
10        ESSE Menthol22        
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
1
1:Enter the goods Id
10
Add goods to the shopping cart
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
2
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
2
Id        Name      Price     
10        ESSE Menthol22        
----------Welcome to the supermarket system.----------
1:View shoppingCart goods
2:checkout
3:Return to the previous step
Please enter your choice:
2
checking out.
Please enter user name(Card holder name):
Jeck
Please enter card number(16 digits):
1234123412341234
Please enter card cvv(3 digits):
277
Settle success , Order amount : $22
----------Welcome to the supermarket system.----------
1:View shoppingCart goods
2:checkout
3:Return to the previous step
Please enter your choice:
1
Perform view goods operation
Id        Name      Price     
----------Welcome to the supermarket system.----------
1:View shoppingCart goods
2:checkout
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
1
Id        Name      Price     
7         water     3         
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
1
1:Enter the goods Id
7
Add goods to the shopping cart
----------Welcome to the supermarket admin system.----------
1:Add goods to the shopping cart
2:Return to the previous step
Please enter your choice:
2
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
2
Id        Name      Price     
7         water     3         
----------Welcome to the supermarket system.----------
1:View shoppingCart goods
2:checkout
3:Return to the previous step
Please enter your choice:
2
checking out.
Please enter user name(Card holder name):
Jeck
Please enter card number(16 digits):
123412341234
card number invalid.Please reenter card number:
277
card number invalid.Please reenter card number:
123412341234
card number invalid.Please reenter card number:
1234123412341234
Please enter card cvv(3 digits):
277
Settle success , Order amount : $3
----------Welcome to the supermarket system.----------
1:View shoppingCart goods
2:checkout
3:Return to the previous step
Please enter your choice:
3
Return to the previous step
----------Welcome to the supermarket system.----------
1:View goods
2:View ShoppingCart
3:Return to the previous step
Please enter your choice:
3
3:Return to the previous step
----------Welcome to the supermarket system.----------
1:Customer login
2:Merchant login
3:Exit
Please enter your choice:
3
Exit program
