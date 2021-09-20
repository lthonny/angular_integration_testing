import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges{

  defaultColor: string = 'blue';
  @Input('appColor') color: string;

  constructor(
      private element: ElementRef
  ) { }

  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor = this.color || this.defaultColor;
  }

}
