/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Plugin, preGenericsInitialization, SapphireClient } from "@sapphire/framework";
import type { ClientOptions } from "discord.js";
import type { LoggerOptions } from "pino";
import { PinoLogger } from "./lib/PinoLogger";

export class PinoLoggerPlugin extends Plugin {
    public static [preGenericsInitialization](this: SapphireClient, options: ClientOptions) {
        options.logger ??= { pino: { } };
        options.logger.instance = new PinoLogger(options.logger.pino);
    }
}

declare module "@sapphire/framework" {
    export interface ClientLoggerOptions {
        pino: LoggerOptions;
    }
}

SapphireClient.plugins.registerPreGenericsInitializationHook(PinoLoggerPlugin[preGenericsInitialization], "PinoLogger-PreGenericsInitialization");
