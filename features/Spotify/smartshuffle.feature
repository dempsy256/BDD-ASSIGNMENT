Feature: Smart Shuffle
  Scenario Outline: Activating Smart Shuffle on a playlist
  Given a user is listening to their custom "Workout" playlist
  When the user taps the Shuffle button twice to activate "Smart Shuffle"
  Then the Smart Shuffle icon should highlight with a sparkle indicator
  And Spotify should insert personalized song recommendations into the current play queue


Scenario: Skipping a Smart Shuffle recommendation
  Given Smart Shuffle is active and playing an algorithmic recommendation
  When the user taps the "Skip" button
  Then the track should stop playing
  And Spotify should instantly play the next track in the queue
  And the algorithm should log this skip to refine future recommendations