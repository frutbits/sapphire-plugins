import { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => ({
	displayName: "unit test",
	preset: "ts-jest",
	testEnvironment: "node",
	testRunner: "jest-circus/runner",
	testMatch: ["<rootDir>/packages/**/tests/*.test.ts", "<rootDir>/packages/**/tests/*.test.js"],
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tsconfig.base.json"
		}
	}
});
