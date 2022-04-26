import {Component, OnInit, ViewChild} from '@angular/core';

import SwiperCore, {Swiper, SwiperOptions} from 'swiper';
import {SwiperComponent} from 'swiper/angular';
import {ProgramsEnum} from '../../enums/programs.enum';
import {selectedProgramService} from "../../service/selected-program.service";
import {select, Store} from "@ngrx/store";
import {setSelectedProgram} from "../../actions/selected-program.actions";
import {Observable} from "rxjs";
import {selectedProgramInterface} from "../../models/selected-program.interface";
import {map} from "rxjs/operators";
import {getActiveProgram, reducers} from "../../reducers";

import * as rootReducer from "../../reducers"

@Component({
  selector: 'app-machines',
  templateUrl: './machines.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  swiperActiveIndex: number = 0;

  // activeProgram$: Observable<machineProgramsInterface>

  readonly programs = ProgramsEnum;

  config: SwiperOptions = {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 3
  };

  constructor(
    private _store: Store,
    private _machineService: selectedProgramService
  ) {}

  onSlideChange() {
    this.swiperActiveIndex = this.swiper?.swiperRef?.realIndex != undefined
                              ? this.swiper?.swiperRef?.realIndex
                              : 0;

    this.reportActive(this.swiperActiveIndex);
  }

  reportActive(swiperIndex: number) {
    const programObject = Object.keys(this.programs);
    programObject.forEach((key, index) => {
      if (swiperIndex === index) {
        this._store.dispatch(setSelectedProgram({payload: {id: index, name: this.programs[index]}}));
      }
    });
  }
}
