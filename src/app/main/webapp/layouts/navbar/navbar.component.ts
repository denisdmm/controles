import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userImage!: string;
  constructor() {
    this.userImage = '/assets/imagens/userCircle.png';

  }

  ngOnInit(): void {
  }

}
