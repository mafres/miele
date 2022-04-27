import {
  ChangeDetectorRef,
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Miele';
  helpVisible: boolean = true;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  showHelp(toggle: boolean) {
    this.helpVisible = toggle;
    this._cdr.detectChanges();
  }
}
