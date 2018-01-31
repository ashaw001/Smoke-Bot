const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

/*client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start")) {
	message.react("👍");  //Acknowledge
function step1(){
	message.channel.send('!prestige YESIMSURE');
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');
	}
function step2(){	
	message.channel.send('!buy max fracker');
	}
function step3(){
	message.channel.send('!buy max swarm');
	}
function step4(){	
	message.channel.send('!buy max robot');
	}
function step5(){	
	message.channel.send('!buy max miner');
	}
var start = setInterval(function(){start(1)}, 71000);
function start(){
	var one = setTimeout(function() {step1(1)}, 1000);
	var two = setTimeout(function() {step2(1)}, 30000);
	var three = setTimeout(function() {step3(1)}, 35000);
	var four = setTimeout(function() {step4(1)}, 40000);
	var five = setTimeout(function() {step5(1)}, 45000);
	}
}
});*/

client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start2")) {
	message.react("👍");  //Acknowledge

var start = setInterval(function(){start(1)}, 71000);
function start(){
	/*var one = setTimeout(function(){
	message.channel.send('!prestige YESIMSURE');
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');}
			     , 1000);*/
	var two = setTimeout(function(){message.channel.send('!buy max fracker');}, 30000);
	var three = setTimeout(function(){message.channel.send('!buy max swarm');}, 35000);
	var four = setTimeout(function(){message.channel.send('!buy max robot');}, 40000);
	var five = setTimeout(function(){message.channel.send('!buy max miner');}, 45000);
	}
}
});


client.on('message', message =>{
 if (message.content.includes("!buy4")) {message.channel.send('!buy max fracker');}});
client.on('message', message =>{
 if (message.content.includes("!buy3")) {message.channel.send('!buy max swarm');}});
client.on('message', message =>{
 if (message.content.includes("!buy2")) {message.channel.send('!buy max robot');}});
client.on('message', message =>{
 if (message.content.includes("!buy1")) {message.channel.send('!buy max miner');}});


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



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
