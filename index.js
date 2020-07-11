const { Client, MessageEmbed } = require('discord.js');
const { prefix, channel, token } = require('./config.json');
const client = new Client();

client.on('ready', () => {
    client.user.setActivity('over servers™ | By Loertis#4335', { type: 'WATCHING' })
})

client.on('message', async message => {
    if (message.channel.id == channel) {
      if (!message.content.startsWith("/")) {
        await message.react("👍");
        await message.react("👎");
        await message.react("🤔");
      }
    }
});

client.login(token); 
