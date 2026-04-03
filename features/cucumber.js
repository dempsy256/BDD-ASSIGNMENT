module.exports = {
  default: {
    // 1. Where are your Gherkin feature files located?
    paths: [
      "features/**/*.feature"
    ],

    // 2. Where is your JavaScript code (Steps, World, Hooks) located?
    require: [
      "features/step_definitions/**/*.js", // Loads all your step definitions
      "features/support/**/*.js"           // Loads world.js and any setup hooks
    ],

    // 3. How do you want the test results reported?
    format: [
      "progress-bar",                 // Shows a loading bar in the terminal
      "summary",                      // Prints a summary at the end
      "html:reports/cucumber-report.html", // Generates a nice HTML webpage report
      "json:reports/cucumber-report.json"  // Generates a JSON report (good for CI/CD)
    ],

    // 4. Extra formatting options
    formatOptions: {
      snippetInterface: "async-await" // When Cucumber suggests missing steps, it uses async/await syntax
    },

    // 5. General execution flags
    parallel: 2,           // Runs up to 2 scenarios at the same time to speed up testing
    publishQuiet: true     // Hides the prompt asking if you want to publish results to the cloud
  }
};