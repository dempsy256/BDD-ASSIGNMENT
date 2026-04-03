Feature: Auto Captions
  Scenario Outline: Generating captions from a voiceover
  Given a user has imported a video containing spoken English audio onto the timeline
  When the user selects "Text" and taps "Auto Captions"
  Then CapCut should process the audio
  And accurate text blocks matching the speech should be automatically placed on the text track


Scenario: Editing a generated caption
  Given the auto-caption tool has generated the text "Hello word" instead of "Hello world"
  When the user double-taps the specific text block on the timeline
  And corrects the text to "Hello world"
  Then the specific caption should update in the video preview without altering the timing of the clip