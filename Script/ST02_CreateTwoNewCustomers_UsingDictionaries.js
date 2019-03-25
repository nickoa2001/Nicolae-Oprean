//USEUNIT CommonReporting
//USEUNIT CommonData
//USEUNIT Customers
//USEUNIT CustomersData

function ST02_CreateTwoNewCustomers_UsingDictionaries()
{
  //Log_InitTestCase("ST01_CreateNewCustomer", "Create a new Customer");
  Log_CurrentStep("Step 1: Select new Customers tab and click on Create New Button");
  
  CustomersData_UpdateDictionaryFromXML("ST02_CreateTwoNewCustomers_UsingDictionaries", "FirstCustomer")
  Customers_ClickButtonNew();
  Customers_FillCustomerName(CustomersData_GetParameter("Name"));
  Customers_FillCustomerSurname(CustomersData_GetParameter("Surname"));
  Customers_FillCustomerPhoneNumber(CustomersData_GetParameter("Phone"));
  Customers_FillCustomerEmail(CustomersData_GetParameter("Email"));
  Customers_FillCustomerCity(CustomersData_GetParameter("City"));
  //Customers_FillCustomerStreet(CustomersData_GetParameter("Street"));
  Customers_ClickButtonSave();
  
  Log_CurrentStep("Step 2: Select new Customers tab and click on Create New Button");
  CustomersData_UpdateDictionaryFromXML("ST02_CreateTwoNewCustomers_UsingDictionaries", "SecondCustomer");
  Customers_ClickButtonNew();
  Customers_FillCustomerName(CustomersData_GetParameter("Name"));
  Customers_FillCustomerSurname(CustomersData_GetParameter("Surname"));
  Customers_FillCustomerPhoneNumber(CustomersData_GetParameter("Phone"));
  Customers_FillCustomerEmail(CustomersData_GetParameter("Email"));
  Customers_FillCustomerCity(CustomersData_GetParameter("City"));
  //Customers_FillCustomerStreet(CustomersData_GetParameter("Street"));
  Customers_ClickButtonSave();


  //CommonReporting.Log_CurrentTestCaseStatusPass();
}