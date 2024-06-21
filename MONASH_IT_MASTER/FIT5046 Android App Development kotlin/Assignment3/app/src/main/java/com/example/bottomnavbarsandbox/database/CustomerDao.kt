package com.example.bottomnavbarsandbox.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import kotlinx.coroutines.flow.Flow

@Dao
interface CustomerDao{
    // CRUD Operations list:
    // - Create
    // - > register()
    // - Read
    // - > getAll() -> returns Flow<List<Customer>>
    // - > getCustomerById()
    // - > login()
    // - Update
    // - > updatePassword
    // - Delete
    // - > deleteCustomerById()

    @Insert
    fun register(customer: Customer)
    // Create a Customer object, then pass it into register like this:
    // val registeringCustomer = Customer(
    //    firstName = "John",
    //    lastName = "Doe",
    //    password = "password123",
    //    email = "john@example.com",
    //    state = "California",
    //    dateOfBirth = "2007-12-03"
    // )
    // CustomerDao.register(registeringCustomer)
    //
    // dateOfBirth format: from LocalDateTime "2007-12-03T10:15:30" to date only "2007-12-03"?
    // stored as String
    // INSERT operations do not return anything.

    @Query("SELECT * FROM Customer")
    fun getAll(): Flow<List<Customer>>

    @Query("SELECT * FROM Customer WHERE email IN (:email)")
    fun getCustomerByEmail(email: String) : Customer

    @Query("SELECT * FROM Customer WHERE customer_id IN (:customerId)")
    fun getCustomerById(customerId: String): Customer
    // For use at profile screen, call it like:
    // customerDao.getCustomerById(5)
    // you get a Customer object in return, you can get the customer's name like <customer>.firstName+<customer>.lastName

    @Query("SELECT * FROM Customer WHERE :loginEmail = email AND " +
            ":loginPassword = password LIMIT 1")
    fun getCustomerLoginWithEmailAndPassword(loginEmail: String, loginPassword: String): Customer
    // To access attributes of the returned Customer, use "Customer.email"
    // Check the returned Customer != null to see if said credentials exist in the database (=> login was successful)


    fun updatePassword(customerId: String, newPassword: String){
        val customerToUpdate = getCustomerById(customerId)
        if (customerToUpdate != null) {
            if (newPassword != null) { customerToUpdate.password = newPassword }
            updateCustomerDAO(customerToUpdate)
        }
    }
    // Change password of given Customer of the customer_id
    // You can reuse this code for changing names etc too

    @Update
    fun updateCustomerDAO(customerToChange: Customer)


    fun deleteCustomerById(customerId: String){
        val customerToDelete = getCustomerById(customerId)
        if (customerToDelete != null) {
            deleteCustomerDAO(customerToDelete)
        }
    }
    // Deletes a Customer by the given ID.

    @Delete
    fun deleteCustomerDAO(customerToDelete: Customer)
}