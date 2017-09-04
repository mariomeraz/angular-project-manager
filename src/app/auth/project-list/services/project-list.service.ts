import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Project } from "../models/project.models";

@Injectable()
export class ProjectListService{
    constructor(private _http: Http){
    }

    getAll() : Observable<Array<Project>> {
        const url = 'http://localhost:8888/rest-api-project-manager-junio-2017/public/projects';
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({
            headers: headers
        });

        return this._http.get(url, options).map((response) => {
            console.log(response);
            return response.json();
        });



    }

}