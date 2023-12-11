// script2.js

new Vue({
    el: '#app',
    data: {
      calendar: null,
      date: null,
      daysContainer: null,
      prev: null,
      next: null,
      todayBtn: null,
      gotoBtn: null,
      dateInput: null,
      eventDay: null,
      eventDate: null,
      eventsContainer: null,
      addEventBtn: null,
      addEventWrapper: null,
      addEventCloseBtn: null,
      addEventTitle: null,
      addEventFrom: null,
      addEventTo: null,
      addEventSubmit: null,
      today: null,
      activeDay: null,
      month: null,
      year: null,
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      eventsArr: []
    },
    mounted() {
      this.initApp();
    },
    methods: {
      initApp() {
        this.calendar = document.querySelector(".calendar");
        this.date = document.querySelector(".date");
        this.daysContainer = document.querySelector(".days");
        this.prev = document.querySelector(".prev");
        this.next = document.querySelector(".next");
        this.todayBtn = document.querySelector(".today-btn");
        this.gotoBtn = document.querySelector(".goto-btn");
        this.dateInput = document.querySelector(".date-input");
        this.eventDay = document.querySelector(".event-day");
        this.eventDate = document.querySelector(".event-date");
        this.eventsContainer = document.querySelector(".events");
        this.addEventBtn = document.querySelector(".add-event");
        this.addEventWrapper = document.querySelector(".add-event-wrapper");
        this.addEventCloseBtn = document.querySelector(".close");
        this.addEventTitle = document.querySelector(".event-name");
        this.addEventFrom = document.querySelector(".event-time-from");
        this.addEventTo = document.querySelector(".event-time-to");
        this.addEventSubmit = document.querySelector(".add-event-btn");
  
        this.today = new Date();
        this.month = this.today.getMonth();
        this.year = this.today.getFullYear();
  
        this.getEvents();
        this.initCalendar();
        this.addListeners();
      },
      initCalendar() {
        const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //check if event is present on that day
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}
      },
      prevMonth() {
        this.month--;
        if (this.month < 0) {
          this.month = 11;
          this.year--;
        }
        this.initCalendar();
      },
      nextMonth() {
        this.month++;
        if (this.month > 11) {
          this.month = 0;
          this.year++;
        }
        this.initCalendar();
      },


      gotoDate() {
         const inputDate = new Date(this.dateInput.value);
    if (!isNaN(inputDate.getTime())) {
      this.month = inputDate.getMonth();
      this.year = inputDate.getFullYear();
      this.initCalendar();
    } else {
      alert("Invalid date. Please enter a valid date.");
    }
      },
      getActiveDay(date) {
        // ... (Rest of the getActiveDay function)
      },
      updateEvents(date) {
        // ... (Rest of the updateEvents function)
      },
      addListeners() {
        // ... (Rest of the addListeners function)
      },
      // ... (Rest of the methods)
    }
  );
  