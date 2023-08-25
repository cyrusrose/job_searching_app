import "dotenv/config"

export interface AppConfig {
    RAPID_API_KEY: string
}

export default {
    expo: {
        scheme: "acme",
        web: {
            bundler: "metro"
        },
        name: "app",
        slug: "app",
        version: "1.0.0",
        extra: {
            RAPID_API_KEY: process.env.RAPID_API_KEY
        }
    }
}
