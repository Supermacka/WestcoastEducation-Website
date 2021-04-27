const adminButton = document.querySelector('#adminButton');
const adminButtonMobile = document.querySelector('#adminButtonMobile');
const adminPanel = document.querySelector('#adminPanel')

// Open Admin Panel
adminButton.addEventListener("click", () =>
{
    adminPanel.classList.remove('hideElement');
});
adminButtonMobile.addEventListener("click", () =>
{
    adminPanel.classList.remove('hideElement');
});

// Close Admin Panel
const closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () =>
{
    adminPanel.classList.add('hideElement');
})


// Panel Input-fields
const courseNumberInput = document.querySelector('#course-number');
const titleInput = document.querySelector('#course-title');
const descriptionInput = document.querySelector('#course-description');
const lengthInput = document.querySelector('#course-length');
const priceInput = document.querySelector('#course-price');
const popularSwitch = document.querySelector('#course-popular');

// Save-Course
const saveCourseButton = document.querySelector('#saveCourseButton');

saveCourseButton.addEventListener('click', () =>
{
    createCourse();
})

const createCourse = () => 
{
    const course = {
      id: 0,
      courseNumber: courseNumberInput.value,
      title: titleInput.value,
      description: descriptionInput.value,
      length: Number(lengthInput.value),
      img: "course_03.jpg",
      popular: Number(popularSwitch.checked),
      price: Number(priceInput.value)
    };
    
    // ALL inputs have a value
    let isValid = true;
    for (let prop in course)
    {
        if (course[prop] === "")
        {
            alert("All required fieds must be filled");
            isValid = false;
            break;
        } 
    }

    // IF NOT duplicate. Put object in list
    if (isValid === true)
    {
        if (coursesListJS.some((item) => item.title === course.title))
        {
            alert("A course with the same title already exists");
        }
        else
        {
            // Push new course
            coursesListJS.push(course)
            console.log(course);
            loadCourses();
            adminPanel.classList.add('hideElement');
        }
    }

};