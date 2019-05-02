import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from '../../../service/common/header/header.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private header: HeaderService,
    public router: Router
  ) { }

  ngOnInit() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
