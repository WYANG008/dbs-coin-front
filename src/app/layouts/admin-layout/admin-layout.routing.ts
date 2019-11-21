import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {RegisterBankComponent} from '../../register-bank/register-bank.component';
import {TransferMoneyComponent} from '../../transfer-money/transfer-money.component';
import {MintCoinComponent} from '../../mint-coin/mint-coin.component';
import {BurnCoinComponent} from '../../burn-coin/burn-coin.component';
import {TransferHistoryComponent} from '../../transfer-history/transfer-history.component';

import {BlockchainBanklistComponent} from '../../blockchain-banklist/blockchain-banklist.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'register-bank',   component: RegisterBankComponent },
    { path: 'blockchain-banklist', component: BlockchainBanklistComponent},
    { path: 'transfer-money',  component: TransferMoneyComponent },
    { path: 'transfer-history', component: TransferHistoryComponent},
    { path: 'mint-coin', component: MintCoinComponent},
    { path: 'burn-coin', component: BurnCoinComponent}
];
