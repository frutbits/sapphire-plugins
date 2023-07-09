/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { MessageContextMenuCommandInteraction } from "discord.js";
import { BaseInteractionCommandContext } from "./BaseCommandInteractionCommandContext";

export class MessageContextMenuInteractionCommandContext extends BaseInteractionCommandContext {
    declare protected readonly data: { context: MessageContextMenuCommandInteraction };
    public constructor(context: MessageContextMenuCommandInteraction, args?: Args) {
        super(context, args);
    }

    public get options() {
        return this.data.context.options;
    }

    public get targetId() {
        return this.data.context.targetId;
    }

    public get targetMessage() {
        return this.data.context.targetMessage;
    }
}
