const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id == 159985870458322944) {
    	message.channel.send('I better get in on this one');
  	}
});

var swanreply = ["Sup swan","Staying lit fam","About to load another one"];

client.on('message', message => {
    if (message.author.id == 260241663018926080 && message.content == 'Sup smoke bot') {
        for (i=0;i<swanreply.length;i++){
    	message.channel.send(swanreply[i]);
        }
    });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
