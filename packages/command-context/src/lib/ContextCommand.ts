/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Args, Command } from "@sapphire/framework";
import type { Awaitable } from "@sapphire/utilities";
import type { PieceContext, CommandOptions } from "@sapphire/framework";
import type { CommandInteraction, ContextMenuCommandInteraction, Message } from "discord.js";
import type { CommandContext } from "./Structures/CommandContext";
import { CommandInteractionCommandContext } from "./Structures/CommandInteractionCommandContext";
import { ContextMenuInteractionCommandContext } from "./Structures/ContextMenuInteractionCommandContext";
import { MessageCommandContext } from "./Structures/MessageCommandContext";

export abstract class ContextCommand extends Command {
    public constructor(context: PieceContext, options?: CommandOptions | undefined) {
        super(context, options);
    }

    public messageRun(message: Message, args: Args) {
        return this.contextRun(new MessageCommandContext(message, args));
    }

    public chatInputRun(interaction: CommandInteraction) {
        return this.contextRun(new CommandInteractionCommandContext(interaction));
    }

    public contextMenuRun(interaction: ContextMenuCommandInteraction) {
        return this.contextRun(new ContextMenuInteractionCommandContext(interaction));
    }

    public abstract contextRun(ctx: CommandContext): Awaitable<unknown>;
}
