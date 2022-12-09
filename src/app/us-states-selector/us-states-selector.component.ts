import { Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { usStates, UsStates } from './us-states';

@Component({
  selector: 'us-states-selector',
  templateUrl: './us-states-selector.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UsStatesSelectorComponent,
      multi: true
    }
  ]
})
export class UsStatesSelectorComponent
  implements ControlValueAccessor, OnDestroy
{
  sub: Subscription;

  constructor() {
    // When data in the inner form control changes, update the outside form control.
    this.sub = this.selectedState.valueChanges.subscribe(
      v => this.onChange && this.onChange(v)
    );
  }

  usStates: UsStates[] = usStates;

  selectedState = new FormControl();
  onChange: any;
  onTouched: any;

  // When data changes from the outside, update the inner form control.
  writeValue(obj: any): void {
    this.selectedState.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // When the outside disabled state is set, disable/enable the inner form control
  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.selectedState.disable();
    } else {
      this.selectedState.enable();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
