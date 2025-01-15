## How to run the application
Node version should be larger than 20
npm version should be larger than 10

### run app locally
use `npm run dev` to run the app locally

### run app in docker
To run the React application in a Docker container, could run command below:

```bash
sh start_app.sh
```

After running these commands, you can access the app at `http://localhost:3000`.

Note: Make sure your API URL in the app is configured correctly to reach your backend service from the containerized environment.