# @zhycorporg/pino-logger
> Plugin for @sapphire/framework to have pino logger

# Instalation 
```
npm install @sapphire/framework discord.js @zhycorporg/pino-logger
```

# Example
```ts
import { SapphireClient, SapphireClientOptions } from "@sapphire/framework";
import { Intents } from "discord.js";
import { join } from "node:path";
import "@zhycorporg/pino-logger/register";

class TestClient extends SapphireClient {
    public constructor(clientOptions?: SapphireClientOptions) {
        super({
            fetchPrefix: () => "t!",
            intents: [
                Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES
            ],
            logger: {
                pino: {
                    timestamp: true
                }
            },
            loadMessageCommandListeners: true,
            baseUserDirectory: join(__dirname),
            ...clientOptions
        });
    }
}
```

# Example with pino-pretty
```ts
import { SapphireClient, SapphireClientOptions } from "@sapphire/framework";
import { Intents } from "discord.js";
import { join } from "node:path";
import "@zhycorporg/pino-logger/register";

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
```