Feature: Text-to-Speech
  Scenario Outline: Converting a text sticker to speech
  Given a user has added a text layer saying "A Day in My Life" to the timeline
  When the user selects the text layer and taps "Text-to-Speech"
  And selects the "Narrator" voice option
  Then CapCut should generate an audio clip of the phrase
  And place the new audio clip on the timeline exactly synced with the start of the text layer


Scenario: Updating the text after generating speech
  Given a user has already generated an audio clip using Text-to-Speech
  When the user changes the text layer from "A Day in My Life" to "My Morning Routine"
  Then the existing audio clip should not change automatically
  And the user must tap Text-to-Speech again to regenerate the updated audio