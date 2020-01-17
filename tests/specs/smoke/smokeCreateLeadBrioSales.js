var basicUtils = require('../../pageobjects/basicUtils.page');
var brioSales = require('../../pageobjects/brioSales.page');
const randomWords = require('random-words');

let firstName;
let lastName;

describe('Recieve payment, Bindows', () => {
    it('should log in and then go to the sales app', () => {
        basicUtils.loginWebCommand('admin', 'demo8011')
        basicUtils.goToApp('sales')
    });

    it('should go to accounts > leads tab and open new lead', () => {
        brioSales.tabAccounts.waitForVisible()
        brioSales.tabAccounts.click()
        brioSales.tabLeads.waitForVisible()
        brioSales.tabLeads.click()
        brioSales.buttonAddNew.waitForVisible()
        brioSales.buttonAddNew.click()
    });
    
    it('should fill out all contact information', () => {
        firstName = randomWords();
        lastName = randomWords();
        brioSales.fieldFirstName.waitForVisible()
        brioSales.fieldFirstName.setValue(firstName)
        brioSales.fieldLastName.waitForVisible()
        brioSales.fieldLastName.setValue(lastName)
        brioSales.buttonLocateAddress.waitForVisible()
        brioSales.buttonLocateAddress.click()
        
        brioSales.fieldPrimaryPhone.waitForVisible()
        brioSales.fieldPrimaryPhone.setValue('5555555555')
        brioSales.fieldSecondaryPhone.waitForVisible()
        brioSales.fieldSecondaryPhone.setValue('5555555551')
        brioSales.fieldEmail.waitForVisible()
        brioSales.fieldEmail.setValue('fake@email.com')
        brioSales.checkCall1.click()
        $(`//*[@class = "button-group full-width-buttons"]`).click();
    });

    it('should fill out Lead Information', () => {
        brioSales.dropdownCompletion('Branch', 5, 'Main Branch')
        brioSales.buttonSave.click()
    });

    it('should verify the new customer is visible on main page', () => {
        let fullName = firstName + " " + lastName;
        $(`//td[@title = "${fullName}"]`).waitForVisible();
    });


});