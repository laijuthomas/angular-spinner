/* eslint-disable @angular-eslint/directive-selector */

import {
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef, HostBinding,
} from '@angular/core';

import { AngularSpinnerComponent } from './spinner.component';

@Directive({ selector: '[angularSpinner]' })
export class AngularSpinnerDirective implements OnInit {

  spinner: ComponentRef<AngularSpinnerComponent>;

  @HostBinding('class.spinner-container') isSpinnerExist = false;

  /**
   * Spinner message shown next to the icon
   */
  @Input() spinnerMessage: string;

  /**
   * Spinner status color active, disabled, primary, info, success, warning, danger
   */
  @Input() spinnerStatus: string;

  /**
   * Spinner size, available sizes: xxsmall, xsmall, small, medium, large, xlarge, xxlarge
   */
  @Input() spinnerSize: string;

  /**
   * Directive value - show or hide spinner
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('angularSpinner')
  set appSpinner(val: boolean) {
    if (this.spinner) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.shouldShow = val;
      if (this.shouldShow) {
        this.show();
      }
    }
  }

  private shouldShow = false;

  constructor(
    private directiveView: ViewContainerRef,
    private renderer: Renderer2,
    private directiveElement: ElementRef
  ) { }

  ngOnInit() {
    if (this.shouldShow) {
      this.show();
    }
  }

  hide() {
    if (this.isSpinnerExist) {
      this.directiveView.remove();
      this.isSpinnerExist = false;
    }
  }

  show() {
    if (!this.isSpinnerExist) {
      this.spinner = this.directiveView.createComponent(AngularSpinnerComponent);
      this.setInstanceInputs(this.spinner.instance);
      this.spinner.changeDetectorRef.detectChanges();
      this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
      this.isSpinnerExist = true;
    }
  }

  setInstanceInputs(instance: AngularSpinnerComponent) {
    if (typeof this.spinnerMessage !== 'undefined') {
      instance.message = this.spinnerMessage;
    }
    if (typeof this.spinnerStatus !== 'undefined') {
      instance.status = this.spinnerStatus;
    }
    if (typeof this.spinnerSize !== 'undefined') {
      instance.size = this.spinnerSize;
    }
  }
}
