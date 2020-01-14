var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('add appointment through Customers tab bindows', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryceTester1', 'demo8011')
        basicUtils.goToApp('office')
    });

    it('should go to customers tab', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
    });
    
    it('should select customer and go to Tickets & Appts then click on New Appointment button', () => {
        browser.waitForExist('//iframe[@src = "/ui/control/bindows"]')
        const iframe = $('iframe[src = "/ui/control/bindows"]').value;
        browser.frame(iframe)

        customersTab.customerSelectorById('1253555')
        customersTab.perspectTicketsAppts.waitForVisible()
        customersTab.perspectTicketsAppts.click()
        customersTab.perspectTicketsAppts.click()
        
        customersTab.buttonNewAppt.waitForVisible()

        //for some reason an extra click is needed for firefox
        if (browser.desiredCapabilities.browserName === 'firefox'){
            browser.pause(1000)
            customersTab.buttonNewAppt.click()
        } 
        customersTab.buttonNewAppt.click()
    });

    it('should select Bed Bug service category in New Appointment - Category', () => {
        browser.pause(7000)
        $('//*[text()[contains(.," Bed Bug")]]').waitForVisible();
        $('//*[text()[contains(.," Bed Bug")]]').click();
        customersTab.buttonContinueCategory.waitForVisible()
        customersTab.buttonContinueCategory.click()
    });

    it('should complete New Appointment - Details', () => {
        //sets Appointment Type to Inspection
        customersTab.dropdownApptType.waitForVisible()
        customersTab.dropdownApptType.click()
        $('//option[text() = "Inspection"]').waitForVisible();
        $('//option[text() = "Inspection"]').click();
        $('//p[text() = "Opened"]').waitForVisible();

        //sets Priority to Major
        customersTab.dropdownPriority.waitForVisible()
        customersTab.dropdownPriority.click()
        $('//option[text() = "Major"]').waitForVisible();
        $('//option[text() = "Major"]').click();


        customersTab.buttonContinueDetails.scroll()
        customersTab.buttonContinueDetails.waitForVisible()
        customersTab.buttonContinueDetails.click()
    });

    it('should select complete New Appointment - Schedule', () => {
        let randomDay = Math.floor((Math.random() * 28) + 1);
        customersTab.followingMonthDaySelector(randomDay)
        customersTab.rowSelectorBindows(1, 1)

        customersTab.buttonFinishNewAppt.scroll()
        customersTab.buttonFinishNewAppt.waitForVisible()
        customersTab.buttonFinishNewAppt.click()
    });

    it('should make sure dialog is dissmissed and the appointment appears', () => {
        $('//*[text()[contains(.," New Appointment - Schedule")]]').waitForVisible(5000, true)
        $('//div[text() = "Inspection"]').waitForVisible()

        browser.pause(10000)

    });

});