import { Component, OnInit } from '@angular/core';
import { Coleccion } from 'src/app/interfaces/coleccion.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  coleccion: Coleccion[] | any = []
  usuario: User | any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
