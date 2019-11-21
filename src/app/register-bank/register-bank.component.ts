import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BlockChainService} from '../services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'register-bank',
  templateUrl: './register-bank.component.html',
  styleUrls: ['./register-bank.component.css']
})
export class RegisterBankComponent implements AfterViewInit, OnInit {
  public publicKey: string;
  public bankName: string;

  constructor(private blockChainService : BlockChainService,
    private router: Router)
  {

  }
  

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  registerBank() {
    this.blockChainService.registerBank(this.publicKey.toString(), this.bankName.toString()).subscribe(res => {
      if (res) {
          alert(this.bankName + ' is register successfully. You will redirect to bank list.');
          this.router.navigate(['/blockchain-banklist'])
      }
    else {
        alert('Register fail!');
      }
    });
  }
}
