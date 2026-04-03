Feature: Real-Time Collaboration
  Scenario Outline: Viewing another user's live cursor
  Given User A and User B are both viewing the same Figma design file
  When User B moves their mouse across the canvas
  Then User A should see User B's cursor moving in real-time
  And the cursor should display User B's name next to it


Scenario: Following another user's view
  Given User A wants to see exactly what User B is looking at
  When User A clicks on User B's avatar in the top right toolbar
  Then User A's viewport should automatically snap to User B's current view
  And User A's screen should follow User B's screen movements until User A clicks away