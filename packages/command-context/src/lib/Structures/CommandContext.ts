/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Args } from "@sapphire/framework";
import { cast } from "@sapphire/utilities";
import { BaseInteraction, CommandInteraction, ContextMenuCommandInteraction, GuildMember, Message, MessagePayload, type InteractionReplyOptions, type MessageCreateOptions } from "discord.js";
import type { CommandInteractionCommandContext } from "./CommandInteractionCommandContext";
import type { MessageCommandContext } from "./MessageCommandContext";
import type { ContextMenuInteractionCommandContext } from "./ContextMenuInteractionCommandContext";

export class CommandContext {
    protected readonly data!: { args?: Args; context: CommandInteraction | ContextMenuCommandInteraction | Message };
    public constructor(context: CommandInteraction | ContextMenuCommandInteraction | Message, args?: Args) {
        this.data = { context, args };
    }

    public get id() {
        return this.data.context.id;
    }

    public get channel() {
        return this.data.context.channel;
    }

    public get author() {
        return this.data.context instanceof BaseInteraction ? this.data.context.user : this.data.context.author;
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

    public get member(): GuildMember | null {
        return cast<GuildMember>(this.data.context.member);
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

    public inGuild() {
        return this.data.context.inGuild();
    }

    public isMessageContext(): this is MessageCommandContext {
        return this.data.context instanceof Message;
    }

    public isCommandInteractionContext(): this is CommandInteractionCommandContext {
        return this.data.context instanceof CommandInteraction;
    }

    public isContextMenuInteractionContext(): this is ContextMenuInteractionCommandContext {
        return this.data.context instanceof ContextMenuCommandInteraction;
    }

    public async send(options: InteractionReplyOptions | MessageCreateOptions | MessagePayload | string, fetchReply?: true): Promise<Message>;
    public async send(options: InteractionReplyOptions | MessageCreateOptions | MessagePayload | string, fetchReply = false) {
        if (this.isCommandInteractionContext()) {
            if (this.isCommand()) {
                if (this.deferred && !this.replied) {
                    return this.editReply(cast<InteractionReplyOptions | MessagePayload | string>(options));
                }
                if (this.replied) {
                    return this.followUp(typeof options === "string"
                        ? cast<InteractionReplyOptions>({ content: options, ephemeral: this.ephemeral ?? false })
                        : cast<InteractionReplyOptions>({ ...options, ephemeral: this.ephemeral ?? false }));
                }
            }

            if (this.isContextMenuInteractionContext()) {
                if (this.deferred && !this.replied) {
                    return this.editReply(cast<InteractionReplyOptions | MessagePayload | string>(options));
                }
                if (this.replied) {
                    return this.followUp(typeof options === "string"
                        ? cast<InteractionReplyOptions>({ content: options, ephemeral: this.ephemeral ?? false })
                        : cast<InteractionReplyOptions>({ ...options, ephemeral: this.ephemeral ?? false }));
                }
            }

            const msg = await this.reply(typeof options === "string"
                ? cast<InteractionReplyOptions>({ content: options, fetchReply })
                : cast<InteractionReplyOptions>({ ...options, fetchReply }));
            return msg;
        }

        return this.channel!.send(cast<MessageCreateOptions | MessagePayload | string>(options));
    }
}
