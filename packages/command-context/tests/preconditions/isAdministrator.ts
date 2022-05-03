/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ApplyOptions } from "@sapphire/decorators";
import type { Precondition } from "@sapphire/framework";
import { CommandContext, ContextPrecondition } from "../../src/index";

@ApplyOptions<Precondition.Options>({
    name: "isAdministrator"
})

export class isAdministrator extends ContextPrecondition {
    public contextRun(context: CommandContext) {
        return context.member!.id === context.guild?.ownerId ? this.ok() : this.error({ message: "You are not an administrator." });
    }
}

/** TS-NODE DOES NOT RECOGNIZE THIS. */
/*
 * declare module "@sapphire/framework" {
 *  interface Preconditions {
 *      isAdministrator: never;
 *  }
 * }
 */
