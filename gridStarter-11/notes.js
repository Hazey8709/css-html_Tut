//*               -------    Notes   -------

//* We are making a grid template/ starter page.
//* Responsive from about 325px - 1800px(Big CellPhone - Tablet - Laptop Screen).

//* Code: 

//?  Go over navbar button twitch (On Hover) and how to fix it.

//!        ------      JavaScript  Below      -----------

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}
