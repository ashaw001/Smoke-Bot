const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Join them') {
    	message.channel.send('I better get in on this one');
        message.channel.send('!toke');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
