var Page = require('./page')

 

class customersTab extends Page {
        /**
         * define elements
         */
        get viewNewCustomers () { return $('(//a[contains(@href, "/office/customers/list")])[2]'); }
        get viewServices () { return $('(//a[contains(@href, "/office/customers/findServices")])[2]'); }

        //CUSTOMER SELECTORS BINDOWS
         //************Primary Customers Page View Selectors Bindows***************
         get fieldAccountId () { return $('//div[text() = "Account Id:"]/following-sibling::input[1]'); }
         get buttonFind () { return $('//div[text() = "Find"]'); }
         get perspectTicketsAppts () { return $('//div[text() = "Tickets & Appts"]'); }
         get perspectBilling () { return $('//div[text() = "Billing"]'); }
         get optionBillingAccount () { return $('//td[text()="Account"]'); }
         get optionBillingPayMethods () { return $('//td[text()="Payment Methods"]'); }
         get optionBillingDiscounts () { return $('//td[text()="Discounts"]'); }
         get optBillRClickRecievePayment () { return $('//td[text()="Discounts"]'); }
         get buttonNewAppt () { return $('//div[text() = "New Appointment"]'); }
         get valueAccountBalance () { return $('//div[text() = "Account Balance:"]/following-sibling::div[1]'); }
 
         //************New Appointment Selectors Bindows***************
         get buttonContinueCategory () { return $('(//button[text() =  "Continue"])[1]'); }
         get buttonContinueDetails () { return $('(//button[text() =  "Continue"])[2]'); }
         get dropdownApptType () { return $('//select[@ng-model="params.serviceTypeId"]'); }
         get dropdownPriority () { return $('//select[@ng-model="params.priority"]'); }
         get buttonFinishNewAppt () { return $('//select[@ng-model="params.priority"]'); }
         get dialogTitleSchedule () { return $('//*[text()[contains(.," New Appointment - Schedule")]]'); }
         get buttonFinishNewAppt () { return $('//button[text() = "Finish"]'); }
 
         //************Recieve Payment Selectors Bindows***************
         get accountBalance() { return $('//span[text() = "Account Balance:"]'); }
         get dropdownService () { return $('//label[text() = "Any"]'); }
         get fieldPaymentAmount () { return $('//input[@type = "number"]'); }
         get dropdownPaymentMethod () { return $('//label[text() = "Select a payment method..."] '); }
         get buttonReceivePayment () { return $('//span[text() = "Receive Payment"]'); }
  
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
        
        //********************************************************************************************************************************************* */
        
        //CUSTOMER SELECTORS ANGULAR
        //************************General*********************** */
        get buttonForwardCal () { return $('//span[@class = "fa fa-angle-right"]'); }
        get buttonBackCal () { return $('//span[@class = "fa fa-angle-left"]'); }

        //***********Customers View Selectors Angular*************
        get buttonCustomerFinder () { return $('//div[@tooltipposition]/span[@class = "icon-search"]'); }
        get fieldCustomerFinder () { return $('(//input[@name = "search"])[2]'); }
        get tabDetails () { return $('//div[text() =  " Details "]'); }
        get tabServices () { return $('(//div[text() =  " Services "])[2]'); }
        get tabAppointments () { return $('//div[text() =  " Appointments "]'); }
        get tabBilling () { return $('//div[text() =  " Billing "]'); }
        get buttonAddAppointment () { return $('//div/span[@class = "icon-plus"]'); }

        //**********Add New Appointment Selectors Angular******** */
            //Step 1 Selectors
        get statStep1Header () { return $('//h3[text() = " New Appointment "]/span[text() = " Step 1 of 2"]'); }
        get statGeneralHeader () { return $('//h3[text() = "General"]'); }
        get statDetailsHeader () { return $('//h3[text() = "Details"]'); }
        get fieldDetailsTitle () { return $('//input[@formcontrolname="serviceTicketName"]'); }
        get fieldDetailsPrice () { return $('//input[@formcontrolname="price"]'); }
        get fieldDetailsDuration () { return $('//input[@class="ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all"]'); }
        get fieldDetailsPONum () { return $('//input[@formcontrolname="poNumber"]'); }
        get checkTechOverride () { return $('(//div[@class="ui-chkbox ui-widget"])[1]'); }
        get checkSalesOverride () { return $('(//div[@class="ui-chkbox ui-widget"])[2]'); }
        get checkJeopardy () { return $('(//div[@class="ui-chkbox ui-widget"])[3]'); }
        get fieldTechOverride () { return $('//input[@formcontrolname="techCommAmount"]'); }
        get fieldSalesOverride () { return $('//input[@formcontrolname="salesCommAmount"]'); }
        get fieldNotes () { return $('//textarea[@formcontrolname="note"]'); }
        get buttonNext () { return $('//span[text() = "Next"]'); }
        get buttonCancel () { return $('//span[text() = "Cancel"]'); }
            //Step 2 Selectors
        get statStep2Header () { return $('//h3[text() = " New Appointment "]/span[text() = " Step 2 of 2"]'); }
        get statSchedApptHeader () { return $('//h3[text() = "Schedule Appointment"]'); }
        get statApptWindowsHeader () { return $('//div[text() = "Appointment Windows"]'); }
        get toggleSelectTechnicians () { return $('//span[text() = " Technician "]/i'); }
        get buttonPrevious () { return $('//span[text() = "Previous"]'); }
        get buttonFinish () { return $('//button[not (@disabled)]//span[text() = "Finish"]'); }
        
        //***********Add New Customer Selectors Angular*************
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
        get asyncLoadMask () { return $('//div[@id = "asyncLoadMask"]'); }
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
        
            //Step 7 Selectors
        get checkboxTechCollectAng () { return $('//*[@label= "Tech to collect agreement signature"]'); }
        get checkboxCustomerSign () { return $('//div[@class = "terms-checkbox"]'); }
        get fieldSignature () { return $('//brio-signature-field'); }
        get buttonFinish () { return $('//span[text() = "Finish"]'); }

       
        
    /**
    * define or overwrite page methods
    */
        
    //*************************Functions for Angular pages***********************************/
        dropdownCompletionAng (dropdownName, dropdownIndex, selection){
            this.loadMask.waitForVisible(5000, true)
            this.asyncLoadMask.waitForVisible(5000, true)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).waitForExist();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).scroll();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).click();
            $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${dropdownIndex}]`).waitForVisible()
            $(`(//input[@class = "ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"])[${dropdownIndex}]`).setValue(selection)
            $(`//span[contains (text(), "${selection}")]`).waitForVisible();
            $(`//span[contains (text(), "${selection}")]`).click();
        }

        dropdownCompletionNoSearch (dropdownName, selection){
            this.loadMask.waitForVisible(5000, true)
            this.asyncLoadMask.waitForVisible(5000, true)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).waitForExist();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).scroll();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).click();
            $(`//span[contains (text(), "${selection}")]`).waitForVisible();
            $(`//span[contains (text(), "${selection}")]`).click();
        }

        serviceCategorySelector (serviceCategories){
            for (let index = 0; index < serviceCategories.length; index++) {
                $(`//div[text() = "${serviceCategories[index]}"]/input`).waitForVisible();
                $(`//div[text() = "${serviceCategories[index]}"]/input`).click();
                browser.pause(1000)
            }
    
        }

        customerFinderAndSelector (customerId){
            this.buttonCustomerFinder.waitForVisible()
            this.buttonCustomerFinder.click()
            this.fieldCustomerFinder.waitForVisible()
            this.fieldCustomerFinder.setValue(customerId)
            $(`//td[@title = "${customerId}"]`).waitForVisible();
            $(`//td[@title = "${customerId}"]`).click();
    
        }

        newAppointmentDoRegularFields (title, price, duration, poNumber, checkTech, checkSales, commTech, commSales, checkJeopardy, notes){ //all that start with 'check' must have a value of 1 or null
            if(title != null){
                this.fieldDetailsTitle.waitForVisible()
                this.fieldDetailsTitle.setValue(title)
            }
            if(price != null){
                this.fieldDetailsPrice.waitForVisible()
                this.fieldDetailsPrice.setValue(price)
            }
            if(duration != null){
                this.fieldDetailsDuration.waitForVisible()
                this.fieldDetailsDuration.setValue(duration)
            }
            if(poNumber != null){
                this.fieldDetailsPONum.waitForVisible()
                this.fieldDetailsPONum.setValue(poNumber)
            }
            if( checkTech != null){
                this.checkTechOverride.waitForVisible()
                this.checkTechOverride.click()
                this.fieldTechOverride.waitForVisible()
                this.fieldTechOverride.setValue(commTech)
            }
            if( checkSales != null){
                this.checkSalesOverride.waitForVisible()
                this.checkSalesOverride.click()
                this.fieldSalesOverride.waitForVisible()
                this.fieldSalesOverride.setValue(commSales)
            }
            if(checkJeopardy != null){
                this.checkJeopardy.waitForVisible()
                this.checkJeopardy.click()
            }
            if(notes != null){
                this.fieldNotes.waitForVisible()
                this.fieldNotes.setValue(notes)
            }
        }

        nextMonthDaySelector (day){
            browser.pause(4000)
            this.buttonForwardCal.waitForVisible()
            this.buttonForwardCal.click()
            browser.pause(500)
            $(`//a[text() = "${day}"]`).waitForVisible()
            $(`//a[text() = "${day}"]`).click()
    
        }

        

    //*************************Functions for Bindows pages***********************************/
        customerSelectorById (id){
            if (browser.desiredCapabilities.browserName === 'firefox'){
                browser.pause(5000)
            }    
            this.fieldAccountId.waitForVisible()
            this.fieldAccountId.click()
            this.fieldAccountId.setValue(id)
            this.buttonFind.waitForVisible()
            this.buttonFind.moveToObject()
            browser.buttonDown()
            browser.buttonUp()
            $(`//td[text() = "${id}"]`).waitForVisible()
            $(`//td[text() = "${id}"]`).click()
    
        }

        billingRightClickOptionSelect (index){

            const option = [
                "Export",
                "Show Cancelled & Failed",
                "New Invoice...",
                "New Credit...",
                "Receive Payment...",
                "Receive Prepayment...",
                "Cancel...",
                "Reinstate...",
                "Application...",
                "Download Statement...",
                "Email Statement..."
            ];
            browser.pause(1000) 
            if (browser.desiredCapabilities.browserName === 'firefox'){
                browser.url('https://testmaster.briostack.com/uitest/office/customers/search(popup:popup/customers/10005/receivePayment)');
            }else{
                $('(//div[@class="bi-tree-view-headers"])[2]').waitForVisible();
                browser.rightClick('(//div[@class="bi-tree-view-headers"])[2]')
                $(`//td[text()="${option[index]}"]`).waitForVisible();
                $(`//td[text()="${option[index]}"]`).click();
            }
    
        }

        //this is for bindows. add further functionality for schedule and other fields when doing functional tests
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

            //this pause is necessary because the next button doesn't instantly change to be clickable
            browser.pause(2000)
            if(this.buttonNextOld.isVisible()){
                this.buttonNextOld.waitForVisible()
                this.buttonNextOld.click()
            }else{
                this.buttonSave.waitForVisible()
                this.buttonSave.click()
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

            if (this.dialogTitleSchedule.isVisible() != true){
                $('(//div[@class = "modal-dialog"])[2]').waitForVisible(5000, true)
            }
        }

        rowSelectorBindows (tabIndex, row){
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).waitForExist();
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).scroll();
            browser.pause(1000)
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).waitForVisible();
            $(`//div[@tabindex = "${tabIndex}"]//div[@ng-style = "rowStyle(row)"][${row}]`).click();
    
        }
      
  }

module.exports = new customersTab();