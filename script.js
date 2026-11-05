


const products = [
    // FRUITS
    {
        id: 1,
        name: "Apples",
        category: "Fruits",
        price: 120,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"
    },
    {
        id: 2,
        name: "Bananas",
        category: "Fruits",
        price: 50,
        unit: "1 dozen",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500"
    },
    {
        id: 3,
        name: "Mangoes",
        category: "Fruits",
        price: 100,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"
    },
    {
        id: 4,
        name: "Oranges",
        category: "Fruits",
        price: 80,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500"
    },
    {
        id: 5,
        name: "Grapes",
        category: "Fruits",
        price: 90,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500"
    },
    {
        id: 6,
        name: "Watermelon",
        category: "Fruits",
        price: 60,
        unit: "1 piece",
        image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500"
    },
    {
        id: 7,
        name: "Pineapple",
        category: "Fruits",
        price: 70,
        unit: "1 piece",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500"
    },
    {
        id: 8,
        name: "Papaya",
        category: "Fruits",
        price: 55,
        unit: "1 piece",
        image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=500"
    },
    {
        id: 9,
        name: "Pomegranate",
        category: "Fruits",
        price: 160,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=500"
    },
    {
        id: 10,
        name: "Guava",
        category: "Fruits",
        price: 60,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500"
    },
    {
        id: 11,
        name: "Strawberries",
        category: "Fruits",
        price: 140,
        unit: "250 g",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500"
    },
    {
        id: 12,
        name: "Kiwi",
        category: "Fruits",
        price: 45,
        unit: "1 piece",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500"
    },

    // VEGETABLES
    {
        id: 13,
        name: "Tomatoes",
        category: "Vegetables",
        price: 40,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
    },
    {
        id: 14,
        name: "Potatoes",
        category: "Vegetables",
        price: 35,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
    },
    {
        id: 15,
        name: "Onions",
        category: "Vegetables",
        price: 45,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500"
    },
    {
        id: 16,
        name: "Carrots",
        category: "Vegetables",
        price: 50,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500"
    },
    {
        id: 17,
        name: "Broccoli",
        category: "Vegetables",
        price: 80,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500"
    },
    {
        id: 18,
        name: "Cabbage",
        category: "Vegetables",
        price: 30,
        unit: "1 piece",
        image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500"
    },

    {
        id: 20,
        name: "Green Chillies",
        category: "Vegetables",
        price: 35,
        unit: "250 g",
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500"
    },
    {
        id: 21,
        name: "Cucumber",
        category: "Vegetables",
        price: 30,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500"
    },
    {
        id: 22,
        name: "Capsicum",
        category: "Vegetables",
        price: 60,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500"
    },
    {
        id: 23,
        name: "Spinach",
        category: "Vegetables",
        price: 25,
        unit: "1 bunch",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"
    },

    // GROCERY
    {
        id: 25,
        name: "Basmati Rice",
        category: "Grocery",
        price: 180,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"
    },
    {
        id: 26,
        name: "Wheat Flour",
        category: "Grocery",
        price: 55,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500"
    },
    {
        id: 27,
        name: "Toor Dal",
        category: "Grocery",
        price: 140,
        unit: "1 kg",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500"
    },
{
    id: 28,
    name: "Moong Dal",
    category: "Grocery",
    price: 120,
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500"
},
    {
        id: 29,
        name: "Cooking Oil",
        category: "Grocery",
        price: 160,
        unit: "1 litre",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
    },

{
    id: 32,
    name: "Tea Powder",
    category: "Grocery",
    price: 120,
    unit: "250 g",
    image: "https://www.instacart.com/image-server/1200x1200/www.instacart.com/assets/domains/product-image/file/large_5aafe594-40b8-436d-9683-d9ac8f09900a.jpg"
},
{
    id: 30,
    name: "Sugar",
    category: "Grocery",
    price: 45,
    unit: "1 kg",
    image: "https://media.istockphoto.com/id/937398986/photo/sugar.jpg?s=612x612&w=0&k=20&c=n7hoGEMHmhM6TyFE88L57V2C8ZMXKnWbQbLPmyWtahU="
},
    {
        id: 33,
        name: "Coffee Powder",
        category: "Grocery",
        price: 150,
        unit: "200 g",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500"
    },
    {
        id: 34,
        name: "Pasta",
        category: "Grocery",
        price: 60,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500"
    },

    // DAIRY
    {
        id: 35,
        name: "Milk",
        category: "Dairy",
        price: 60,
        unit: "1 litre",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500"
    },
    {
        id: 36,
        name: "Curd",
        category: "Dairy",
        price: 40,
        unit: "500 g",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500"
    },
    {
        id: 37,
        name: "Butter",
        category: "Dairy",
        price: 55,
        unit: "100 g",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500"
    },
    {
        id: 38,
        name: "Cheese",
        category: "Dairy",
        price: 110,
        unit: "200 g",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500"
    },
    {
        id: 39,
        name: "Paneer",
        category: "Dairy",
        price: 100,
        unit: "200 g",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500"
    },
 {
    id: 40,
    name: "Ghee",
    category: "Dairy",
    price: 160,
    unit: "200 ml",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500"
},
    {
        id: 41,
        name: "Buttermilk",
        category: "Dairy",
        price: 20,
        unit: "200 ml",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500"
    },
    {
        id: 43,
        name: "Flavoured Yogurt",
        category: "Dairy",
        price: 35,
        unit: "100 g",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500"
    },
    {
        id: 44,
        name: "Lassi",
        category: "Dairy",
        price: 30,
        unit: "200 ml",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500"
    }
];



// 2. Application state
let cart = [];
let selectedCategory = "All";

// 3. Get HTML elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const emptyMessage = document.getElementById("emptyMessage");

const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

// 4. Display products


function displayProducts() {
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/500x300/eaf4ec/176b3a?text=Image+Unavailable'"
            >

            <div class="product-info">
                <p class="product-category">${product.category}</p>

                <h3>${product.name}</h3>

                <p class="product-price">
                    ₹${product.price}
                    <small>/ ${product.unit}</small>
                </p>

                <button
                    class="add-button"
                    data-product-id="${product.id}"
                >
                    Add to Cart
                </button>
            </div>

        </article>
    `).join("");

    emptyMessage.hidden = filteredProducts.length > 0;
}

// 5. Search products
searchInput.addEventListener("input", displayProducts);

// 6. Filter by category
categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filter-button").forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");
    displayProducts();
});

// 7. Add products to cart
productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-product-id]");

    if (!button) return;

    const productId = Number(button.dataset.productId);
    const product = products.find(item => item.id === productId);

    const cartItem = cart.find(item => item.id === productId);

if (cartItem) {
    cartItem.quantity++;
} else {
    cart.push({ ...product, quantity: 1 });
}

// Save cart items for cart.html
localStorage.setItem("nexoraCart", JSON.stringify(cart));

updateCart();

    updateCart();
});
// 8. Initialize products when the page loads
document.addEventListener("DOMContentLoaded", () => {

    selectedCategory = "All";

    document.querySelectorAll(".filter-button").forEach(button => {
        button.classList.remove("active");

        if (button.dataset.category.toLowerCase() === "all") {
            button.classList.add("active");
        }
    });

    displayProducts();

});

// Display all products initially
displayProducts();

// 8. Update cart display
function updateCart() {
    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalItems;
    cartTotal.textContent = `₹${totalPrice}`;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <p>₹${item.price} × ${item.quantity}</p>
            </div>

            <button
                class="remove-button"
                data-remove-id="${item.id}"
            >
                Remove
            </button>
        </div>
    `).join("");
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Hide cart summary
    document.getElementById("cartSummary").style.display = "none";

    // Show payment options
    document.getElementById("paymentSection").style.display = "block";

    // Get total amount from cart
    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    document.getElementById("paymentTotal").innerText =
        "Total Amount: ₹" + total.toFixed(2);

    document.getElementById("paymentSection")
        .scrollIntoView({ behavior: "smooth" });
}


function makePayment() {

    let selectedPayment = document.querySelector(
        'input[name="payment"]:checked'
    );

    if (!selectedPayment) {
        alert("Please select a payment method!");
        return;
    }

    let method = selectedPayment.value;

    if (method === "COD") {

        alert("Order placed successfully!");

        localStorage.removeItem("nexoraCart");

        cart = [];

        location.reload();

    } else {

        alert("You selected " + method +
              ". Please connect a payment gateway for real payment.");

    }
}


// 9. Remove products from cart
cartItems.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-id]");

    if (!button) return;

    const productId = Number(button.dataset.removeId);

    cart = cart.filter(item => item.id !== productId);

    updateCart();
});

closeCart.addEventListener("click", () => {
    cartPanel.hidden = true;
});

// 11. Sample checkout
checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Demo checkout successful! No real order was placed.");

    cart = [];
    updateCart();
    cartPanel.hidden = true;
});

// 12. Initial application setup
displayProducts();
updateCart();