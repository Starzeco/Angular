import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;    // Inny sposob na ustawianie stylu, zamiast renderer2
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {   // Nazwa mouseenter jest wymagana
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }
  // Tak samo mouseleave tez jest wymagana
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
