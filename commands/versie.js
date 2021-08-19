const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("1.12.2 (Optifine is aangeraden voor de texturepack)")
    
}

module.exports.help = {
    name: "versie"
}