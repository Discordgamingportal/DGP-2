const Discord = require("discord.js");
module.exports = (member, bot) => {

  let embed = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL)
  .setColor("#ff0000")
  .setAuthor("Bye " + member.user.username + "#" + member.user.discriminator + "!")
  .setDescription("Hij/zij heeft helaas de server verlaten...\nBye have a great time :p")
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  member.guild.channels.find(val => val.name === "algemeen").send(embed);
}
