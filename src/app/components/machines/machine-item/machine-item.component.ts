import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ProgramsEnum} from "../../../enums/programs.enum";

@Component({
  selector: 'app-machine-item',
  templateUrl: './machine-item.component.html',
  styleUrls: ['./machine-item.component.scss']
})
export class MachineItemComponent implements OnInit {

  @Input()
    icon: string | undefined;

  @Input()
    name: string | undefined;

  @Input()
    program: ProgramsEnum | undefined;

  @Input()
    active: boolean = false;

  @Input()
    isNext: boolean = false;

  @Input()
    isPrev: boolean = false;

  readonly programs = ProgramsEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
