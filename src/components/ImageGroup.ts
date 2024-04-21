import ImageGroups from "../logic/data/ImageGroups";


export type TSerialisedImageGroup = {
    name: string,
    fileNames: string[]
}

export default class ImageGroup 
{
    public name: string;
    public fileNames: Array<string>;

    constructor(serialisedGroup: TSerialisedImageGroup)
    {
        this.name = serialisedGroup.name;
        this.fileNames = serialisedGroup.fileNames;
    }

    public addFile(name: string)
    {
        this.fileNames.push(name);
    }

    public save()
    {
        ImageGroups.saveImageGroup(this);
    }

    public serialise(): TSerialisedImageGroup
    {
        return {
            "name": this.name,
            "fileNames": this.fileNames
        }
    }
}