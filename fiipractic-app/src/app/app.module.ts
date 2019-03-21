import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent, PetsComponent } from './components';
import { PeopleWithPetsService } from './services';
import { NamePipe } from './pipes';
import { AddNewEntityComponent } from './components/add-new-entity/add-new-entity.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PetsComponent,
    NamePipe,
    AddNewEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [PeopleWithPetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
