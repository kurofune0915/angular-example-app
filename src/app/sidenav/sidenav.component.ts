import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  sidenav: Sidenav[] = [
    {
      category: 'サンプル',
      menuList: [
        {
          name: 'PDF表示',
          description: 'PDFを新しいウィンドウで表示するサンプル',
          path: '',
        },
        {
          name: '未読バッジ表示',
          description: '未読数のアイコンバッジを表示するサンプル',
          path: '',
        },
      ],
    },
    {
      category: 'その他',
      menuList: [
        {
          name: 'ファイルとJSONデータを同時にPOST',
          description:
            '画像などのファイルとJSONを同時にPOSTしてSpringBoot側でマッピング',
          path: '',
        },
      ],
    },
  ];
}

export interface Sidenav {
  category: string;
  menuList: Menu[];
}

export interface Menu {
  name: string;
  description: string;
  path: string;
}
