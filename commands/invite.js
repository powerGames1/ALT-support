const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('invitation Bot')
            .setColor('RANDOM')
            .setTimestamp()
            .setURL('https://discord.com/oauth2/authorize?client_id=805084479789072404&permissions=1916267615&scope=bot'))
    },
    name: 'invite',
    help: {
        description: 'Cette commande permet d\'inviter le bot',
        syntax: 'invite'
    }
}