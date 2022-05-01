/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { ContextMenuInteraction } from "discord.js";
import { BaseInteractionCommandContext } from "./BaseCommandInteractionCommandContext";

export class ContextMenuInteractionCommandContext extends BaseInteractionCommandContext {
    declare protected readonly data: { context: ContextMenuInteraction };
    public constructor(context: ContextMenuInteraction, args?: Args) {
        super(context, args);
    }

    public get options() {
        return this.data.context.options;
    }

    public get targetId() {
        return this.data.context.targetId;
    }

    public get targetType() {
        return this.data.context.targetType;
    }
}
