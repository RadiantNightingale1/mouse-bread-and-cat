  const sidebarLinks = [
          { href: '#home', text: 'Home' },
          { href: '#news', text: 'Log In' },
          { href: '#contact', text: 'Store', class: 'active' },
          { href: '#about', text: 'Custom' }
        ];
    
        const sidebar = document.querySelector('.sidebar');
    
        sidebarLinks.forEach(linkInfo => {
          const link = document.createElement('a');
          link.href = linkInfo.href;
          link.textContent = linkInfo.text;
          if (linkInfo.class) {
            link.classList.add(linkInfo.class);
          }
          link.addEventListener('click', function(event) {
            const activeLink = document.querySelector('.sidebar a.active');
            if (activeLink) {
              activeLink.classList.remove('active');
            }
            this.classList.add('active');
          });
          sidebar.appendChild(link);
        });
    const products = [
      { id: 1, name: 'Product A1', price: 20 },
      { id: 2, name: 'Product B1', price: 30 },
      { id: 3, name: 'Product C1', price: 25 },
      { id: 4, name: 'Product A2', price: 20 },
      { id: 5, name: 'Product B2', price: 30 },
      { id: 6, name: 'Product C2', price: 25 },
      { id: 7, name: 'Product A3', price: 20 },
      { id: 8, name: 'Product B3', price: 30 },
      { id: 9, name: 'Product C3', price: 25 },
      { id: 10, name: 'Product A4', price: 20 },
      { id: 11, name: 'Product B4', price: 30 },
      { id: 12, name: 'Product C4', price: 25 }
      // Add more products as needed
    ];

    function displayProducts() {
      const storeElement = document.getElementById('store');

      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.addEventListener('click', () => addToCart(product));

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(addToCartBtn);

        storeElement.appendChild(productDiv);
      });
    }

    function addToCart(product) {
      // Logic to add the product to the cart
      console.log(`Added ${product.name} to cart!`);
    }

    displayProducts();