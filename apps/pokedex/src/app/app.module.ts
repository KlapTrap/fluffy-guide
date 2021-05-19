import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonStore } from '@nay/data';
import { PageWrapperModule } from '@nay/ui';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    PageWrapperModule,
  ],
  providers: [
    {
      provide: 'favPokemon',
      useValue: new PokemonStore('pokeFavs', localStorage),
    },
    {
      provide: 'caughtPokemon',
      useValue: new PokemonStore('gochaPoke', localStorage),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
