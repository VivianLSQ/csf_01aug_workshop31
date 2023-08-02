import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() cartItems: any[] = [];

  RemoveItem(event:string){
    console.log('removeItem: ' + event);

    let objFound = this.cartItems.find(o=> o.name === event);

    let foundIndex = this.cartItems.indexOf(objFound, 0);

    //can choose to reduce quantity, instead of remove item
      //https://stackoverflow.com/questions/74939413/javascript-remove-item-from-cart-if-quantity-is-reduced-to-zero
        //Code uses forEach in the inventory portion, and flat map to add and remove items
    //under assets, create image folder (store image in cloud storage)

    //use splice() to remove item
      //splice(startPosition, deleteCount)
        //slice() is for partial retrieval of a copy of the array; doesnt alter the original array (https://stackoverflow.com/questions/19544452/remove-last-item-from-array)
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    //this.cartItems.splice(foundIndex, 1);
    //or
    this.cartItems.pop();
      //https://www.w3schools.com/jsref/jsref_pop.asp

  }

}
