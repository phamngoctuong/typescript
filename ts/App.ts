import {ManageProduct} from 'ts/ManageProduct';
var productrelated = new ManageProduct();
var relatedproducts = document.getElementById('relatedproducts');
relatedproducts.innerHTML = productrelated.getProduct();