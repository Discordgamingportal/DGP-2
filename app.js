const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

const prefix = require("./config/prefix.json");

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

require("./utils/eventLoader")(bot);

exports.bot = bot;
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commands zijn niet gevonden.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Command ${f} is geladen!`);
    bot.commands.set(props.help.name, props);
  })

});

bot.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = bot.users.get(data.user_id);
	const channel = bot.channels.get(data.channel_id) || await user.createDM();
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;

	let message = channel.messages.get(data.message_id);


	if (event.t === 'MESSAGE_REACTION_REMOVE' && message && message.reactions.get(emojiKey) && message.reactions.get(emojiKey).users.size) return;
	if (event.t === 'MESSAGE_REACTION_ADD' && message) return;

	if (!message) {
		message = await channel.fetchMessage(data.message_id);
	}
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
	}

	bot.emit(events[event.t], reaction, user);
});

bot.on("error", (e) => console.error(e));

bot.login(process.env.token);
