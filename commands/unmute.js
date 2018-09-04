const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, roles) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]);
  let logChannel = message.guild.channels.find(val => val.name === "straffen");
  let muterole = message.guild.roles.find(val => val.name === "muted");
  let member = user;
  let Reason = args.slice(1).join(' ');

  let DMembed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#00ff20")
  .setAuthor("Discord Gaming Portal Moderation")
  .setDescription("Je bent weer geunmute op **Discord Gaming Portal**!")
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  let unmuteEmbed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#00ff20")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
  .setDescription("**Gebuiker:** " + `${user.user.tag} (${user.id})` + "\n**Actie**: Unmute" + "\n**Reden** " + Reason)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet een stafflid zijn om dat te kunnen gebruiken!");
  if(!logChannel) return message.channel.send("Er is nog geen log channel ingesteld.");
  if (!user) return message.channel.send("Gebruiker niet gevonden.\nGebruik `!unmute @gebuiker#1234 <reden>`");
  if (Reason.length < 1) return message.channel.send("Je moet een reden toevoegen om iemand te unmuten.\nGebruik `!unmute @gebuiker#1234 <reden>`");
  if (!user.roles.has(muterole.id)) return message.channel.send("Die persoon is op het moment niet gemute.");

  if (user.roles.has(muterole.id)){
  message.delete();
  member.removeRole(muterole.id);
  member.send(DMembed);
  logChannel.send(unmuteEmbed);
  }
}

module.exports.help = {
  name: "unmute"
}
