const Discord = require("discord.js");
const roles = require("../config/roles.json");

module.exports = (member, bot) => {

  let embed = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL)
  .setColor("#00ff20")
  .setAuthor("Hey " + member.user.username + "#" + member.user.discriminator + "!")
  .setDescription("Welkom op **Discord Gaming Portal**! \nZorg ervoor dat je <#460495927900110848> even bekijkt. \nJe kan een rank toevoegen in <#485803542318153729>.")
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  member.addRole(roles.gamer);
  member.guild.channels.find(val => val.name === "algemeen").send(embed);
}
