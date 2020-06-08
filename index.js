const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
client.login(token); 

/* Variables */

/* Code */

client.on('ready', () => {
    console.log('Bot Booted');
    client.user.setActivity('over servers™ | By Loertis#4335', { type: 'WATCHING' })
})

client.on('message', message => {
    if (message.channel.name == "suggestions") {
      if (message.content.startsWith("/")) {

      } else {
        message.react("👍");
        message.react("👎");
        message.react("🤔");
      }
    }

});

client.login(token); 
