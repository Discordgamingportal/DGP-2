const Discord = require("discord.js");
module.exports = (member, bot) => {

  let embed = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL)
  .setColor("#00ff20")
  .setAuthor("Hey " + member.user.username + "#" + member.user.discriminator + "!")
  .setDescription("Welkom op **Discord Gaming Portal**! \nZorg ervoor dat je <#484848213707194412> even bekijkt. \nJe kan een rank toevoegen in <#484848229951864833>.")
  .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

  member.guild.channels.find(val => val.name === "algemeen").send(embed);
}
