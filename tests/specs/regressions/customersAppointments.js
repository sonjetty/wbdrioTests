var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

let date;
let from;
let through;
let distance;
let technician;


describe('Recieve payment, Bindows', () => {
    it('should log in and then go to the office app', () => {
        basicUtils.loginWebCommand('admin', 'demo8011')
        basicUtils.goToApp('office')
    });

    it('should go to customers tab and select the angular customer view', () => {
        basicUtils.tabCustomers.waitForVisible()
        basicUtils.tabCustomers.click()
        customersTab.viewNewCustomers.waitForVisible()
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
        customersTab.statStep1Header.waitForVisible()
        customersTab.statDetailsHeader.waitForVisible()
        customersTab.statGeneralHeader.waitForVisible()
        customersTab.buttonCancel.waitForExist()
        customersTab.dropdownCompletionAng("Service", 1, "Bed Bug")
        customersTab.dropdownCompletionNoSearch("Appointment Type", "Initial")
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
        browser.pause(1000)
        $('(//tbody)[3]/tr[1]/td[1]').waitForVisible()
        $('(//tbody)[3]/tr[1]/td[1]').click()

        //grabs all of the values to verify after the appointment is created
        date = $('(//tbody)[3]/tr[1]/td[2]').getAttribute('title')
        from = $('(//tbody)[3]/tr[1]/td[3]').getAttribute('title')
        through = $('(//tbody)[3]/tr[1]/td[4]').getAttribute('title')
        distance = $('(//tbody)[3]/tr[1]/td[5]').getAttribute('title')
        technician = $('(//tbody)[3]/tr[1]/td[6]').getAttribute('title')
        console.log(date + '\n' +  from + '\n'+ through + '\n'+ distance + '\n' + technician)
        customersTab.buttonFinish.waitForVisible()
        customersTab.buttonFinish.click()     
    });

    it('should verify information in new appointment ', () => { 
        $(`//*[text()[contains(.,"${date}")]]`).waitForExist()
        $(`//div[text()[contains(.,"${from}")]]`).waitForExist()
        if(through != '--'){
            $(`//div[text()[contains(.,"${through}")]]`).waitForExist()
        }
        $(`//div[text()[contains(.,"${technician}")]]`).waitForExist()

        //checks title
        $('//h3[text() = " Test Inspection "]').waitForVisible()
        //checks customer name
        $('//div[text() = "Automated Test"]').waitForVisible()
        //checks service category name
        $('//div[text() = "Bed Bug Service"]').waitForVisible()
        //checks appointment type
        $('//div[text() = "Initial "]').waitForVisible()
        //makes sure status is open
        $('//span[text() = "Open"]').waitForVisible()
        //makes sure total is correct
        $('//td[text() = "$100.00"]').waitForVisible()
        //makes sure note shows up
        $('//pre[text() = "This is a test note."]').waitForExist()
    });


});