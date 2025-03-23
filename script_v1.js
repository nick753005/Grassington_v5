
function displayMessage(event) {
    event.preventDefault();     // Prevent the form from submitting
      
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const places = document.getElementById('places').value;
      
    const d = new Date(date);                     // Create a Date object
    year = d.getFullYear(); 
    month = d.getMonth() + 1;                     // months start at zero
    ndate = d.getDate();
    const f_date = ndate+"/"+month+"/"+year;      // dd/mm/yyyy format

    document.getElementById("confirmation").innerHTML ="Your table is booked for "+f_date+" at "+time+ "pm for "+places+" places";
}
      

function cancelBooking(event) {
  event.preventDefault();     // Prevent the form from submitting

  document.getElementById("confirmation").innerHTML = "This booking has been cancelled<br><br>" + 
      "You can book again for a different time or date";
}
