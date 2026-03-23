import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";

const dataUtil = new dataUtils()
const action = new deleteCardActions()
const assertion = new deleteCardAssertions()

const boardName = "cy-board"
const cardName = "cy-card"
let boardId , boardUrl,cardId,listId

before(()=>{
    dataUtil.createBoard(boardName).then((response)=>{
        boardId = response.body.id
        boardUrl = response.body.url

     dataUtil.createList(boardId, "ToDo").then((response)=>{
        listId = response.body.id
    })
    })
    cy.loginToTrello()
})

Given("The user navigates to the board",()=>{
    action.openBoard(boardUrl)
})

When("The user creates a new card",()=>{
    dataUtil.createCard(listId, cardName).then((response)=>{
        cardId = response.body.id
    })
})

When("The user opens the card",()=>{
    cy.reload()
    action.openCard(cardName)
})

When("The user deletes the card",()=>{
    dataUtil.deleteCard(cardId)
})

Then("The card should be deleted successfully",()=>{
    assertion.checkCardDeleted(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})