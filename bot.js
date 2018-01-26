const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id == 159985870458322944) {
    	message.channel.send('I better get in on this one');
        message.channel.send('!toke');
  	}
});

var swanreply = ["Sup Swan","Just staying lit fam","About to pack another bowl"];

client.on('message', message => {
    if (message.author.id == 260241663018926080 && message.content == 'smoke bot') {
    	message.channel.send(swanreply[1]);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
