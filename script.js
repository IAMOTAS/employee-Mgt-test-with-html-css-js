document.addEventListener('DOMContentLoaded', function () {
    // Clock In functionality
    const clockInButton = document.getElementById('clockInButton');
    clockInButton.addEventListener('click', function () {
        const currentTime = new Date();
        const clockInTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
        alert(`You've successfully clocked in at ${clockInTime}`);

        var calendarEl = document.getElementById('calendarContainer');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', // Display the calendar in the month view initially
            events: [
                // Example events
                {
                    title: 'Meeting',
                    start: '2024-05-06T10:00:00',
                    end: '2024-05-06T12:00:00'
                },
                {
                    title: 'Project Deadline',
                    start: '2024-05-10',
                    end: '2024-05-11'
                }
                // Add more events as needed
            ]
        });
        calendar.render();
        
    });

    // Task tracking functionality
    const trackTaskForm = document.getElementById('trackTaskForm');
    trackTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const estimatedTime = document.getElementById('estimatedTime').value;
        // Here you can handle tracking the task
        alert(`Task "${taskName}" tracked. Estimated time: ${estimatedTime} hours`);
        trackTaskForm.reset();
    });

    // Leave management functionality
    const leaveForm = document.getElementById('leaveForm');
    leaveForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        // Here you can handle leave submission
        alert(`Leave request submitted from ${startDate} to ${endDate}`);
        leaveForm.reset();
    });

    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendarContainer');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Display the calendar in the month view initially
        events: [
            // Example events
            {
                title: 'Meeting',
                start: '2024-05-06T10:00:00',
                end: '2024-05-06T12:00:00'
            },
            {
                title: 'Project Deadline',
                start: '2024-05-10',
                end: '2024-05-11'
            }
            // Add more events as needed
        ]
    });
    calendar.render(); // Render the calendar
});
