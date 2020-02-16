// komponent służy do wyswietlenia informacji
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy { 


  @Input() //Odbieranie danych z app
  inputText: string;

  @Input() // OnChanges sprawdza czy zmieniły się te pola
  inputDog: Dog;
  show = true;

    ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges -  uruchomione! - #1')
    console.log(changes) // tutaj zapisuja sie zmienione pola
  } 
  /**
   * Uruchamia sie na początku, przed ngOnInit
   * Sprawdza czy zmieniły się zbindowane pola komponentu.
   * Musi zmienić sie referencja
   */


  ngOnInit(): void { //zmiana po wywołaniu wszystkiego
    console.log('ngOnInit - uruchomione! - #2')
    this.inputDog.name = "Inne imie"
  }
    /**
   * Uruchamia sie jeden raz podczas inicjalizacji komponent
   * Uruchomi sie po konstruktorze i po ngOnChange
   */

  ngDoCheck(): void{
    console.log('ngDoCheck - uruchomione! - #3')
  }
  /**
   * Uruchamia sie przy kazdej zmianie, wywolaniu event etc
   */

  ngAfterContentInit(): void{
    console.log('ngAfterContentInit - uruchomione! - #4')
  }
  /**
   * Uruchamia sie po inicjalizacji np <ng-content>
   */

  ngAfterContentChecked(): void{
    console.log( 'ngAfterContentChecked - uruchomione! - #5')
  }
  /**
   * Uruchamia sie po kazdej zmianie np <ng-content>
   */

  ngAfterViewInit(): void{
    console.log( 'ngAfterViewInit - uruchomione! - #6')
  }
  /**
   * Uruchamia sie po inicjalizacji widoku
   */
  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked - uruchomione! - 7#')
  }
  /**
   * Uruchamia sie po kazdej zmianie w widoku
   */

  ngOnDestroy(): void{
    console.log('OnDestroy - uruchomione! - #8')
  }

  content(){
    this.show = !this.show
  }

  
}
