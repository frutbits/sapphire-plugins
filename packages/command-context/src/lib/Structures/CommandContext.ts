/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Args } from "@sapphire/framework";
import { cast } from "@sapphire/utilities";
import { CommandInteraction, ContextMenuInteraction, GuildMember, Interaction, InteractionReplyOptions, Message, MessageOptions, MessagePayload } from "discord.js";
import type { BaseInteractionCommandContext } from "./BaseCommandInteractionCommandContext";
import type { CommandInteractionCommandContext } from "./CommandInteractionCommandContext";
import type { ContextMenuInteractionCommandContext } from "./ContextMenuInteractionCommandContext";
import type { MessageCommandContext } from "./MessageCommandContext";

export class CommandContext {
    protected readonly data!: { args?: Args; context: CommandInteraction | ContextMenuInteraction | Message };
    public constructor(context: CommandInteraction | ContextMenuInteraction | Message, args?: Args) {
        this.data = { context, args };
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

    public isInteractionContext(): this is BaseInteractionCommandContext {
        return this.data.context instanceof Interaction;
    }

    public isCommandInteractionContext(): this is CommandInteractionCommandContext {
        return this.data.context instanceof CommandInteraction;
    }

    public isContextMenuInteractionContext(): this is ContextMenuInteractionCommandContext {
        return this.data.context instanceof ContextMenuInteraction;
    }

    public async send(options: InteractionReplyOptions | MessageOptions | MessagePayload | string, fetchReply?: true): Promise<Message>;
    public async send(options: InteractionReplyOptions | MessageOptions | MessagePayload | string, fetchReply?: false): Promise<void>;
    public async send(options: InteractionReplyOptions | MessageOptions | MessagePayload | string, fetchReply = false) {
        if (this.isInteractionContext()) {
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

            if (this.isContextMenu()) {
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

        return this.channel!.send(cast<MessageOptions | MessagePayload | string>(options));
    }
}
