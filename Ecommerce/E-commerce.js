let products = [{
    title: "Gaming Laptop",
    price: "99,999",
    category: "electronics",
    path: "imageE-commerce/gaming laptop.jpg"
},
{
    title: "Fan",
    price: "1,999",
    category: "electronics",
    path: "imageE-commerce/Fan.jpg"
},
{
    title: "Neck Band",
    price: "1,499",
    category: "electronics",
    path: "imageE-commerce/neck band.jpg"
},
{
    title: "Bread",
    price: "129",
    category: "food & drinks",
    path: "imageE-commerce/bread.jpg"
},
{
    title: "Alpukat kocok",
    price: "149",
    category: "food & drinks",
    path: "imageE-commerce/alpukat kocok.jpg"
},
{
    title: "Bluetooth",
    price: "4,499",
    category: "electronics",
    path: "imageE-commerce/bluetooth head1.jpg"
},
{
    title: "Badam Milk",
    price: "199",
    category: "food & drinks",
    path: "imageE-commerce/Badam Milk.jpg"
},
{
    title: "Burger",
    price: "249",
    category: "food & drinks",
    path: "imageE-commerce/burger.jpg"
},
{
    title: "CMF 2 pro",
    price: "21,999",
    category: "electronics",
    path: "imageE-commerce/cmf phone 2 pro.jpg"
},
{
    title: "Gaming Mouse",
    price: "599",
    category: "electronics",
    path: "imageE-commerce/gaming mouse.jpg"
},
{
    title: "Gym Headphones",
    price: "2,999",
    category: "electronics",
    path: "imageE-commerce/Gym Headphones.jpg"
},
{
    title: "Iron",
    price: "1,449",
    category: "electronics",
    path: "imageE-commerce/iron.jpg"
},
{
    title: "iphone 17 pro max",
    price: "1,20,999",
    category: "electronics",
    path: "imageE-commerce/iphone 17 Pro Max.jpg"
},
{
    title: "Finger food",
    price: "679",
    category: "food & drinks",
    path: "imageE-commerce/finger food.jpg"
},
{
    title: "CMF phone 2",
    price: "21,999",
    category: "electronics",
    path: "imageE-commerce/cmf phone 2.jpg"
},
{
    title: "Cheese Pizza",
    price: "689",
    category: "food & drinks",
    path: "imageE-commerce/cheese pizza.jpg"
},
{
    title: "Blueberry Earl Grey",
    price: "249",
    category: "food & drinks",
    path: "imageE-commerce/Blueberry Earl Grey.jpg"
},
{
    title: "Laptop",
    price: "79,999",
    category: "electronics",
    path: "imageE-commerce/Laptop.jpg"
},
{
    title: "Mixer Red",
    price: "2499",
    category: "electronics",
    path: "imageE-commerce/mixer red.jpg"
},
{
    title: "Mixer",
    price: "1,599",
    category: "electronics",
    path: "imageE-commerce/mixer.jpg"
},
{
    title: "NC75 Purple",
    price: "4,999",
    category: "electronics",
    path: "imageE-commerce/NC75 purple.jpg"
},
{
    title: "Home Made Food",
    price: "299",
    category: "food & drinks",
    path: "imageE-commerce/Home Made Food.jpg"
},
{
    title: "Mango Drink",
    price: "99",
    category: "food & drinks",
    path: "imageE-commerce/mango drink1.jpg"
},
{
    title: "Momos",
    price: "249",
    category: "food & drinks",
    path: "imageE-commerce/Momos.jpg"
},
{
    title: "Noodles",
    price: "349",
    category: "food & drinks",
    path: "imageE-commerce/Noodles.jpg"
},
{
    title: "Refreshing Drink",
    price: "99",
    category: "food & drinks",
    path: "imageE-commerce/Refreshing Drink.jpg"
},
{
    title: "Sandwich",
    price: "239",
    category: "food & drinks",
    path: "imageE-commerce/sandwich.jpg"
},
{
    title: "Smart Watch Woman",
    price: "3,599",
    category: "electronics",
    path: "imageE-commerce/smart watch woman.jpg"
},
{
    title: "Spring Roll",
    price: "199",
    category: "food & drinks",
    path: "imageE-commerce/Spring Rolls.jpg"
},
{
    title: "Watch Woman",
    price: "3,199",
    category: "electronics",
    path: "imageE-commerce/watch design.jpg"
},
{
    title: "Cold & Burger",
    price: "999",
    category: "food & drinks",
    path: "imageE-commerce/cold&burger.jpg"
},
{
    title: "Drink",
    price: "129",
    category: "food & drinks",
    path: "imageE-commerce/drink 1.jpg"
},
{
    title: "Frenchfri",
    price: "299",
    category: "food & drinks",
    path: "imageE-commerce/frenchfri.jpg"
},
{
    title: "Nothing Phone #",
    price: "85,999",
    category: "electronics",
    path: "imageE-commerce/nothing phone 3.jpg"
},
{
    title: "Nothing Phone 3a",
    price: "27,999",
    category: "electronics",
    path: "imageE-commerce/Nothing Phone 3a.jpg"
},
]

let searchInput=document.querySelector("#search-input");
searchInput.addEventListener("input",function(){
 let textToSearch=searchInput.value.toLowerCase();

 let searchList=products.filter(function(item){
    return item.title.toLowerCase().includes(textToSearch);
 });
 displayProducts(searchList);

})


let container = document.querySelector("#product-container");
function displayProducts(listToDisplay) {
    container.innerHTML = "";
    listToDisplay.forEach(function (obj) {
        let cardHTML = `
    <div class="card">
      <img src="${obj.path}">
        <div class="card-info">
           <h2>${obj.title}</h2>
           <p>${obj.price}</p>
           <button class="buy-btn">Buy Now</button>
        </div>
    </div>`;

        container.innerHTML += cardHTML;

    })
}

//page load hote hi saare products dikho
displayProducts(products);

//all buttons ko select karo 
let buttons=document.querySelectorAll(".filter-btn");

buttons.forEach(function(btn){


    btn.addEventListener("click",function(){
        let selectCategory=btn.getAttribute("data-category");

        if(selectCategory==="all"){
            displayProducts(products);
        }
        else{
            let filteredlist=products.filter(function(item){
                return item.category===selectCategory;
            });
            displayProducts(filteredlist);
        }
    });
});





