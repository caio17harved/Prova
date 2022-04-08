import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CaioComponentComponent } from './caio-component/caio-component.component';
import { RouterModule } from '@angular/router';
import { CaioListaComponentComponent } from './caio-lista-component/caio-lista-component.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
  RouterModule.forRoot([
    {path: '', component: CaioComponentComponent},
    {path: 'lista', component: CaioListaComponentComponent}
  ]) ],
  declarations: [ 
    AppComponent,
     HelloComponent,
    CaioComponentComponent,
    CaioListaComponentComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
