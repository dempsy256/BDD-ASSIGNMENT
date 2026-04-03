Feature: The AI DJ
  Scenario Outline: Launching the AI DJ
  Given a Premium user is on the Spotify Home tab
  When the user taps the "DJ" card
  Then the playback should start with an AI voiceover greeting the user by name
  And the DJ should play a curated song based on the user's recent listening history


Scenario: Switching the DJ's vibe
  Given the AI DJ is currently playing a set of acoustic songs
  When the user taps the DJ button in the bottom right corner of the player
  Then the DJ should interrupt the current track
  And provide a voiceover explaining a new genre or mood
  And transition into playing songs matching the new vibe