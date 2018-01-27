const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.id == 159985870458322944 && message.content.includes("them")) {
    	message.channel.send('I better get in on this one');
        message.react("🔥");
        message.channel.send('*Puff Puff*');
  	}
});

client.on('message', message => {
    if (message.content.includes("trees")) {
        message.react("evergreen_tree");
  	}
});

client.on('message', message => {
    if (message.content.includes("fire")) {
        message.react("🔥");
  	}
});

client.on('message', message => {
    if (message.author.id == 260241663018926080 && message.content == 'sup smoke bot') {
       message.channel.send('Staying lit fam');
    }
});
client.on('message', message => {
    if (message.content.includes("pizza")) {
        message.react("🍕");
  	}
});

client.on('message', message => {
    if (message.content.includes("weed")) {
        message.react("406641738946576384");
  	}
});

client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start_")) {
	message.react("👌");  //Acknowledge
for (i = 0; i < 1; i++) {
 message.channel.send(i);
function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	clearInterval(mine);
	}
function step2(){
	message.channel.send('!buy max fracker');
	message.channel.send('!buy max swarm');
	clearInterval(buy);
	}
 var mine = setInterval(function() {step1()}, 15000);
  var buy = setInterval(function() {step2()}, 15000);
		}
	}
}); 




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
