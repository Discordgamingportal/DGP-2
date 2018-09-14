const Discord = require("discord.js");
const roles = require("../config/roles.json");
const game = require("../config/games.json");

module.exports = (reaction, message, bot) => {
  function validate() {
     return (reaction.message.channel.id === "485803542318153729");
  }

  if (!validate()) return;

  var guild = bot.guilds.get("261927376080863232");
  const member = guild.member(message);

  if (reaction.emoji.name === "✈") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.pubg)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **PUBG** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("PUBG linken aanvragen", "In de channel #pubg-stats kan je **gs.add pubg** typen.\nHierna ontvang je een bericht Prive.")
    .addField("Je PUBG account linken", "Er word gevraagd om je **PUBG naam** in te vullen. Vul deze in.")
    .addField("Je PUBG stats bekijken", "Om je stats te zien typ je **gs.pubg** in #pubg-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.pubg);
  }

  if (reaction.emoji.name === "🚔") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(game.gta)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **GTA** toegevoegd aan jouw account.\nMocht je nog vragen heb contacteer dan staff.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    message.send(embed);
    member.addRole(roles.gta);
 }

  if (reaction.emoji.name === "🔫") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.csgo)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **CSGO** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("Steam linken aanvragen", "In de channel #csgo-stats kan je **gs.add steam** typen. \nHierna ontvang je een bericht Prive.")
    .addField("Je steam account linken", "Er word gevraagd om je Vanity URL in te vullen.\nDit is het linkje van je profiel op steam.")
    .addField("Je CSGO stats bekijken", "Om je stats te zien typ je **gs.csgo** in #csgo-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.csgo);
  }

  if (reaction.emoji.name === "🏡") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.fortnite)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **FORTNITE** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("Je Fortnite account linken", "Om je account te linken typ je in #fortnite-stats !ftn link **<Fortnite naam>**.")
    .addField("Jouw eigen Fortnite stats bekijken", "Om je stats te zien typ je **!ftn** in #fortnite-stats.")
    .addField("Fortnite stats van anderen bekijken", "Om anderen hun stats te zien typ je **!ftn <Fortnite naam>** in #fortnite-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.fortnite);
  }

  if (reaction.emoji.name === "⛏") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.minecraft)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **MINECRAFT** toegevoegd aan jouw account.\nMocht je nog vragen heb contacteer dan staff.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.minecraft);
  }

  if (reaction.emoji.name === "🛡") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.overwatch)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **OVERWATCH** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("OVERWATCH account linken aanvragen", "In de channel #overwatch-stats kan je **gs.add overwatch** typen. Hierna ontvang je een bericht Prive.")
    .addField("Je OVERWATCH account linken", "Er word gevraagd op welk **platform** je speelt.\nHierna vul je je gebruikersnaam in.")
    .addField("Je OVERWATCH stats bekijken", "Om je stats te zien typ je **gs.overwatch** in #overwatch-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.overwatch);
  }

  if (reaction.emoji.name === "💀") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.calloffduty)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **COD** toegevoegd aan jouw account.\nMocht je nog vragen heb contacteer dan staff.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.calloffduty);
  }

  if (reaction.emoji.name === "⚽") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.rocketleague)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **ROCKET LEAGUE** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("ROCKET LEAGUE linken aanvragen", "In de channel #rocketleague-stats kan je **gs.add rocketleague** typen. Hierna ontvang je een bericht Prive.")
    .addField("Je ROCKET LEAGUE account linken", "Er word gevraagd op welk **platform** je speelt. Vul deze in.")
    .addField("Je ROCKET LEAGUE stats bekijken", "Om je stats te zien typ je **gs.rocketleague** in #rocketleague-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.rocketleague);
  }

  if (reaction.emoji.name === "🌈") {

    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setThumbnail(game.rainbowsixsiege)
    .setColor("#00ff20")
    .setAuthor("Discord Gaming Portal Gameranks")
    .setDescription("We hebben met succes **RAINBOW SIX SIEGE** toegevoegd aan jouw account.\nHieronder staat uitleg over verschillende commands")
    .addField("RAINBOW SIX SIEGE account linken aanvragen", "In de channel #rainbow-six-siege-stats kan je **gs.add siege** typen. Hierna ontvang je een bericht Prive.")
    .addField("Je RAINBOW SIX SIEGE account linken", "Er word gevraagd op welk **platform** je speelt.\nHierna vul je je gebruikersnaam in.")
    .addField("Je RAINBOW SIX SIEGE stats bekijken", "Om je stats te zien typ je **gs.siege** in #rainbow-six-siege-stats.")
    .setFooter("© Discord Gaming Portal", bot.user.avatarURL);

    member.send(embed);
    member.addRole(roles.rainbowsixsiege);
  }
}
