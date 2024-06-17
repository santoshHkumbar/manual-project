///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>

describe('bigbusket appliaction', () => {
    //login funcatinality  
    it.only('login with valid credential', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
                 return false;
        });
        //visit the website 
        cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
        cy.wait(2000)
        //cllik the login/sign up icon
        cy.get("button[data-bs-toggle='modal']").click()
        //cllik the logout first
        cy.xpath("(//div[@class='modal-content'])[1]")
        cy.wait(1000)
        cy.get("button[class='btn btn-danger']").click()
        cy.wait(2000)
         //cllik the login/sign up icon
        cy.get("button[data-bs-toggle='modal']").click()
        cy.wait(1000)
        // enter the username 
        cy.xpath("//input[@type='email']").type('santoshkumbar057@gmail.com').should('be.visible')
        cy.wait(1000)
          // enter the password
        cy.get("input[placeholder='Enter Password']").type('Santosh@1234')
        cy.wait(1000)
        //sign into the appliaction
        cy.get("input[value='Submit']").click()
     
      
    });
    it.skip('login with invalid password', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
           //visit the website 
          cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
          cy.wait(2000)
          //cllik the login/sign up icon
          cy.get("button[data-bs-toggle='modal']").click()
          //logout the page
          cy.xpath("(//div[@class='modal-content'])[1]")
          cy.wait(1000)
          cy.get("button[class='btn btn-danger']").click()
          cy.wait(2000)
          //clcik into login /signup page
          cy.get("button[data-bs-toggle='modal']").click()
          cy.wait(1000)
           // enter the username 
          cy.xpath("//input[@type='email']").type('santoshkumbar057@gmail.com').should('be.visible')
          cy.wait(1000)
          //enter the invalid password
          cy.get("input[placeholder='Enter Password']").type('Santosh6789')
          cy.wait(1000)
            //sign into the appliaction
          cy.get("input[value='Submit']").click()
         
      });

      it.skip('login with invalid email', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
          cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
          cy.wait(2000)
          cy.get("button[data-bs-toggle='modal']").click()
          cy.xpath("(//div[@class='modal-content'])[1]")
          cy.wait(1000)
          cy.get("button[class='btn btn-danger']").click()
          cy.wait(2000)
          cy.get("button[data-bs-toggle='modal']").click()
          cy.wait(1000)
          cy.xpath("//input[@type='email']").type('5678765444fghbjh').should('be.visible')
          cy.wait(1000)
          cy.get("input[placeholder='Enter Password']").type('Santosh6789')
          cy.wait(1000)
          cy.get("input[value='Submit']").click()
         
      });

      
      //visting the website the checking the page for performance testing
    it.skip('this is for page scrollup and scolldown', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
                cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
                cy.scrollTo(0,50000);
                cy.wait(1000)
                cy.scrollTo(0,-50000);
         
      });

        // funcatinality 
      it.skip('shop caterogly drop down and add product into cart', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
                cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
                cy.wait(2000)
                cy.scrollTo(0,15000);
                cy.wait(2000)
                cy.get("a[role='button']").click()
                cy.wait(3000)
                cy.contains("Foodgrains, Oil & Masala ").click()
                cy.wait(3000)
                cy.xpath("(//div[@class='card'])[1]").click()
                cy.wait(1000)
                cy.get("button[id='addtocart']").click()
                cy.wait(2000)
       
        
      });
      //add cart functinality
      it.skip('addcart function', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
            cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
            cy.wait(2000)
            cy.xpath("//input[@placeholder='Search for Products...']").type('Milky Chocolate');
            cy.wait(2000)
            cy.contains("Milky Chocolate Bar").click();
            cy.wait(1000)
            cy.xpath("(//input[@type='radio'])[1]").check().should('be.checked')
            cy.wait(1000)
            cy.get("button[id='addtocart']").click()
            cy.wait(1000)
            cy.reload()
              //cllik the login/sign up icon
            cy.get("button[data-bs-toggle='modal']").click()
            cy.wait(1000)
            // enter the username 
            cy.xpath("//input[@type='email']").type('santoshkumbar057@gmail.com').should('be.visible')
            cy.wait(1000)
            // enter the password
            cy.get("input[placeholder='Enter Password']").type('Santosh@1234')
            cy.wait(1000)
            //sign into the appliaction
            cy.get("input[value='Submit']").click()
                //clcik the addcart icon
            cy.get("i[class='fa-solid fa-bag-shopping text-white fs-6']").click(); 
            cy.wait(1000)
            cy.get('button.checkout').debug()
            cy.on('window:alert',(msg)=>{
                expect(msg).to.eq("Please add items🛒");
                return true;
            })
           // cy.contains("Home").click()
            //cy.wait(1000)
            //cy.reload() 
          //  div[class='p-2 rounded border cart btn btn-primary position-relative'] 
              
       
        
      });
            //Search Functionality
      it.only('serach product inside secach box', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
            cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
            cy.wait(2000)
            cy.xpath("//input[@placeholder='Search for Products...']").type('Milky Chocolate');
            cy.wait(2000)
            cy.contains("Milky Chocolate Bar").click();
            cy.wait(1000)
            cy.xpath("(//input[@type='radio'])[1]").check().should('be.checked')
            cy.wait(1000)
            cy.get("button[class='btngroup']").click()
            cy.wait(1000)
            cy.get("i[class='fa-solid fa-bag-shopping text-white fs-6']").click(); 
            cy.wait(1000)
                      
       
        
      });
      //search placholder should take any special characters and diffrent language not take 
      it.skip('search product inside with special characters not search product ', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
            cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
            cy.wait(2000)
            cy.xpath("//input[@placeholder='Search for Products...']").type('@#!');
            cy.wait(2000)
            cy.reload();
            cy.xpath("//input[@placeholder='Search for Products...']").type('ಡೈರಿ ಮಿಲ್ಕ್ ಚಾಕೊಲೇಟ್ಗಳು');
            cy.wait(2000)
      });



      it.skip('home page clcik the linking ', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
            cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
            cy.contains("Exotic Fruits & V...").click()
            cy.xpath("//a[@data-category='Fruits & Vegetables']").click()
            cy.wait(2000)         
            cy.xpath("(//input[@class='rating-checkbox'])[2]").check().should('be.checked')
            cy.wait(1000)
            cy.xpath("(//input[@class='price-checkbox'])[3]").check().should('be.checked')
            cy.wait(2000)  
            cy.xpath("(//input[@class='discount-radio'])[1]").check().should('be.checked')
            cy.wait(2000)  
            cy.xpath("(//button[@type='button'])[15]").click()
            cy.wait(5000)  
            cy.get("i[class='fa-solid fa-bag-shopping text-white fs-6']").click(); 
            cy.wait(1000)
       
        
      });
      
        //image carosuel -control check the funcatialy
      it.skip('carousel-control function', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
                   return false;
          });
            cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
            cy.wait(2000)
            cy.scrollTo(0,9000);
            cy.get("span[class='carousel-control-next-icon']").click();   
            cy.wait(2000)
            cy.get("span[class='carousel-control-next-icon']").click(); 
            cy.wait(2000)
              
       
        
      });
        //logout Functionality


        it.skip('logout function', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                       return false;
              });
              cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
              cy.wait(2000)
              cy.get("button[data-bs-toggle='modal']").click()
              cy.xpath("(//div[@class='modal-content'])[1]")
              cy.wait(1000)
              cy.get("button[class='btn btn-danger']").click()
              cy.wait(2000)
              cy.reload();
              cy.get("button[data-bs-toggle='modal']").click()
              cy.wait(1000)
           
           
            
          });



          it.skip('not logout function application', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                       return false;
              });
              cy.visit("https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/")
              cy.wait(2000)
              cy.get("button[data-bs-toggle='modal']").click()
              cy.xpath("(//div[@class='modal-content'])[2]")
              cy.wait(1000)
              cy.get("button[class='btn btn-success']").click()
              cy.wait(2000) 
            
          });
});




























    
    
    


