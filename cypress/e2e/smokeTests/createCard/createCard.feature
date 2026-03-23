Feature: Create Card functionality

    Scenario: Validate that hte user can create a card
        Given The user navigates to the board
        When The user Clicks on Add a card button
        And The user types card title in card title input field
        And The user clicks on add card button
        Then The card should be created successfully