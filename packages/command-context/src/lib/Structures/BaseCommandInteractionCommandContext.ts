/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { APIMessage, CommandInteraction, ContextMenuCommandInteraction, InteractionDeferReplyOptions, InteractionReplyOptions, Message, MessagePayload } from "discord.js";
import { CommandContext } from "./CommandContext";

export class BaseInteractionCommandContext extends CommandContext {
    declare protected readonly data: { context: CommandInteraction | ContextMenuCommandInteraction };
    public constructor(context: CommandInteraction | ContextMenuCommandInteraction, args?: Args) {
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

    public isChatInputCommand() {
        return this.data.context.isChatInputCommand();
    }

    public isCommand() {
        return this.data.context.isCommand();
    }

    public isContextisContextMenuCommandMenu() {
        return this.data.context.isContextMenuCommand();
    }

    public isUserContextisUserContextMenuCommandMenu() {
        return this.data.context.isUserContextMenuCommand();
    }

    public isMessageContextMenuCommand() {
        return this.data.context.isMessageContextMenuCommand();
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

    public editReply(options: InteractionReplyOptions | MessagePayload | string): Promise<APIMessage | Message> {
        return this.data.context.editReply(options);
    }

    public fetchReply() {
        return this.data.context.fetchReply();
    }

    public deleteReply() {
        return this.data.context.deleteReply();
    }

    public showModal(modal: Parameters<CommandInteraction["showModal"]>["0"]): Promise<void> {
        return this.data.context.showModal(modal);
    }

    public followUp(options: InteractionReplyOptions | MessagePayload | string) {
        return this.data.context.followUp(options);
    }
}
