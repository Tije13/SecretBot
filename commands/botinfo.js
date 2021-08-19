const discord = require("discord.js");
const util = require('minecraft-server-util');

module.exports.run = async (bot, message, args) => {
    

    var botInfoEmbed = new discord.MessageEmbed()
    .setTitle("Botinfo")
    .setColor("#e01919")
    .addFields(
        {name: "Bot Manager", value: "Tije Meijer#0013"},
        {name: "Datum Gemaakt:", value: "13-08-2021"},
    )

    .setImage('https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png')
    .setFooter("SecretMT.serv.nu", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png');
    
        return message.channel.send(botInfoEmbed);
}

module.exports.help = {
    name: "botinfo"
}