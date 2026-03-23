class templateCardActions {

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    convertToTemplate(cardName){
        cy.contains(cardName).click()
        cy.findByTestId('card-back-actions-button').click() 
      cy.contains("Make Template").click()
        return this
    }

    editCardName(cardName, templateName){
        cy.contains(cardName).click()
        cy.findByTestId("card-back-title-input").clear().type(templateName)
        cy.findByTestId("list-wrapper").click()
        return this
    }

    moveCard(cardName, ListName){
       cy.contains(cardName).click()
       cy.findByTestId('card-back-actions-button').click() 
       cy.contains("Move").click()
       cy.findByTestId("move-card-popover-select-list-destination-select--input-container").select(ListName)
       cy.findByTestId("move-card-popover-move-button").click()
       return this
    }

    hideCard(cardName){
        cy.contains(cardName).click()
        cy.findByTestId('card-back-actions-button').click() 
        cy.get("yPOAek9SNQvdwg").click()
        return this
    }
}

export default templateCardActions