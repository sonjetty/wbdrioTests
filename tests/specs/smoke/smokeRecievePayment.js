var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

let accountBalance;

describe('Recieve payment, Bindows', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('admin', 'demo8011')
        basicUtils.goToApp('office')
    });

    it('should go to customers tab', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
    });
    
    it('should select customer and go to Billing > Account', () => {
        browser.waitForExist('//iframe[@src = "/uitest/ui/control/bindows"]')
        const iframe = $('iframe[src = "/uitest/ui/control/bindows"]').value;
        browser.frame(iframe)

        customersTab.customerSelectorById('10005')
        browser.pause(1000)
        customersTab.perspectBilling.waitForVisible()
        customersTab.perspectBilling.click()
        browser.pause(500)
        customersTab.optionBillingAccount.waitForVisible()
        customersTab.optionBillingAccount.click()
    });

    it('should right click in billing account table and select option to receive payment', () => {
        browser.pause(1000)
        customersTab.valueAccountBalance.waitForVisible();
        accountBalance = customersTab.valueAccountBalance.getText();
        customersTab.billingRightClickOptionSelect(4)
    });

    it('should recieve a new payment', () => { 
        if (browser.desiredCapabilities.browserName != 'firefox'){
            browser.frame()
            let accountBalanceClean =  accountBalance.replace(/[^0-9.]/g,'');
            $(`(//div[contains (text(), "${accountBalanceClean}")])[1] `).waitForVisible()
        }
        
        if (browser.desiredCapabilities.browserName === 'firefox'){
            browser.pause(5000)
        }
        //sets the Service to Bed Bug(only works if the Service Billing is turned on)
        //customersTab.dropdownService.waitForVisible()
        //customersTab.dropdownService.click()
        //$('//span[contains (text(), "Bed Bug")] ').waitForVisible()
        //$('//span[contains (text(), "Bed Bug")] ').click()

        //sets the Payment Method to Cash
        customersTab.dropdownPaymentMethod.waitForVisible()
        customersTab.dropdownPaymentMethod.click()
        $('//span[text() = "Cash"]').waitForVisible()
        $('//span[text() = "Cash"]').click()

        //sets the Payment Amount and finishes
        customersTab.fieldPaymentAmount.waitForVisible()
        customersTab.fieldPaymentAmount.setValue("10.00")
        //pauses due to fact button clickablilty is delayed
        browser.pause(500)
        customersTab.buttonReceivePayment.waitForVisible()
        customersTab.buttonReceivePayment.click()

        //makes sure Account Balance has changed
        $(`(//div[contains (text(), "${accountBalance}")])[1] `).waitForVisible(5000, true)

    });


});

