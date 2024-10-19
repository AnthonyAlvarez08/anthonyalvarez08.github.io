
const Status = {
    Finished: "Finished",
    InProgress: "Work in Progress"
}

class Project {

    Title = "";
    Description = "";
    ThumbnailPath = "";
    ImagePaths = [];
    TechUsed = [];
    Link = "";
    Status = Status.InProgress;

    constructor(title, techUsed, status, desc="", link="", thumbnail="", images=[]) {
        this.Title = title;
        this.TechUsed = techUsed;
        this.Description = desc;
        this.ThumbnailPath = thumbnail;
        this.ImagePaths = images;
        this.Link = link;
        this.Status = status;
    }

}