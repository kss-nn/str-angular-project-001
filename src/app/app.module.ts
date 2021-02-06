import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductTurnerComponent } from './common/product-turner/product-turner.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductListComponent } from './common/product-list/product-list.component';
import { PenznemPipe } from './pipe/penznem.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { DataRowComponent } from './common/data-row/data-row.component';
import { DataCellComponent } from './common/data-cell/data-cell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductTurnerComponent,
    ProductCardComponent,
    FilterPipe,
    ProductListComponent,
    PenznemPipe,
    AdminComponent,
    DataEditorComponent,
    DataRowComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
