# @zhycorporg/command-context
> Wrapping all sapphire command (interaction, message) to one context

# Instalation 
```
npm install @sapphire/framework@next discord.js @sapphire/utilities @zhycorporg/command-context
```

# Example ContextCommand
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
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
            registerCommandIfMissing: true
        });
    }
}
```

# Example ContextPrecondition
```ts
import { ApplyOptions } from "@sapphire/decorators";
import type { Precondition } from "@sapphire/framework";
import { CommandContext, ContextPrecondition } from "@zhycorporg/command-context";

@ApplyOptions<Precondition.Options>({
    name: "isAdministrator"
})

export class isAdministrator extends ContextPrecondition {
    public contextRun(context: CommandContext) {
        return context.member!.id === context.guild?.ownerId ? this.ok() : this.error({ message: "You are not an administrator." });
    }
}

declare module "@sapphire/framework" {
    interface Preconditions {
        isAdministrator: never;
    }
}
```