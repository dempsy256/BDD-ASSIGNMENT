Feature: Offline Downloads
  Scenario Outline: Downloading an album for offline listening
  Given a Premium user is viewing an album page while connected to Wi-Fi
  When the user toggles the "Download" switch
  Then a download progress icon should appear next to each track
  And the songs should be saved to the device's local storage


Scenario: Attempting to download without Wi-Fi (Cellular Data restriction)
  Given a user has "Download using cellular" turned off in settings
  When the user tries to download a podcast episode while on a 5G/4G network
  Then the download should be queued but paused
  And a prompt should notify the user that downloading will resume on Wi-Fi