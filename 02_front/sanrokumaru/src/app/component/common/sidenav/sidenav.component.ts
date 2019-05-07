import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidenavService } from 'src/app/service/common/sidenav/sidenav.service';
import { AvailableMenuListDto } from 'src/app/entity/dto/available-menu-list-dto';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  // メニュー
  public availableMenuListDtoLists: AvailableMenuListDto[];

  constructor(
    private sidenavService: SidenavService,

  ) { }

  ngOnInit() {
    // メニューを取得する。
    this.getAvailableMenu();

  }

  /**
   * メニューを取得する。
   */
  private getAvailableMenu(): void {
    this.sidenavService.getAvailableMenu()
      .subscribe(availableMenuListDtoLists => this.availableMenuListDtoLists = availableMenuListDtoLists);
  }

  /**
   * メニュー選択後に親コンポーネントに対してクローズイベントを発生する。
   */
  public onSidenavClose() {
    this.sidenavClose.emit();
  }

}
