import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const TOKEN = process.env.discord_token;
const CHANNEL_ID = process.env.discord_channel_id;

export const sendIpToDiscord = async (ipv4) => {
    console.log("Writing message to channel with id", CHANNEL_ID);
    const client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    });
    
    await client.once('ready', async () => {
        console.log(`Connected to Discord as ${client.user.tag}`);
    
        const channel = await client.channels.fetch(CHANNEL_ID);
        
        if (channel) {
            await channel.send(`L\'ip a changé : ${ipv4}`);
        } else {
            console.error('Discord channel could not be found');
        }

        await client.destroy();
    });
    
    await client.login(TOKEN).catch((error) => {
        console.error('Could not login:', error);
    });
};