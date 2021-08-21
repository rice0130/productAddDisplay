//1.Instantiate ProductController class
//2. addItem to your product instance
//3. displayItem on the product page

//Hardcode way to add product items into the product items usinsg productController template
//We will change later when we touch on back-end


//Create an instance of Product controller class

const product= new productController(); // the product _item  current stage is empty
//HardCode way, change when touch in back-end
product.addItem("Cat Tee Black T-Shirt", "4 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Black with custom print", "$20");
product.addItem("Dark Thug Blue-Navy T-Shirt", "Thug Blue-Navy", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Black witFront print and paisley print", "$21");
product.addItem("Sphynx Tie Dye Wine T-Shirt", "GPX Poly 1", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Front tie dye print", "$30");
product.addItem("Cat Tee Black T-Shirt", "4 MSL", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Black with custom print", "$20");
product.addItem("Dark Thug Blue-Navy T-Shirt", "Thug Blue-Navy", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Black witFront print and paisley print", "$21");
product.addItem("Sphynx Tie Dye Wine T-Shirt", "GPX Poly 1", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Front tie dye print", "$30");
product.addItem("Sphynx Tie Dye Wine T-Shirt", "GPX Poly 1", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Front tie dye print", "$30");

product.displayItem();