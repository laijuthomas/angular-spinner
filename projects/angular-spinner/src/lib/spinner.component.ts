/* eslint-disable @angular-eslint/no-input-rename */
import { Component, HostBinding, Input } from '@angular/core';

/**
 * Styled spinner component
 */
@Component({
  selector: 'angular-spinner',
  template: `
    <span class="spin-circle"></span>
    <span class="message" *ngIf="message">{{ message }}</span>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class AngularSpinnerComponent {

  static readonly SIZE_XXSMALL = 'xxsmall';
  static readonly SIZE_XSMALL = 'xsmall';
  static readonly SIZE_SMALL = 'small';
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_LARGE = 'large';
  static readonly SIZE_XLARGE = 'xlarge';
  static readonly SIZE_XXLARGE = 'xxlarge';

  static readonly STATUS_ACTIVE = 'active';
  static readonly STATUS_DISABLED = 'disabled';
  static readonly STATUS_PRIMARY = 'primary';
  static readonly STATUS_INFO = 'info';
  static readonly STATUS_SUCCESS = 'success';
  static readonly STATUS_WARNING = 'warning';
  static readonly STATUS_DANGER = 'danger';

  size: string = AngularSpinnerComponent.SIZE_MEDIUM;
  status: string = AngularSpinnerComponent.STATUS_ACTIVE;

  /**
   * Loading text that is shown near the icon
   */
  @Input() message: string;

  /**
   * Spiiner size, available sizes:
   * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
   */
  @Input('size')
  private set setSize(val: string) {
    this.size = val;
  }

  /**
   * Spiiner status (adds specific styles):
   * active, disabled, primary, info, success, warning, danger
   */
  @Input('status')
  private set setStatus(val: string) {
    this.status = val;
  }

  @HostBinding('class.xxsmall-spinner')
  get xxsmall() {
    return this.size === AngularSpinnerComponent.SIZE_XXSMALL;
  }

  @HostBinding('class.xsmall-spinner')
  get xsmall() {
    return this.size === AngularSpinnerComponent.SIZE_XSMALL;
  }

  @HostBinding('class.small-spinner')
  get small() {
    return this.size === AngularSpinnerComponent.SIZE_SMALL;
  }

  @HostBinding('class.medium-spinner')
  get medium() {
    return this.size === AngularSpinnerComponent.SIZE_MEDIUM;
  }

  @HostBinding('class.large-spinner')
  get large() {
    return this.size === AngularSpinnerComponent.SIZE_LARGE;
  }

  @HostBinding('class.xlarge-spinner')
  get xlarge() {
    return this.size === AngularSpinnerComponent.SIZE_XLARGE;
  }

  @HostBinding('class.xxlarge-spinner')
  get xxlarge() {
    return this.size === AngularSpinnerComponent.SIZE_XXLARGE;
  }

  @HostBinding('class.active-spinner')
  get active() {
    return this.status === AngularSpinnerComponent.STATUS_ACTIVE;
  }

  @HostBinding('class.disabled-spinner')
  get disabled() {
    return this.status === AngularSpinnerComponent.STATUS_DISABLED;
  }

  @HostBinding('class.primary-spinner')
  get primary() {
    return this.status === AngularSpinnerComponent.STATUS_PRIMARY;
  }

  @HostBinding('class.info-spinner')
  get info() {
    return this.status === AngularSpinnerComponent.STATUS_INFO;
  }

  @HostBinding('class.success-spinner')
  get success() {
    return this.status === AngularSpinnerComponent.STATUS_SUCCESS;
  }

  @HostBinding('class.warning-spinner')
  get warning() {
    return this.status === AngularSpinnerComponent.STATUS_WARNING;
  }

  @HostBinding('class.danger-spinner')
  get danger() {
    return this.status === AngularSpinnerComponent.STATUS_DANGER;
  }
}
