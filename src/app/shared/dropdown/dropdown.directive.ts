import {
  Directive,
  ElementRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ContentChild,
  Input,
  HostListener,
  EventEmitter,
  Output,
} from "@angular/core";
import { DropdownMenuDirective } from "./dropdown-menu.directive";

import { Subscription, fromEvent } from "rxjs";

@Directive({
  selector: "[appDropdown]",
  exportAs: "appDropdown",
})
export class DropdownDirective implements OnChanges, OnDestroy, AfterViewInit {
  @ContentChild(DropdownMenuDirective)
  private dropdownMenu: DropdownMenuDirective;

  @Input() isOpen: boolean = false;
  private willOpen: boolean = false;
  private oldClassName: string;

  private isPreventClose: boolean = false;

  private documentClickSubscription: Subscription;

  constructor(private el: ElementRef) {}

  @Output() onMenuStateChanged: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    if (!this.isOpen) {
      this.willOpen = true;

      let documentClick = fromEvent(document, "click");
      this.documentClickSubscription = documentClick.subscribe(
        this.onMouseClick
      );
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
      this.hideMenu();
    }
  }

  getIsOpen() {
    return this.isOpen;
  }

  setIsPreventClose(isPreventClose: boolean) {
    this.isPreventClose = isPreventClose;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen) {
      let chng = changes.isOpen;
      let cur = chng.currentValue;
      let prev = chng.previousValue;

      if (cur) {
        this.willOpen = true;
      } else if (!cur) {
        this.hideMenu();
      }
    }
  }

  ngOnDestroy() {}

  private showMenu(): void {
    this.isPreventClose = false;
    this.oldClassName = this.el.nativeElement.className;
    this.el.nativeElement.className += " open";
    this.dropdownMenu.show();
    this.onMenuStateChanged.emit(true);
  }

  private hideMenu(): void {
    this.isPreventClose = false;
    this.el.nativeElement.className = this.oldClassName;
    this.dropdownMenu.hide();
    this.onMenuStateChanged.emit(false);

    this.documentClickSubscription.unsubscribe();
  }

  onMouseClick = (event: MouseEvent) => {
    if (!this.willOpen) {
      if (this.isOpen) {
        if (!this.isPreventClose) {
          this.isOpen = false;
          this.hideMenu();
        } else {
          this.isPreventClose = false;
        }
      }
    } else {
      this.willOpen = false;
      this.isOpen = true;
      this.showMenu();
    }
  };

  ngAfterViewInit() {}
}
