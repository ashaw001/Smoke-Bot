const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'ting') {
    	message.reply('tong');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.channel.sendMessage("bong");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
