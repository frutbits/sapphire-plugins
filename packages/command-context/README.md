# @zhycorporg/command-context
> Wrapping all sapphire command (interaction, message) to one context

# Instalation 
```
npm install @zhycorporg/command-context
```

# Example 
```ts
import { ApplyOptions } from "@sapphire/decorators";
import { ApplicationCommandRegistry, RegisterBehavior, Command } from "@sapphire/framework";
import { CommandContext } from "@zhycorporg/command-context";

@ApplyOptions<Command.Options>({
    name: "ping",
    description: "A ping command !",
    chatInputCommand: {
        register: true
    }
})

export class PingCommand extends ContextCommand {
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
```