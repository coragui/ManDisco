const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_VOICE_STATES"]});

const ytdl = require("ytdl-core");

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ManDisco is ready Freddy to get down!');
});


client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case 'ping':
            client.commands.get('ping').execute(message,args);
            return;

        case 'play':
            client.commands.get('play').execute(message,args);
            return;

        case 'join':
            client.commands.get('join').execute(message,args);
            return;
    }
});

client.login('OTQ1NDM4Mjg3MDAxMTc4MTIy.YhQKBQ._NPxZLc8ED1NTkmkbZSLM0ZY9H4');