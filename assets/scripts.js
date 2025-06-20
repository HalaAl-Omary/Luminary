const products = [
  {
    id: 1,
    name: "Hair Elixir",
    price: 110,
    salePrice: 99,
    image: "assets/images/Hair1.png",
    category: "Hair Care",
  },
  {
    id: 2,
    name: "Scalp Fresh",
    price: 95,
    salePrice: 85,
    image: "assets/images/Hair2.png",
    category: "Hair Care",
  },
  {
    id: 3,
    name: "Volume Boost",
    price: 120,
    salePrice: 105,
    image: "assets/images/Hair3.png",
    category: "Hair Care",
  },
  {
    id: 4,
    name: "Strand Guard",
    price: 80,
    salePrice: 70,
    image: "assets/images/Hair4.png",
    category: "Hair Care",
  },
  {
    id: 5,
    name: "Shine Drops",
    price: 105,
    salePrice: 95,
    image: "assets/images/Hair5.png",
    category: "Hair Care",
  },
  {
    id: 6,
    name: "Curl Define",
    price: 90,
    salePrice: 82,
    image: "assets/images/Hair6.png",
    category: "Hair Care",
  },
  {
    id: 7,
    name: "Soft Petal",
    price: 150,
    salePrice: 135,
    image: "assets/images/perfumes1.png",
    category: "Perfumes",
  },
  {
    id: 8,
    name: "Deep Bloom",
    price: 140,
    salePrice: 125,
    image: "assets/images/perfpumes2.png",
    category: "Perfumes",
  },
  {
    id: 9,
    name: "Urban Dusk",
    price: 160,
    salePrice: 140,
    image: "assets/images/perfumes3.png",
    category: "Perfumes",
  },
  {
    id: 10,
    name: "Coastal Mist",
    price: 130,
    salePrice: 118,
    image: "assets/images/perfumes4.png",
    category: "Perfumes",
  },
  {
    id: 11,
    name: "Golden Hour",
    price: 155,
    salePrice: 142,
    image: "assets/images/perfumes5.png",
    category: "Perfumes",
  },
  {
    id: 12,
    name: "Wild Essence",
    price: 145,
    salePrice: 130,
    image: "assets/images/perfumes6.png",
    category: "Perfumes",
  },
  {
    id: 13,
    name: "Aqua Fresh",
    price: 50,
    salePrice: 45,
    image: "assets/images/skincare.png",
    category: "Skincare",
  },
  {
    id: 14,
    name: "Skin Bright",
    price: 70,
    salePrice: 62,
    image: "assets/images/skincare2.png",
    category: "Skincare",
  },
  {
    id: 15,
    name: "Night Renew",
    price: 85,
    salePrice: 78,
    image: "assets/images/skincare3.png",
    category: "Skincare",
  },
  {
    id: 16,
    name: "Pure Face",
    price: 35,
    salePrice: 30,
    image: "assets/images/skincare4.png",
    category: "Skincare",
  },
  {
    id: 17,
    name: "Clear Complex",
    price: 55,
    salePrice: 50,
    image: "assets/images/skincare5.png",
    category: "Skincare",
  },
  {
    id: 18,
    name: "Youth Dew",
    price: 90,
    salePrice: 85,
    image: "assets/images/skincare6.png",
    category: "Skincare",
  },
  {
    id: 19,
    name: "Body Silk",
    price: 30,
    salePrice: 27,
    image: "assets/images/body1.png",
    category: "Body Care",
  },
  {
    id: 20,
    name: "Skin Quench",
    price: 32,
    salePrice: 29,
    image: "assets/images/body2.png",
    category: "Body Care",
  },
  {
    id: 21,
    name: "Fresh Clean",
    price: 25,
    salePrice: 22,
    image: "assets/images/body3.png",
    category: "Body Care",
  },
  {
    id: 22,
    name: "Smooth Touch",
    price: 35,
    salePrice: 30,
    image: "assets/images/body4.png",
    category: "Body Care",
  },
  {
    id: 23,
    name: "Comfort Balm",
    price: 40,
    salePrice: 36,
    image: "assets/images/body5.png",
    category: "Body Care",
  },
  {
    id: 24,
    name: "Glow Lotion",
    price: 30,
    salePrice: 28,
    image: "assets/images/body6.png",
    category: "Body Care",
  },
  {
    id: 25,
    name: "Deep Repair",
    price: 60,
    salePrice: 55,
    image: "assets/images/Treatments1.png",
    category: "Treatments",
  },
  {
    id: 26,
    name: "Spot Correct",
    price: 50,
    salePrice: 46,
    image: "assets/images/Treatments2.png",
    category: "Treatments",
  },
  {
    id: 27,
    name: "Calm Skin",
    price: 45,
    salePrice: 40,
    image: "assets/images/Treatments3.png",
    category: "Treatments",
  },
  {
    id: 28,
    name: "Heal Balm",
    price: 38,
    salePrice: 34,
    image: "assets/images/Treatments4.png",
    category: "Treatments",
  },
  {
    id: 29,
    name: "Root Boost",
    price: 48,
    salePrice: 42,
    image: "assets/images/Treatments5.png",
    category: "Treatments",
  },
  {
    id: 30,
    name: "Body Ease",
    price: 42,
    salePrice: 38,
    image: "assets/images/Treatments6.png",
    category: "Treatments",
  },
];
function displayProducts(filteredProducts) {
  const ProuductsQ = document.getElementById("product-list");
  if (!ProuductsQ) return;
  ProuductsQ.innerHTML = "";

  filteredProducts.forEach((product) => {
    const discount = Math.round(
      ((product.price - product.salePrice) / product.price) * 100
    );

    ProuductsQ.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="product-card">
          <div class="wishlist-icon" data-id="${product.id}">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="17" fill="white"/>
              <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h4>${product.name}</h4>

          <div class="price">
            <strong>$${product.salePrice}</strong>
            <s>$${product.price}</s>
            <span class="discount">${discount}%</span>
          </div>

          <button class="btn cart-button">
            <span class="add-to-cart">Add to Cart</span>
            <span class="added">Added</span>
            <i class="fas fa-shopping-cart"></i>
            <i class="fas fa-box"></i>
          </button>
        </div>
      </div>
    `;
  });
}

if (document.getElementById("product-list")) displayProducts(products);

const categoryButtons = document.querySelectorAll(".categories button");
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    const filtered = products.filter((pro) => pro.category === category);
    displayProducts(filtered);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".cart-button")) {
    const button = e.target.closest(".cart-button");
    const productId = parseInt(
      button.closest(".product-card").querySelector(".wishlist-icon").dataset.id
    );
    const product = products.find((p) => p.id === productId);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 1500);
  }
});

const cartTableBody = document.getElementById("cart-table-body");
const subtotalAmount = document.getElementById("subtotal-amount");
const totalAmount = document.getElementById("total-amount");
const deleteCartBtn = document.getElementById("delete-cart");
const checkoutBtn = document.getElementById("checkout-btn");
const totalItemsDisplay = document.getElementById("total-items");

function updateCartHTML() {
  if (!cartTableBody) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartTableBody.innerHTML = "";
  let subtotal = 0;
  let totalItems = 0;

  cart.forEach((item, index) => {
    const productSubtotal = item.salePrice * item.quantity;
    subtotal += productSubtotal;
    totalItems += item.quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" width="60"/></td>
      <td>${item.name}</td>
      <td>$${item.salePrice}</td>
      <td>
        <div class="quantity-controls" data-index="${index}">
          <button class="mx-2 btn btn-sm btn-outline-secondary decrease">−</button>
          <span class="mx-2 quantity-display">${item.quantity}</span>
          <button class="mx-2 btn btn-sm btn-outline-secondary increase">+</button>
        </div>
      </td>
      <td>$${productSubtotal}</td>
      <td>
     <button class="mx-3 btn delete-btn" data-index="${index}">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545" viewBox="0 0 24 24">
      <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/>
     </svg>
    </button>
</td>

    `;
    cartTableBody.appendChild(row);
  });

  if (subtotalAmount) subtotalAmount.textContent = `$${subtotal}`;
  if (totalAmount) totalAmount.textContent = `$${subtotal}`;
  if (totalItemsDisplay) totalItemsDisplay.textContent = `${totalItems} items`;
}

if (cartTableBody) {
  cartTableBody.addEventListener("click", (e) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (e.target.closest(".increase") || e.target.closest(".decrease")) {
      const index = e.target.closest(".quantity-controls").dataset.index;
      if (e.target.closest(".increase")) {
        cart[index].quantity += 1;
      } else if (e.target.closest(".decrease") && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartHTML();
    }

    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
      const index = deleteBtn.dataset.index;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartHTML();
          Swal.fire("Deleted!", "The item has been removed.", "success");
        }
      });
    }
  });
}

if (deleteCartBtn) {
  deleteCartBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("cart");
        updateCartHTML();
        Swal.fire("Deleted!", "All items have been removed.", "success");
      }
    });
  });
}

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "CheckOut.html";
  });
}

updateCartHTML();
document.addEventListener("DOMContentLoaded", () => {
  const placeOrderBtn = document.getElementById("place-order");
  const form = document.getElementById("checkout-form");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );
  document.getElementById("subtotal").textContent = `$${total}`;
  document.getElementById("total").textContent = `$${total}`;

  placeOrderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !address || !phone) {
      Swal.fire("Error", "Please fill in all required fields.", "error");
      return;
    }

    localStorage.removeItem("cart");

    Swal.fire({
      icon: "success",
      title: "Order sent successfully",
      text: "We will contact you soon to deliver your order.",
    }).then(() => {
      form.reset();
      window.location.href = "index.html";
    });
  });
});
