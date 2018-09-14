const Discord = require("discord.js");
const roles = require("../config/roles.json");
const game = require("../config/games.json");

module.exports = (reaction, message, bot) => {
  var guild = bot.guilds.get("261927376080863232");
  const member = guild.member(message);

  if (reaction.emoji.name === "✈") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.pubg)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **PUBG** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :airplane:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.pubg);
  }

  if (reaction.emoji.name === "🚔") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.gta)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **GTA** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :oncoming_police_car:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.gta);
  }

  if (reaction.emoji.name === "🔫") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.csgo)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **CSGO** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :gun:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.csgo);
  }

  if (reaction.emoji.name === "🏡") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.fortnite)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **FORTNITE** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :house_with_garden:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.fortnite);
  }

  if (reaction.emoji.name === "⛏") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.minecraft)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **MINECRAFT** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :pick:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.minecraft);
  }

  if (reaction.emoji.name === "🛡") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.overwatch)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **OVERWATCH** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :shield:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.overwatch);
  }

  if (reaction.emoji.name === "💀") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.calloffduty)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **COD** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :skull:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.calloffduty);
  }

  if (reaction.emoji.name === "⚽") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.rocketleague)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **ROCKET LEAGUE** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :soccer:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.rocketleague);
  }

  if (reaction.emoji.name === "🌈") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.rainbowsixsiege)
    .setColor("#ff0000")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **RAINBOW SIX SIEGE** weggehaald van jouw account.\nMocht je je rank terug willen ga dan naar #ranks en reageer met :rainbow:")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.removeRole(roles.rainbowsixsiege);
  }
}
