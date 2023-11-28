import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  initialHeight: number = 200;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.initialHeight);
  }

  @Input('pkmnBorderCard') borderColor: string; // alias
  // @Input() pkmnBorderCard: string; // sans alias
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    let border = `solid 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }

}
