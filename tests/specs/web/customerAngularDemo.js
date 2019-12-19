var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('new customers page test', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryceTester1', 'demo8011')
        basicUtils.goToApp('office')
    });
    
    it('should go to the new customers view inside of customers tab', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        customersTab.viewNewCustomers.waitForVisible()
        customersTab.viewNewCustomers.click()
    });
    
    it('should complete step 1 of creating a new customer', () => {
        //
        let step1Dropdowns = [
            "Charlotte", //Branch
            "Commercial",  //Account Type
            undefined,     //Marketing Campaign
            "Radio",       //Channel
            "Utah",        //State
            "Utah",        //County
            undefined      //Country
        ];

        customersTab.newCustomerButton.waitForVisible()
        customersTab.newCustomerButton.click()
        customersTab.branchDropdown.waitForVisible()

        for (let index = 0; index < step1Dropdowns.length; index++) {
            customersTab.competeStep1Dropdowns(step1Dropdowns[index], index)      
        }

        customersTab.fieldFirstName.setValue('Jim')
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

        customersTab.buttonNext.click()

        browser.pause(5000) //just so you can see for now
    });

});