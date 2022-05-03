/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Embed } from "@discordjs/builders";
import { ApplyOptions } from "@sapphire/decorators";
import { Events, Listener, MessageCommandDeniedPayload } from "@sapphire/framework";

@ApplyOptions<Listener.Options>({
    event: Events.MessageCommandDenied
})

export class messageCommandDenied extends Listener {
    public async run(error: Error, context: MessageCommandDeniedPayload) {
        await context.message.channel.send({
            embeds: [
                new Embed()
                    .setColor(15075685)
                    .setDescription(`❌ | ${error.message}`)
            ]
        });
    }
}
