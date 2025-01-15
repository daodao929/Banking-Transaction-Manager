# Banking transaction management

## Main features
- View all transactions with pagination
- Add a new transaction
- Edit an existing transaction
- Delete a transaction

## How to run the application
NOTE: In this project, BASE_URL is set to `http://localhost:8080` by default in file `config.ts`, so you need to make sure the [backend service](https://github.com/daodao929/TransactionService) is running before you use the app.


### run app locally
Node version should be larger than 20
npm version should be larger than 10


use `npm run dev` to run the app locally

### run app in docker
To run the React application in a Docker container, could run command below:

```bash
sh start_app.sh
```

After running these commands, you can access the app at `http://localhost:3000`.

Note: Make sure your API URL in the app is configured correctly to reach your backend service from the containerized environment.