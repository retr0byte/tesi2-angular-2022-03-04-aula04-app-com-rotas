import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MultiTableComponent } from './multi-table/multi-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'multiTable', component: MultiTableComponent },
    ]),
  ],
  declarations: [AppComponent, MultiTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
