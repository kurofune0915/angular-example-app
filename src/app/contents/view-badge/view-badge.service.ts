import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewBadgeService {
  count = new BehaviorSubject<number>(0);

  getInfoList(): InfoList[] {
    this.checkUnread();
    return INFO_LIST;
  }

  checkUnread(): void {
    const unreadItem = localStorage.getItem(KEY_UNREAD_INFO_LIST);
    let unreadInfoList: UnreadInfoList[] = [];
    // ローカルストレージに未読リストが存在しない場合
    if (!unreadItem) {
      INFO_LIST.forEach((list) => {
        unreadInfoList.push({ id: list.id, isUnread: true });
      });
      localStorage.setItem(
        KEY_UNREAD_INFO_LIST,
        JSON.stringify(unreadInfoList)
      );
      this.count.next(INFO_LIST.length);
    }
    // ローカルストレージに未読リストが存在する場合
    else {
      unreadInfoList = JSON.parse(unreadItem) as UnreadInfoList[];
      const tmp: UnreadInfoList[] = [];

      // ローカルストレージとの差分を比較
      INFO_LIST.forEach((list) => {
        const index = unreadInfoList.findIndex(
          (unread) => unread.id === list.id
        );
        if (index === -1) {
          tmp.push({ id: list.id, isUnread: true });
        } else {
          tmp.push(unreadInfoList[index]);
        }
      });
      localStorage.setItem(KEY_UNREAD_INFO_LIST, JSON.stringify(tmp));
      this.count.next(tmp.filter((t) => t.isUnread).length);
    }
  }

  read(id: number): void {
    const unreadInfoList = localStorage.getItem(KEY_UNREAD_INFO_LIST);
    if (unreadInfoList) {
      const result = JSON.parse(unreadInfoList) as UnreadInfoList[];
      const index = result.findIndex((value) => value.id === id);
      if (index !== -1 && result[index].isUnread) {
        result[index].isUnread = false;
        this.decrement();
      }
      localStorage.setItem(KEY_UNREAD_INFO_LIST, JSON.stringify(result));
    }
  }

  increment(): void {
    // Subjectから現在の値を取得
    const count = this.count.getValue();
    // 1加算した値をストリーミングする
    this.count.next(count + 1);
  }

  decrement(): void {
    // Subjectから現在の値を取得
    const count = this.count.getValue();
    if (count - 1 >= 0) {
      // 1減算した値をストリーミングする
      this.count.next(count - 1);
    }
  }
}

export interface InfoList {
  id: number;
  title: string;
}

export interface UnreadInfoList {
  id: number;
  isUnread: boolean;
}

export const INFO_LIST: InfoList[] = [
  { id: 0, title: 'お知らせ1' },
  { id: 1, title: 'お知らせ2' },
  { id: 2, title: 'お知らせ3' },
  { id: 3, title: 'お知らせ4' },
  { id: 4, title: 'お知らせ5' },
];

export const KEY_UNREAD_INFO_LIST = '__unread-info-list';
