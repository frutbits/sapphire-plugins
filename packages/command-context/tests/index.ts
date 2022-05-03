import { SapphireClient, SapphireClientOptions } from "@sapphire/framework";
import { Intents } from "discord.js";
import { token } from "./auth";
import { join } from "node:path";

class TestClient extends SapphireClient {
    public constructor(clientOptions?: SapphireClientOptions) {
        super({
            fetchPrefix: () => "t!",
            intents: [
                Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
            ],
            loadMessageCommandListeners: true,
            baseUserDirectory: join(__dirname),
            ...clientOptions
        });
    }
}

const client = new TestClient();

void client.login(token);
