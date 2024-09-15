import {
    Client, Events,
} from "discord.js";

import { config } from "./config.ts";

export class Bot {
    public readonly prefix = "!";

    public constructor(public readonly client: Client) {
        this.client.login(config.TOKEN);

        this.client.on("ready", () => {
            console.log(`Logged in as ${this.client.user!.tag}.`)
        });

        this.client.on("warn", (info) => console.log(info));
        this.client.on("error", console.error);

        this.onReactionAdd();
        this.onMessage();
    }

    private async onMessage() {
        this.client.on(Events.MessageCreate, (message) => {
            if (message.author.id === this.client.user!.id) return;
            if (!message.content.startsWith(this.prefix)) return;

            // TODO: process request
            message.reply(`Received: ${message.content} from ${message.author}`);
        });
    }

    private async onReactionAdd() {
        this.client.on(Events.MessageReactionAdd, async (reaction, user) => {
            if (reaction.partial) {
                try {
                    await reaction.fetch();
                } catch (error) {
                    return;
                }
            }

            // TODO: process reactions
            reaction.message.react("🐺");
        })
    }
}