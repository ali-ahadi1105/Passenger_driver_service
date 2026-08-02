import { registerAs } from "@nestjs/config";

const AppConfig = registerAs('App', () => ({
    port: parseInt(process.env.PORT ?? '3000') || 3000
}));

export const configurations = [AppConfig];