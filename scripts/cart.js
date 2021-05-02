// Variables - Cart Class 
const cartElement = document.querySelector("#cart");
const cartItemsContainer = document.querySelector('.items-container');

const jsonResponse = fetch('/data/courses.json');
let cartA = [];
const sumPriceElement = document.querySelector('#sumPrice');
const checkoutButton = document.querySelector('#checkout');
const checkoutFContainerElement = document.querySelector('.checkoutF-container');

class Cart 
{ 
  static cartItemCountElement = document.querySelectorAll("#cartItemCount");
  static cartItemCount = 0;

  static openNav() 
  {
    cartElement.style.width = "750px";
  }
    
  static closeNav() 
  {
    cartElement.style.width = "0";
  }
  
  static async addToCart(selectedCourse)
  {
    // Add selected course to an array
    let selectedTitle = selectedCourse.parentNode.parentNode.querySelector("#title").innerHTML;
  
    for (let i = 0; i < coursesListJS.length; i++)
    {
      if (coursesListJS[i].title == selectedTitle)
      {
        if (cartA.some((item) => this.isEquivalent(item, coursesListJS[i]) == true) == true) 
        {
          // Item already has been added
        }
        else
        {
          cartA.push(coursesListJS[i]);
          this.cartItemCount++;
          console.log(this.cartItemCount);
        }
      }
    }
    
    // Update the cart 
    this.updateCart();
  }

  static removeFromCart(selectedCourse)
  {
    let selectedTitle = selectedCourse.parentNode.parentNode.querySelector("#title").innerHTML;

    for (let i = 0; i < cartA.length; i++)
    {
      if (this.isEquivalent(cartA[i].title, selectedTitle))
      {
        cartA.splice(i, 1);
        this.cartItemCount--;
        console.log(this.cartItemCount);
      }
    }

    this.updateCart();
  }

  // Function to compare the objects
  static isEquivalent(a, b) 
  {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
  
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
  
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
  
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
  
    // If we made it this far, objects
    // are considered equivalent
    return true;
  }

  static updateCart()
  {
    // ----- Update the cart ----- 
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    for (let item of cartA)
    {
      let insertHTML = `
          <div class="item-container">
          <div class="item-price">
              <h5>Price</h5>
              <h3 id="price">${item.price}$</h3>
          </div>
  
          <div class="item">
              <div class="card-container">
                  <div class="card-details">
                      <img src="/content/img/${item.img}" alt="img of course">
                      <div class="card-length">
                          <h2>${item.length}h</h2>
                          <h5>Length</h5>
                      </div>
                  </div>
                  <div class="card-description">
                      <h5 id="id">#${item.courseNumber}</h5>
                      <h2 id="title">${item.title}</h2>
                      <p id="description">${item.description}</p>
                  </div>
              </div>
  
              <div class="remove-container">
                  <a class="button-close" onclick="Cart.removeFromCart(this)" href="#">&minus;</a>
              </div>
          </div>
      </div>
      `;
      cartItemsContainer.insertAdjacentHTML('afterbegin', insertHTML);
      totalPrice += item.price;
    }

    this.cartItemCountElement.forEach(item => {
      item.innerHTML = this.cartItemCount;
    });

    sumPriceElement.innerHTML = `${totalPrice.toFixed(2)}$`;
  }

  static checkout()
  {
    cartA.splice(0, cartA.length);
    checkoutFContainerElement.classList.remove('hideElement');
  }

  static finished()
  {
    checkoutFContainerElement.classList.add('hideElement');
    this.cartItemCount = 0;
    this.updateCart();
    this.closeNav();
  }
}
