import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-special-header',
  template: `
    <h1>
      {{text}}
    </h1>
  `,
  styles: [
  ]
})
export class SpecialHeaderComponent implements OnInit {
  @Input() text = '';
  constructor() { }

  ngOnInit(): void {
  }

}
