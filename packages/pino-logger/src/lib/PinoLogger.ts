/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { ILogger } from "@sapphire/framework";
import pino, { LoggerOptions, Logger } from "pino";

export class PinoLogger implements ILogger {
    protected pino: Logger;
    /**
     * @link https://getpino.io/#/docs/api?id=options
     */
    public constructor(options: LoggerOptions) {
        this.pino = pino(options);
    }

    public trace(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.trace(...values, object);
        }
        return this.pino.trace(object, ...values);
    }

    public debug(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.debug(...values, object);
        }
        return this.pino.debug(object, ...values);
    }

    public info(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.info(...values, object);
        }
        return this.pino.info(object, ...values);
    }

    public warn(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.warn(...values, object);
        }
        return this.pino.warn(object, ...values);
    }

    public error(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.error(...values, object);
        }
        return this.pino.error(object, ...values);
    }

    public fatal(object: any, ...values: readonly [unknown]): void {
        if (typeof object === "string") {
            return this.pino.fatal(...values, object);
        }
        return this.pino.fatal(object, ...values);
    }

    public has(): boolean {
        return true;
    }

    public write(): void {
        throw new Error("Method is not implemented.");
    }
}
