import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent implements OnInit {

  photo$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUser$().subscribe(data => { this.photo$=data
    console.log(this.photo$)})
  }

}
