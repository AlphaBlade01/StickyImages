import ImageGroup, { TSerialisedImageGroup } from "../../components/ImageGroup";
import Storage from "../services/Storage";

export default class ImageGroups 
{
    private static loadedImageGroups: ImageGroup[];

    public static saveImageGroup(group: ImageGroup)
    {
        this.loadedImageGroups.push(group);
    }

    public static getImageGroup(name: string): ImageGroup
    {
        return this.loadedImageGroups.find(group => group.name === name);
    }

    public static getImageGroups(): ImageGroup[]
    {
        return this.loadedImageGroups;
    }

    public static async loadImageGroups()
    {
        const serialisedGroups: TSerialisedImageGroup[] = (await Storage.get("ImageGroups") ?? []) as TSerialisedImageGroup[];
        this.loadedImageGroups = serialisedGroups.map(group => {return new ImageGroup(group)});
    }

    public static async saveImageGroups()
    {
        const serialisedGroups: TSerialisedImageGroup[] = this.loadedImageGroups.map(group => {return group.serialise()});
        Storage.set("ImageGroups", serialisedGroups);
    }
}