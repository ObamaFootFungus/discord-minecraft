# Minecraft to Discord Chat

This is just a simple way to connect your Minecraft and Discord chat.

### Requirements
- A spare minecraft account to use
- A computer / vm to run this program on

### Setup
1. Install [node.js](https://nodejs.org/en/download/)
2. Create a new application at [Discord's Developer Panel](https://discord.com/developers/applications)
3. Copy the token from the bot tab of the application
4. Open `config.json`
```json
"discord-token": "token" //Replace token with the token you copied
```
5. Open discord and make sure you have developer mode enabled found at `User Settings > Advanced > Developer Mode`
6. Right click your preferred server's icon and preferred channel and select `Copy ID`
7. Open `config.json`
```json
"discord-guild-id": "id" //Replace id with your discord server id

"discord-channel-id": "id" //Replace id with your discord channel id

"discord-char-limit-err": "message" //Replace message with your preferred character limit message

"mc-email": "email" //Replace email with your alt account's email/username depending on the account type

"mc-pass": "pass" //Replace pass with your alt account's password

"mc-ip": "ip" //Replace ip with your preferred minecraft server's ip

"mc-version": "version" //Replace version with your preferred minecraft version

"mc-prefix": "prefix" //Replace prefix with what you want to show before a player's username in-game

"mc-char-limit": 100 //Replace 100 with your preferred character limit for sending messages in minecraft. Default is 100
```
8. Follow [this guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to invite your discord bot to your server
9. Open cmd and cd into the directory where you have the bot
10. Run this first time use command `npm i`

### Starting the bot
- Repeat step 9 of the setup steps and run this command `node .`

### Warnings
- If the server you plan to use this bot on uses a custom non-vanilla chat plugin this will most likely not work and you will have to tweak the code.
- You may be banned from servers for using this so make sure you get permission.