import { BrowserWindow, app } from "electron";
import Storage from "./logic/services/Storage";
import ImageGroups from "./logic/data/ImageGroups";
import * as path from "path"

const VIEWS_PATH = "../views";

// Configuring
app.setName("StickyImages");
Storage.setPath(app.getPath("userData") + "\\Storage.json");
ImageGroups.loadImageGroups();


// Handling app related events
app.on("window-all-closed", app.quit);
app.on("ready", () =>
{
    const mainWindow = new BrowserWindow({ width: 300, height: 400 });
    mainWindow.loadFile(path.join(VIEWS_PATH, "groups.html"));
});
app.on("quit", () => {
    ImageGroups.saveImageGroups();
});