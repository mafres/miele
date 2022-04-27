import {
  Component,
  Input
} from '@angular/core';

import { ProgramsEnum } from "../../../enums/programs.enum";

@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.scss']
})
export class ProgramItemComponent {

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

  readonly programs = ProgramsEnum;

  constructor() { }

}
