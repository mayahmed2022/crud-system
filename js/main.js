var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById( "productDescriptionInput");
var searchInput = document.getElementById("searchInput");
var addBtn = document.getElementById("addBtn");
var updataBtn = document.getElementById("updataBtn");
var updateIndex = 0;




hintMessage = document.getElementById("hintMessage");

var productList = [];
if (localStorage.getItem("products") != null) {
  productList = JSON.parse(localStorage.getItem("products"));
  displayData();
}

function addProduct() {
  if(  validtionPrice()  && validtionName() && validtionCategory()  && validtionDescription()){
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      description: productDescriptionInput.value,
    };
  
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));
    clearData();
    displayData();
  }
}

function displayData() {
    var cartona = " ";
    for (i = 0; i < productList.length; i++) {
    cartona += `
        <tr>
                    <td>${i} </td>
                    <td> ${productList[i].name} </td>
                    <td>${productList[i].price}  </td>
                    <td>${productList[i].category}  </td>
                    <td> ${productList[i].description} </td>
                    <td> 
                    <button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm "> Delete</button>
                    <button  onclick="setData(${i})" class="btn btn-warning btn-sm "> Update</button>
                    
                    </td>
        </tr>

        `;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function clearData() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}

function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  displayData();
}

function search() {
  var term = searchInput.value;
  var cartona = "";
  for (i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `
        <tr>
                    <td>${i} </td>
                    <td> ${productList[i].name} </td>
                    <td>${productList[i].price}  </td>
                    <td>${productList[i].category}  </td>
                    <td> ${productList[i].description} </td>
                    <td> 
                    <button onclick="deletaProduct(${i})" class="btn btn-danger btn-sm "> Delete</button>
                    <button  class="btn btn-warning btn-sm "> Update</button>
                    
                    </td>
        </tr>

        `;
    }
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function setData(index) {
  

  var currentProduct = productList[index];
  updateIndex = index;
  productNameInput.value = currentProduct.name;
  productPriceInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.category;
  productDescriptionInput.value = currentProduct.description;
  addBtn.classList.add("d-none");
  updataBtn.classList.remove("d-none");
}
function updateProduct(){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
        };
    productList.splice(updateIndex,1,product);
    localStorage.setItem("products", JSON.stringify(productList));
   
    displayData();

    addBtn.classList.remove("d-none");
    updataBtn.classList.add("d-none");

   
}






function validtionName(){
  var regex = /^[a-z]{3,12}$/;
  var test = productNameInput.value;
  if(regex.test(test) ){
    productNameInput.classList.add("is-valid");
    productNameInput.classList.remove("is-invalid");
    hintMessage.classList.add("d-none");
    return true ;


  }
  else{
    productNameInput.classList.remove("is-valid");
    productNameInput.classList.add("is-invalid");
    hintMessage.classList.remove("d-none");
    return false;

  }


}


function validtionPrice(){
  var regex = /^[0-9]{1,5}$/;
  var test = productPriceInput.value;
  if(regex.test(test) ){
    productPriceInput.classList.add("is-valid");
    productPriceInput.classList.remove("is-invalid");
    
    return true ;


  }
  else{
    productPriceInput.classList.remove("is-valid");
    productPriceInput.classList.add("is-invalid");
   
    return false;

  }


}



function validtionCategory(){
  var regex = /^[a-z]+$/;
  var test = productCategoryInput.value;
  if(regex.test(test) ){
    productCategoryInput.classList.add("is-valid");
    productCategoryInput.classList.remove("is-invalid");
    
    return true ;


  }
  else{
    productCategoryInput.classList.remove("is-valid");
    productCategoryInput.classList.add("is-invalid");
   
    return false;

  }


}
function validtionDescription(){
  var regex = /^[a-z]+$/;
  var test = productDescriptionInput.value;
  if(regex.test(test) ){
    productDescriptionInput.classList.add("is-valid");
    productDescriptionInput.classList.remove("is-invalid");
    
    return true ;


  }
  else{
    productDescriptionInput.classList.remove("is-valid");
    productDescriptionInput.classList.add("is-invalid");
   
    return false;

  }


}