var Page = require('./page')

 

class customersTab extends Page {
        /**
         * define elements
         */
        get viewNewCustomers () { return $('(//a[contains(@href, "/office/customers/list")])[2]'); }
        get viewServices () { return $('(//a[contains(@href, "/office/customers/findServices")])[2]'); }

        //Old Customers View Selectors
        //************Old Customers View Selectors***************
        get fieldFirstNameOld () { return $('//div[text() = "First Name(s):"]/following-sibling::input'); }
        get fieldMIOld () { return $('//div[text() = "MI:"]/following-sibling::input'); }
        get fieldLastNameOld () { return $('//div[text() = "Last Name:"]/following-sibling::input'); }
        get fieldPrimPhoneOld () { return $('(//div[contains (@id, "PhoneNumber")])[1]//input[1]'); }
        get fieldAddressOld () { return $('//div[text() = "Address 1:"]/following-sibling::input'); }
        get fieldCityOld () { return $('//div[text() = "City:"]/following-sibling::input'); }
        get fieldZipOld () { return $('//div[text() = "Zip:"]/following-sibling::input'); }
        get fieldEmailOld () { return $('//div[text() = "Email Address:"]/following-sibling::div/input'); }
        get fieldPropertyOld () { return $('//div[contains (text(), "Property")]/following-sibling::input'); }
        get fieldStrucureOld () { return $('//div[contains (text(), "Structure")]/following-sibling::input'); }
        get fieldLinearOld () { return $('//div[contains (text(), "Linear")]/following-sibling::input'); }
        get dropdownBranchOld () { return $('(//div[@class = "bi-component combo-box-arrow"])[3]'); }
        get dropdownStateOld () { return $('(//div[@class = "bi-component combo-box-arrow"])[1]'); }
        get dropdownCountyOld () { return $('(//div[@class = "bi-component combo-box-arrow"])[2]'); }
        get buttonNextOld () { return $('//span[text() = "N"]'); }

        //***********New Customers View Selectors*************
        get newCustomerButton () { return $('//div/span[@class = "icon-plus"]'); }
        //Step 1 Selectors
        get branchDropdown () { return $('//div[text() = " Branch "]/p-dropdown'); }
        get accountTypeDropdown () { return $('//div[text() = " Account Type "]/p-dropdown'); }
        get marketingCampaignDropdown () { return $('//div[text() = " Marketing Campaign "]/p-dropdown'); }
        get channelDropdown () { return $('//div[text() = " Channel "]/p-dropdown'); }
        get fieldFirstName () { return $('//input[@formcontrolname = "firstName"]'); }
        get fieldLastName () { return $('//input[@formcontrolname = "lastName"]'); }
        get fieldAddress () { return $('//input[@formcontrolname = "address1"]'); }
        get fieldCity () { return $('//input[@formcontrolname = "city"]'); }
        get fieldPostalCode () { return $('//input[@formcontrolname = "postalCode"]'); }
        get fieldPhone () { return $('//div[text() = " Phone "]/input[@formcontrolname = "phoneNumber"]'); }
        get fieldSecondaryPhone () { return $('//div[text() = " Secondary Phone "]/input[@formcontrolname = "phoneNumber"]'); }
        get fieldEmail () { return $('//input[@formcontrolname = "email"]'); }
        get spinnerPropSqFt () { return $('//p-spinner[@formcontrolname = "propertySqFt"]//input'); }
        get spinnerStructSqFt () { return $('//p-spinner[@formcontrolname = "structureSqFt"]//input'); }
        get spinnerLinearFt () { return $('//p-spinner[@formcontrolname = "linearFt"]//input'); }
        get buttonNext () { return $('//p-button[@label = "Next"]'); }
        get loadMask () { return $('//div[@id = "loadMask"]'); }

        
        /**
         * define or overwrite page methods
         */
        
        //fills out all dropdowns for step 1 of adding a new customer
        competeStep1Dropdowns (step1Dropdown, index){
            let step1DropdownSelectors = [
                'Branch',
                'Account Type',
                'Marketing Campaign',
                'Channel',
                'State',
                'County',
                'Country'
            ];
            if(step1Dropdown != undefined){
                this.loadMask.waitForVisible(2000, true)
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).scroll();
                this.loadMask.waitForVisible(2000, true)
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).waitForVisible();
                this.loadMask.waitForVisible(2000, true)
                $(`//div[text() = " ${step1DropdownSelectors[index]} "]/p-dropdown`).click();
                this.loadMask.waitForVisible(2000, true)
                $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${index+1}]`).waitForVisible()
                $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${index+1}]`).setValue(step1Dropdown)
                //browser.keys(step1Dropdown);
                this.loadMask.waitForVisible(2000, true)
                $(`//span[text() = "${step1Dropdown}"]`).waitForVisible();
                $(`//span[text() = "${step1Dropdown}"]`).click();
            }
    
        }
        
      
  }

module.exports = new customersTab();