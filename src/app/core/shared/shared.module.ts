import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [HttpClientModule, RouterModule,MatGridListModule,CommonModule,FlexLayoutModule,MatIconModule,MatButtonModule,MatCardModule],
  declarations: [NotFoundComponent],
  exports: [HttpClientModule, RouterModule, NotFoundComponent,MatGridListModule,CommonModule,FlexLayoutModule,MatIconModule,MatButtonModule,MatCardModule],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
