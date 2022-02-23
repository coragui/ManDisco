module.exports = {
    name: 'play',
    description: "Joins and play a video from youtube!",
    execute: (message,args) =>{
       
        const ytdl = require('ytdl-core');
        const url = args[0];

        if(!url) return message.channel.send('No url brotha');
        
        const Discord = require('@discordjs/voice');
        const stream = ytdl(url, {filter: 'audioonly'});

        const channel = message.member.voice.channel;
            

        const player = Discord.createAudioPlayer();
        const resource = Discord.createAudioResource(stream);

        const connection = Discord.joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });

        player.play(resource);
        connection.subscribe(player);

        player.on(Discord.AudioPlayerStatus.Idle, () => {
            connection.destroy();
        });
    }
}