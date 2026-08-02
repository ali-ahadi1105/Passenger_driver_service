import { registerAs } from "@nestjs/config";

const AppConfig = registerAs('App', () => ({
    version: 'v1',
    port: parseInt(process.env.PORT ?? '3000') || 3000
}));

const SwaggerConfig = registerAs('Swagger', () => ({
    title: 'taxi',
    description: 'taxi swagger docs',
    version: '1.0.0'
}));

export const configurations = [AppConfig, SwaggerConfig];