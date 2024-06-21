import re

class RegexHandler:
    def __init__(self) -> None:
         # Define the regular expression for validating email
        self.email_regex = r'^[a-zA-Z\.]+@[a-zA-Z\.]+[a-zA-Z]+$'
        # Define the regular expression for validating phone number
        self.phone_regex = r'^(\(61\)|61)04\d{8}$'

    def validate_email(self, str2check: str) -> bool:
        # Validate email format using regular expression
        return bool(re.match(self.email_regex, str2check))

    def validate_phone(self, str2check: str) -> bool:
         # Validate phone number format using regular expression
        return bool(re.match(self.phone_regex, str2check))

def prop_email_matcher(prop_fpath: str, email_fpath: str) -> str:
    """
    Match property data with email data and return the combined CSV-like string.
    """
    # Create an instance of RegexHandler
    reg = RegexHandler()

    #Read property and email_data from CSV files
    prop_data = read_data_from_csv(prop_fpath)
    email_data = read_data_from_csv(email_fpath)
    #Get the title rows of property and email data
    prop_titles = prop_data[0]
    email_titles = email_data[0]
    #Get the indices of relevant coloumns
    prop_id_index = prop_titles.index("prop_id")
    address_index = prop_titles.index("full_address")
    email_id_index = email_titles.index("prop_id")
    email_index = email_titles.index("email")
    #Get the data rows of property and email_data
    props = prop_data[1:]
    emails = email_data[1:]
    #Set the title row for the integrated data
    integration_title = [prop_titles[prop_id_index], prop_titles[address_index], email_titles[email_index]]
    #Initialize the list to store integegrated data
    integration_data = []
    #Iterate over email data and match with property data
    for email in emails:
        for prop in props:
            if email[email_id_index] == prop[prop_id_index]:
                integration_data.append([prop[prop_id_index], prop[address_index], email[email_index]])
                break

    #Set the outpot list with title row
    output = [",".join(integration_title)]

    #Iterate over integrated data, validate_email format, and generate output rows
    for data in integration_data:
        output.append(f"{data[0]},{data[1]},{data[2] if reg.validate_email(data[2]) else ''}")
    #Return the output result joined by newline characters
    return "\n".join(output)


def prop_phone_matcher(prop_fpath: str, phone_fpath: str) -> str:
    """
    Match property data with phone data and return the combined CSV-like string.
    """
    #Create an instance of RegexHandler
    reg = RegexHandler()

    #Read property and phone data rom CSV files
    prop_data = read_data_from_csv(prop_fpath)
    email_data = read_data_from_csv(phone_fpath)
    # Get the title rows of property and phone data
    prop_titles = prop_data[0]
    email_titles = email_data[0]
    #Get the indices of relvant columns
    prop_id_index = prop_titles.index("prop_id")
    address_index = prop_titles.index("full_address")
    email_id_index = email_titles.index("prop_id")
    phone_index = email_titles.index("phone")
    #Get the data rows of property and phone data
    props = prop_data[1:]
    emails = email_data[1:]
    #Set the title row for the integegrated data
    integration_title = [prop_titles[prop_id_index], prop_titles[address_index], email_titles[phone_index]]
    #Initial the list to store integrated delattr
    integration_data = []
    #iterate over phone data and match with property data
    for email in emails:
        for prop in props:
            if email[email_id_index] == prop[prop_id_index]:
                integration_data.append([prop[prop_id_index], prop[address_index], email[phone_index]])
                break

    # Set the output list with title row
    output = [",".join(integration_title)]

    #Iterate over integrated data, validate  phone format , and generate output rows
    for data in integration_data:
        output.append(f"{data[0]},{data[1]},{data[2] if reg.validate_phone(data[2]) else ''}")
    #Return the output result joined by newline characters
    return "\n".join(output)


def merge_prop_email_phone(prop_fpath: str, email_phone_fpath: str) -> str:
    """
    Merge property data with email and phone data and return the combined CSV-like string.
    """
    #Create an instance of RegexHandler
    reg = RegexHandler()

    #Read property and email/Phone data from CSV files
    prop_data =  read_data_from_csv(prop_fpath)
    email_data =  read_data_from_csv(email_phone_fpath)
    #Get the title rows of property and email/phone data
    prop_titles = prop_data[0]
    email_titles = email_data[0]
    #Get the indices of relevant colums
    prop_id_index = prop_titles.index("prop_id")
    address_index = prop_titles.index("full_address")
    email_id_index = email_titles.index("prop_id")
    email_index = email_titles.index("email")
    email_phone_index = email_titles.index("phone")
    #Get the data rows of property and email_data
    props = prop_data[1:]
    emails = email_data[1:]
    #set the title row for the integrated data
    integration_title = [prop_titles[prop_id_index], prop_titles[address_index], email_titles[email_index], email_titles[email_phone_index]]
    #Initialize the list to store integration data
    integration_data = []
    #Iterate over email/Phone data and match with property data
    for email in emails:
        for prop in props:
            if email[email_id_index] == prop[prop_id_index]:
                integration_data.append([prop[prop_id_index], prop[address_index], email[email_index], email[email_phone_index]])
                break
            
    #Ser the output list with title row
    output = [",".join(integration_title)]

    #Iterate over integration data, validate email and phone formats, and genertae output rows
    for data in integration_data:
        if reg.validate_email(data[2]) or reg.validate_phone(data[3]):
            output.append(f"{data[0]},{data[1]},{data[2] if reg.validate_email(data[2]) else ''},{data[3] if reg.validate_phone(data[3]) else ''}")
    #Return the output result joined by newline characters
    return "\n".join(output)


def read_data_from_csv(file_path: str) -> list:
    """
    Read a CSV file and return its contents as a list of rows.
    """
    with open(file_path, 'r+') as csv_file:
        #Read all lines from the csv file
        data_lines = csv_file.readlines()
        #Split each line into a list of values
        return [line.strip().split(',') for line in data_lines]


if __name__ == "__main__":
    print("Task 1 results:")
    print(prop_email_matcher("sample_properties.csv", "sample_properties_email_phone.csv"))
    print("="*50)
    print("Task 2 results:")
    print(prop_phone_matcher("sample_properties.csv", "sample_properties_email_phone.csv"))
    print("="*50)
    print("Task 3 results:")
    print(merge_prop_email_phone("sample_properties.csv", "sample_properties_email_phone.csv"))
