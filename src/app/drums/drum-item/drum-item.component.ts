import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drum-item',
  templateUrl: './drum-item.component.html',
  styleUrls: ['./drum-item.component.scss']
})
export class DrumItemComponent implements OnInit {

  @Input()
    active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
