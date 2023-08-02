import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent{
  //Add @Input
 @Input() inventory: any[]=[];

 @Output() onSelectedItem: EventEmitter<string> = new EventEmitter();
  //onSelectedItem is the handler
  //to emit back to parent, we need output

  itemSelected(item: any){
    //console.log('Item selected: ' + this.itemSelected);
    this.onSelectedItem.emit(item);
  }


}
