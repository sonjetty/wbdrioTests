var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('Change an appointment schedule', () => {
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
        customersTab.nextMonthDaySelector(14)
        browser.pause(1000)
        $('(//tbody)[3]/tr[1]/td[1]').waitForVisible()
        $('(//tbody)[3]/tr[1]/td[1]').click()
        customersTab.buttonFinish.waitForVisible()
        customersTab.buttonFinish.click()   
  
    });

    it('should verify all options in the change schedule dialog (Cancel, schedule, x button, yes, no, etc.) schedule to be on 17th of following month', () => { 
        //tests cancel functionality
        customersTab.buttonChangeSched.waitForVisible()
        customersTab.buttonChangeSched.click()
        customersTab.buttonCancelSchedule.waitForVisible()
        customersTab.buttonCancelSchedule.click()

        //tests selecting new day on calendar
        customersTab.buttonChangeSched.waitForVisible()
        customersTab.buttonChangeSched.click()
        customersTab.nextMonthDaySelector(17)
        browser.pause(1000)
        $('(//tbody)[4]/tr[1]/td[1]').waitForVisible()
        $('(//tbody)[4]/tr[1]/td[1]').click()

        //tests no functionality
        customersTab.buttonSchedule.waitForVisible()
        customersTab.buttonSchedule.click()
        $('//span[text() = "Warning"]').waitForVisible()
        $('//li[text() = "The appointment has already been confirmed. These changes will require reconfirmation with the customer."]').waitForVisible()
        $('//li[text() = "The new scheduled date is close to the next appointment date. Consider skipping this appointment instead."]').waitForVisible()
        $('(//span[text() = "No"])[5]').waitForVisible()
        $('(//span[text() = "No"])[5]').click()

        //tests close functionality
        customersTab.buttonSchedule.waitForVisible()
        customersTab.buttonSchedule.click()
        $('(//span[@class="fa fa-fw fa-close"])[5]').waitForVisible()
        $('(//span[@class="fa fa-fw fa-close"])[5]').click()

        //tests yes functionality
        customersTab.buttonSchedule.waitForVisible()
        customersTab.buttonSchedule.click()
        $('(//span[text() = "Yes"])[5]').waitForVisible()
        $('(//span[text() = "Yes"])[5]').click()

        //finishes scheduling the appointment
        $('//label[text() = "Do not reschedule the highlighted appointments"]').waitForVisible()
        $('//label[text() = "Do not reschedule the highlighted appointments"]').click()
        $('//button[not (@disabled)]//span[text() = "Apply"]').waitForVisible()
        $('//button[not (@disabled)]//span[text() = "Apply"]').click()
        $('//div[contains (text(), "17")]').waitForVisible()
    });

    it('tests rescheduling highlighted appointments', () => { 
        customersTab.buttonChangeSched.waitForVisible()
        customersTab.buttonChangeSched.click()
        customersTab.nextMonthDaySelector(18)
        browser.pause(2000)
        $('(//tbody)[4]/tr[1]/td[1]').waitForVisible()
        $('(//tbody)[4]/tr[1]/td[1]').click()  
        customersTab.buttonSchedule.waitForVisible()
        customersTab.buttonSchedule.click()
        $('(//span[text() = "Yes"])[5]').waitForVisible()
        $('(//span[text() = "Yes"])[5]').click()
        browser.pause(1000)
        $('//label[text() = "Reschedule the highlighted appointments"]').waitForVisible()
        $('//label[text() = "Reschedule the highlighted appointments"]').click()
        $('//label[text() = "Reschedule appointments that have been manually scheduled"]').waitForVisible()
        $('//label[text() = "Reschedule appointments that have been manually scheduled"]').click()
        $('//label[text() = "Do not cancel appointments that fall outside the contract window"]').waitForVisible()
        $('//label[text() = "Do not cancel appointments that fall outside the contract window"]').click()
        $('//button[not (@disabled)]//span[text() = "Apply"]').waitForVisible()
        $('//button[not (@disabled)]//span[text() = "Apply"]').click()
        $('//span[text() = "Success"]').waitForVisible()
        $('//div[contains (text(), "18")]').waitForVisible()

    });

});