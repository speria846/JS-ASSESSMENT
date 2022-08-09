
// NUMBER 1
<form action="form">
<label>
<h1>Company Name:</h1>
<input type= "text" name ="Company name"></input>
<h1 >Telephone_Number:</h1>
<input type="telephone" name ="telEphonenumber"></input>
Booking Date:
<input type = "issued date" name="bookingday"/>
</label>
<p><button>Submit</button></p>
</form>


// NUMBER 2
// Carousel works as it cycles the elements or contents of the page 

// NUNBER 4 
var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
// the consle will out put "Adalab' because its a global
//  function and it can be used in or out side the main function


// NUMBER 3

// It is used as a slideshow for cycling through a series of content,
//  built with CSS 3D transforms and a bit of JavaScript. It works with