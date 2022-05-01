/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Args, Awaitable, Command, CommandOptions, PieceContext } from "@sapphire/framework";
import type { Message } from "discord.js";
import type { BaseCommandContext } from "./Structures/BaseCommandContext.js";
import { MessageCommandContext } from "./Structures/MessageCommandContext.js";

export abstract class ContextCommand extends Command {
    public constructor(context: PieceContext, options?: CommandOptions | undefined) {
        super(context, options);
    }

    public messageRun(message: Message, args: Args) {
        return this.contextRun(new MessageCommandContext(message, args));
    }

    public abstract contextRun(ctx: BaseCommandContext): Awaitable<unknown>;
}
