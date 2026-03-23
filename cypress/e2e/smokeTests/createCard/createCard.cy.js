/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/dataUtils.cy";
import createCardActions from "../../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../../pageObjects/createCard/assertions.cy";

const dataUtil = new dataUtils()
const cardAction = new createCardActions()
const cardAssertion = new createCardAssertions()

const boardName = "cy-Board"
const cardName = "cy-card-title"
let boardId , boardUrl 

before(()=>{
    dataUtil.createBoard(boardName).then((response)=>{
        boardId = response.body.id
       boardUrl = response.body.url
    })
    cy.loginToTrello()
})

Given("The user navigates to the board",()=>{
    cardAction.openBoard(boardUrl)
})

When("The user Clicks on Add a card button",()=>{
    cardAction.clickOnAddACardButton()
})

When("The user types card title in card title input field",()=>{
    cardAction.typeCardNameInCardTitleInput(cardName)
})

When("The user clicks on add card button",()=>{
    cardAction.clickOnAddCardButton()
})

Then("The card should be created successfully",()=>{
    cardAssertion.checkCardTitleIsContain(cardName)
})

after(()=>{
    dataUtil.deleteBoard(boardId)
})