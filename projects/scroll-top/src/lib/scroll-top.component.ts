import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollTopDirective } from './scroll-top.directive';
import { ScrollTopService } from './scroll-top.service';

@Component({
  selector: 'lib-scroll-top',
  template: `
    <div class="scroll-top" ></div>
  `,
  providers: [ScrollTopDirective]
})
export class ScrollTopComponent implements OnInit, OnDestroy {
  private _elementId!: string;

  @Input()
  set elementId(value: string) {
    this._elementId = value;
    this.service.init(value);
  }

  constructor(private service: ScrollTopService) { }

  ngOnInit(): void {
    this.service.init(this._elementId);
  }

  ngOnDestroy() {
    this.service.destroy();
  }

}
