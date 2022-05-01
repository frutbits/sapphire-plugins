/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Args, Awaitable, Command, CommandOptions, PieceContext } from "@sapphire/framework";
import type { CommandInteraction, ContextMenuInteraction, Message } from "discord.js";
import type { BaseCommandContext } from "./Structures/BaseCommandContext";
import { CommandInteractionCommandContext } from "./Structures/CommandInteractionCommandContext.js";
import { ContextMenuInteractionCommandContext } from "./Structures/ContextMenuInteractionCommandContext.js";
import { MessageCommandContext } from "./Structures/MessageCommandContext";

export abstract class ContextCommand extends Command {
    public constructor(context: PieceContext, options?: CommandOptions | undefined) {
        super(context, options);
    }

    public override messageRun(message: Message, args: Args) {
        return this.contextRun(new MessageCommandContext(message, args));
    }

    public override chatInputRun(interaction: CommandInteraction) {
        return this.contextRun(new CommandInteractionCommandContext(interaction));
    }

    public override contextMenuRun(interaction: ContextMenuInteraction) {
        return this.contextRun(new ContextMenuInteractionCommandContext(interaction));
    }

    public abstract contextRun(ctx: BaseCommandContext): Awaitable<unknown>;
}