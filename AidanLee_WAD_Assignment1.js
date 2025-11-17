module.exports = {
    hotels: [],
    repairMan_timetable: [],
    assign_cleaner: [],

    // ADD HOTEL
    add_hotel(hotel_name, hotel_location, hotel_rating) {
        this.hotels.push({
            name: hotel_name,
            location: hotel_location,
            rating: hotel_rating,

            rooms: [],
            employees: []
        });
    },

    // ADD ROOMS TO A SPECIFIC HOTEL
    add_rooms(i, room_id, room_type, bed_type, numOf_beds, room_status) {
        this.hotels[i].rooms.push({
            room_id,
            room_type,
            bed_type,
            numOf_beds,
            room_status
        });
    },

    // HIRE EMPLOYEES FOR A SPECIFIC HOTEL
    hire_employees(i, employee_name, employee_id, job_type, salary) {
        this.hotels[i].employees.push({
            employee_name,
            employee_id,
            job_type,
            salary
        });
    },

    // GET HOTEL
    get_hotel(i) {
        return this.hotels[i];
    },

    // SEND REPAIRMAN
    send_repairMan(guy_name, guy_serial_num, hotelIndex, startDate, startTime, endDate, endTime) {
        this.repairMan_timetable.push({
            name: guy_name,
            serial_num: guy_serial_num,
            assigned_hotel: this.hotels[hotelIndex].name,

            start: { date: startDate, time: startTime },
            end: { date: endDate, time: endTime }
        });
    },

    // ASSIGN CLEANER
    send_cleaner(hotelIndex, roomIndex, cleanerIndex) {
        const hotel = this.hotels[hotelIndex];
        const room = hotel.rooms[roomIndex];
        const cleaner = hotel.employees[cleanerIndex];

        if (cleaner.job_type === "cleaner" && room.room_status === "dirty") {
            this.assign_cleaner.push({
                cleaner_name: cleaner.employee_name,
                cleaner_id: cleaner.employee_id,
                room_id: room.room_id
            });

            room.room_status = "cleaning";
        }
    }
}
