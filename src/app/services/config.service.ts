import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { AppConfig } from '../app.config';



@Injectable()
export class AppConfigService {
  private jsonFile: string = '';
  constructor(private httpClient: HttpClient) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('initializeApp:: inside setTimeout');
        // doing something
        resolve();
      }, 3000);
    });
  }

  getSettings(): Promise<any> {
    
    if (isDevMode()) {
      this.jsonFile = 'assets/app.config.json'
    } else {
      this.jsonFile = 'assets/app.config.prod.json'
    }
    
    const promise = this.httpClient.get(this.jsonFile)
      .toPromise()
      .then(settings => {
         AppConfig.WebApiUrl = settings['WebApiUrl'];
         AppConfig.InfuraToken = settings['InfuraToken'];
         AppConfig.DBSPrivateKey =settings['DBSPrivateKey'];
         AppConfig.DBSPublicKey =settings['DBSPublicKey'];
        return settings;
      });

    
    return promise;
  }
}
