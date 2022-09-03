import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-collection-card',
  templateUrl: './user-collection-card.component.html',
  styleUrls: ['./user-collection-card.component.css']
})
export class UserCollectionCardComponent implements OnInit {

  imagesArr: string[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
