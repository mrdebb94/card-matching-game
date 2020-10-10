import {
  Directive,
  ElementRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  Input,
  HostListener,
} from "@angular/core";

import { DropdownDirective } from "./dropdown.directive";

@Directive({
  selector: "[appDropdownToggle]",
})
export class DropdownToggleDirective implements OnChanges, OnDestroy {
  @Input() disabled: boolean;

  constructor(
    private el: ElementRef,
    private dropdownDirective: DropdownDirective
  ) {}

  @HostListener("click", ["$event"]) onClick(event: any) {
    event.preventDefault();
    if (!this.disabled) {
      this.dropdownDirective.toggle();
    }
  }

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {}
}
