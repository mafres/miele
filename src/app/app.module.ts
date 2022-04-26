import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HelpComponent } from './components/help/help.component';
import {StoreModule} from "@ngrx/store";
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MachinesComponent} from "./components/machines/machines.component";
import {MachineItemComponent} from "./components/machines/machine-item/machine-item.component";
import {SwiperModule} from "swiper/angular";
import {selectedProgramService} from "./service/selected-program.service";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {SelectedMachineEffects} from "./effects/selected-machine.effects";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabsComponent,
    HelpComponent,
    MachinesComponent,
    MachineItemComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SelectedMachineEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    selectedProgramService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
