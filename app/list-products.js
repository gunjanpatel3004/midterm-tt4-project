import './list-products.scss';

// Import images
import product1 from './assets/images/product1.jpg';
import product2 from './assets/images/product2.jpg';
import product3 from './assets/images/product3.jpg';
import product4 from './assets/images/product4.jpg';
import product5 from './assets/images/product5.jpg';
import product6 from './assets/images/product6.jpg';
import product7 from './assets/images/product7.jpg';
import product8 from './assets/images/product8.jpg';
import product9 from './assets/images/product9.jpg';
import product10 from './assets/images/product10.jpg';
import product11 from './assets/images/product11.jpg';
import product12 from './assets/images/product12.jpg';

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    // Product data
    const products = [
        {
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product1,
            price: '$99.99'
        },
        {
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product2,
            price: '$29.99'
        },
        {
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product3,
            price: '$39.99'
        },
        {
            name: 'Product 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product4,
            price: '$49.99'
        },
        {
            name: 'Product 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product5,
            price: '$59.99'
        },
        {
            name: 'Product 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product6,
            price: '$69.99'
        },
        {
            name: 'Product 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product7,
            price: '$79.99'
        },
        {
            name: 'Product 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product8,
            price: '$89.99'
        },
        {
            name: 'Product 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product9,
            price: '$99.99'
        },
        {
            name: 'Product 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product10,
            price: '$109.99'
        },
        {
            name: 'Product 11',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product11,
            price: '$119.99'
        },
        {
            name: 'Product 12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product12,
            price: '$129.99'
        }
    ];

    // Generate product cards using a for loop
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-4'); // Bootstrap grid classes

        cardDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="max-width: 100%; max-height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <button class="btn btn-success float-end">Add to Cart</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(cardDiv);
    }
});