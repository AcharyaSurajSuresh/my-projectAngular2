import { Directive, ElementRef, HostBinding, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2)
  {
    el.nativeElement.style.color="blue";
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','khaki');
    this.renderer.setStyle(this.el.nativeElement,'font-size','60px');
  }


  // {
    // el.nativeElement.style.color="red";
    // el.nativeElement.style.backgroundColor="green";
    // this.el.nativeElement.style.width="300px";
    // el.nativeElement.style.fontSize="70px";
  //  }
  //  @HostListener('mouseenter')mouseEnter(){
    //  this.changeColor("blue");
  //  }
  //  changeColor(color){
    //  this.el.nativeElement.style.backgroundColor=color;
    //  this.el.nativeElement.style.width="100px";
    //  this.el.nativeElement.style.color="white";
    //  this.el.nativeElement.style.borderRadius="20px";
  //  }

  //  @HostBinding("style.backgroundColor")bgColor;
  // @HostListener('mouseleave') onMouseLeave() {
    // this.el.nativeElement.style.color="green";
    // this,this.bgColor="khaki";
  // }



}
