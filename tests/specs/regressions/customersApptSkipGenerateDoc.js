var basicUtils = require('../../pageobjects/basicUtils.page');
var customersTab = require('../../pageobjects/customersTab.page');

describe('tests skipping appointment functionality and generating a doc', () => {
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
        let randomDay = Math.floor((Math.random() * 13) + 1);
        customersTab.nextMonthDaySelector(randomDay)
        browser.pause(1000)
        if (browser.desiredCapabilities.browserName === 'firefox'){
            $('(//tbody)[3]/tr[2]/td[1]').waitForVisible()
            $('(//tbody)[3]/tr[2]/td[1]').click()
        }else{  
            $('(//tbody)[3]/tr[1]/td[1]').waitForVisible()
            $('(//tbody)[3]/tr[1]/td[1]').click()
        }
        customersTab.buttonFinish.waitForVisible()
        customersTab.buttonFinish.click()    
    });

    it('should select skip appointment and exercise all dialog options', () => { 
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionSkipAppointment.waitForVisible()
        customersTab.optionSkipAppointment.click()
        $('(//span[text()  = "Are you sure?"])[3]').waitForVisible()
        $('//span[text()  = "Are you sure you want to skip this appointment?  This cannot be undone."]').waitForVisible()

        //tests x button
        customersTab.buttonCloseDialog.waitForVisible()
        customersTab.buttonCloseDialog.click()

        //tests No button
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionSkipAppointment.waitForVisible()
        customersTab.optionSkipAppointment.click()
        customersTab.buttonNoDialog.waitForVisible()
        customersTab.buttonNoDialog.click()
        
        //tests yes button
        customersTab.dropdownActions.waitForVisible()
        customersTab.dropdownActions.click()
        customersTab.optionSkipAppointment.waitForVisible()
        customersTab.optionSkipAppointment.click()
        customersTab.buttonYesDialog.waitForVisible()
        customersTab.buttonYesDialog.click()
        $('//span[text() = "Skipped"]').waitForVisible()
    });

    it('should generate doc', () => { 

       customersTab.dropdownActions.waitForVisible()
       customersTab.dropdownActions.click()
       customersTab.optionGenerateDoc.waitForVisible()
       customersTab.optionGenerateDoc.click()

       //selects documnent template
       $(`//div[text() = " Document Template "]/p-dropdown`).waitForVisible();
       $(`//div[text() = " Document Template "]/p-dropdown`).click();
       $(`(//*[contains (text(), "NPMA33 Rev 2019")])[2]`).waitForVisible();
       $(`(//*[contains (text(), "NPMA33 Rev 2019")])[2]`).click();
       $(`//label[text() = "Download to my device"]`).waitForVisible();
       $(`//label[text() = "Download to my device"]`).click();

       //fills out Document Fields
       $(`//div[text() = " Structures Inspected "]//input`).waitForVisible();
       $(`//div[text() = " Structures Inspected "]//input`).setValue('house, garage, castle');
       $(`//div[text() = " Live Insects Found "]//textarea`).waitForVisible();
       $(`//div[text() = " Live Insects Found "]//textarea`).setValue('big ants, dragon');
       $(`//div[text() = " Dead Insects Found "]//textarea`).waitForVisible();
       $(`//div[text() = " Dead Insects Found "]//textarea`).setValue('ants, dragon slayer');
       $(`//div[text() = " Visible Damage "]//textarea`).waitForVisible();
       $(`//div[text() = " Visible Damage "]//textarea`).setValue('fire burns, smoke damage');
       $(`(//p-checkbox)[1]`).click();
       $(`//div[text() = " Treatment Explanation "]//textarea`).click();
       $(`//div[text() = " Treatment Explanation "]//textarea`).waitForVisible();
       $(`//div[text() = " Treatment Explanation "]//textarea`).setValue('ant poison, crossbow for dragon');
       $(`//div[text() = " Basement Obstructions "]//input`).click();
       $(`//div[text() = " Basement Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Basement Obstructions "]//input`).setValue('dungeon cell doors');
       $(`//div[text() = " Crawlspace Obstructions "]//input`).click();
       $(`//div[text() = " Crawlspace Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Crawlspace Obstructions "]//input`).setValue('labyrinth');
       $(`//div[text() = " Main Level Obstructions "]//input`).click();
       $(`//div[text() = " Main Level Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Main Level Obstructions "]//input`).setValue('moat');
       $(`//div[text() = " Attic Obstructions "]//input`).click();
       $(`//div[text() = " Attic Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Attic Obstructions "]//input`).setValue('traps');
       $(`//div[text() = " Garage Obstructions "]//input`).click();
       $(`//div[text() = " Garage Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Garage Obstructions "]//input`).setValue('large horses');
       $(`//div[text() = " Exterior Obstructions "]//input`).click();
       $(`//div[text() = " Exterior Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Exterior Obstructions "]//input`).setValue('spikes');
       $(`//div[text() = " Porch Obstructions "]//input`).click();
       $(`//div[text() = " Porch Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Porch Obstructions "]//input`).setValue('evil guards');
       $(`//div[text() = " Addition Obstructions "]//input`).click();
       $(`//div[text() = " Addition Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Addition Obstructions "]//input`).setValue('rubble');
       $(`//div[text() = " Other Obstructions "]//input`).click();
       $(`//div[text() = " Other Obstructions "]//input`).waitForVisible();
       $(`//div[text() = " Other Obstructions "]//input`).setValue('none');
       $(`//div[text() = " Additional Comments "]//textarea`).click();
       $(`//div[text() = " Additional Comments "]//textarea`).waitForVisible();
       $(`//div[text() = " Additional Comments "]//textarea`).setValue('this is a castle');
       $(`//div[text() = " Attachments Description "]//input`).click();
       $(`//div[text() = " Attachments Description "]//input`).waitForVisible();
       $(`//div[text() = " Attachments Description "]//input`).setValue('castle picture');
       $(`//*[text() = " Upload a diagram to include in this document. "]`).click();

       //uploads large file for diagram
       var path = require("path");
       var toUpload = path.join(__dirname, "..", "..", "resources", 
       "SampleJPGImage_10mbmb.jpg");
       browser.chooseFile('(//input[@type =  "file"])[1]', toUpload);
       
       //uploads file for Photos section
       var path = require("path");
       var toUpload = path.join(__dirname, "..", "..", "resources", 
       "SampleJPGImage_5mbmb.jpg");
       browser.chooseFile('(//input[@type =  "file"])[3]', toUpload);
       
       $(`//button[not (@disabled)]//span[text() = "Preview and Sign"]`).waitForExist();
       $(`//button[not (@disabled)]//span[text() = "Preview and Sign"]`).click();

    });

    it('should verify all fields entered previously show up on doc ', () => { 
        browser.waitForExist('//iframe[@class="brio-printContent"]')
        const iframe = $('//iframe[@class="brio-printContent"]').value;
        browser.frame(iframe)
        //verifies previously entered fields
        $('//*[contains (text(), "house, garage, castle")]').waitForVisible()
        $('//*[contains (text(), "house, garage, castle")]').click()
        $('//*[@value = "big ants, dragon"]').click()
        $('//*[@value = "ants, dragon slayer"]').click()
        $('//*[@value = "fire burns, smoke damage"]').click()
        $('//*[@value = "ant poison, crossbow for dragon"]').click()
        $('//*[@value = "dungeon cell doors"]').click()
        $('//*[@value = "labyrinth"]').click()
        $('//*[@value = "moat"]').click()
        $('//*[@value = "traps"]').click()
        $('//*[@value = "large horses"]').click()  
        $('//*[@value = "spikes"]').click()
        $('//*[@value = "evil guards"]').click()
        $('//*[@value = "rubble"]').click()
        $('//*[@value = "none"]').click()
        $('//*[@value = "this is a castle"]').click()
        $('//*[@value = "castle picture"]').click()

        //verifies uploaded pictures
        $('(//img[contains (@src, "uitest")])[1]').click()
        $('//img[@alt="SampleJPGImage_5mbmb.jpg"]').click()       
    });

    it('should sign tech signature', () => { 
        $('(//*[text() = "SIGN NOW"])[1]').click()
        browser.frame()
        $('//signature-pad/canvas').waitForVisible()
        $('//signature-pad/canvas').click()
        $('//span[text() = "Save"]').click()
    });

});