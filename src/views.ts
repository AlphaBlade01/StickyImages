import { BrowserWindow } from "electron";
import * as path from "path";

const VIEWS_PATH = "../views";
var openWindows: {[name: string]: BrowserWindow} = {}

function createWindow(name: string, width: number, height: number, params?: Record<string, any>): BrowserWindow
{
    const window = new BrowserWindow({ width: width, height: height });
    window.loadFile(path.join(VIEWS_PATH, `${name}.html${params ? "?" + Array.from(Object.keys(params)).map((p: string) => `${p}=${params[p]}`).join("&") : ""}}`));
    openWindows[name] = window;
    return window;
}

export function groups()
{
    createWindow("groups", 300, 400);
}

export function group(groupName: string)
{
    createWindow("group", 300, 400, {
        "group-name": groupName
    });
}