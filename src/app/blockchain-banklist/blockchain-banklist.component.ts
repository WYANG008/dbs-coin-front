import { AfterViewInit, Component, OnInit, ViewChild,Inject } from '@angular/core';
import { BlockchainBank } from 'app/models/blockchainbank';
import {BlcokchainMember} from 'app/models/blockchainmember';
import { BlockChainService} from '../services/blockchain.service';
import {BankBalance} from 'app/models/bankbalance';
import { Router, ActivatedRoute } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'blockchain-banklist',
  templateUrl: './blockchain-banklist.component.html',
  styleUrls: ['./blockchain-banklist.component.css']
})


export class BlockchainBanklistComponent implements AfterViewInit, OnInit {
  public blockchainBanks: BlockchainBank[];
  public blockchainMember: BlcokchainMember;

 
  constructor(private blockChainService : BlockChainService,
    private router: Router)
  {

  }

  ngOnInit() {
    // alert('ngOnInit');
    this.blockChainService.getAllMember().subscribe(
      res =>{
        this.blockchainBanks = res.result;
        this.blockchainBanks.forEach(function (blockchainbank) {
          this.blockChainService.getBalance(blockchainbank.address).subscribe(         
            res=> {
              blockchainbank.balance = res.result;
            }, 
            error=>{
              blockchainbank.balance = 0;        
            }
          )}, this);
      }
    );  
  }

  

  ngAfterViewInit() {
    
  }

  deregister(publicKey: string, bankName: string, index: number){
    if (confirm("Are you sure to remove this bank, " + bankName + " ?")) {
      this.blockChainService.deregisterBank(publicKey, bankName).subscribe(res=>{
        if (res) {
          this.blockchainBanks.splice(index, 1);
        }
        else {
          alert('deregister is failed.');
        }
      });
    }
  }
}