import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsTemplateComponent } from './gifs-template/gifs-template.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsTemplateComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsTemplateComponent,
  ]
})
export class GifsModule { }
