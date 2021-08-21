//Create a ProductController class
// Attribute: items object array with item of name, description,image
//addItem and displayItem methods
//Modal for display product details


class productController {

    constructor(){
     
       this._items = []; // empty object- attribure of the productcontroller class
    }

    //create addItem method to add the product item to the _items object
    addItem(name, description, imageURL, style, price){
        //item object to hold the properties and values
        //values are passed into the method via parameter    
        
        const item = {
        name:name,
        description : description,
        imageURL : imageURL,
        style : style,
        price : price
        }
        this._items.push(item);
    }    


    //diplay the product _items on web page
    displayItem() {
      // console.log(this._items);

     //Display the information on the card
     // 1) For Loop to loop through the _items
     // 2) Call a function to create the HTML elements for the card
     // 3) insert the HTML elements of the cards to the row(#row)
     //The For loop will loop through 7 times
        
       const productHTMLList =[];
       for( let i=0 ; i<this._items.length; i++){
        //retrieve the individual item from the _item object array
          const item = this._items[i];  //i=0
          //e.g. if=0;
           /*
                 item
                 {
                    name: "Cat Tee Black T-Shirt",
                    description: "4 MSL",
                    imageURL: "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
                    style: "Black with custom print",
                    price: "$20"
                 }         
           */

                 // call a function to create the HTML Element and display the item values
                 //passing i as an argument to createHTMLCard function
                 const productHTML= createHTMLCard(i,item);      
                 productHTMLList.push(productHTML);       
                 console.log(productHTMLList);
       } //End for loop i statement

         //Append the cards created to the #row id
         const pHTML = productHTMLList.join("\n");
         console.log(pHTML);
         document.querySelector("#row").innerHTML = pHTML;

         //create a loop to add the event listener to each 'more ' button in the card displayed
         for(let j= 0; j<this._items.length; j++){

            //Questions: what do I needto pass in to the event handler function in order for me to display the details of each item when I click in 'more' button.
            const item = this._items[j];
            document.getElementById(j).addEventListener("click",function(){displayProductDetail(item);});
        }


    }          
};



const  createHTMLCard = (index ,item)=>`
      <div  class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${item.imageURL}" class="card-img-top"
                alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a id="${index}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
            </div>
        </div>
      </div>
`;

function displayProductDetail(item){
    document.getElementById("modalName").innerText = item.name;
    document.getElementById("modalImg").innerText = item.imageURL;
    document.getElementById("modalStyle").innerText = item.style;
    document.getElementById("modalPrice").innerText = item.price;
  }
  