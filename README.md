# BDD-ASSIGNMENT

##  Project Structure

The framework is organized to clearly separate test scenarios, step definitions, and page interactions:

```text
├── cucumber.js                 # Main Cucumber configuration file
├── package.json                # Project dependencies and scripts
└── features/
    ├── figma.feature           # Gherkin scenarios for Figma
    ├── spotify.feature         # Gherkin scenarios for Spotify
    ├── capcut.feature          # Gherkin scenarios for CapCut
    │
    ├── pages/                  
    │   ├── BasePage.js         
    │   ├── FigmaPage.js        # Locators/methods for Figma
    │   ├── SpotifyPage.js      # Locators/methods for Spotify
    │   └── CapCutPage.js       # Locators/methods for CapCut
    │
    ├── step_definitions/       # Code mapping Gherkin to Page actions
        └── steps.js files           # Cucumber Given/When/Then functions
        ├── hooks.js            # Before/After scenario hooks
        └── world.js            # Shared state context (`this`)