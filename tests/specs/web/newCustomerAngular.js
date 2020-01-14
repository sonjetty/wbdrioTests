var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');


describe('new customers page test Angular', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryceTester1', 'demo8011')
        basicUtils.goToApp('office')
    });
    
    it('should go to the new customers view inside of customers tab', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        customersTab.viewNewCustomers.waitForVisible()
        customersTab.viewNewCustomers.click()
        customersTab.viewNewCustomers.click()
    });
    
    it('should complete step 1 of creating a new customer', () => {
        customersTab.newCustomerButton.waitForVisible()
        customersTab.newCustomerButton.click()
        customersTab.branchDropdown.waitForVisible()

        //fills in drowpdowns
        browser.pause(2000)
        customersTab.dropdownCompletionAng('Branch', 1, 'Charlotte')
        customersTab.dropdownCompletionAng('Account Type', 2, 'Commercial')
        customersTab.dropdownCompletionAng('State', 5, 'Utah')
        customersTab.dropdownCompletionAng('County', 6, 'Utah')

        customersTab.fieldFirstName.setValue('Fred')
        customersTab.fieldLastName.setValue('Smith')
        customersTab.fieldAddress.setValue('820 W 500 N')
        customersTab.fieldCity.setValue('Pleasant Grove')
        customersTab.fieldPostalCode.setValue('84062')

        customersTab.spinnerLinearFt.scroll() //scrolls to bottom of page so it can fill out the rest of the fields

        customersTab.fieldPhone.waitForVisible()
        customersTab.fieldPhone.setValue('5555555555')
        customersTab.fieldSecondaryPhone.setValue('5555555554')
        customersTab.fieldEmail.setValue('junk@email.com')
        customersTab.spinnerPropSqFt.setValue('10000')
        customersTab.spinnerStructSqFt.setValue('500')
        customersTab.spinnerLinearFt.setValue('25')

        customersTab.buttonNext.waitForVisible()
        customersTab.buttonNext.click()
        customersTab.buttonCloseAngular.waitForVisible()
        customersTab.buttonCloseAngular.click()       
    });

    it('should complete step 2 of creating a new customer', () => {
        customersTab.buttonAddService.waitForVisible()
        customersTab.buttonAddService.click()       
    });

    it('should complete step 3 of creating a new customer', () => {
        customersTab.fieldServiceNameAng.waitForVisible()
        customersTab.fieldServiceNameAng.setValue('Test Service')
        customersTab.dropdownCompletionAng('Service Category', 2, 'Bed Bug ')
        customersTab.dropdownCompletionAng('Marketing Campaign', 3, '2019Winter')
        customersTab.buttonNext.scroll()
        customersTab.buttonNext.click() 
    });

    it('should complete step 4 of creating a new customer', () => {
        customersTab.fieldInitInstructAng.waitForVisible()
        customersTab.fieldInitInstructAng.setValue('Need extra chemicals')
        customersTab.fieldRegInstructAng.waitForVisible()
        customersTab.fieldRegInstructAng.setValue('cannot wear shoes in living room')
        customersTab.buttonNext.scroll()
        customersTab.buttonNext.click()        
    });

    it('should complete step 5 of creating a new customer', () => {
        browser.pause(2000)
        customersTab.dropdownCompletionAng('Preferred Technician', 1, 'Marvin Fisher')
        customersTab.twoWkFollowUp.waitForVisible()
        customersTab.twoWkFollowUp.setValue('100.00')
        customersTab.radioNoAutoPay.scroll()
        customersTab.radioNoAutoPay.waitForVisible()
        customersTab.radioNoAutoPay.click()
        customersTab.buttonNext.scroll()
        customersTab.buttonNext.click() 
    });

    it('should complete step 6 of creating a new customer', () => {
        //selects random day in following month
        let randomDay = Math.floor((Math.random() * 28) + 1);
        customersTab.buttonForwardCal.waitForVisible()
        customersTab.buttonForwardCal.click()
        browser.pause(500)
        $(`//a[text() = "${randomDay}"]`).waitForVisible()
        $(`//a[text() = "${randomDay}"]`).click()

        //selects the first appointment window
        $('(//div[@class = "table"])[2]//td').waitForVisible()
        $('(//div[@class = "table"])[2]//td').click()

        customersTab.buttonNext.scroll()
        browser.pause(500)
        customersTab.buttonNext.click() 
    });

    it('should complete step 7 of creating a new customer', () => {
        customersTab.checkboxCustomerSign.waitForExist()
        customersTab.checkboxCustomerSign.scroll()
        browser.pause(1000)
        customersTab.checkboxTechCollectAng.click()
        customersTab.buttonFinish.scroll()
        browser.pause(500)
        customersTab.buttonFinish.click()

        browser.waitForVisible('//span[contains (text(), "Customer ID")]')
    });

});