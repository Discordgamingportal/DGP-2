const pf = require("../config/prefix.json")
module.exports = message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = pf.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let bot = message.client

  if(!prefix) return;
    if (!message.content.startsWith(prefix)) return;

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

};
