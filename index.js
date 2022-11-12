const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config/config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

["api"]
    .filter(Boolean)
    .forEach(h => {
        require(`./API/${h}`)(client);
    })


client.login(token)

