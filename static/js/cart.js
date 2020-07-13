drops = document.getElementsByClassName('drops')
var updateBtns = document.getElementsByClassName('update-cart')

//################# functions




function get_matched_items(){
    category_value = drops[0].value
    price_value = parseInt(drops[1].value)
    first_filter = []
    if(category_value == -1){
        first_filter = products
    }
    else {
        for (product of products) {
            if (product.cat_id == category_value){
                first_filter.push(product)   
            }
        }
    }
    second_filter = []
    if( price_value == -1){
        second_filter = first_filter
    }
    else {
        if(price_value == 1){
            for (product of first_filter) {
    
                if (product.price <= 1000){
                    second_filter.push(product)   
                }
            }
        }
        else if (price_value == 2){
            for (product of first_filter) {
    
                if (product.price <= 2000){
                    second_filter.push(product)   
                }
            }
        }
        else if (price_value == 3){
            for (product of first_filter) {
    
                if (product.price <= 4000){
                    second_filter.push(product)   
                }
            }
        }
        else if (price_value == 4){
            for (product of first_filter) {
    
                if (product.price <= 80000){
                    second_filter.push(product)   
                }
            }
        }
        else if (price_value == 5){
            for (product of first_filter) {
    
                if (product.price <= 10000){
                    second_filter.push(product)   
                }
            }
        }
        else {
            second_filter = first_filter
        }
    }
    return second_filter
}

function display(products){
    displayed_products = products.map(function(product){
        return `
        <div class="col-lg-4 mb-2">
            <img class="thumbnail" src=${product.imageURL}>
            <div class="box-element product">
                <h6><strong>${product.name}</strong></h6>
                <hr>
                <div class="row">
                    <div class="col-9">
                        <button data-product=${product.id} data-action="add" class="btn btn-outline-secondary add-btn update-cart mt-1">Add to Cart</button>
                        <a class="btn btn-outline-success mt-1" href="#">View</a>
                    </div>
                    <div class="col-3">
                        <h5 id='price'><strong>${product.price} DH</strong></h5>
                    </div>
                </div>

            </div>
        </div>
        `
    })
    displayed_products = displayed_products.join("")
    core.innerHTML = displayed_products
}

function buttonsLisntners(){
    for (i = 0; i < updateBtns.length; i++) {
        updateBtns[i].addEventListener('click', function(){
            console.log('buttonsLisntners triggred')
            var productId = this.dataset.product
            var action = this.dataset.action
            console.log('productId:', productId, 'Action:', action)
            console.log('USER:', user)
    
            if (user == 'AnonymousUser'){
                addCookieItem(productId, action)
            }else{
                updateUserOrder(productId, action)
            }
        })
    }    
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			}, 
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => {
		   return response.json();
		})
		.then((data) => {
		    location.reload()
		});
}


//#############################

// first load buttons listners
buttonsLisntners()
//################

for (i = 0; i < drops.length; i++) {
    drops[i].addEventListener('change', function(){
        display(get_matched_items())
        buttonsLisntners()
    }
    )
}


function addCookieItem(productId, action){
	console.log('User is not authenticated')
	if (action == 'add'){
		if (cart[productId] == undefined){
            cart[productId] = {'quantity':1}
		}else{
            cart[productId]['quantity'] += 1
		}
    }
    
	if (action == 'remove'){
		cart[productId]['quantity'] -= 1

		if (cart[productId]['quantity'] <= 0){
			console.log('Item should be deleted')
			delete cart[productId];
		}
	}
	console.log('CART:', cart)
	document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
	
	location.reload()
}