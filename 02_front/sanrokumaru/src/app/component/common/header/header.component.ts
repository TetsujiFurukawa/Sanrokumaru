import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account/account.service';
import { AvailableMenuListDto } from 'src/app/entity/account/available-menu-list-dto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // 親コンポーネントとの連係
  @Output() public sidenavToggle = new EventEmitter();

  // メニュー
  public availableMenuListDtoLists: AvailableMenuListDto[];

  constructor(
    private accountService: AccountService,
    public router: Router
  ) { }

  ngOnInit() {
    // メニューを取得する。
    this.getAvailableMenu();

  }

  /**
   * メニューを取得する。
   */
  private getAvailableMenu(): void {
    this.accountService.getAvailableMenu()
      .subscribe(availableMenuListDtoLists => this.availableMenuListDtoLists = availableMenuListDtoLists);
  }

  /**
   * イベントを発生する。
   */
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
