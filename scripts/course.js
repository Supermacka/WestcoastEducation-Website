class Course
{
    constructor(_courseNumber, _title, _description, _length, _popular, _price)
    {
        this.id = 0;
        this.courseNumber = _courseNumber;
        this.title = _title;
        this.description = _description;
        this.length = _length;
        this.img = "course_03.jpg";
        this.popular = _popular;
        this.price = _price;
    }

    id;
    courseNumber;
    title;
    description;
    length;
    img;
    popular;
    price;
}