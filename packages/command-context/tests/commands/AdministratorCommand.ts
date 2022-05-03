/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { ApplicationCommandRegistry, Command, RegisterBehavior } from "@sapphire/framework";
import { CommandContext, ContextCommand } from "../../src/index";
import { guildIds } from "../auth";

export class AdministratorCommand extends ContextCommand {
    public constructor(context: Command.Context) {
        super(context, {
            name: "admin",
            description: "A admin command.",
            chatInputCommand: {
                register: true
            },
            /** @ts-expect-error ts node mark this error? */
            preconditions: ["isAdministrator"]
        });
    }

    public contextRun(ctx: CommandContext): unknown {
        return ctx.send({ content: "This is a secret message !" });
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
