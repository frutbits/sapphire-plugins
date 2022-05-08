import { SapphireClient, SapphireClientOptions } from "@sapphire/framework";
import { Intents } from "discord.js";
import { token } from "./auth";
import { join } from "node:path";

import "../src/register";

class TestClient extends SapphireClient {
    public constructor(clientOptions?: SapphireClientOptions) {
        super({
            fetchPrefix: () => "t!",
            intents: [
                Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
            ],
            logger: {
                pino: {
                    timestamp: true,
                    transport: {
                        targets: [
                            { target: "pino-pretty", level: "info", options: { translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l o" } }
                        ]
                    }
                }
            },
            loadMessageCommandListeners: true,
            baseUserDirectory: join(__dirname),
            ...clientOptions
        });
    }
}

const client = new TestClient();

void client.login(token);
