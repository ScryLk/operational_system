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

      // Inicializa a contagem de números
      let contador = 0;

      // Obtém o botão de adicionar
      const addButton = document.getElementById('addButton');

      // Obtém o elemento de saída
      const outputElement = document.getElementById('output');

      // Adiciona um evento de clique ao botão
      addButton.addEventListener('click', () => {
          // Incrementa o contador
          contador++;

          // Adiciona o número ao elemento de saída
          outputElement.textContent = `Números adicionados: ${contador}`;
      });


const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (Usuario.value === '' || Usuario.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})