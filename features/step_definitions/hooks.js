
const { BeforeAll, Before, After, AfterAll, Status } = require('@cucumber/cucumber');

BeforeAll(async function () {
  // This runs once before any scenarios are executed.
  console.log('Starting the test suite...');
});

AfterAll(async function () {
  // This runs once after all scenarios have finished.
  console.log('Finished the test suite. Cleaning up...');
});


Before(async function (scenario) {
  // Example: Resetting the state before a new scenario starts
  this.resetState(); 
  
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

After(async function (scenario) {
  // Good for: Taking screenshots on failure, clearing cookies, or closing tabs.

  if (scenario.result?.status === Status.FAILED) {
    console.error(` Scenario failed: ${scenario.pickle.name}`);
    
  } else {
    console.log(` Scenario passed: ${scenario.pickle.name}`);
  }

  // Example: Clear out the timeline clips array after a CapCut test
  this.timelineClips = [];
});

Before({ tags: '@PremiumUser' }, async function () {
  // This hook will ONLY run before scenarios tagged with @PremiumUser
  // Good for: Setting up specific authentication states for paid users
  this.currentUser = 'premium_account';
});