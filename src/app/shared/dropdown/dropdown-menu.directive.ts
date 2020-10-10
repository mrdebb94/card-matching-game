import {
  Directive,
  ElementRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  Input,
  HostListener,
  Inject,
  forwardRef,
  AfterViewInit,
} from "@angular/core";

import { DropdownDirective } from "./dropdown.directive";

@Directive({
  selector: "[appDropdownMenu]",
})
export class DropdownMenuDirective
  implements OnChanges, OnDestroy, AfterViewInit {
  @Input() autoClose: boolean = true;

  constructor(
    private el: ElementRef,
    @Inject(forwardRef(() => DropdownDirective))
    private dropdownDirective: DropdownDirective
  ) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {}

  @HostListener("click", ["$event"]) onClick(event: any) {
    event.preventDefault();
    if (this.autoClose) {
      this.dropdownDirective.close();
    } else {
      this.dropdownDirective.setIsPreventClose(true);
    }
  }

  show() {
    this.el.nativeElement.style.display = "block";
  }

  hide() {
    this.el.nativeElement.style.display = "none";
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.display = "none";
  }
}
