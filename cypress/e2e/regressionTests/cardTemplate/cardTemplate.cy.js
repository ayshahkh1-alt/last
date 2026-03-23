import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import templateCardActions from "../../../pageObjects/cardTemplate/actions.cy";
import templateCardAssertions from "../../../pageObjects/cardTemplate/assertions.cy";


const action = new templateCardActions()
const assertion = new templateCardAssertions()

const boardName = "cy-board"
const cardName = "cy-card"
const templateName="cy-template"
let boardId , boardUrl,listId , listName

before(()=>{
    dataUtil.createBoard(boardName).then((response)=>{
        boardId = response.body.id
        boardUrl = response.body.url

     dataUtil.createList(boardId, "ToDo").then((response)=>{
        listId = response.body.id
        listName=response.body.name
    })
    })
    cy.loginToTrello()
})

Given("The user navigates to the board", () => {
    action.openBoard(boardUrl);
});

When('The user creates a new card {string}', (cardName) => {
    dataUtil.createCard(listId,cardName)
});

When('The user converts it to template', () => {
    action.convertToTemplate("Template Card");
});

Then('The template card should exist {string}', (cardName) => {
    assertion.checkCardExist(cardName);
});

When('The user edits card name from {string} to {string}', (cardName,templateName) => {
    action.editCardName(cardName, templateName);
});

When('The user moves template {string} to {string}', (cardName, listName) => {
    action.moveCard(cardName, listName);
});

Then('The template card should exist in list {string}', (listName) => {
    assertion.checkTemplateCardExistInList(templateName, listName)
});

When('The user hides template {string}', (cardName) => {
    action.hideCard(cardName);
});

Then('The template card should be hidden {string}', (cardName) => {
    assertion.checkCardHidden(cardName);
});