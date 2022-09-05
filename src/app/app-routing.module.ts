import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [ 
  {path: '', component: WrapperComponent}, 
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
