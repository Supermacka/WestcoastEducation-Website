loadCourses();

async function loadCourses()
{
    const currentCoursesSection = document.querySelector('.grid-container');
    const coursesList = fetch('/data/courses.json'); //Het data from JSON file

    await coursesList.then(response => response.json().then(data => 
    {
        for(let i = 0 ; i < data.length ; i++)
        {
                let insertHTML = "";

                if(data[i].popular == 1)
                {
                    
                    insertHTML = `
                    <div class="course-container">
                        <img class="course-img" src="/content/img/${data[i].img}" alt="${data[i].title}">
                        <div class="course-img-overlay"></div>

                        <div class="popular">
                            <p>Popular</p>
                        </div>

                        <h5 id="title" class="course-title">${data[i].title}</h5>
                        <div class="course-details-container">
                            <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                            <div class="course-length-container">
                                <h2>${data[i].length}h</h2>
                                <h5>Length</h5>
                            </div>
                        </div>

                        <div class="course-select-overlay hideOverlay">
                            <div class="course-select-price">
                                <h5>Price</h5>
                                <h3 id="price">${data[i].price}$</h3>
                            </div>
                            <button onclick="Cart.addToCart(this)">&plus; Add to cart</button>
                        </div>
                    </div>
                    `;
                }
                else
                {
                    insertHTML = `
                    <div class="course-container">
                        <img class="course-img" src="/content/img/${data[i].img}" alt="${data[i].title}">
                        <div class="course-img-overlay"></div>

                        <h5 id="title" class="course-title">${data[i].title}</h5>
                        <div class="course-details-container">
                            <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                            <div class="course-length-container">
                                <h2>${data[i].length}h</h2>
                                <h5>Length</h5>
                            </div>
                        </div>

                        <div class="course-select-overlay hideOverlay">
                            <div class="course-select-price">
                                <h5>Price</h5>
                                <h3 id="price">${data[i].price}$</h3>
                            </div>
                            <button onclick="Cart.addToCart(this)">&plus; Add to cart</button>
                        </div>
                    </div>
                    `;
                }

            currentCoursesSection.insertAdjacentHTML('beforeend', insertHTML);
            console.log("A - Adding courses");
        }
    }));

    const courseContainerElement = document.querySelectorAll(".course-container");
    const courseSelectOverlayL = document.querySelectorAll(".course-select-overlay");

    console.log("B - Waiting for hover");
    console.log(courseContainerElement.length)
    for (let i = 0; i < courseContainerElement.length; i++)
    {
    courseContainerElement[i].addEventListener("mouseover", () =>
    {
        courseSelectOverlayL[i].classList.remove("hideOverlay");
    });

    courseContainerElement[i].addEventListener("mouseout", () =>
    {
        courseSelectOverlayL[i].classList.add("hideOverlay");
    });
    }
}
