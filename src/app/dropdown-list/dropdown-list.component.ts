import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html'
})
export class DropdownListComponent implements OnInit {
  @Input() disabled = false;
  @Input() needLoadBtn = false;
  @Input() items = [];
  @Input() lablel: string;
  @Output() selectedValue = new EventEmitter<any>();
  @Output() showData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onchangeSelect(select) {
    this.selectedValue.emit(select ? select.value : '');
  }
  onShowData() {
    this.showData.emit();
  }
}
