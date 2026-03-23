Feature: Template Card functionality

Scenario: User can create a template card
  Given The user navigates to the board
  When The user creates a new card "Template Card"
  And The user converts it to template
  Then The template card should exist "Template Card"

Scenario: User can update template name
  When The user edits card name from "Template Card" to "Updated Template"
  Then The template card should exist "Updated Template"

Scenario: User can move template to another list
  When The user moves template "Updated Template" to "Done"
  Then The template card should exist in list "Done"

Scenario: User can hide template
  When The user hides template "Updated Template"
  Then The template card should be hidden "Updated Template"