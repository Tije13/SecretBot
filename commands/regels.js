const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var regelEmbed = new discord.MessageEmbed()
    .setTitle("Regels")
    .setColor("#e01919")
    .addFields(
        {name: "Link", value: "https://docs.google.com/document/d/1tb2G_oxnvJK9TF6Qz0k9RGtKdguaYSefTK14_4O1gJQ/edit?usp=sharing"}
    )
    .setFooter("SecretMT.serv.nu", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png')

    return message.channel.send(regelEmbed);
    
}

module.exports.help = {
    name: "regels"
}