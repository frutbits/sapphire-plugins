/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Piece, Precondition } from "@sapphire/framework";
import type { Message, CommandInteraction, ContextMenuInteraction } from "discord.js";
import type { CommandContext } from "./Structures/CommandContext.js";
import { CommandInteractionCommandContext } from "./Structures/CommandInteractionCommandContext.js";
import { ContextMenuInteractionCommandContext } from "./Structures/ContextMenuInteractionCommandContext.js";
import { MessageCommandContext } from "./Structures/MessageCommandContext.js";

export abstract class ContextPrecondition extends Precondition {
    public constructor(context: Piece.Context, options?: Precondition.Options) {
        super(context, options);
    }

    public messageRun(message: Message) {
        return this.contextRun(new MessageCommandContext(message));
    }

    public chatInputRun(interaction: CommandInteraction) {
        return this.contextRun(new CommandInteractionCommandContext(interaction));
    }

    public contextMenuRun(interaction: ContextMenuInteraction) {
        return this.contextRun(new ContextMenuInteractionCommandContext(interaction));
    }

    public abstract contextRun(ctx: CommandContext): Precondition.Result;
}
