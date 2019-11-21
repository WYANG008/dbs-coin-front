import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/blockchain-banklist', title:'Blockchain Banks List', icon: 'list', class:''},
    { path: '/register-bank', title: 'Register Bank',  icon:'account_balance', class: '' },
    { path: '/transfer-money', title: 'Transfer Money',  icon:'attach_money', class: '' },
    { path: '/transfer-history', title: 'Transfer History', icon: 'list', class:''},
    { path: '/mint-coin', title: 'Mint Coin', icon:'create', class:''},
    { path: '/burn-coin', title: 'Burn Coin', icon:'clear', class:''}  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
