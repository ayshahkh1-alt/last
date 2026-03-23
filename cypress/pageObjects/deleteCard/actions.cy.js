class deleteCardActions {

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this
    }

    openCard(cardName){
        cy.contains(cardName).click()
        return this
    }

}

export default deleteCardActions