import { Directive, HostListener, Input, NgZone } from '@angular/core';
import { ScrollTopService } from './scroll-top.service';

const DURATION = 1000;

@Directive({
  selector: '[blScrolltop]'
})
export class ScrollTopDirective {
  startTime!: number | null;
  startTop!: number;
  progress: number = 0;

  constructor(public service: ScrollTopService,
    private ngZone: NgZone) {
    this.scrollABit = this.scrollABit.bind(this);
  }

  @Input('targetElement') targetElement!: string;

  @HostListener('click', ['$event'])
  onclick($event: any) {
    this.startTop = this.service.currentPositionY;
    this.startTime = null;

    if (this.targetElementExists($event, this.targetElement)) {
      this.ngZone.runOutsideAngular(() => { window.requestAnimationFrame(this.scrollABit); });
    }

    this.service.log('NgScrolltopDirective click');
  }

  private targetElementExists($event: any, selector: string): boolean {
    let found = false;

    if ($event?.target.matches(`#${selector}, #${selector} > *`)) {
      found = true;
    }
    return found;
  }

  easing = (x: number) => {
    'use strict';

    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  }

  scrollABit(timestamp: number) {
    if (!this.startTime) {
      this.startTime = timestamp;
    }

    this.progress = timestamp - this.startTime;
    const percent = (this.progress >= DURATION ? 1 : this.easing(this.progress / DURATION));
    const newY = this.startTop - Math.ceil(this.startTop * percent);

    this.service.scrollABit(newY);

    if (percent < 1) {
      this.ngZone.runOutsideAngular(() => { window.requestAnimationFrame(this.scrollABit); });
    }
  }
}
