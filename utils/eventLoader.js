const reqEvent = (event) => require(`../events/${event}`)
module.exports = bot => {
  bot.on(`ready`, () => reqEvent('ready')(bot));
  bot.on(`message`, reqEvent('message'));
  bot.on(`guildMemberAdd`, (message) => reqEvent('guildMemberAdd')(message, bot));
  bot.on(`guildMemberRemove`, (message) => reqEvent('guildMemberRemove')(message, bot));
  bot.on(`messageReactionAdd`, (reaction, message) => reqEvent('messageReactionAdd')(reaction, message, bot));
  bot.on(`messageReactionRemove`, (reaction, message) => reqEvent('messageReactionRemove')(reaction, message, bot));
}
