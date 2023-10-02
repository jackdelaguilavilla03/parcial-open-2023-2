import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Bundle} from "../model/bundle";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BundlesService extends BaseService<Bundle>{

  constructor(http: HttpClient) {
    super(http);
    this.resourcesEndPoint = '/bundles';
  }
}
