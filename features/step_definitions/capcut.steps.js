const { Given, When, Then } = require('@cucumber/cucumber');

// --- Auto Captions ---
Given('a user has imported a video containing spoken English audio onto the timeline', async function () {
  // Load a mock project state with a video clip on Track 1
});

When('the user selects {string} and taps {string}', async function (menuItem, subMenuItem) {
  // Traverse the UI menus based on the provided strings
});

Then('CapCut should process the audio', async function () {
  // Wait for the caption generation loading bar to reach 100%
});

Then('accurate text blocks matching the speech should be automatically placed on the text track', async function () {
  // Assert that a new subtitle track exists and contains text objects
});

Given('the auto-caption tool has generated the text {string} instead of {string}', async function (incorrectText, correctText) {
  // Seed the timeline with a caption block containing incorrectText
});

When('the user double-taps the specific text block on the timeline', async function () {
  // Trigger double-click event on the timeline element
});

When('corrects the text to {string}', async function (newText) {
  // Input the newText string into the active input field
});

Then('the specific caption should update in the video preview without altering the timing of the clip', async function () {
  // Assert preview canvas displays the new text and that start/end timestamps remain unchanged
});



// --- Background Removal ---
Given('a user has selected a video clip of a person dancing in front of a busy street', async function () {
  // Load video asset into the editor selection state
});

When('the user applies the {string} tool', async function (toolName) {
  // Click the background removal function
});

Then('CapCut\'s AI should identify the person', async function () {
  // Wait for the masking API to return a subject outline
});

Then('remove the street background, leaving the background transparent', async function () {
  // Assert the alpha channel of the video layer is 0 outside the subject mask
});



// --- Text-to-Speech ---
Given('a user has added a text layer saying {string} to the timeline', async function (phrase) {
  // Inject a text element into the timeline containing the specific phrase
});

When('selects the {string} voice option', async function (voiceType) {
  // Click the specific voice profile in the TTS menu
});

Then('CapCut should generate an audio clip of the phrase', async function () {
  // Wait for audio generation task to resolve
});

Then('place the new audio clip on the timeline exactly synced with the start of the text layer', async function () {
  // Assert that a new audio clip exists and its startTime equals the text layer's startTime
});

When('the user changes the text layer from {string} to {string}', async function (oldText, newText) {
  // Update the text property of the selected timeline element
});

Then('the existing audio clip should not change automatically', async function () {
  // Assert the audio blob hash/ID remains exactly the same as before the edit
});

Then('the user must tap Text-to-Speech again to regenerate the updated audio', async function () {
  // Verify that the UI prompts the user or shows an 'out of sync' indicator
});