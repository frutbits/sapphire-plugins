import { ApplyOptions } from "@sapphire/decorators";
import { Listener } from "@sapphire/framework";

@ApplyOptions<Listener.Options>({
    name: "ready"
})

export class ready extends Listener {
    public run(): void {
        this.container.logger.info("Client ready and logged in.");
        // Test error
        throw new Error("Hello World");
    }
}
