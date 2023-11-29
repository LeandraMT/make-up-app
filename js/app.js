// Storing the products in an array
const products = [
    {
        name: "Foundation",
        category: "Face",
        price: "15.00€",
        imageUrl: "https://th.bing.com/th/id/OIP.wwhuJAcEDd0215GpRGev1AHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Rouge Lipstick",
        category: "Lips",
        price: "12,50€",
        imageUrl: "https://th.bing.com/th/id/OIP.zYLYBRnyUdwrvHfqcrPGygHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Eyeshadow Palette",
        category: "Eyes",
        price: "18,20€",
        imageUrl: "https://th.bing.com/th/id/OIP.4QLUUiDZMfGC6adq56T7NwHaFn?w=254&h=193&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Great Lash Mascara",
        category: "Eyes",
        price: "21,40€",
        imageUrl: "https://th.bing.com/th/id/OIP.AGIbKMSic4P__lsJ7pRWiAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        name: "Fluid Foundation",
        category: "Face",
        price: "15,80€",
        imageUrl: "https://boutique.humbleandrich.com/wp-content/uploads/2019/03/001-32.jpg"
    },
    {
        name: "Blush",
        category: "Face",
        price: "11,99€",
        imageUrl: "https://3.bp.blogspot.com/-9jySnuV9M3c/V3by23TGneI/AAAAAAAAWJc/OQ10k1Aw9xAYmALnN8xGkU18VADAl1ZzACKgB/s1600/makeup-revolution-london-blush-queen-blush-palette-review-swatches-3.jpg"
    },
    {
        name: "Liquid Eyeliner",
        category: "Eyes",
        price: "8,50€",
        imageUrl: "https://th.bing.com/th/id/OIP.jXmUO064envxdH_ePUE24wHaHa?rs=1&pid=ImgDetMain"
    },
    {
        name: "Matte Lip Cream",
        category: "Lips",
        price: "6,99€",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/718JI93R5bL._SL1500_.jpg"
    }
]

function displayAllProducts() {
    const productsList = document.querySelector('.get-products');
    productsList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = product.imageUrl;
        img.alt = product.name;
        img.classList.add('product-image')

        li.appendChild(img);

        const productInfo = document.createTextNode(`${product.name} - ${product.category} - ${product.price}`);
        li.classList.add('product-info')
        li.appendChild(productInfo);

        productsList.appendChild(li);
    });
}

window.addEventListener('load', displayAllProducts);