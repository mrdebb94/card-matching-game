import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownMenuDirective } from "./dropdown/dropdown-menu.directive";
import { DropdownToggleDirective } from "./dropdown/dropdown-toggle.directive";
import { DropdownDirective } from "./dropdown/dropdown.directive";

@NgModule({
  declarations: [
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
  ],
  imports: [CommonModule],
  exports: [DropdownMenuDirective, DropdownToggleDirective, DropdownDirective],
})
export class SharedModule {}
