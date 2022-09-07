import { Component } from '@angular/core';

const IMAGE1 = "https://images.unsplash.com/photo-1539630417222-d685b659ffcc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85b0f0d9afe376eb5865bdfa31036c50&auto=format&fit=crop&w=500&q=60";
const IMAGE2 = "https://images.unsplash.com/photo-1519725242260-cdeaa84efe20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b1d1b66ccb7b7dac48c1a5b5d272470&auto=format&fit=crop&w=500&q=60";
const IMAGE3 = "https://images.unsplash.com/photo-1541100242370-4d536228f2a7?ixlib=rb-0.3.5&s=d048e6130382ef846216db1cbace5b0c&auto=format&fit=crop&w=500&q=60";

@Component({
  selector: 'long-list',
  template: `
<ul>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image1}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image2}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image3}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image1}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image2}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image3}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image1}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image2}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image3}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image1}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image2}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc
    <img src="{{image3}}">
  </li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc</li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc</li>
  <li>jpococ ojoccp csocpcjsop sjcpscjcp s cc</li>
</ul>
  `,
  styles: [`
img {
  width: 80%;
}
  `],
})
export class LongListComponent {

  constructor() { }

  image1 = IMAGE1;
  image2 = IMAGE2;
  image3 = IMAGE3;
}
