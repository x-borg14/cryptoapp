import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cryptoCoins: any[] = [];

  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.getAllCoinsListing().subscribe((response) => {
      console.log(response)
      this.cryptoCoins = response
    })
  }

}
