import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BlockchainBank } from 'app/models/blockchainbank';
import {BlcokchainMember} from 'app/models/blockchainmember';
import {BankBalance} from 'app/models/bankbalance';
import { AppConfig } from '../app.config';


@Injectable()
export class BlockChainService {  
  private webApiUrl: string;
  private blockchainBanks:BlockchainBank[];
  constructor(private httpClient: HttpClient) {
   this.webApiUrl = 'http://13.229.128.242:3000/api/dbs'
  }

 
  registerBank(bankPublicKey: string, bankName: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const params = new HttpParams()
    .set('address', bankPublicKey.toString())
    .set('name', bankName.toString());
    return this.httpClient.post<any>(this.webApiUrl + '/register', params, { headers }
    );
  }

  deregisterBank(bankPublicKey: string, bankName: string): Observable<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams()
    .set('address', bankPublicKey.toString())
    .set('name', bankName.toString());
    return this.httpClient.post<any>(this.webApiUrl + '/deregister', params, { headers }
    );
  }

  mintCoin(bankPublicKey: string, amount: number): Observable<boolean> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const params = new HttpParams()
    .set('address', bankPublicKey.toString())
    .set('amount', amount.toString());
    return this.httpClient.post<any>(this.webApiUrl + '/mint', params, { headers }
    );
  }

  burnCoin(bankPublicKey: string, amount: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const params = new HttpParams()
    .set('address', bankPublicKey.toString())
    .set('amount', amount.toString());
      return this.httpClient.post<any>(this.webApiUrl + '/burn', params, { headers }
    );
  }


  transferDBCoin(fromBankPublicKey: string, fromBankPrivateKey: string,
    toBankPublicKey: string,
    fromBankCustomerID: string,
    toBankCustomerID: string,
    amount: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const params = new HttpParams()
    .set('fromBankAddr', fromBankPublicKey.toString())
    .set('fromBankPrivKey', fromBankPrivateKey.toString())
    .set('toBankAddr', toBankPublicKey.toString())
    .set('fromBankCustomerId', fromBankCustomerID.toString())
    .set('toBankCustomerId', toBankCustomerID.toString())
    .set('amount',amount.toString());
    return this.httpClient.post<any>(this.webApiUrl + '/transfer', params, { headers }
    );
  }

  getAllMember(): Observable<BlcokchainMember>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<BlcokchainMember>(this.webApiUrl + '/', { headers });
  }

  getTransaction(publicKey: string): Observable<any>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.get<any>(this.webApiUrl + '/getTxHash/' + publicKey, { headers }
    );
  }

  getBalance(publicKey:string): Observable<BankBalance>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<any>(this.webApiUrl + '/getBalance/' + publicKey, { headers });
  }
}
