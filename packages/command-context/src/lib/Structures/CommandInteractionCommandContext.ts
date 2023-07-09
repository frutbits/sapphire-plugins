/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { ChatInputCommandInteraction } from "discord.js";
import { BaseInteractionCommandContext } from "./BaseCommandInteractionCommandContext";

export class CommandInteractionCommandContext extends BaseInteractionCommandContext {
    declare protected readonly data: { context: ChatInputCommandInteraction };
    public constructor(context: ChatInputCommandInteraction, args?: Args) {
        super(context, args);
    }

    public get options() {
        return this.data.context.options;
    }
}
