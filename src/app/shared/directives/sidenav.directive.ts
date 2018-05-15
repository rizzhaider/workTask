import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appsidenav]',
   host: {
        // Track mouse click at the global level.
        "(document: click)": "handleEvent( $event )",
    } 
})
export class SidenavDirective implements OnInit {

  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }


 ngOnInit(){
   console.log('hi');
 } 

 handleEvent(event) {

 //  console.log('clicked ' + event.target);
//   console.log(this.elRef.nativeElement);

   if (this.elRef.nativeElement.contains(event.target)) {
    console.log('clicked on link')
    console.log(this.elRef.nativeElement.parentElement.classList);
    
   if(this.elRef.nativeElement.parentElement.classList.contains("active")) {
      this.renderer.removeClass(this.elRef.nativeElement.parentElement, 'active');
       let childElements : any[] = this.elRef.nativeElement.parentElement.getElementsByTagName('ul');
            for(var i = 0; i < childElements.length; i++){
             this.renderer.setStyle(childElements[i], 'display', 'none');
            }
    } else {
        let elements : any[] = this.elRef.nativeElement.parentElement.parentElement.children;
        for(var i = 0; i < elements.length; i++){
         
            this.renderer.removeClass(elements[i], 'active');

            let childElements : any[] = elements[i].getElementsByTagName('ul');
            for(var j = 0; j < childElements.length; j++){
             this.renderer.setStyle(childElements[j], 'display', 'none');
            }
      
          }
       this.renderer.addClass(this.elRef.nativeElement.parentElement, 'active');
       let childElements : any[] = this.elRef.nativeElement.parentElement.getElementsByTagName('ul');
            for(var i = 0; i < childElements.length; i++){
             this.renderer.setStyle(childElements[i], 'display', 'block');
            }
    }
    
     

   } else {
     console.log('not clicked on link')
   }

        // if (!this.elRef.nativeElement.contains(event.target)) { // or some similar check {
        //     if (this.opened) {
        //         this.renderer.removeClass(this.elRef.nativeElement, 'open');
        //         this.opened = !this.opened;
        //     }

        // } else {
        //     if (this.opened) {
        //         this.renderer.removeClass(this.elRef.nativeElement, 'open');
        //     } else {
        //         this.renderer.addClass(this.elRef.nativeElement, 'open');
        //     }
        //     this.opened = !this.opened;
        // }

    }


}
