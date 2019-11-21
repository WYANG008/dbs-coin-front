import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockChainService} from '../services/blockchain.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'burn-coin',
  templateUrl: './burn-coin.component.html',
  styleUrls: ['./burn-coin.component.css']
})
export class BurnCoinComponent {
 

  public publicKey: string;
  public amount: number;

  constructor(private blockChainService : BlockChainService,
    private router: Router)
  {

  }

  burnCoin() {
    this.blockChainService.burnCoin(this.publicKey, this.amount).subscribe(res => {
      if (res) {
          console.log(res);
          alert('Success! You will redirect to bank list.');
          this.router.navigate(['/blockchain-banklist'])
      }
    else {
        alert('Burn fail!');
      }
    });
  }
}
