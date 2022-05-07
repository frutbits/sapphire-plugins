/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { ILogger, LogLevel } from "@sapphire/framework";
import pino, { LoggerOptions, Logger } from "pino";

export class PinoLogger implements ILogger {
    protected pino: Logger;
    public constructor(options: LoggerOptions) {
        this.pino = pino(options);
    }

    public trace(...values: readonly unknown[]): void {
        this.pino.trace(values);
    }

    public debug(...values: readonly unknown[]): void {
        this.pino.debug(values);
    }

    public info(...values: readonly unknown[]): void {
        this.pino.info(values);
    }

    public warn(...values: readonly unknown[]): void {
        this.pino.warn(values);
    }

    public error(...values: readonly unknown[]): void {
        this.pino.error(values);
    }

    public fatal(...values: readonly unknown[]): void {
        this.pino.fatal(values);
    }

    public has(): boolean {
        /** NOTE: please review this and tell the equivalent to pino. */
        return true;
    }

    public write(_level: LogLevel, ...values: readonly unknown[]): void {
        /** NOTE: please review this and tell the equivalent to pino. */
        this.pino.info(values);
    }
}
