import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockChainService} from '../services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mint-coin',
  templateUrl: './mint-coin.component.html',
  styleUrls: ['./mint-coin.component.css']
})
export class MintCoinComponent {
  
  public publicKey: string;
  public amount: number;

  constructor(private blockChainService : BlockChainService,
    private router: Router)
  {

  }

  mintCoin(){
    this.blockChainService.mintCoin(this.publicKey.toString(), this.amount).subscribe(res => {
      if (res) {
          alert('Success! You will redirect to bank list');
          this.router.navigate(['/blockchain-banklist'])
      }
    else {
        alert('Mint fail!');
      }
    });
  }
}
