import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles:[]
})
export class CountryInputComponent  implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string = 'Buscar...';

  debouncer: Subject<string> = new Subject();

  word: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  keyPressed() {
    this.debouncer.next(this.word);
  }

  search() {
    this.onEnter.emit(this.word)
  }
}
