import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './contents/top/top.component';
import { ViewPdfComponent } from './contents/view-pdf/view-pdf.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'view-pdf', component: ViewPdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
