var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('Recieve payment, Bindows', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('bryceTester1', 'demo8011')
        basicUtils.goToApp('office')
    });

    it('should go to customers tab and select the angular customer view', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        customersTab.viewNewCustomers.waitForVisible()
        customersTab.viewNewCustomers.click()
        
    });
    
    it('should find and select customer, go to Appointments, and click add new appointment ', () => {
       customersTab.customerFinderAndSelector('1253813')
       customersTab.tabAppointments.waitForVisible()
       customersTab.tabAppointments.click()
       customersTab.buttonAddAppointment.waitForVisible()
       customersTab.buttonAddAppointment.click()
       
    });

    it('should complete step 1 of Creating a new appointment ', () => { 
        customersTab.statStep1Header.waitForVisible()
        customersTab.statDetailsHeader.waitForVisible()
        customersTab.statGeneralHeader.waitForVisible()
        customersTab.buttonCancel.waitForExist()
        customersTab.dropdownCompletionAng("Service", 1, "Bed Bug")
        customersTab.dropdownCompletionNoSearch("Appointment Type", "Treatment")
        customersTab.dropdownCompletionNoSearch("Call Confirm Status", "Message")
        customersTab.newAppointmentDoRegularFields('Test Inspection', 100.00, 60, 5, 1, 1, 10, 10, 1, 'This is a test note.')
        customersTab.buttonNext.click()
    });

    it('should complete step 2 of Creating a new appointment ', () => { 
        customersTab.statStep2Header.waitForVisible()
        customersTab.statSchedApptHeader.waitForVisible()
        customersTab.statApptWindowsHeader.waitForVisible()
        customersTab.toggleSelectTechnicians.waitForVisible()

        //checks if the toggle to select all techs is checked, then changes it to select all if it isn't already
        let toggleState = $('//i[@class="icon icon-select-all-checkbox-checked"]').isExisting();
        if(toggleState != true){
            customersTab.toggleSelectTechnicians.click()
        }

        customersTab.nextMonthDaySelector(15)
      
        browser.pause(10000)
    });


});