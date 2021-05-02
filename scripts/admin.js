// Open Admin Panel
const adminButton = document.querySelector('#adminButton');
const adminButtonMobile = document.querySelector('#adminButtonMobile');

adminButton.addEventListener("click", () =>
{
    AdminPanel.openAdminPanel();
});
adminButtonMobile.addEventListener("click", () =>
{
    AdminPanel.openAdminPanel();
});

// Close-Admin-Panel button
const closeButton = document.querySelector('#closeButton');

closeButton.addEventListener('click', () =>
{
    AdminPanel.closeAdminPanel();
})

// Save-Course button
const saveCourseButton = document.querySelector('#saveCourseButton');

saveCourseButton.addEventListener('click', () =>
{
    AdminPanel.createCourse();
})

class AdminPanel
{
    // Open or Close
    static adminPanelElement = document.querySelector('#adminPanel');
    
    static openAdminPanel()
    {
        this.adminPanelElement.classList.remove('hideElement');
    }

    static closeAdminPanel()
    {
        this.adminPanelElement.classList.add('hideElement');
    }

    // Create a new course
    static courseNumberInput = document.querySelector('#course-number');
    static titleInput = document.querySelector('#course-title');
    static descriptionInput = document.querySelector('#course-description');
    static lengthInput = document.querySelector('#course-length');
    static priceInput = document.querySelector('#course-price');
    static popularSwitch = document.querySelector('#course-popular');

    static createCourse() 
    {
        let course = new Course(
            this.courseNumberInput.value,
            this.titleInput.value,
            this.descriptionInput.value,
            Number(this.lengthInput.value),
            Number(this.popularSwitch.checked),
            Number(this.priceInput.value)
        );
        
        // ALL inputs have a value
        let isValid = true;
        for (let prop in course)
        {
            if (course[prop] === "")
            {
                alert("All required fields must be filled");
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
                this.closeAdminPanel();
            }
        }
    };
}