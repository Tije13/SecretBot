const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("https://texturepacks.dusdavidgames.nl/Minetopia_v1.12_Latest.zip (Optifine is aangeraden voor de texturepack)")
    
}

module.exports.help = {
    name: "texturepack"
}