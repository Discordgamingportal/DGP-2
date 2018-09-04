const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let Reason = args.join(" ").slice(22);
  let member = user;
  let logChannel = message.guild.channels.find(val => val.name === "straffen");


  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet een stafflid zijn om dat te kunnen gebruiken!");
  if(!logChannel) return message.channel.send("Er is nog geen log channel ingesteld.");
  if (!user) return message.channel.send("Gebruiker niet gevonden.\nGebruik `!warn @gebruiker#1234 <reden>`");
  if (Reason.length < 1) return message.channel.send('Je moet een reden toevoegen om iemand te bannen.\nGebruik `!warn @gebruiker#1234 <reden>`');
  if (!message.member.hasPermission("MANAGE_MESSAGES") || user.id === message.guild.ownerID || user.bot) return message.channel.send("Die persoon kan je niet waarschuwen omdat hij/zij een stafflid is.");

  let DMembed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#ff7400")
  .setAuthor("Discord Gaming Portal Moderation")
  .setDescription("Je hebt een waarschuwing in **Discord Gaming Portal**!\n **Reden:** " + Reason)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  let warnEmbed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#ff7400")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
  .setDescription("**Gebuiker:** " + `${user.username}#${user.discriminator} (${user.id})` + "\n**Actie**: Warn" + "\n**Reden** " + Reason)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  message.delete();
  member.send(DMembed);
  logChannel.send(warnEmbed);
}

module.exports.help = {
name: "warn"
}
