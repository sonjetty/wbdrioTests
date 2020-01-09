var Page = require('./page')

 

class customersTab extends Page {
        /**
         * define elements
         */
        get viewNewCustomers () { return $('(//a[contains(@href, "/office/customers/list")])[2]'); }
        get viewServices () { return $('(//a[contains(@href, "/office/customers/findServices")])[2]'); }

        //Old Customers View Selectors
        //************Add New Customers View Selectors Bindows***************
        get buttonNextOld () { return $('//span[text() = "N"]'); }
        get buttonOK () { return $('//div[text() = "OK"]'); }
        get buttonSave () { return $('//div[text() = "Save"]'); }
        //Step 1 Selectors
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
        //Step 2 Selectors
        get checkboxSameAddress () { return $('//div[text() = "Same as Primary Address"]//input'); }
        get checkboxPostalMail () { return $('//div[text() = "Postal Mail"]//input'); }
        get fieldBillingContactName () { return $('//div[text() = "Name:"]/following-sibling::input'); }
        get fieldPrimaryPhone () { return $('(//div[contains (@id, "PhoneNumber")])[1]//div[2]/input[1]'); }
        get fieldSecondaryPhone () { return $('(//div[contains (@id, "PhoneNumber")])[2]//div[2]/input[1]'); }
        get radioInvoice () { return $('//div[text() = "Invoice"]/input'); }
        get radioACH () { return $('//div[text() = "ACH/EFT"]/input'); }
        get dropdownACHOwnerType () { return $('(//div[@class = "bi-component combo-box-arrow"])[3]'); }
        get dropdownAccountType () { return $('(//div[@class = "bi-component combo-box-arrow"])[4]'); }
        get fieldBank () { return $('//div[text() = "Bank:"]/following-sibling::input'); }
        get fieldACHCompanyName () { return $('(//div[text() = "Company Name:"])[1]/following-sibling::input'); }
        get fieldNameOnAccount () { return $('//div[text() = "Name on Account:"]/following-sibling::input'); }
        get fieldRoutingNumber () { return $('//div[text() = "Routing Number"]/following-sibling::input'); }
        get fieldACHAccountNumber () { return $('(//div[text() = "Account Number:"])[1]/following-sibling::input'); }
        get radioCredit () { return $('//div[text() = "Credit Card"]/input'); }
        get dropdownCreditOwnerType () { return $('(//div[@class = "bi-component combo-box-arrow"])[5]'); }
        get dropdownCardType () { return $('(//div[@class = "bi-component combo-box-arrow"])[6]'); }
        get fieldCreditCompanyName () { return $('(//div[text() = "Company Name:"])[2]/following-sibling::input'); }
        get fieldACHCompanyName () { return $('(//div[text() = "Company Name:"])[1]/following-sibling::input'); }
        get fieldCardNameFirst () { return $('//div[text() = "First:"]/following-sibling::input'); }
        get fieldCardNameMI () { return $('//div[text() = "MI:"]/following-sibling::input'); }
        get fieldCardNameLast () { return $('//div[text() = "Last:"]/following-sibling::input'); }
        get fieldCreditAccountNumber () { return $('(//div[text() = "Account Number:"])[2]/following-sibling::input'); }
        get dropdownExpireMonth () { return $('(//div[@class = "bi-component combo-box-arrow"])[7]'); }
        get dropdownExpireYear () { return $('(//div[@class = "bi-component combo-box-arrow"])[8]'); }
        get fieldCCV () { return $('//div[text() = "CCV:"]/following-sibling::input'); }
        //Step 4 Selectors
        get fieldServiceName () { return $('//div[text() = "Name"]/following-sibling::input'); }
        get butttonErrorMessage () { return $('//div[text() = "OK"]'); }
        //Step 5 Selectors
        get radioNoSchedule () { return $('//div[text() = "No Schedule"]/input'); }
        //Step 6 Selectors
        get inputSalesOffice () { return $('(//input[@class = "bi-text-field text-field"])[1]'); }
        get inputSalesRep () { return $('(//input[@class = "bi-text-field text-field"])[2]'); }
        get inputSecondSalesRep () { return ('(//input[@class = "bi-text-field text-field"])[3]'); }
        get inputMarketingCampaign () { return $('(//input[@class = "bi-text-field text-field"])[4]'); }
        get inputChannel () { return $('(//input[@class = "bi-text-field text-field"])[5]'); }
        get fieldSalesOffice () { return $('(//div[@class = "bi-label combo-box-label"])[1]'); }
        get fieldSalesRep () { return $('(//div[@class = "bi-label combo-box-label"])[2]'); }
        get fieldSecondSalesRep () { return ('(//div[@class = "bi-label combo-box-label"])[3]'); }
        get fieldMarketingCampaign () { return $('(//div[@class = "bi-label combo-box-label"])[4]'); }
        get fieldChannel () { return $('(//div[@class = "bi-label combo-box-label"])[1]'); }
        get checkboxTechCollectPayment () { return $('//div[text() = "Tech Collect First Payment"]/input'); }
        get checkboxTechCollectSignature () { return $('//div[text() = "Tech Collect Signature"]/input'); }
        get fieldInitServiceInstruct () { return $('//div[text() = "Initial Service Instructions:"]/following-sibling::textarea[1]'); }
        get fieldServiceInstruct () { return $('//div[text() = "Service Instructions:"]/following-sibling::textarea'); }
        //Step 7 Selectors
        get buttonCalendarForward () { return $('//div[@ng-click = "changeMonth(1)"]'); }
        get buttonCalendarBackward () { return $('//div[@ng-click = "changeMonth(-1)"]'); }

        //***********New Customers View Selectors Angular*************
        get newCustomerButton () { return $('//div/span[@class = "icon-plus"]'); }
        get buttonCloseAngular () { return $('//span[text() = "Close"]'); }
        get buttonNext () { return $('//p-button[@label = "Next"]'); }
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
        get loadMask () { return $('//div[@id = "loadMask"]'); }
        //Step 2 Selectors
        get buttonAddService () { return $('//span[text() = "Add Service"]'); }
        //Step 3 Selectors
        get fieldServiceNameAng () { return $('//div[text() = " Service Name "]/input'); }
        //Step 4 Selectors
        get fieldInitInstructAng () { return $('//textarea[@formcontrolname = "initServiceInstr"]'); }
        get fieldRegInstructAng () { return $('//textarea[@formcontrolname = "regServiceInstr"]'); }
        //Step 5 Selectors
        get radioNoAutoPay () { return $('//label[text() = "No Autopay / Invoice for Regular Service"]'); }
        get twoWkFollowUp () { return $('//input[@formcontrolname = "recurringPmt"]'); }
        //Step 6 Selectors
        get buttonForwardCal () { return $('//span[@class = "fa fa-angle-right"]'); }
        get buttonBackCal () { return $('//span[@class = "fa fa-angle-left"]'); }
        //Step 7 Selectors
        get checkboxTechCollectAng () { return $('//span[@class = "ui-chkbox-icon ui-clickable"]'); }
        get checkboxCustomerSign () { return $('//div[@class = "terms-checkbox"]'); }
        get fieldSignature () { return $('//brio-signature-field'); }
        get buttonFinish () { return $('//span[text() = "Finish"]'); }

        //************Primary Customers Page View Selectors Bindows***************
        get fieldAccountId () { return $('//div[text() = "Account Id:"]/following-sibling::input[1]'); }
        get buttonFind () { return $('//div[text() = "Account Id:"]/following-sibling::input[1]'); }
        get perspectTicketsAppts () { return $('//div[text() = "Tickets & Appts"]'); }
        get buttonNewAppt () { return $('//div[text() = "Tickets & Appts"]'); }
        
        /**
         * define or overwrite page methods
         */
        
        //fills out all dropdowns for step 1 of adding a new customer, this should be deprectated to use the new dropdownCompletionAng
        competeStep1DropdownsAngular (step1Dropdown, index){
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
                this.loadMask.waitForVisible(2000, true)
                $(`//span[text() = "${step1Dropdown}"]`).waitForVisible();
                $(`//span[text() = "${step1Dropdown}"]`).click();
            }
    
        }

        dropdownCompletionAng (dropdownName, dropdownIndex, selection){
            this.loadMask.waitForVisible(2000, true)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).waitForExist();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).scroll();
            this.loadMask.waitForVisible(2000, true)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).waitForVisible();
            this.loadMask.waitForVisible(2000, true)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).click();
            this.loadMask.waitForVisible(2000, true)
            $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${dropdownIndex}]`).waitForVisible()
            $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${dropdownIndex}]`).setValue(selection)
            //browser.keys(step1Dropdown);
            this.loadMask.waitForVisible(2000, true)
            $(`//span[text() = "${selection}"]`).waitForVisible();
            $(`//span[text() = "${selection}"]`).click();
        }

        serviceCategorySelector (serviceCategories){
            for (let index = 0; index < serviceCategories.length; index++) {
                $(`//div[text() = "${serviceCategories[index]}"]/input`).waitForVisible();
                $(`//div[text() = "${serviceCategories[index]}"]/input`).click();
                
            }
    
        }

        //this is currently for selecting a specific day in the following month in step 7 of creating a new customer this may be expanded later
        followingMonthDaySelector (day){
            //$('(//div[@class = "modal-dialog"])[2]').waitForVisible()
            //$('(//div[@class = "modal-dialog"])[2]').waitForVisible(5000, true)
            //$('//div[@class ="modal-backdrop fade leave leave-active"]').waitForVisible(5000, true)
            browser.pause(5000)
            this.buttonCalendarForward.waitForVisible()
            this.buttonCalendarForward.click()
            browser.pause(200)
            $(`//div[text() = "${day}"]`).waitForVisible()
            $(`//div[text() = "${day}"]`).click()
            $('(//div[@class = "modal-dialog"])[2]').waitForVisible()
            $('(//div[@class = "modal-dialog"])[2]').waitForVisible(5000, true)
    
        }

        rowSelectorBindows (tabIndex, row){
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).waitForExist();
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).scroll();
            browser.pause(600)
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).waitForVisible();
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).click();
    
        }
        
        //add further functionality for schedule and other fields when doing functional tests
        addService (day, tabIndex, row, serviceName, salesOffice, salesRep, initServiceInstruct){
            
            this.fieldServiceName.waitForVisible()
            this.fieldServiceName.setValue(serviceName)
            this.buttonNextOld.waitForVisible()
            this.buttonNextOld.click()

            this.radioNoSchedule.waitForVisible()
            this.radioNoSchedule.click()
            this.buttonNextOld.waitForVisible()
            this.buttonNextOld.click()

            this.fieldSalesOffice.waitForVisible()
            this.fieldSalesOffice.click()
            this.inputSalesOffice.waitForVisible()
            this.inputSalesOffice.setValue(salesOffice)
            this.inputSalesOffice.click()
            this.fieldSalesRep.waitForVisible()
            this.fieldSalesRep.click()
            this.inputSalesRep.waitForVisible()
            this.inputSalesRep.setValue(salesRep)
            this.inputSalesRep.click()
            this.fieldInitServiceInstruct.waitForVisible()
            this.fieldInitServiceInstruct.setValue(initServiceInstruct)
            this.buttonNextOld.waitForVisible()
            this.buttonNextOld.click()

            this.followingMonthDaySelector(day)
            this.rowSelectorBindows(tabIndex, row)
            if(this.buttonNextOld.isVisible()){
                this.buttonNextOld.waitForVisible()
                this.buttonNextOld.click()
            }else{
                this.buttonSave.waitForVisible()
                this.buttonSave.click()
            }
    
        }

    //*************************Functions for primary bindows page***********************************/
        customerSelectorById (id){
            customersTab.fieldAccountId.waitForVisible()
            customersTab.fieldAccountId.setValue(id)
            customersTab.buttonFind.waitForVisible()
            customersTab.buttonFind.click()
            $(`//td[text() = "${id}"]`).waitForVisible()
            $(`//td[text() = "${id}"]`).click()
    
        }
      
  }

module.exports = new customersTab();