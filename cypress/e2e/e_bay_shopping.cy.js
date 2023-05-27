describe('Suite',function()

{

    it('Ebday Shopping Task',function(){

        cy.visit("https://www.ebay.com/")
        cy.get('#gh-ac').type('Apple Watches')
        cy.get('#gh-cat').select('Everything Else')
        cy.get('#gh-btn').click().then(function(){
            cy.wait(5000)
        })
         cy.get('.srp-controls__count-heading').then($txt=>{

            const result = $txt.text()
            cy.log('Here Is the Total Number of the product: '+result)
        })
        cy.get('li[class="s-item s-item__pl-on-bottom"]').eq(9).then($product=>{

            const product10th = $product.text()
            cy.log('Here is the 10Th Product detail: '+product10th)
        })
        cy.get('li[class="s-item s-item__pl-on-bottom"]').find('span[role="heading"]').each(($e1,index,$list)=>{
            const allproduct = $e1.text()
            cy.log(allproduct)
        })

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})
