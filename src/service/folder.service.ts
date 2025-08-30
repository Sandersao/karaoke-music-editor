import { FolderPutRequest } from "../io/request/folder-put.request";
import { HttpService } from "./http.service";

export class FolderService {
    private readonly backendHost: string
    constructor(private readonly http: HttpService) { }
    async list() {
        this.http.get(`${this.backendHost}/folderSerivce`)
    }
    async put(body: FolderPutRequest) {
        this.http.put(`${this.backendHost}/folderSerivce`, body)
    }
}