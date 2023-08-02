import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'csf_01aug_workshop31';
  itemsSelected: any[] = [];

  inventory: any[] = [];

  ngOnInit(): void {
    this.inventory.push({name: 'laptop'});
    this.inventory.push({name: 'pencil'});
    this.inventory.push({name: 'eraser'});
    this.inventory.push({name: 'mouse'});
    this.inventory.push({name: 'IPad'});
  }

  receivedItems: any[] = [];

  //add receivedItem function (pass in event); example of event handler
  receiveSelectedItems(event:string){
    //console.log('receiveSelectedItems' + event);

    if (this.receivedItems.length == 0) {
      this.receivedItems.push({ name: event, quantity: 1 });
    } else {
      let obj = this.receivedItems.find(o => o.name === event);

      let foundIndex = this.receivedItems.indexOf(obj, 0);

      if (foundIndex >= 0) {
        this.receivedItems[foundIndex].quantity++;
      } else {
        this.receivedItems.push({ name: event, quantity: 1 });
      }
    }

    for (var itm of this.receivedItems) {
      console.log('receiveSelectedItem' + JSON.stringify(itm));
    }


  }

  selectedItem(event: string) {
    console.log('parent item: ' + event);

    //if there is no data
    if(this.receivedItems.length ==0){
      this.receivedItems.push({name:event, quantity:1})

    }else{
      let obj = this.receivedItems.find(o => o.name === event);
      let foundIndex = this.receivedItems.indexOf(obj, 0);
      this.receivedItems[foundIndex].quantity++;
    }
    //if array contans some data (find() expects a predicate )
      //string comparison needs 3 equal signs


  // if(foundIndex >=0){
  //   this.receivedItems[foundIndex];
  // }
  //use for loop

  //remove item with qty in shopping cart component (similar to add)
    //quantity --


}
}
