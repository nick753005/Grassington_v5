
function displayMessage(event) {
    event.preventDefault();     // Prevent the form from submitting
      
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const places = document.getElementById('places').value;
      
    const ndate = new Date(date);                         // Create a Date object
    const day = String(ndate.getDate()).padStart(2, "0"); // Get day and pad to 2 digits
    const month = String(ndate.getMonth() + 1).padStart(2, "0"); // Get month and pad to 2 digits (Months are zero-based)
    const year = ndate.getFullYear();                     // Get the full year
    const formattedDate = `${day}/${month}/${year}`;      // Combine into dd/mm/yyyy format
      
    document.getElementById("confirmation").innerHTML ="Your table is booked for "+formattedDate+" at "+time+ "pm for "+places+" places";
}
      

  function cancelBooking(event) {
    event.preventDefault();     // Prevent the form from submitting

    document.getElementById("confirmation").innerHTML = "This booking has been cancelled<br><br>" + 
      "You can book again for a different time or date";
}
