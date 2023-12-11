new Vue({
    el: '#app',
    data: {
        calendarTitle: '',
        participants: ['', '', ''],
        calendar: null,
        date: null,
        days: [],
        today: new Date(),
        activeDay: null,
        month: null,
        year: null,
        months: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
    },
    mounted() {
        this.initCalendar();
    },
    methods: {
        initCalendar() {
            this.updateCalendar();
        },
        updateCalendar() {
            const firstDay = new Date(this.year, this.month, 1);
            const lastDay = new Date(this.year, this.month + 1, 0);
            const prevLastDay = new Date(this.year, this.month, 0);
            const prevDays = prevLastDay.getDate();
            const lastDate = lastDay.getDate();
            const day = firstDay.getDay();
            const nextDays = 7 - lastDay.getDay() - 1;

            this.calendarTitle = this.months[this.month] + " " + this.year;
            this.days = [];

            for (let x = day; x > 0; x--) {
                this.days.push({ day: prevDays - x + 1, class: 'prev-date' });
            }

            for (let i = 1; i <= lastDate; i++) {
                let event = this.checkEvent(i);
                this.days.push({ day: i, class: event ? 'event' : '' });
            }

            for (let j = 1; j <= nextDays; j++) {
                this.days.push({ day: j, class: 'next-date' });
            }
        },
        prevMonth() {
            this.month--;
            if (this.month < 0) {
                this.month = 11;
                this.year--;
            }
            this.updateCalendar();
        },
        nextMonth() {
            this.month++;
            if (this.month > 11) {
                this.month = 0;
                this.year++;
            }
            this.updateCalendar();
        },
        getDayClass(day) {
            return day.class || '';
        },
        selectDay(day) {
            this.activeDay = day.day;
            this.updateEvents(day.day);
        },
        checkEvent(day) {
            // Check if there is an event on the specified day
            const events = this.getEventsForDay(day);
            return events.length > 0;
        },
        updateEvents(day) {
            // Update events for the specified day
            this.activeDay = day;
            const events = this.getEventsForDay(day);
            this.displayEvents(events);
        },
        getEventsForDay(day) {
            // Retrieve events for the specified day from your data
            return eventsArr.filter(event => {
                return event.day === day && event.month === this.month + 1 && event.year === this.year;
            });
        },
        displayEvents(events) {
            // Display events in your UI or perform any necessary actions
            console.log(events);
        },
    
        // ...
    },
}
)