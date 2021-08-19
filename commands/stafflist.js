const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var staffEmbed = new discord.MessageEmbed()
    .setTitle("Staff Lijst")
    .setColor("#e01919")
    .addFields(
        {name: "Owner", value: "PeterIngmar"},
        {name: "Co-Owner", value: "EgonFormsma"},
        {name: "Admim", value: "Geen"},
        {name: "Developer", value: "Geen"},
        {name: "Moderator", value: "BadaapjeTije"},
        {name: "Helper", value: "Geen"},
        {name: "Bouwer", value: "Geen"}
    )
    .setFooter("SecretMT.serv.nu - Wil je solliciteren? Doe ?sollicitatie", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png')

    return message.channel.send(staffEmbed);
    
}

module.exports.help = {
    name: "stafflist"
}