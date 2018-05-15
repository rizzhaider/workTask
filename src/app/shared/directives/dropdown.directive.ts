import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  host: {
        // Track mouse click at the global level.
        "(document: click)": "handleEvent( $event )",
    } 
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    

  handleEvent(event) {
        if (!this.elRef.nativeElement.contains(event.target)) { // or some similar check {
            if (this.elRef.nativeElement.classList.contains('open')) {
                this.renderer.removeClass(this.elRef.nativeElement, 'open');                
              
                
            }

        } else {
            if (this.elRef.nativeElement.classList.contains('open')) {
                 this.renderer.removeClass(this.elRef.nativeElement, 'open');                
                
            } else {
                this.renderer.addClass(this.elRef.nativeElement, 'open');               
                
            }
           
        }

    }

}
