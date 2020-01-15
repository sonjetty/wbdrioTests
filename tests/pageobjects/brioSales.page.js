var Page = require('./page')
 

class brioSales extends Page {
        /**
         * define elements
         */
        get tabAccounts () { return $('(//a[@title = "Accounts"])[1]'); }
        get tabMap () { return $('(//a[@title = "Map"])[1]'); }
        get tabLeaderboard () { return $('(//a[@title = "Leaderboard"])[1]'); }
        get tabReports () { return $('(//a[@title = "Reports"])[1]'); }
        get tabReference () { return $('(//a[@title = "Reference"])[1]'); }
        get tabLeads () { return $('//a[text() = " Leads "]'); }
        get tabMyCustomers () { return $('//a[text() = " My Customers "]'); }
        get tabCustomers () { return $('//a[text() = " Customers "]'); }
        get buttonAddNew () { return $('//div/span[@class = "icon-plus"]'); }

        //New Lead Section
        get fieldFirstName () { return $('//input[@name = "firstName"]'); }
        get fieldLastName () { return $('//input[@name = "lastName"]'); }
        get buttonLocateAddress () { return $('//span[text() = "Locate Address"]'); }
        get fieldPrimaryPhone() { return $('//input[@name="primaryPhone"]'); }
        get fieldSecondaryPhone () { return $('//input[@name="secondaryPhone"]'); }
        get fieldEmail () { return $('//input[@name="email"]'); }
        get buttonSave () { return $('//span[text() = "Save"]'); }
        get checkCall1 () { return $('(//*[text() = "Call"])[1]'); }
        get buttonAddNew () { return $('//div/span[@class = "icon-plus"]'); }
        get buttonAddNew () { return $('//div/span[@class = "icon-plus"]'); }
        get buttonAddNew () { return $('//div/span[@class = "icon-plus"]'); }
        get buttonAddNew () { return $('//div/span[@class = "icon-plus"]'); }



        

        
        /**
         * define or overwrite page methods
         */
        dropdownCompletion (dropdownName, dropdownIndex, selection){
            //let dropdown = $(`//div[text() = " ${dropdownName} "]/p-dropdown`); 
            browser.pause(500)
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).waitForExist();
            $(`//div[text() = " ${dropdownName} "]/p-dropdown`).click();
            //$(`(//input[@role])[${dropdownIndex}]`).waitForVisible()
            //$(`(//input[@role)[${dropdownIndex}]`).setValue(selection)
            //$(`//span[text() = "${selection}"]`).waitForVisible();
            $(`//span[text() = "${selection}"]`).click();
        }

  }

module.exports = new brioSales();