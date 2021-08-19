const discord = require("discord.js");
const util = require('minecraft-server-util');

module.exports.run = async (bot, message, args) => {
    

util.status('SecretMT.serv.nu')
    .then((response) => {
        
        if(response.samplePlayers === null){

            var serverEmbed2 = new discord.MessageEmbed()
        .setTitle("SecretMT")
        .setColor("#e01919")
        .addFields(
            {name:"IP", value:response.host},
            {name:"Online Spelers", value:response.onlinePlayers},
            {name:"Versie", value:"(Optifine) 1.12.2"},
            {name:"Spelers", value:"Geen spelers om weer te geven."})
        .setFooter("SecretMT.serv.nu", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png');
        

            message.channel.send(serverEmbed2)

        }else{
        
            yes = []
            res = response.samplePlayers

            response.samplePlayers.forEach(res => 
                yes.push(res.name)
            )
        

            var serverEmbed1 = new discord.MessageEmbed()
        .setTitle("SecretMT")
        .setColor("#e01919")
        .addFields(
            {name: "IP", value: response.host},
            {name: "Online Spelers", value: response.onlinePlayers},
            {name: "Versie", value: "(Optifine) 1.12.2"},
            {name: "Spelerlijst", value: yes})
            .setFooter("SecretMT.serv.nu", 'https://cdn.discordapp.com/attachments/876533790019846147/876768575019446282/scott_4x.png');


            message.channel.send(serverEmbed1)

        }

    })

    .catch((error) => {
        console.error(error);
    });
};

module.exports.help = {
    name: "serverinfo"
}