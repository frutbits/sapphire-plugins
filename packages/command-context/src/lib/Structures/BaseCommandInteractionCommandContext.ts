/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { CommandInteraction, ContextMenuInteraction, InteractionDeferReplyOptions, InteractionReplyOptions, MessagePayload } from "discord.js";
import { BaseCommandContext } from "./BaseCommandContext";

export class BaseInteractionCommandContext extends BaseCommandContext {
    declare protected readonly data: { context: CommandInteraction | ContextMenuInteraction };
    public constructor(context: CommandInteraction | ContextMenuInteraction, args?: Args) {
        super(context, args);
    }

    public get version() {
        return this.data.context.version;
    }

    public get memberPermissions() {
        return this.data.context.memberPermissions;
    }

    public get locale() {
        return this.data.context.locale;
    }

    public get guildLocale() {
        return this.data.context.guildLocale;
    }

    public inCachedGuild() {
        return this.data.context.inCachedGuild();
    }

    public inRawGuild() {
        return this.data.context.inRawGuild();
    }

    public isApplicationCommand() {
        return this.data.context.isApplicationCommand();
    }

    public isCommand() {
        return this.data.context.isCommand();
    }

    public isContextMenu() {
        return this.data.context.isContextMenu();
    }

    public isUserContextMenu() {
        return this.data.context.isUserContextMenu();
    }

    public isMessageContextMenu() {
        return this.data.context.isMessageContextMenu();
    }

    public get commandId() {
        return this.data.context.commandId;
    }

    public get commandName() {
        return this.data.context.commandName;
    }

    public get deferred() {
        return this.data.context.deferred;
    }

    public get replied() {
        return this.data.context.replied;
    }

    public get ephemeral() {
        return this.data.context.ephemeral;
    }

    public get webhook() {
        return this.data.context.webhook;
    }

    public get command() {
        return this.data.context.command;
    }

    public deferReply(options?: InteractionDeferReplyOptions | undefined) {
        return this.data.context.deferReply(options);
    }

    public reply(options: InteractionReplyOptions | MessagePayload | string) {
        return this.data.context.reply(options);
    }

    public editReply(options: InteractionReplyOptions | MessagePayload | string) {
        return this.data.context.editReply(options);
    }

    public fetchReply() {
        return this.data.context.fetchReply();
    }

    public deleteReply() {
        return this.data.context.deleteReply();
    }

    public followUp(options: InteractionReplyOptions | MessagePayload | string) {
        return this.data.context.followUp(options);
    }
}
