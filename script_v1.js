
var num_bookings = Array(31).fill(0);


function displayMessage(event) {
    event.preventDefault();     // Prevent the form from submitting
      
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const places = document.getElementById('places').value;
      
    const d = new Date(date);               // Create a Date object
    year = d.getFullYear(); 
    month = d.getMonth() + 1;               // months start at zero for January
    ndate = d.getDate();
    const f_date = ndate+"/"+month+"/"+year;      // dd/mm/yyyy format

    output = "Your table is booked for " + f_date + " at " + time + "pm for " + places;
    if(places == 1)
        output = output + " place";
    else
        output = output + " places";

    let audio = new Audio("sounds/success.wav"); 


    const nd = new Date();                  // get the current date
    cur_year = nd.getFullYear(); 
    cur_month = nd.getMonth();
    cur_date = nd.getDate();
    

    if( (year < cur_year) || ((year == cur_year) && (month < cur_month)) || ( (month == cur_month) && ( ndate < cur_date) ) )
    {
        output = "Date must be sometime in the future"; 
        audio.src = "sounds/error.wav"; 
    }
    else if( num_bookings[ndate] >= 5 )
    {
        output = "Sorry - we are fully booked for that date<br><br>Please try a different date"; 
        audio.src = "sounds/error.wav"; 
        }  
        else  
            num_bookings[ndate] += 1;

    document.getElementById("confirmation").innerHTML = output
    audio.play();
}
      

function cancelBooking(event) {
    event.preventDefault();     // Prevent the form from submitting

    document.getElementById("confirmation").innerHTML = "This booking has been cancelled<br><br>" + 
      "You can book again for a different time or date";

    if( num_bookings[ndate] )
        num_bookings[ndate] -= 1;
}
