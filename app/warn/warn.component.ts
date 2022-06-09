import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: [
    '../../styles.scss',
    './warn.component.scss'
  ]
})
export class WarnComponent implements OnInit {

  @Output() onRemove = new EventEmitter()

  @ViewChild('warn') private warnBlock!: ElementRef

  removeWarn() {
    this.warnBlock.nativeElement.remove();
  }

  ngOnInit(): void {

  }

}
