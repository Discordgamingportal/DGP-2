const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Reason = args.slice(1).join(' ');
  let logChannel = message.guild.channels.find(val => val.name === "straffen");
  let search = args[0];
  let bans = await message.guild.fetchBans();
  let user = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()));
  let member = user;

  bot.unbanReason = Reason;
  bot.unbanAuth = message.author;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet een stafflid zijn om dat te kunnen gebruiken!");
  if(!logChannel) return message.channel.send("Er is nog geen log channel ingesteld.");
  if(!search) return message.channel.send("Gebruiker niet gevonden.\nGebruik `!unban <user-id> <reden>`");
  if (!user) return message.channel.send("Gebruiker niet gevonden.\nGebruik `!unban <user-id> <reden>`");
  if (Reason.length < 1) return message.channel.send('Je moet een reden toevoegen om iemand te bannen.\nGebruik `!unban <user-id> <reden>`');

  let DMembed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#00ff20")
  .setAuthor("Discord Gaming Portal Moderation")
  .setDescription("Je bent geunbanned van [**Discord Gaming Portal**](https://discord.gg/WxQKrz8)!\n **Reden:** " + Reason)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  let unbanEmbed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#00ff20")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
  .setDescription("**Gebuiker:** " + `${user.username}#${user.discriminator} (${user.id})` + "\n**Actie**: Unban" + "\n**Reden** " + Reason)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  message.delete();
  message.guild.unban(user);
  member.send(DMembed);
  logChannel.send(unbanEmbed);
}

module.exports.help = {
name: "unban"
}
