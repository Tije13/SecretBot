// Basic Const

const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const bot = new discord.Client();
const ping = require('minecraft-server-util')

//Command Handler



const fs = require("fs");
const { join } = require("path");

bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <=0){
        console.log("Er zijn geen commando's gevonden");
        return;
    }
    jsfiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`${f} is gereed`)

        //commando's
        bot.commands.set(fileGet.help.name, fileGet);

    });

});

//Events

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('484712464374693888');

    if(!role) return;

    member.roles.add(role);
});



//Opstarten

bot.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;


    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    let args = message.content.substring(botConfig.prefix.length).split(' ')
    var commands = bot.commands.get(command.slice(prefix.length));
    
    if (!message.content.startsWith('?')) return;
    
    if(commands) commands.run(bot, message, args);

    

});




bot.on("ready", async () =>{

    console.log(`${bot.user.username} Is Opgestart`)
    bot.user.setActivity("op SecretMT", {type: "PLAYING"});

});

bot.login(botConfig.token);