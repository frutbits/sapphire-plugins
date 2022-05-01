/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import { CommandInteraction, ContextMenuInteraction, Interaction, Message } from "discord.js";
import type { MessageCommandContext } from "./MessageCommandContext";

export class BaseCommandContext {
    protected readonly data!: { args: Args; context: CommandInteraction | ContextMenuInteraction | Message };
    public constructor(context: CommandInteraction | ContextMenuInteraction | Message, args: Args) {
        this.data.context = context;
        this.data.args = args;
    }

    public get id() {
        return this.data.context.id;
    }

    public get channel() {
        return this.data.context.channel;
    }

    public get author() {
        return this.data.context instanceof Interaction ? this.data.context.user : this.data.context.author;
    }

    public get createdTimestamp() {
        return this.data.context.createdTimestamp;
    }

    public get guild() {
        return this.data.context.guild;
    }

    public get createdAt() {
        return this.data.context.createdAt;
    }

    public get member() {
        return this.data.context.member;
    }

    public get guildId() {
        return this.data.context.guildId;
    }

    public get channelId() {
        return this.data.context.channelId;
    }

    public get client() {
        return this.data.context.client;
    }

    public get type() {
        return this.data.context.type;
    }

    public toJSON() {
        return this.data.context.toJSON();
    }

    public toString() {
        return this.data.context.toString();
    }

    public get applicationId() {
        return this.data.context.applicationId;
    }

    public get inGuild() {
        return this.data.context.inGuild();
    }

    public isMessage(): this is MessageCommandContext {
        return this.data.context instanceof Message;
    }
}
