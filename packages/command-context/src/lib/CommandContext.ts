/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import type { Args } from "@sapphire/framework";
import { CacheType, CommandInteraction, ContextMenuInteraction, Interaction, Message } from "discord.js";

export class CommandContext<Cached extends CacheType = CacheType> {
    public constructor(public readonly context: CommandInteraction<Cached> | ContextMenuInteraction<Cached> | Message, public readonly args: Args) {}

    public get channel() {
        return this.context.channel;
    }

    public get options() {
        if (this.context instanceof Interaction) return this.context.options;
        return null;
    }

    public isMessage() {
        return this.context instanceof Message;
    }

    public isContextMenuInteraction() {
        return this.context instanceof ContextMenuInteraction && this.context.isContextMenu();
    }

    public isCommandInteraction() {
        return this.context instanceof CommandInteraction && this.context.isCommand();
    }
}
