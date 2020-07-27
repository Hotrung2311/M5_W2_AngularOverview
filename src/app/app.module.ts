import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { DangComponent } from './dang/dang.component';
import { HieuLeComponent } from './hieu-le/hieu-le.component';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FontSizeEditorComponent,
    DangComponent,
    HieuLeComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
