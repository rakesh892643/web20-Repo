function Product(n,b,p,d,s) {
  // Complete the constructor function
  this.name = n;
  this.brand = b;
  this.price = p;
  this.description = d;
  this.sold = s || false;
}

// Create these two methods in Product prototype :-
// changePrice
Product.prototype.changePrice = function(updated_price){
  this.price = updated_price
};
// toggleStatus

Product.prototype.toggleStatus = function(){
  if(this.sold === false){
    this.sold = false;
  }
}

// Do not change this
export default Product;
