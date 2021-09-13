Integrate API
=============
##### API Rest to make a integration with Pipedrive (CRM), Bling (ERP) and MongoDB (database)
###### Author: Eduardo Andrade


#### Before getting started, we must install some dependencies:

| Dependency | Link |
| ------ | ------ |
|  Node  | https://nodejs.org/ |
|  NPM   | https://www.npmjs.com/ |
| MongoDB | https://www.mongodb.com/ |
| API Key | https://www.bling.com.br |
| API Key | https://www.pipedrive.com |

# Getting Started

I prepared an easy way to run this project locally:

1. Clone this repository:
```
git clone git@github.com:eduardo-andrade/pipedrive-and-bling-api.git
```
2. Install the dependencies with the terminal command:
```
npm install
```
3. Copy and rename the archive local.env to .env (to use the local variables(API Keys and database URL)) with the terminal command:
```
cp local.env .env
```
4. In the correct working directory, start the project with the terminal command:
```
npm start
```
cp local.env .env
# About project: How it works
## Gettint orders(oportunities) from Pipedrive, register the same orders in Bling and save in a database MongoDB
#### Endpoints (default port: 3000)

/start: **get and register new oportunities/orders

/pipedrive-sales: **get only the new oportunities/orders from Pipedrive

/sales: **get and the oportunities/orders from the day

/total-sales: **get the some of total value of oportunities/order

# About Tech inside

- Node.js
- Express.js
- MongoDB


