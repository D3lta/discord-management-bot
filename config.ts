import type { Config } from "./interfaces/Config"

const config: Config = {
    TOKEN: process.env.DISCORD_BOT_TOKEN ?? '',
};

export {
    config
} 