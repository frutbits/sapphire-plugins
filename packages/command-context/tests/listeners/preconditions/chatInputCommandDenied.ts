/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Embed } from "@discordjs/builders";
import { ApplyOptions } from "@sapphire/decorators";
import { Events, Listener, ChatInputCommandDeniedPayload } from "@sapphire/framework";

@ApplyOptions<Listener.Options>({
    event: Events.ChatInputCommandDenied
})

export class chatInputCommandDenied extends Listener {
    public async run(error: Error, context: ChatInputCommandDeniedPayload) {
        if (!context.interaction.deferred) await context.interaction.deferReply();
        await context.interaction.editReply({
            embeds: [
                new Embed()
                    .setColor(15075685)
                    .setDescription(`❌ | ${error.message}`)
            ]
        });
    }
}
