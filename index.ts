import { ActivityType, Client, GatewayIntentBits, Partials } from "discord.js";
import { Bot } from "./bot.ts";

export const bot = new Bot(
    new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.DirectMessages
        ],
        partials: [Partials.Message, Partials.Channel, Partials.Reaction],
        presence: {
            status: 'online',
            activities: [
                {
                    type: ActivityType.Playing,
                    name: process.env.DISCORD_STATUS || 'Meowing',
                },
            ],
        },
        allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
    })
);