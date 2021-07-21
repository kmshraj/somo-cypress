# somo-cypress
somo automation test


Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

If you get stuck, here is more help:

    Cypress Support

1. Install Cypress

Follow these instructions to install Cypress.
2. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to fork it first.

After forking this project in Github, run these commands:

## clone this repo to a local directory


## cd into the cloned repo
cd somo-cypress

## install the node_modules
npm install


You should see the Phonecat app up and running. We are now ready to run Cypress tests.
Running from the CLI

Same as running Cypress GUI but with cypress run command (and any CLI arguments)

cd somo-cpyress


# run Cypress tests headlessly
npx cypress run

# run Cypress tests with env variable

npx cypress run --env username=tomsmith,username2=toms,password=SuperSecretPassword!

### runs all example projects in specific browser
### similar to cypress run --browser <name>
npx cypress run -- --browser chrome

### sends test results, videos, screenshots
### to Cypress dashboard
npx cypress:run -- --record
