<div align="center">

<img src="https://api.zhycorp.org/assets/images/logo.webp" alt="Zhycorp Logo" width="200px" height="200px"/>

# @zhycorporg/pino-logger

**Plugin for @sapphire/framework to have pino logger**

[![GitHub](https://img.shields.io/npm/l/@zhycorporg/pino-logger)](https://github.com/zhycorp/sapphire-plugins/blob/main/packages/command-context/LICENSE)
[![npm](https://img.shields.io/npm/v/@zhycorporg/pino-logger?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@zhycorporg/pino-logger)
[![Discord](https://discordapp.com/api/guilds/332877090003091456/embed.png)](https://zhycorp.org/discord)

</div>

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