import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { DrumsComponent } from './drums/drums.component';
import { DrumItemComponent } from './drums/drum-item/drum-item.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumsComponent,
    MenuComponent,
    TabsComponent,
    DrumsComponent,
    HelpComponent,
    DrumItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
