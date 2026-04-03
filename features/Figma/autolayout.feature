Feature: Autolayout in Figma
  Scenario Outline: Applying Auto Layout to group elements
  Given a user has selected a text layer and a rectangle layer on the canvas
  When the user presses the "Shift + A" keyboard shortcut
  Then the two layers should be grouped into an Auto Layout frame
  And the elements should automatically align based on the default padding settings

  
Scenario: Adjusting spacing in an Auto Layout frame
  Given a user has selected an existing Auto Layout frame containing three buttons
  When the user changes the "Horizontal gap between items" value from 10px to 24px in the right-side properties panel
  Then the spacing between the buttons within the frame should instantly increase to 24px


