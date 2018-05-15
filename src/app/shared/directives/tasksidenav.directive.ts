import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTasksidenav]',
  host: {
    "(document:click)": "handleEvent($event)"
  }
})
export class TasksidenavDirective implements OnInit {
  // CURRENT_URL = window.location.href.split('#')[0].split('?')[0];
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log('dsdssffvg');
  }


  handleEvent(event) {

    // console.log('clicked' + event.target);
    // console.log(this.elRef.nativeElement);



    if (this.elRef.nativeElement.contains(event.target)) {
      console.log('clicked on link');
      console.log(this.elRef.nativeElement.parentElement.children);

          if(this.elRef.nativeElement.parentElement.classList.contains("active")){
              
             this.renderer.removeClass(this.elRef.nativeElement.parentElement, 'active'); 
            let childElements: any[] =this.elRef.nativeElement.parentElement.getElementsByTagName('ul');
            
            for(i = 0; i < childElements.length; i++){
              // this.renderer.setStyle(childElements[i], 'display', 'none');
              this.renderer.removeClass(childElements[i], 'child_menu_active');
            }     
          }else {

        let liElements: any[] = this.elRef.nativeElement.parentElement.parentElement.children;

      for (var j = 0; j < liElements.length; j++){
            this.renderer.removeClass(liElements[j], 'active');

      let ulElements : any[] = liElements[j].getElementsByTagName('ul');

      for (var i = 0; i < ulElements.length; i++){
          // this.renderer.setStyle(ulElements[i],'display', 'none');
          this.renderer.removeClass(ulElements[i], 'child_menu_active');
      }


      }
           this.renderer.addClass(this.elRef.nativeElement.parentElement, 'active');
      let childElements: any[] = this.elRef.nativeElement.parentElement.getElementsByTagName('ul');
      for (var i = 0; i < childElements.length; i++) {
        // this.renderer.setStyle(childElements[i], 'display', 'block');
        this.renderer.addClass(childElements[i], 'child_menu_active');
      }

          }      

      

     


     
    } else{
    
    }


  }

}
