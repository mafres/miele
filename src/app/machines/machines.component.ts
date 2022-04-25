import {Component, OnInit, ViewChild} from '@angular/core';

import SwiperCore, {Swiper, SwiperOptions} from 'swiper';
import {SwiperComponent} from 'swiper/angular';
import {ProgramsEnum} from '../enums/programs.enum';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange() {
    this.swiperActiveIndex = this.swiper?.swiperRef?.realIndex != undefined
                              ? this.swiper?.swiperRef?.realIndex
                              : 0;
  }
}
