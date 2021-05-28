//Config
const config = require('./config.json');

//Discord setup
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(config['discord-token']);
var discordChannel;
client.on('ready', () => {
    discordChannel = client.guilds.cache.get(config['discord-guild-id']).channels.cache.get(config['discord-channel-id']);
})

//Minecraft setup
const mineflayer = require('mineflayer');
const options = {
    host: config['mc-ip'],
    username: config['mc-email'],
    password: config['mc-pass'],
    version: config['mc-version']
};
var bot = mineflayer.createBot(options);
StartBot(bot);
function StartBot(bot) {

    //Minecraft chat to discord
    bot.on('chat', (username, message) => {
        if (username !== bot.username) {
            discordChannel.send(`${username}: ${message}`);
        }
    })

    //Discord chat to minecraft
    client.on('message', message => {
        if (message.author.bot) return;
        if (message.channel == discordChannel) {
            const mcMessage = `${config['mc-prefix']}${message.author.username}: ${message.content}`;
            if (mcMessage.split('').length > config['mc-char-limit']) {
                return message.channel.send(config['discord-char-limit-err']);
            }
            bot.chat(mcMessage);
        }
    })

    //Auto-reconnect bot
    bot.on('end', () => {
        bot = mineflayer.createBot(options);
        StartBot(bot);
    });
}