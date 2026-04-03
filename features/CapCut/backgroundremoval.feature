Feature: Background Removal
  Scenario Outline: Removing the background of a human subject
  Given a user has selected a video clip of a person dancing in front of a busy street
  When the user applies the "Auto Cutout" (Background Removal) tool
  Then CapCut's AI should identify the person
  And remove the street background, leaving the background transparent


Scenario: Using the Chroma Key tool (Green Screen)
  Given a user has imported a video featuring a green screen background
  When the user selects "Chroma Key", picks the green color with the color picker, and increases the intensity slider
  Then all green pixels in the video should become transparent
  And the layer beneath the video on the timeline should become visible