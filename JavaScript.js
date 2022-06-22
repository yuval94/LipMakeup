var slideImg = 1; //משתנה לתמונה 1
showSlides(slideImg); //מראה את התמונה הנוכחית

//פונקציה שמטרת לעבור לתמונה הבאה 
function gallerySlides(x) {
    showSlides(slideImg += x); //הגדלת האינדקס ב-1 והצגת התמונה
}

//פונקציה של התמונות הקטנות 
function ImgSlide(x) {
    showSlides(slideImg = x); //מציג את התמונה הנוכחית
}

//פונקציה שמטרת להחליף בין התמונות
function showSlides(x) {
    var i;
    var slides = document.getElementsByClassName("gallery"); //משתנה לכל תמונה
    var dots = document.getElementsByClassName("demo"); //מתשנה מעבר
    var captionText = document.getElementById("caption"); //משתנה לכותרת התמונה

    //אם התמונה גדולה ממספר השקופיות הכולל
    if (x > slides.length -1)
    {
        slideImg = 1
    }

      //אם התמונה קטנה ממספר השקופיות הכולל
    if (x < 1)
    {
        slideImg = slides.length
    }

    //עבור עם הלולאה - הסתרת כל תמונה
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

     //לולאה שעוברת ומחליפה כל מעבר לפעיל
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //הגדרת תמונה נוכחית לרכיב בלוק
    slides[slideImg - 1].style.display = "block";

       //הגדרת מעבר לתמונה המתאימה - פעיל
    dots[slideImg - 1].className += " active";

      //הגדרת הכותרות לתמונה המתאימה
    captionText.innerHTML = dots[slideImg - 1].alt;
}

