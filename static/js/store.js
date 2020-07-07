
// category_drop = document.getElementById('category')
// price_drop = document.getElementById('price')
// core = document.getElementById('core')
// var updateBtns = core.getElementsByClassName('update-cart')



// function display(products){
//     displayed_products = products.map(function(product){
        
//         return `
//         <div class="col-lg-4 mb-2">
//             <img class="thumbnail" src=${product.imageURL}>
//             <div class="box-element product">
//                 <h6><strong>${product.name}</strong></h6>
//                 <hr>
//                 <div class="row">
//                     <div class="col-9">
//                         <button data-product=${product.id} data-action="add" class="btn btn-outline-secondary add-btn update-cart mt-1">Add to Cart</button>
//                         <a class="btn btn-outline-success mt-1" href="#">View</a>
//                     </div>
//                     <div class="col-3">
//                         <h5 id='price'><strong>${product.price} DH</strong></h5>
//                     </div>
//                 </div>

//             </div>
//         </div>
//         `
//     })
//     displayed_products = displayed_products.join("")
//     core.innerHTML = displayed_products
//     //core.classList.add("flexible");

// }
// /* ######### display all #########*/
// display(products);
// // ###########################

// function get_matched_items(){
//     category_value = category_drop.value
//     //price_value = parseInt(category_drop.options[price_drop.selectedIndex].value)
//     price_value = parseInt(price_drop.value)
//     first_filter = []
//     //console.log(category_value + " and "+price_value)
//     if(category_value == -1){
//         first_filter = products
//     }
//     else {
//         for (product of products) {
//             if (product.cat_id == category_value){
//                 first_filter.push(product)   
//             }
//         }
//     }
//     second_filter = []
//     if( price_value == -1){
//         second_filter = first_filter
//     }
//     else {
//         if(price_value == 1){
//             for (product of first_filter) {
    
//                 if (product.price <= 1000){
//                     second_filter.push(product)   
//                 }
//             }
//         }
//         else if (price_value == 2){
//             for (product of first_filter) {
    
//                 if (product.price <= 2000){
//                     second_filter.push(product)   
//                 }
//             }
//         }
//         else if (price_value == 3){
//             for (product of first_filter) {
    
//                 if (product.price <= 4000){
//                     second_filter.push(product)   
//                 }
//             }
//         }
//         else if (price_value == 4){
//             for (product of first_filter) {
    
//                 if (product.price <= 80000){
//                     second_filter.push(product)   
//                 }
//             }
//         }
//         else if (price_value == 5){
//             for (product of first_filter) {
    
//                 if (product.price <= 10000){
//                     second_filter.push(product)   
//                 }
//             }
//         }
//         else {
//             second_filter = first_filter
//         }
//     }
//     return second_filter
    
// }

// category_drop.addEventListener('change', (event) => {
//     display(get_matched_items());
    
    
// });


// price_drop.addEventListener('change', (event) => {
//     display(get_matched_items());
// });