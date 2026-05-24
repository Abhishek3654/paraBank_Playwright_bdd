Parabank Playwright BDD Automation
End-to-end test automation for ParaBank using Playwright, Cucumber BDD, and Page Object Model (POM).
________________________________________
🛠 Tech Stack
Tool	Purpose
Playwright	Browser automation
Cucumber BDD	BDD test runner
TypeScript	Language
ts-node	TypeScript execution
________________________________________
📁 Project Structure
parabank-playwright-bdd/
├── features/
│   ├── signup.feature              
│   └── step-definitions/
│       └── signup.steps.ts          
├── pages/                           
│   ├── RegisterPage.ts
│   ├── LoginPage.ts
│   └── AccountOverviewPage.ts
├── test-data/
│   └── test-data.json               
├── reports/                         
├── screenshots/                     
├── cucumber.js                      
├── tsconfig.json
└── package.json
________________________________________
Test Scenarios Covered
TC ID	Scenario	Tag
TC_001	Successful user registration	@smoke @registration
TC_005	Login with valid credentials	@smoke @login
TC_006	Login with invalid password	@negative @login
TC_008	Login with empty credentials	@negative @login
TC_019	User logout	@smoke @logout
TC_020	Full E2E: Register → Login → Balance	@smoke @e2e
________________________________________
Framework Design
BDD (Behaviour-Driven Development)
•	Scenarios written in Gherkin (Given / When / Then)
•	Tags used for test grouping: @smoke, @negative, @e2e, @registration, @login, @logout
Page Object Model (POM)
Each page is represented by a class with:
•	Locators defined as private readonly fields at the top
•	Action methods that perform interactions
•	No test logic inside page classes
Hooks
•	Before: launches browser, creates page, generates unique username
•	After: closes browser regardless of test outcome
________________________________________
Reports
After running tests, an HTML report is generated at:
reports/cucumber-report.html
________________________________________
Author
Abhishek Kamble
QA Automation Engineer | TCS | Pune
Stack: Playwright · TypeScript · Cucumber BDD · POM

