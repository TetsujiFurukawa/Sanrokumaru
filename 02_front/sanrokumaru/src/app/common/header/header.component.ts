import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/common/header/header.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private header: HeaderService,
    private router: Router
  ) { }

  ngOnInit() { }

}
