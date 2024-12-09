/*------------ADD TO CART---------------*/
let cart = [];

        
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
      sidebar.style.right = '-300px'; 
    } else {
      sidebar.style.right = '0px';  
    }
}

function addToCart(productName, productPrice) {
  const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      const newProduct = {
        name: productName,
        price: productPrice,
        quantity: 1
        };
          cart.push(newProduct);
    }
      renderCartItems();
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
   cartItemsContainer.innerHTML = '';

            
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <span>${item.name} - $${item.price} x ${item.quantity}</span>
          <button class="button-increase" onclick="increaseQuantity(${index})"><img src="data:image/png;base64,iVBORw0KGgo
          AAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcy
          lBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC"/></button>
          <button class="button-decrease" onclick="decreaseQuantity(${index})"><img src="data:image/png;base64,iVBORw0KG
          goAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAENJREFUSEtjZKAxYKSx+QyjFhAM4dEgGg0igiFAUAGuVPSfoE7sCjDMGz
          ALyPQAprbRjEYwKEeDaDSICIYAQQU0T0UAw9sCGchp4KEAAAAASUVORK5CYII="/></button>
          <button class="button-remove" onclick="removeFromCart(${index})"><img src="data:image/png;base64,
          iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEtjZKAxYKSx+QyELAgAOqAeiA1wOOQ
          BULwQiDfgcighC0AGyBPw5QWgvCG5FvyHasTlEELyBIOIkAGE5DEsgGmgNO7hPkb3Os0tgLmcoNfRvIhTPdmRR20L0F1IiA+3n1gfED
          KQ4iAatQAjX5EaJKNxQLBoojiICNlAsgXEVDToll7EVvPhysmgqrIBiPUJOR0q/xBIF2CrOglVmUSaj1sZzS0AAFA5OBk5aWwtAAAAA
          ElFTkSuQmCC"/></button>
            `;
          cartItemsContainer.appendChild(cartItem);
            });
        }

  
function increaseQuantity(index) {
  cart[index].quantity += 1;
  renderCartItems();
}

  
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
  cart[index].quantity -= 1;
  renderCartItems();
  }
}


function removeFromCart(index) {
  cart.splice(index, 1);
  renderCartItems();
}

        
function checkout() {
  if (cart.length === 0) {
      alert('Your cart is empty!');
  } else {
      let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      alert(`Your total is $${total}. Proceeding to checkout.`);
  }
      cart = []; 
      renderCartItems();
      toggleSidebar(); 
}

function changeCategory(category) {
  if (category === 'men') {
    document.getElementById('product-brand-1').textContent = "Men's Suit";
    document.getElementById('price-1').textContent = "Php 1460.00";
    document.getElementById('PICTURE1').src = "https://image.made-in-china.com/155f0j00zTRcbJYsCqoe/2022-Men-s-Suit-Korean-Version-Casual-Men-s-Stand-Collar-Small-Suit-Fashion-Personality-Jacket-Men-s-Suit-Men.webp";
    document.getElementById('card-btn1').onclick = function() {
    addToCart("Men's Suit", 1460);};

    document.getElementById('product-brand-2').textContent = "Sweater";
    document.getElementById('price-2').textContent = "Php 1448.00";
    document.getElementById('PICTURE2').src = "https://thestreetsofseoul.com/cdn/shop/files/Sf359f5af8c024139ab6f2bcba125062dO.webp?v=1729860059";
    document.getElementById('card-btn2').onclick = function() {
    addToCart("Sweater", 1448);};

    document.getElementById('product-brand-3').textContent = "Hawaiian T-shirt";
    document.getElementById('price-3').textContent = "Php 1679.00";
    document.getElementById('PICTURE3').src = "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/469383/1.jpg?5668";
    document.getElementById('card-btn3').onclick = function() {
    addToCart("Hawaiian T-shirt", 1679);};

    document.getElementById('product-brand-4').textContent = "Jacket";
    document.getElementById('price-4').textContent = "Php 900.00";
    document.getElementById('PICTURE4').src = "https://i5.walmartimages.com/asr/d31e56a6-2a63-4fcf-a520-4148db67eb57.0501f923b253b82c434cde0e67ba247a.jpeg?odnHeight=50px&odnWidth=50px&odnBg=FFFFFF";
    document.getElementById('card-btn4').onclick = function() {
    addToCart("Jacket", 900);};

    document.getElementById('product-brand-5').textContent = "Polo Shirt";
    document.getElementById('price-5').textContent = "Php 895.00";
    document.getElementById('PICTURE5').src = "https://images-cdn.ubuy.co.in/667c0c25337a8c25680e58b3-summer-breathable-polo-shirts-men-korean.jpg";
    document.getElementById('card-btn5').onclick = function() {
    addToCart("Polo Shirt", 895);};

    document.getElementById('product-brand-6').textContent = "Denim Shirt";
    document.getElementById('price-6').textContent = "Php 1000.00";
    document.getElementById('PICTURE6').src = "https://cafe24.poxo.com/ec01/lmisstore/Xeym8gXyw/uNs04t9Tz1DvI6Op3jsFv57/HMrLAtBcgaWG+SXCbvW4kgobeCi06I+D6Dp0T0sr4/r1Wmer48Pw==/_/web/product/big/202309/732f5b234fb70e279578a2622896f85e.jpg";
    document.getElementById('card-btn6').onclick = function() {
    addToCart("Denim Shirt", 1000);};

    document.getElementById('product-brand-7').textContent = "Henley Shirt";
    document.getElementById('price-7').textContent = "Php 795.00";
    document.getElementById('PICTURE7').src = "https://img.lazcdn.com/g/p/d499e90b738990ddc98aa054949c8718.jpg_960x960q80.jpg_.webp";
    document.getElementById('card-btn7').onclick = function() {
    addToCart("Henley Shirt", 285);};

    document.getElementById('product-brand-8').textContent = "Blazer";
    document.getElementById('price-8').textContent = "Php 2669.00";
    document.getElementById('PICTURE8').src = "https://ae-pic-a1.aliexpress-media.com/kf/S95c386343bc14fe3ad23559ac0bb0a77i/High-Quality-Blazer-Men-Korean-Version-of-Fashion-Youth-Business-Elegant-Simple-Casual-Wedding-Party-Performance.jpg_640x640Q90.jpg_.webp";
    document.getElementById('card-btn8').onclick = function() {
    addToCart("Blazer", 2669);};

    document.getElementById('changeName').textContent = "Mens Apparel";

} else if (category === 'women') {
  document.getElementById('product-brand-1').textContent = "Bemil Dress";
  document.getElementById('price-1').textContent = "Php 1000.00";
  document.getElementById('PICTURE1').src = "https://i.pinimg.com/736x/88/ec/2f/88ec2f1e1c20d1b3a7361acf765820c6.jpg";
  document.getElementById('card-btn1').onclick = function() {
  addToCart("Bemil Dress", 1000);};

  document.getElementById('product-brand-2').textContent = "Maxi Dress";
  document.getElementById('price-2').textContent = "Php 2239.00";
  document.getElementById('PICTURE2').src = "https://m.media-amazon.com/images/I/616QF4XGY6L._AC_UY1000_.jpg";
  document.getElementById('card-btn2').onclick = function() {
  addToCart("Maxi Dress", 2239);};

  document.getElementById('product-brand-3').textContent = "Bodycon Dress";
  document.getElementById('price-3').textContent = "Php 1020.00";
  document.getElementById('PICTURE3').src = "https://s.alicdn.com/@sc04/kf/Hbe5920a516004addb2e52183c97ab944h.jpg";
  document.getElementById('card-btn3').onclick = function() {
  addToCart("Bodycon Dress", 1020);};

  document.getElementById('product-brand-4').textContent = "Sundress";
  document.getElementById('price-4').textContent = "Php 1563.00";
  document.getElementById('PICTURE4').src = "https://i5.walmartimages.com/asr/278d0748-61b1-4b86-b74b-ad84543313ec.ed1bfde1aaa06a3477cf129c27c4b5ba.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF";
  document.getElementById('card-btn4').onclick = function() {
  addToCart("Sundress", 1563);};

  document.getElementById('product-brand-5').textContent = "Cocktail Dress";
  document.getElementById('price-5').textContent = "Php 2295.00";
  document.getElementById('PICTURE5').src = "https://down-ph.img.susercontent.com/file/ph-11134207-7rasc-m0ptn0ffwlqcb7";
  document.getElementById('card-btn5').onclick = function() {
  addToCart("Cocktail Dress", 2295);};

  document.getElementById('product-brand-6').textContent = "Shirt Dress";
  document.getElementById('price-6').textContent = "Php 1650.00";
  document.getElementById('PICTURE6').src = "https://img.lazcdn.com/g/p/ff31b55cafeed02557c5bc0ac2350c69.jpg_720x720q80.jpg_.webp";
  document.getElementById('card-btn6').onclick = function() {
  addToCart("Shirt Dress", 1650);};

  document.getElementById('product-brand-7').textContent = "Halter Mini Dress";
  document.getElementById('price-7').textContent = "Php 1472.00";
  document.getElementById('PICTURE7').src = "https://amygostore.com/cdn/shop/products/IMG_8701_800x.jpg?v=1670570476";
  document.getElementById('card-btn7').onclick = function() {
  addToCart("Halter Mini Dress", 1472);};

  document.getElementById('product-brand-8').textContent = "Off-Shoulder Dress";
  document.getElementById('price-8').textContent = "Php 1710.00";
  document.getElementById('PICTURE8').src = "https://i.pinimg.com/736x/c3/1c/e5/c31ce58a31ccfcd544010eb3c52ff495.jpg";
  document.getElementById('card-btn8').onclick = function() {
  addToCart("Off-Shoulder Dress", 1710);};

  document.getElementById('changeName').textContent = "Womens Apparel";
  }
}

