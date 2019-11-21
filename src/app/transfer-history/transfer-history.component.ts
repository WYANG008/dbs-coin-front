import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { TransferHistoryDataSource, TransferHistoryItem } from './transfer-history-datasource';

@Component({
  selector: 'transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements AfterViewInit, OnInit {


  ngOnInit() {

  }

  ngAfterViewInit() {
  
  }
}
