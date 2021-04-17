const currentCoursesSection = document.querySelector('.grid-container');


//Het data from JSON file
const coursesList = fetch('/data/courses.json');

coursesList.then(response => response.json().then(data => 
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

                        <h5 class="course-title">${data[i].title}</h5>
                        <div class="course-details-container">
                            <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                            <div class="course-length-container">
                                <h2>${data[i].length}h</h2>
                                <h5>Length</h5>
                            </div>
                        </div>
                    </div>
                    `;
                }
                else
                {
                    insertHTML = 
                    `
                    <div class="course-container">
                        <img class="course-img" src="/content/img/${data[i].img}" alt="${data[i].title}">
                        <div class="course-img-overlay"></div>

                        <h5 class="course-title">${data[i].title}</h5>
                        <div class="course-details-container">
                            <p class="course-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio expedita nam necessitatibus nexus p...</p>
                            <div class="course-length-container">
                                <h2>${data[i].length}h</h2>
                                <h5>Length</h5>
                            </div>
                        </div>
                    </div>
                    `;
                }

            currentCoursesSection.insertAdjacentHTML('beforeend', insertHTML);
        }
    }));