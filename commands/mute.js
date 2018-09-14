const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]);
  let logChannel = message.guild.channels.find(val => val.name === "straffen");
  let muterole = message.guild.roles.find(val => val.name === "muted");
  let Mutetijd = args[1];
  let member = user;sd
  let Reason = args.slice(2).join(" ");

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet een stafflid zijn om dat te kunnen gebruiken!");
  if(!logChannel) return message.channel.send("Er is nog geen log channel ingesteld.");
  if (!user) return message.channel.send("Gebruiker niet gevonden.\nGebruik `!mute @gebuiker#1234 <tijd in seconden/minuten/uren/dagen> <reden>`");
  if (Reason.length < 1) return message.channel.send("Je moet een reden toevoegen om iemand te muten.\nGebruik `!mute @gebuiker#1234 <tijd in seconden/minuten/uren/dagen> <reden>`");
  if (!message.member.hasPermission("MANAGE_MESSAGES") || user.id === message.guild.ownerID || user.bot) return message.channel.send("Die persoon kan je niet muten omdat hij/zij een stafflid is.");
  if(!Mutetijd) return message.reply("Je hebt geen tijd ingesteld.\n Gebruik `!mute @gebuiker#1234 <tijd in seconden/minuten/uren/dagen> <reden>`");

  let DMembed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#ff7400")
  .setAuthor("Discord Gaming Portal Moderation")
  .setDescription("Je bent gemute op **Discord Gaming Portal**!\n **Reden:** " + Reason + "\n**Tijd** " + Mutetijd)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  let unmuteDMembed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#00ff20")
  .setAuthor("Discord Gaming Portal Moderation")
  .setDescription("Je bent weer geunmute op **Discord Gaming Portal**!")
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  let muteEmbed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("#ff7400")
  .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
  .setDescription("**Gebuiker:** " + `${user.user.tag} (${user.id})` + "\n**Actie**: Mute" + "\n**Reden** " + Reason + "\n**Tijd** " + Mutetijd)
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  message.delete();
  await(member.addRole(muterole.id));
  member.send(DMembed);
  logChannel.send(muteEmbed);

  setTimeout(function(){
    member.removeRole(muterole.id);
    member.send(unmuteDMembed);
  }, ms(Mutetijd));

}

module.exports.help = {
  name: "mute"
}
