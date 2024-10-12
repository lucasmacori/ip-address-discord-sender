# Setup

### Install the dependencies
```sh
npm install
```

### Setting up the Discord bot
Rename or copy the ".env.example" file and change the Discord token as well as the discord channel id.

### Executing the script
Execute the script using nodejs by running the following command
```sh
node ./main.mjs
```

You can use this script in a cron to run automatically every x minutes.
The script will check the IP with the previous one and sends the message to Discord if the IP has changed.