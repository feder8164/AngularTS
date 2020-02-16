import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() //propty tego komponentu która jest wystawiona na zewnatrz
  tasks; // tutaj dane zostały umieszczone

  constructor() { }

  ngOnInit() {
  }

}