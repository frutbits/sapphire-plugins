/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { Args } from "@sapphire/framework";
import type { AwaitMessageCollectorOptionsParams, AwaitReactionsOptions, Collection, EmojiIdentifierResolvable, Message, MessageCollectorOptionsParams, MessageEditOptions, MessagePayload, MessageReaction, ReactionCollectorOptions, ReplyMessageOptions, StartThreadOptions } from "discord.js";
import { BaseCommandContext } from "./BaseCommandContext";

export class MessageCommandContext<Cached extends boolean = boolean> extends BaseCommandContext {
    declare protected readonly data: { args: Args; context: Message<Cached> };
    public constructor(context: Message, args?: Args) {
        super(context, args);
    }

    public get args() {
        return this.data.args;
    }

    public get webhookId() {
        return this.data.context.webhookId;
    }

    public get content() {
        return this.data.context.content;
    }

    public get system() {
        return this.data.context.system;
    }

    public get pinned() {
        return this.data.context.pinned;
    }

    public get tts() {
        return this.data.context.tts;
    }

    public nonce() {
        return this.data.context.nonce;
    }

    public embeds() {
        return this.data.context.embeds;
    }

    public components() {
        return this.data.context.components;
    }

    public get attachments() {
        return this.data.context.attachments;
    }

    public get stickers() {
        return this.data.context.stickers;
    }

    public get editedTimestamp() {
        return this.data.context.editedTimestamp;
    }

    public get reactions() {
        return this.data.context.reactions;
    }

    public get mentions() {
        return this.data.context.mentions;
    }

    public get groupActivityApplication() {
        return this.data.context.groupActivityApplication;
    }

    public get activity() {
        return this.data.context.activity;
    }

    public get flags() {
        return this.data.context.flags;
    }

    public get reference() {
        return this.data.context.reference;
    }

    public get interaction() {
        return this.data.context.interaction;
    }

    public get partial() {
        return this.data.context.partial;
    }

    public get editedAt() {
        return this.data.context.editedAt;
    }

    public get hasThread() {
        return this.data.context.hasThread;
    }

    public get thread() {
        return this.data.context.thread;
    }

    public get url() {
        return this.data.context.url;
    }

    public get cleanContent() {
        return this.data.context.cleanContent;
    }

    public createReactionCollector(options?: ReactionCollectorOptions | undefined) {
        return this.data.context.createReactionCollector(options);
    }

    public awaitReactions(options?: AwaitReactionsOptions | undefined): Promise<Collection<string, MessageReaction>> {
        return this.data.context.awaitReactions(options);
    }

    public createMessageComponentCollector(options?: MessageCollectorOptionsParams<"ACTION_ROW", Cached>) {
        return this.data.context.createMessageComponentCollector(options);
    }

    public awaitMessageComponent(options?: AwaitMessageCollectorOptionsParams<"ACTION_ROW", Cached>) {
        return this.data.context.awaitMessageComponent(options);
    }

    public get deletable() {
        return this.data.context.deletable;
    }

    public get pinnable() {
        return this.data.context.pinnable;
    }

    public fetchReference() {
        return this.data.context.fetchReference();
    }

    public get crosspostable() {
        return this.data.context.crosspostable;
    }

    public edit(content: MessageEditOptions | MessagePayload | string) {
        return this.data.context.edit(content);
    }

    public crosspost() {
        return this.data.context.crosspost();
    }

    public pin() {
        return this.data.context.pin();
    }

    public unpin() {
        return this.data.context.unpin();
    }

    public react(emoji: EmojiIdentifierResolvable) {
        return this.data.context.react(emoji);
    }

    public delete() {
        return this.data.context.delete();
    }

    public reply(options: MessagePayload | ReplyMessageOptions | string) {
        return this.data.context.reply(options);
    }

    public startThread(options: StartThreadOptions) {
        return this.data.context.startThread(options);
    }

    public fetch(force = true) {
        return this.data.context.fetch(force);
    }

    public fetchWebhook() {
        return this.data.context.fetchWebhook();
    }

    public suppressEmbeds(suppress = true) {
        return this.data.context.suppressEmbeds(suppress);
    }

    public removeAttachments() {
        return this.data.context.removeAttachments();
    }

    public resolveComponent(customId: string) {
        return this.data.context.resolveComponent(customId);
    }

    public equals(message: Message, rawData: unknown) {
        return this.data.context.equals(message, rawData);
    }
}
