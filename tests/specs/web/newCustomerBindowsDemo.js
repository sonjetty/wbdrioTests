var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('new customers page test', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryceTester1', 'demo8011')
        basicUtils.goToApp('office')
    });
    
    it('should go to the old add customer page', () => {
        basicUtils.buttonAddNew.waitForVisible()
        basicUtils.buttonAddNew.click();
        basicUtils.buttonNewCustomer.waitForVisible()
        basicUtils.buttonNewCustomer.click(); 
    });
    
    it('should complete step 1 of creating a new customer', () => {
        browser.waitForExist('//iframe[@src = "/ui/control/bindows"]')
        const iframe = $('iframe[src = "/ui/control/bindows"]').value;
        browser.frame(iframe)

        //fills out regular fields
       customersTab.fieldFirstNameOld.waitForVisible()
       customersTab.fieldFirstNameOld.setValue('Jim')
       customersTab.fieldLastNameOld.waitForVisible()
       customersTab.fieldLastNameOld.setValue('Smith')
       customersTab.fieldAddressOld.waitForVisible()
       customersTab.fieldAddressOld.setValue('820 W 500 N')
       customersTab.fieldCityOld.waitForVisible()
       customersTab.fieldCityOld.setValue('Pleasant Grove')
       customersTab.fieldZipOld.waitForVisible()
       customersTab.fieldZipOld.setValue('84062')
       customersTab.fieldEmailOld.waitForVisible()
       customersTab.fieldEmailOld.setValue('junk@email.com')
       customersTab.fieldPrimPhoneOld.waitForVisible()
       customersTab.fieldPrimPhoneOld.setValue('5555555555')
       customersTab.fieldPropertyOld.waitForVisible()
       customersTab.fieldPropertyOld.setValue('10000')
       customersTab.fieldStrucureOld.waitForVisible()
       customersTab.fieldStrucureOld.setValue('500')
       customersTab.fieldLinearOld.waitForVisible()
       customersTab.fieldLinearOld.setValue('25')

       //fills out fields with dropdowns
       customersTab.dropdownBranchOld.waitForVisible()
       customersTab.dropdownBranchOld.click()
       browser.keys('Raleigh');
       $('//div[text() = "Raleigh"]').waitForVisible()
       $('//div[text() = "Raleigh"]').click()

       customersTab.dropdownStateOld.waitForVisible()
       customersTab.dropdownStateOld.click()
       browser.keys('Utah');
       $('//div[text() = "Utah"]').waitForVisible()
       $('//div[text() = "Utah"]').click()

       customersTab.dropdownCountyOld.waitForVisible()
       customersTab.dropdownCountyOld.click()
       browser.keys('Utah');
       $('(//div[text() = "Utah"])[2]').waitForVisible()
       $('(//div[text() = "Utah"])[2]').click()

        customersTab.buttonNextOld.click()

        browser.pause(5000) //just so you can see for now
    });

});