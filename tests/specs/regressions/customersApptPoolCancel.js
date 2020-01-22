var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('tests changing an appointment to appointment pool', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('admin', 'demo8011')
        basicUtils.goToApp('office')
    });

    it('should go to customers tab and select the angular customer view', () => {
        browser.pause(2000)
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        browser.pause(7000)
        customersTab.viewNewCustomers.waitForVisible()
        customersTab.viewNewCustomers.click()
        customersTab.viewNewCustomers.click()
        customersTab.viewNewCustomers.click()
        
    });
    
    it('should find and select customer, go to Appointments, and click add new appointment ', () => {
       customersTab.customerFinderAndSelector('10005')
       customersTab.tabAppointments.waitForVisible()
       customersTab.tabAppointments.click()
       customersTab.buttonAddAppointment.waitForVisible()
       customersTab.buttonAddAppointment.click()
       
    });

    it('should complete step 1 of Creating a new appointment ', () => { 
        customersTab.dropdownCompletionAng("Service", 1, "Bed Bug")
        customersTab.dropdownCompletionNoSearch("Appointment Type", "Initial")
        customersTab.dropdownCompletionNoSearch("Call Confirm Status", "Message")
        customersTab.newAppointmentDoRegularFields('Edit This One', 100.00, 60, 5, 1, 1, 10, 10, 1, 'This is a test note.')
        customersTab.buttonNext.click()
    });

    it('should complete step 2 of Creating a new appointment ', () => { 

        //checks if the toggle to select all techs is checked, then changes it to select all if it isn't already
        let randomDay = Math.floor((Math.random() * 13) + 1);
        customersTab.nextMonthDaySelector(randomDay)
        browser.pause(1000)
        $('(//tbody)[3]/tr[1]/td[1]').waitForVisible()
        $('(//tbody)[3]/tr[1]/td[1]').click()
        customersTab.buttonFinish.waitForVisible()
        customersTab.buttonFinish.click()   
  
    });

    it('should select the Add to Appointment Pool Option ', () => { 
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionAddToAppointmentPool.waitForVisible()
        customersTab.optionAddToAppointmentPool.click()
    });

    it('should exersice all options in appointment pool confirmation dialog and verify static elements', () => { 
        $('(//span[text()  = "Are you sure?"])[3]').waitForVisible()
        $('//span[text()  = "Are you sure you want to add this appointment to the appointment pool?"]').waitForVisible()

        //tests x button
        customersTab.buttonCloseDialog.waitForVisible()
        customersTab.buttonCloseDialog.click()

        //tests No button
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionAddToAppointmentPool.waitForVisible()
        customersTab.optionAddToAppointmentPool.click()
        customersTab.buttonNoDialog.waitForVisible()
        customersTab.buttonNoDialog.click()
        
        //tests yes button and then makes sure that Appointent Pool shows up
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionAddToAppointmentPool.waitForVisible()
        customersTab.optionAddToAppointmentPool.click()
        customersTab.buttonYesDialog.waitForVisible()
        customersTab.buttonYesDialog.click()
        $('//span[text() = "Recommended Date"]').waitForVisible()
        $('//div[text() = "Appointment Pool"]').waitForVisible()
    });

    it('should  test cancel appointment dialog and cancel appointment', () => { 
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionCancelAppointment.waitForVisible()
        customersTab.optionCancelAppointment.click()
        $('(//span[text()  = "Are you sure?"])[3]').waitForVisible()
        $('//span[text()  = "Are you sure you want to cancel this appointment?  This cannot be undone."]').waitForVisible()
        customersTab.buttonCloseDialog.waitForVisible()
        customersTab.buttonCloseDialog.click()

        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionCancelAppointment.waitForVisible()
        customersTab.optionCancelAppointment.click()
        customersTab.buttonNoDialog.waitForVisible()
        customersTab.buttonNoDialog.click()

        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionCancelAppointment.waitForVisible()
        customersTab.optionCancelAppointment.click()
        customersTab.buttonYesDialog.waitForVisible()
        customersTab.buttonYesDialog.click()
        $('//span[text() = "Cancelled"]').waitForVisible()
    });


});