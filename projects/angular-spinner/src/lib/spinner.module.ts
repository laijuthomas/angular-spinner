
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSpinnerComponent } from './spinner.component';
import { AngularSpinnerDirective } from './spinner.directive';


@NgModule({
  imports: [CommonModule],
  exports: [AngularSpinnerComponent, AngularSpinnerDirective],
  declarations: [AngularSpinnerComponent, AngularSpinnerDirective],
  entryComponents: [AngularSpinnerComponent],
})
export class AngularSpinnerModule {}
