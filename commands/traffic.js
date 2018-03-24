// Start of Constants
const { RichEmbed } = require('discord.js');
const axios = require('axios');
const settings = require("../storage/settings.json");
// End of Constants

// Start of "Traffic" Command
exports.run = (client, message, args) => {
	if(message.channel.id !== settings.commandsChannel){
		const botRoom = message.guild.channels.find("id", settings.commandsChannel);
		return message.channel.send(`Whoops, it looks like you're not in the ${botRoom} channel`);
	}
	if(args.length < 1 || args.length > 2){
		return message.author.send(["ERROR: Not enough arguments", "Usage: `!traffic <server> eu1 | eu2 | eu3 | eu4 | eu5 | us1 | sa1 | hk1`"]);
	}
	switch(args[0]){
		case "eu1":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu1/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://raw.githubusercontent.com/hgvmp/branding/master/steam/Steam%20logo%20blue%20on%20white.jpg');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		case "eu2":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu2/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://raw.githubusercontent.com/hgvmp/branding/master/steam/Steam%20logo%20blue%20on%20white.jpg');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		case "eu3":
				axios.get('https://traffic.krashnz.com/api/v2/public/server/ets2/eu3/top.json').then(function (response) {
						const embed = new RichEmbed()
						response.data.response.top.forEach(function(city){
							embed.addField(`${city.name}`, `${city.severity} (${city.players})`, true)
							embed.setThumbnail('https://raw.githubusercontent.com/hgvmp/branding/master/steam/Steam%20logo%20blue%20on%20white.jpg');
						})
						message.channel.send({embed})
				}).catch(function (error) {
					console.log(error);
				});
			break;
		default:
			message.channel.send(`${message.author}, you've incorrectly used this command, please try again!`);
	};
};
// End of "Traffic" Command

// Start of Permission Level Setting, etc.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["t"],
  permLevel: "0"
};
// End of Permission Level Setting, etc.

// Start of Misc.
exports.help = {
  name: "traffic",
  infoName: "Traffic",
  description: "Shows the traffic regarding the server you have input!",
  usage: "traffic [server]"
};
// End of Misc.
