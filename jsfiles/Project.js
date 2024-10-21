
const Status = {
    Finished: `<span class="status-finished">Finished </span>`,
    InProgress: `<span class="status-wip">Work In Progress</span>`,
    NotStarted: `<span class="status-not-started">Not Started</span>`
}

class Project {

    Title = "";
    Description = "";
    ThumbnailPath = "";
    ImagePaths = [];
    TechUsed = [];
    Link = "";
    GitHub = "";
    Status = Status.InProgress;

    constructor(title, techUsed, status, desc="", github="", link="", thumbnail="", images=[]) {
        this.Title = title;
        this.TechUsed = techUsed;
        this.Description = desc;
        this.ThumbnailPath = thumbnail;
        this.ImagePaths = images;
        this.Link = link;
        this.Status = status;
        this.GitHub = github;
    }

}