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
            undefined,  //Account Type
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
            customersTab.competeStep1DropdownsAngular(step1Dropdowns[index], index)      
        }

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
        //selects 15th of following month
        customersTab.buttonForwardCal.waitForVisible()
        customersTab.buttonForwardCal.click()
        $('//a[text() = "14"]').waitForVisible()
        $('//a[text() = "14"]').click()

        //selects the first appointment window
        $('(//div[@class = "table"])[2]//td').waitForVisible()
        $('(//div[@class = "table"])[2]//td').click()

        customersTab.buttonNext.scroll()
        browser.pause(500)
        customersTab.buttonNext.click() 
    });

    it('should complete step 7 and complete signature', () => {
        const signature = '//brio-signature-field';
        customersTab.checkboxCustomerSign.waitForExist()
        customersTab.checkboxCustomerSign.scroll()
        browser.pause(1000)
        customersTab.checkboxCustomerSign.click()
        customersTab.fieldSignature.scroll()
        browser.pause(1000)
        customersTab.fieldSignature.moveToObject(10, 10)
        browser.buttonDown(0);
        customersTab.fieldSignature.moveToObject(10, 11)
        browser.buttonUp(0);

        customersTab.buttonFinish.scroll()
        browser.pause(500)
        customersTab.buttonFinish.click()

        browser.waitForVisible('//span[contains (text(), "Customer ID")]')
    });

});