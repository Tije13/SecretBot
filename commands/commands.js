const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var botEmbed = new discord.MessageEmbed()
    .setTitle("Commands")
    .setColor("#e01919")
    .setDescription("Hier vind je alle commands van de bot.")
    .addFields(
        {name: "Probeer ze gerust uit.\n ", value: `**-** ?botinfo\n**-** ?commands\n**-** ?ip\n**-** ?regels\n**-** ?serverinfo\n**-** ?sollicitaties\n**-** ?stafflist\n**-** ?texturepack\n**-** ?versie`}
    )
    .setFooter("SecretMT.serv.nu", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png');
    
    
    
    
    


    return message.channel.send(botEmbed);
    
}

module.exports.help = {
    name: "commands"
}