import ImageGroup from "../components/ImageGroup";
import ImageGroups from "../logic/data/ImageGroups";
import { ipcRenderer } from "electron";

var groupsContainer = document.getElementById("groups-container");

function groupTriggered(group: ImageGroup)
{
    ipcRenderer.send("display-group", group);
}

function addGroupListing(group: ImageGroup)
{
    const div = document.createElement("div");
    div.className = "image-group";

    const button = document.createElement("button");
    button.className = "group-btn";
    button.innerHTML = group.name;
    button.onclick = () => groupTriggered(group);

    div.appendChild(button);
    groupsContainer.appendChild(div);
}

function loadGroups()
{
    var loadedImageGroups: ImageGroup[] = ImageGroups.getImageGroups();
    loadedImageGroups.forEach(group => addGroupListing);
}