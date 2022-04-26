import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { Store} from '@ngrx/store';

import SwiperCore, { Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import * as rootReducer from '../../reducers';
import { ProgramsEnum } from '../../enums/programs.enum';
import { selectedProgramService } from '../../service/selected-program.service';
import { setSelectedProgram } from '../../actions/selected-program.actions';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent {

  @Output()
    toggleHelp: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  swiperActiveIndex: number = 0;

  readonly programs = ProgramsEnum;

  config: SwiperOptions = {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    loopedSlides: 3
  };

  constructor(
    private _store: Store<rootReducer.State>,
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
