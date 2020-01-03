import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";
@Directive({ selector: "[anu]" })
export class CustomDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.borderRadius = "10px";
    el.nativeElement.style.border = "1px solid #111";
  }

  @HostBinding("style.background") background: string;
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;
  @HostListener("mouseenter")
  event() {
    console.log("mouse enter🤣");
    this.background = "yellow";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }
  @HostListener("mouseleave")
  event1() {
    console.log("mouse leave🤣");
    this.background = "green";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }
}
