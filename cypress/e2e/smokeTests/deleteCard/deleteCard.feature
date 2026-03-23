Feature: Delete Card functionality

Scenario: User can delete existing card
  Given The user navigates to the board
  When The user creates a new card
  And The user opens the card
  And The user deletes the card
  Then The card should be deleted successfully