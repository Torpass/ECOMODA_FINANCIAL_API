declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            MYSQL_NAME: string;
            MYSQL_USER: string;
            MYSQL_PASSWORD: string;
            MYSQL_HOST: string;
        }
    }
}
export {};