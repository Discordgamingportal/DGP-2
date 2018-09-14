const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let mededelingen = message.guild.channels.find(val => val.name === "mededelingen");

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      mededelingen.send(sayMessage)
  };

module.exports.help = {
  name: "broadcast"
}
