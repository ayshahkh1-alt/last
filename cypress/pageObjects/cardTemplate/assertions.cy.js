class templateCardAssertions {

    checkCardExist(cardName){
        cy.contains(cardName).should("exist")
        return this
    }
checkTemplateCardExistInList(cardName, listName){
    cy.contains(listName).contains(cardName).should("exist");
}
    checkCardHidden(cardName){
        cy.contains(cardName).should("not.exist")
        return this
    }
}

export default templateCardAssertions