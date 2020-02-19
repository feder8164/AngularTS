import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor() { }

  @HostListener('mouseenter') // bedzie dziala jak gdzie podbięta jest dyrektywa, mouseenet inicializuje ten HostListener
  mouseenter(eventDate: Event){
    {{}}
    console.log('mouseenter') // reakcja na najechanie
  }

  @HostListener('mouseleave') // reakcja po odjechaniu
  mouseleave(eventDate: Event){
    console.log('mouseleave')
  }

}