describe('Test masuk URL', () => {
    it('Verifikasi login gagal', () => {
      cy.visit('https://twitter.com/')
      cy.wait(5000); // Wait for 5 seconds
      cy.get('[data-testid="signupButton"] > .css-1rynq56').click()
      cy.wait(5000);
      cy.get('[name="name"]').type('didin bubur')
      cy.get('[name="email"]').type('indramartayuda69@gmail.com')
    //   cy.get('#SELECTOR_4').click();
      cy.get('.r-16xksha').click()
      cy.get('[data-testid="ocfSignupNextLink"] > .css-1rynq56').click


      
      

  
    })
  })