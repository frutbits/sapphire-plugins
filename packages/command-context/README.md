<div align="center">

<img src="https://api.zhycorp.org/assets/images/logo.webp" alt="Zhycorp Logo" width="200px" height="200px"/>

# @zhycorporg/command-context

**Wrapping all sapphire commands (interaction, message) in one context**

[![GitHub](https://img.shields.io/npm/l/@zhycorporg/command-context)](https://github.com/zhycorp/sapphire-plugins/blob/main/packages/command-context/LICENSE)
[![npm](https://img.shields.io/npm/v/@zhycorporg/command-context?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@zhycorporg/command-context)
[![Discord](https://discordapp.com/api/guilds/332877090003091456/embed.png)](https://zhycorp.org/discord)

</div>

# Installation 
```
npm install @sapphire/framework@next discord.js @sapphire/utilities @zhycorporg/command-context
```

# Example `ContextCommand`
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

# Example `ContextPrecondition`
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