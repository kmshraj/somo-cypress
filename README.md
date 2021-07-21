# somo-cypress
somo automation test

Somo Automation Engineer Take Home TestAssignmentCreate  selected 2 of the 4 exercises below and build out automated tests andtest cases around the elements:
●Form Authentication - ​http://the-internet.herokuapp.com/login

●Notification Messages - ​http://the-internet.herokuapp.com/notification_message_rendered


Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

If you get stuck, here is more help:

    Cypress Support

Git clone https://github.com/kmshraj/somo-cypress

Navigate to somo-cypress on visual studio code 

Follow these instructions to install Cypress.

npx install cypress

You should see
Downloade Cypress
Unzipped Cypress
Finished Cypress

## install the node_modules
npm install

# run  All Cypress tests headlessly
npx cypress run

# run Cypress tests with env variable

npx cypress run --env username=tomsmith,username2=toms,password=SuperSecretPassword!

### runs all example projects in specific browser
### similar to cypress run --browser <name>
npx cypress run -- --browser chrome

### sends test results, videos, screenshots
### to Cypress dashboard
npx cypress:run -- --record
