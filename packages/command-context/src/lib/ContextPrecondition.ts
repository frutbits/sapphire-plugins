/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Piece, Precondition } from "@sapphire/framework";
import { type Message, type ChatInputCommandInteraction, type MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";
import type { CommandContext } from "./Structures/CommandContext.js";
import { CommandInteractionCommandContext } from "./Structures/CommandInteractionCommandContext";
import { UserContextMenuInteractionCommandContext } from "./Structures/UserContextMenuInteractionCommandContext.js";
import { MessageCommandContext } from "./Structures/MessageCommandContext";
import { MessageContextMenuInteractionCommandContext } from "./Structures/MessageContextMenuInteractionCommandContext.js";

export abstract class ContextPrecondition extends Precondition {
    public constructor(context: Piece.Context, options?: Precondition.Options) {
        super(context, options);
    }

    public messageRun(message: Message) {
        return this.contextRun(new MessageCommandContext(message));
    }

    public chatInputRun(interaction: ChatInputCommandInteraction) {
        return this.contextRun(new CommandInteractionCommandContext(interaction));
    }

    public contextMenuRun(interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction) {
        return interaction instanceof UserContextMenuCommandInteraction
            ? this.contextRun(new UserContextMenuInteractionCommandContext(interaction))
            : this.contextRun(new MessageContextMenuInteractionCommandContext(interaction));
    }

    public abstract contextRun(ctx: CommandContext): Precondition.Result;
}
