import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
