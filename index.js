const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config/config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers] });
require( 'console-stamp' )( console, {
    format: ':date(yyyy/mm/dd HH:MM:ss).yellow :label(1)'
} );

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


require("./database/connect.js");

["vote", "antiCrash"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    });


client.login(token);