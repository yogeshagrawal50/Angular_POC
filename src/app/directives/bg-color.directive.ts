import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private elref : ElementRef) {}

  @HostListener('mouseover') onMouseOver(){
    this.elref.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elref.nativeElement.style.backgroundColor = '';
  }
}
