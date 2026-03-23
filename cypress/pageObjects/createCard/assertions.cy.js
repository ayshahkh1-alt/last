class createCardAssertions {
    checkCardTitleIsContain(cardName){
        cy.findByTestId("card-name").should('contain',cardName)
        return this
    }
}
export default createCardAssertions;