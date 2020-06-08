const { Client, MessageEmbed } = require('discord.js');
const { prefix, channel, token } = require('./config.json');
const client = new Client();

client.on('ready', () => {
    client.user.setActivity('over servers™ | By Loertis#4335', { type: 'WATCHING' })
    message.channel.send("Bot Booted, you can delete this message in index.js on line 13.")
})

client.on('message', message => {
    if (message.channel.id == channel) {
      if (!message.content.startsWith("/")) {
        message.react("👍");
        message.react("👎");
        message.react("🤔");
      }
    }
});

client.login(token); 
