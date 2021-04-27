const currentCoursesSection = document.querySelector('.grid-container');
const coursesListJSON = fetch('/data/courses.json'); //Het data from JSON file
let coursesListJS = [];
let canLoad = true;

loadCourses();

// Methods
async function loadCourses()
{   
    // Clear display
    currentCoursesSection.innerHTML = "";

    // Fill the array with courses from JSON file
    if (canLoad == true)
    {
        await coursesListJSON.then(response => response.clone().json().then(data => 
        {
            for(i = 0; i < data.length; i++)
            {
                coursesListJS.push(data[i]);
            }
        }));
        canLoad = false;
    }

    // Dispay all courses
    for(let i = 0 ; i < coursesListJS.length; i++)
    {
        if(coursesListJS[i].popular == 1)
        {   
            insertHTML = `
            <div class="course-container">
                <img class="course-img" src="/content/img/${coursesListJS[i].img}" alt="${coursesListJS[i].title}">
                <div class="course-img-overlay"></div>

                <div class="popular">
                    <p>Popular</p>
                </div>

                <h5 id="title" class="course-title">${coursesListJS[i].title}</h5>
                <div class="course-details-container">
                    <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                    <div class="course-length-container">
                        <h2>${coursesListJS[i].length}h</h2>
                        <h5>Length</h5>
                    </div>
                </div>

                <div class="course-select-overlay hideOverlay">
                    <div class="course-select-price">
                        <h5>Price</h5>
                        <h3 id="price">${coursesListJS[i].price}$</h3>
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
                <img class="course-img" src="/content/img/${coursesListJS[i].img}" alt="${coursesListJS[i].title}">
                <div class="course-img-overlay"></div>

                <h5 id="title" class="course-title">${coursesListJS[i].title}</h5>
                <div class="course-details-container">
                    <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                    <div class="course-length-container">
                        <h2>${coursesListJS[i].length}h</h2>
                        <h5>Length</h5>
                    </div>
                </div>

                <div class="course-select-overlay hideOverlay">
                    <div class="course-select-price">
                        <h5>Price</h5>
                        <h3 id="price">${coursesListJS[i].price}$</h3>
                    </div>
                    <button onclick="Cart.addToCart(this)">&plus; Add to cart</button>
                </div>
            </div>
            `;
        }

        currentCoursesSection.insertAdjacentHTML('beforeend', insertHTML);
    }

    // Add cart overlay to courses
    const courseContainerElement = document.querySelectorAll(".course-container");
    const courseSelectOverlayL = document.querySelectorAll(".course-select-overlay");

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