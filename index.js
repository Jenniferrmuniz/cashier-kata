function getOrder(input) {
  
    function findItems(){
      return {
        ['Burger']: input.search("burger"),
        ['Fries']: input.search("fries"),
        ['Chicken']: input.search("chicken"),
        ['Pizza']: input.search("pizza"),
        ['Sandwich']: input.search("sandwich"),
        ['Onionrings']: input.search("onionrings"),
        ['Milkshake']: input.search("milkshake"),
        ['Coke']: input.search("coke"),
      }
    }
  
    let items = findItems();
    let order = "";
    const keys = Object.keys(items);
  
    for(const key of keys){
      while(items[key] >= 0){
        order = order.concat(key, ' ');
        input = input.slice(0, items[key])+input.slice(items[key]+key.length);
        items = findItems(); 
      }
    }
  
      return order.slice(0, -1);  
  }