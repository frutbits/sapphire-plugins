/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import { ApplicationCommandRegistry, RegisterBehavior, Command } from "@sapphire/framework";
import { CommandContext, ContextCommand } from "../../src/index";
import { guildIds } from "../auth";

export class PingCommand extends ContextCommand {
    public constructor(context: Command.Context) {
        super(context, {
            name: "ping",
            description: "A ping command.",
            chatInputCommand: {
                register: true
            }
        });
    }

    public contextRun(ctx: CommandContext): unknown {
        return ctx.send({ content: "Pong !" });
    }

    public override registerApplicationCommands(registry: ApplicationCommandRegistry): void {
        registry.registerChatInputCommand({
            name: this.name,
            description: this.description
        }, {
            guildIds,
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
            registerCommandIfMissing: true
        });
    }
}
