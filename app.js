document.addEventListener("DOMContentLoaded", function () {
    const soundIcon = document.getElementById("soundIcon");
    const calendarButton = document.getElementById("calendarButton");
    const calendarModal = new bootstrap.Modal(document.getElementById("calendarModal")); 
  
    let inputRangeVisible = false;
    let calendarVisible = false;
    let calendarContainer = null;
  
    soundIcon.addEventListener("click", () => {
      if (!inputRangeVisible) {
        inputRangeContainer.style.display = "block";
        inputRangeVisible = true;
      } else {
        inputRangeContainer.style.display = "none";
        inputRangeVisible = false;
      }
    });
  
    calendarButton.addEventListener("click", () => {
        if (!calendarVisible) {
          calendarModal.show(); 
    
          const calendarEl = document.getElementById("calendar");
          const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: "dayGridMonth", 
            events: [
           
            ],
          });
    
          calendar.render();
    
          calendarVisible = true;
        }
      });
    
      inputRange.addEventListener("input", (event) => {
        console.log("Valor do input range:", event.target.value);
      });
    });