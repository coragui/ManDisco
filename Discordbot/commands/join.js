const {getVoiceConnection, joinVoiceChannel, AudeioPlayerStatus, createAudioResource, getNextResource, createAudioPlayer, NoSubscribrBehavior} = require('@discordjs/voice');
module.exports = {
    name: 'join',
    description: "The bot joins the voice channel!",
    execute(message,args){
        if(!(message.member.voice.channel)){
             return message.channel.send('How you gonna get down if you cant hear, get in a channel!');
         }
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
    }
}