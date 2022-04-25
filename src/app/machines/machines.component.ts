import {Component, OnInit, ViewChild} from '@angular/core';

import SwiperCore, {Swiper, SwiperOptions} from 'swiper';
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss']
})
export class DrumsComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  swiperActiveIndex: number = 0;

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
