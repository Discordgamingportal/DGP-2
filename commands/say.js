const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage)
      .then(async function (message) {
        await message.react("✈")
        await message.react("🚔")
        await message.react("🔫")
        await message.react("🏡")
        await message.react("⛏")
        await message.react("🛡")
        await message.react("💀")
        await message.react("⚽")
        await message.react("🌈")
        await message.pin()
  });
}

module.exports.help = {
  name: "say"
}
