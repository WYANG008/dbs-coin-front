import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BlockChainService} from '../services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements AfterViewInit, OnInit {
  public fromBankPublicKey: string;
  public toBankPublicKey: string;
  public fromBankPrivateKey: string;
  public amount:number;

  constructor(private blockChainService : BlockChainService,
    private router: Router)
  {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  transferMoney(){
    this.blockChainService.transferDBCoin( this.fromBankPublicKey.toString(),
    this.fromBankPrivateKey.toString(), this.toBankPublicKey.toString(), "", "", this.amount      
    ).subscribe(res => {
      if (res) {
         alert('Success! You will be redirect to transfer history.');
        this.router.navigate(['/transfer-history'])
      }
   else {
        alert('Register fail!');
      }
    });
  }
}
