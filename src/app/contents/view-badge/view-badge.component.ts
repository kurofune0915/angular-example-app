import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InfoList, ViewBadgeService } from './view-badge.service';

@Component({
  selector: 'app-view-badge',
  templateUrl: './view-badge.component.html',
  styleUrls: ['./view-badge.component.scss'],
})
export class ViewBadgeComponent implements OnInit {
  mode: 'list' | 'detail' = 'list';
  infoList: InfoList[] = [];
  selectedItem: InfoList | undefined;
  unread?: BehaviorSubject<number>;

  get isListMode(): boolean {
    return this.mode === 'list';
  }
  get isDetailMode(): boolean {
    return this.mode === 'detail';
  }

  constructor(private service: ViewBadgeService) {}

  ngOnInit(): void {
    this.unread = this.service.count;
    this.infoList = this.service.getInfoList();
  }

  isBadgeHide(): boolean {
    if (this.unread) {
      return this.unread?.getValue() <= 0;
    }
    return true;
  }

  showList(): void {
    this.mode = 'list';
  }

  showDetail(index: number): void {
    this.mode = 'detail';
    this.selectedItem = this.infoList[index];
    this.service.read(this.selectedItem.id);
  }
}
