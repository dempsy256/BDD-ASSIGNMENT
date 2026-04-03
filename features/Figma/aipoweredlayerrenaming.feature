Feature: AI-Powered Layer Renaming
  Scenario Outline: Automatically renaming a messy layer
  Given a user has a layer generically named "Rectangle 43" containing a profile picture
  When the user triggers the "Rename layers automatically" AI feature
  Then Figma should analyze the content of the layer
  And the layer name should be updated to "Profile_Avatar"


Scenario: Bulk renaming layers
  Given a user selects multiple layers named "Group 1", "Group 2", and "Group 3"
  When the user applies the automatic rename feature
  Then all selected layers should be sequentially renamed based on their visual content