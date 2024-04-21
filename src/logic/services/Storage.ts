import * as storage from "electron-settings";
import * as fs from "fs";

export default class Storage 
{
    private static PATH: string;

    public static setPath(path: string)
    {
        this.PATH = path;
        console.log(this.PATH);
    }

    public static async set(key: string, value: Object): Promise<void>
    {
        await storage.set(key, JSON.stringify(value));
    }

    public static async get(key: string): Promise<Object | undefined>
    {
        const storedData = await storage.get(key);
        return storedData ? JSON.parse(storedData.toString()) : undefined;
    }
}