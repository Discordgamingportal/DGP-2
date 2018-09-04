const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je moet een stafflid zijn om dat te kunnen gebruiken!");
  if(!args[0]) return message.channel.send("Je moet een geldig getal tussen de **1** en **100** invoeren. \nGebruik: `!clear <1 - 100>`.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} Berichten verwijderd.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
