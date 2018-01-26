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

var swan = ["test","test2","test3"];
var test = 0;

client.on('message', message => {
    if (message.author.id == 260241663018926080) 
    {
        if (test < 2)
        {
    	message.channel.send(swan[test]);
        test++;
        }
        else {var test = test - 3;}
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
