const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var sollicitatieEmbed = new discord.MessageEmbed()
    .setTitle("Sollicitatie Status")
    .setColor("#e01919")
    .addFields(
        {name: "Staff", value: "Gesloten", inline: true},
        {name: "Bouwer", value: "Open", inline: true}
    )
    .setFooter("SecretMT.serv.nu - Wil je solliciteren? Maak een ticket aan!", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png')

    return message.channel.send(sollicitatieEmbed);
    
}

module.exports.help = {
    name: "sollicitatie"
}