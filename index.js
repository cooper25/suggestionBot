const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const rover = require('rover-api')
client.login(token); 

/* Variables */

/* Code */

client.on('ready', () => {
    console.log('Bot Booted');
    client.user.setActivity('over Buildr™', { type: 'WATCHING' })
})

client.on('message', message => {


    if (message.content === '-add status') {
      var ping = message.author.id 
      message.member.roles.add("705253403336376383")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-add offsite') {
      var ping = message.author.id 
      message.member.roles.add("696840267692769380")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-add roblox') {
      var ping = message.author.id 
      message.member.roles.add("696840268233572352")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-add development') {
      var ping = message.author.id 
      message.member.roles.add("718199260071591958")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-remove status') {
      var ping = message.author.id 
      message.member.roles.remove("705253403336376383")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-remove offsite') {
      var ping = message.author.id 
      message.member.roles.remove("696840267692769380")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-remove roblox') {
      var ping = message.author.id 
      message.member.roles.remove("696840268233572352")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.content === '-remove development') {
      var ping = message.author.id 
      message.member.roles.remove("718199260071591958")
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " Success!")
      message.channel.send(embed) 
    }
    if (message.channel.name == "suggestions") {
      if (message.content.startsWith("/")) {

      } else {
        message.react("👍");
        message.react("👎");
        message.react("🤔");
      }
    }

    if (message.content === '-webban') {
        message.reply(message.author.displayAvatarURL());
    }

    if (message.content === '-avatar') {
      message.reply(message.author.displayAvatarURL());
    }

    if (message.content === '-robloxid') {
      url='https://verify.eryn.io/api/user/307273393600724994'
      $.ajax({
        url:url, 
        dataType:"jsonp",
        async: true,
        crossDomain:true
      }).then(function(data) {
        if (data.robloxId) {
          message.channel.send(data.robloxId)
        }
      });
    }

    if (message.content.includes('nig') || message.content.includes('nigger') || message.content.includes('NIGGER') || message.content.includes('dick') || message.content.includes('asshole') || message.content.includes('fuck u') || message.content.includes('FUCK YOU') ||  message.content.includes('FUCK') || message.content.includes('fuck you') || message.content.includes('cunt') || message.content.includes('bitch') || message.content.includes('fuck you bitch')) {
      var ping = message.author.id
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("<@!" + ping + ">" + " That word's not allowed. 🤦")
      message.delete();
      message.channel.send(embed) 
    }

    if (message.content.includes('help') || message.content.includes('help me')  || message.content.includes('-help') || message.content.includes('-support') || message.content.includes('confused') || message.content.includes('dumb') || message.content.includes('this is so dumb') || message.content.includes('support')){
      var userName = message.author.username
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setTitle("Need Help, " + userName + "?")
      .setDescription("Read the support page for help with some common issues. (https://beta.mybuildr.dev/support)")
      .setFooter("Still Stuck? DM Support Bot with your issue and a support rep will respond!")
      message.channel.send(embed) 
    }

    if(message.content === '-stop' && message.author.id === ('307273393600724994')) {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription("✅ Stopping..")
        message.channel.send(embed) 
        process.exit(1);
    }

    if (message.content === '-golden'){
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
            message.channel.send("<@!453313471455428626>");
    }

    if (message.content === '-loertis'){
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
          message.channel.send("<@!307273393600724994>");
    }

    if (message.content === '-orange'){
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
            message.channel.send("<@!334491250105384960>");
  }

        if (message.content === '-down' && message.author.id === ('307273393600724994')) {
            const embed = new MessageEmbed()
            .setColor(0xff6c00)
            .setTitle("Website Down")
            .setDescription("The website is down because of an error.")
            client.channels.cache.get('699672546035105792').send(embed)
            client.channels.cache.get('699672546035105792').send("@here")  
    } else if (message.content === '-down') {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription("🚫 You don't have admin!")
        message.channel.send(embed) 
    }

    if (message.content === '-maintenance' && message.author.id === ('307273393600724994')) {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setTitle("Website Maintenance")
        .setDescription("The website is down for maintenance.")
        client.channels.cache.get('699672546035105792').send(embed)
        client.channels.cache.get('699672546035105792').send("@here")  
    } else if (message.content === '-maintenance') {
    const embed = new MessageEmbed()
    .setColor(0xff6c00)
    .setDescription("🚫 You don't have admin!")
    message.channel.send(embed) 
    }

    if (message.content === '-up' && message.author.id === ('307273393600724994')) {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setTitle("Website Online")
        .setDescription("The website is now online!")
        client.channels.cache.get('699672546035105792').send(embed)
        client.channels.cache.get('699672546035105792').send("@here") 
    } else if (message.content === '-up') {
    const embed = new MessageEmbed()
    .setColor(0xff6c00)
    .setDescription("🚫 You don't have admin!")
    message.channel.send(embed) 
    }

    
    if (!message.guild) return;
    if (message.content.startsWith('-kick') && message.member.hasPermission("ADMINISTRATOR")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick(' ')
            .then(() => {
              const embed = new MessageEmbed()
              .setColor(0xff6c00)
              .setDescription(`Kicked ${user.tag}`)
              message.channel.send(embed) 
            })
            .catch(err => {
                const embed = new MessageEmbed()
                .setColor(0xff6c00)
                .setDescription("🚫 User can't be kicked.")
                message.channel.send(embed) 
              console.error(err);
            });
        } else {
            const embed = new MessageEmbed()
            .setColor(0xff6c00)
            .setDescription("🚫 That user doesn't exist?")
            message.channel.send(embed) 
        }
        // Otherwise, if no user was mentioned
      } else {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription("🚫 Please mention a user.")
        message.channel.send(embed) 
      }
    }
    if (!message.guild) return;
    if (message.content.startsWith('-ban') && message.member.hasPermission("ADMINISTRATOR")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban(' ')
            .then(() => {
              const embed = new MessageEmbed()
              .setColor(0xff6c00)
              .setDescription(`Banned ${user.tag}`)
              message.channel.send(embed) 
            })
            .catch(err => {
                const embed = new MessageEmbed()
                .setColor(0xff6c00)
                .setDescription("🚫 User can't be banned.")
                message.channel.send(embed) 
              console.error(err);
            });
        } else {
            const embed = new MessageEmbed()
            .setColor(0xff6c00)
            .setDescription("🚫 That user doesn't exist?")
            message.channel.send(embed) 
        }
        // Otherwise, if no user was mentioned
      } else {
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription("🚫 Please mention a user.")
        message.channel.send(embed) 
      }
    }

    if (message.content === "-lockdown" && message.member.hasPermission("ADMINISTRATOR")) {
      message.guild.roles.cache.get('696777380630495322').overwritePermissions({SEND_MESSAGES: false});
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("Locked")
      message.channel.send(embed) 
    }

    if (message.content === "-unlock" && message.member.hasPermission("ADMINISTRATOR")) {
      message.guild.roles.cache.get('696777380630495322').overwritePermissions({SEND_MESSAGES: true});
      const embed = new MessageEmbed()
      .setColor(0xff6c00)
      .setDescription("Unlocked")
      message.channel.send(embed) 
    }


    /* if (message.content === '-toggle status' && message.author.roles !== ('705253403336376383')) {
        var user = message.author.username
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription(user + ", Role added.")
        message.author.roles.cache.add(['705253403336376383'])
        message.channel.send(embed) 
    } else if (message.content === '-toggle status' && message.author.roles === ('705253403336376383')) {
        var user = message.author.username
        const embed = new MessageEmbed()
        .setColor(0xff6c00)
        .setDescription(user + ", Role removed.")
        message.author.remove(['705253403336376383'])
        message.channel.send(embed) 
    } */

});

client.login(token); 