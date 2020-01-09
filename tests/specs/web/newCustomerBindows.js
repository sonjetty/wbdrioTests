var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

let serviceCategory = [
    "Bed Bug ",
    "GPC"
];

describe('new customers page test bindows', () => {
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
       //this portion should be rewritten after a function has been added to handle bindows dropdowns
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

    });

    it('should complete step 2 of creating a new customer', () => {
       customersTab.checkboxSameAddress.waitForVisible()
       customersTab.checkboxSameAddress.click()
       customersTab.radioInvoice.waitForVisible()
       customersTab.radioInvoice.click()
       customersTab.buttonNextOld.waitForVisible()
       customersTab.buttonNextOld.click()

        
    });

    it('should complete step 3 of creating a new customer', () => {
       customersTab.serviceCategorySelector(serviceCategory)
       customersTab.buttonNextOld.waitForVisible()
       customersTab.buttonNextOld.click()

    });

    it('should schedule service for Bed Bug (steps 4-7)', () => {
        customersTab.addService(14, 1, 1, 'Test Service 1', 'Inside Sales', 'Berry, Josh', 'Use front door')    
     });

     it('should schedule service for Fire Ants (steps 8-11)', () => {
        customersTab.addService(14, 3, 1, 'Test Service 2', 'Inside Sales', 'Berry, Josh', 'Make sure to check cracks')    
     });

     it('should confirm new customer dialog', () => {
        customersTab.buttonOK.waitForVisible()
        customersTab.buttonOK.click()
     });

});