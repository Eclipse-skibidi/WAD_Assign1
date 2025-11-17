module.exports = {

    hotels: [],
    repairMan_timetable: [],
    assign_cleaner: [],

    // add hotel
    add_hotel(hotel_name, hotel_location, hotel_rating) {
        this.hotels.push({
            name: hotel_name,
            location: hotel_location,
            rating: hotel_rating,
            rooms: [],
            employees: []
        });
    },

    // A helper for adding rooms and employees
    get_hotel_by_name(hotel_name) {
        return this.hotels.find(hotel => hotel.name === hotel_name);
    },

    // add rooms
    rooms(hotel_name, room_id, room_type, bed_type, numOf_beds, room_status) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel) return console.log("Hotel not found!");

        hotel.rooms.push({
            room_id,
            room_type,
            bed_type,
            numOf_beds,
            room_status
        });
    },

    // Add employees
    hire_employees(hotel_name, employee_name, employee_id, job_type, salary) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel) return console.log("Hotel not found!");

        hotel.employees.push({
            employee_name,
            employee_id,
            job_type,
            salary
        });
    },

    // send repairman
    send_repairMan(guy_name, guy_serial_num, hotel_name, startDate, startTime, endDate, endTime) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel) return console.log("Hotel not found!");
        
        this.repairMan_timetable.push({
            name: guy_name,
            serial_num: guy_serial_num,
            assigned_hotel: hotel.name,
            start: { date: startDate, time: startTime },
            end: { date: endDate, time: endTime }
        });
    },

    // assign cleaner to hotel
    send_cleaner(hotel_name, room_id, employee_id) {
        const hotel = this.get_hotel_by_name(hotel_name);
        if (!hotel) return console.log("Hotel not found!");

        // check if room or cleaner is in array
        const room = hotel.rooms.find(r => r.room_id === room_id);
        const cleaner = hotel.employees.find(e => e.employee_id === employee_id);

        // when room and cleaner is empty / null
        if (!room || !cleaner) return console.log("Room or cleaner not found!");

        if (cleaner.job_type === "cleaner" && room.room_status === "dirty") {
            this.assign_cleaner.push({
                cleaner_name: cleaner.employee_name,
                cleaner_id: cleaner.employee_id,
                room_id: room.room_id,
                hotel_name: hotel.name
            });

            room.room_status = "cleaning";
        }
    }
}
