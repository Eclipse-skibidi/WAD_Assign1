module.exports = {
    // Topic chosen: Hotel management

    // adding different hotels
    hotels : [],
    rooms : [],
    repairMan_timetable : [],
    employees : [],
    assign_cleaner : [],

    add_hotel(hotel_name, hotel_location, hotel_rating){
        this.hotels.push({
            name : hotel_name,
            location : hotel_location,
            rating : hotel_rating
        });
    },

    // get hotel
    get_hotel(i){

    },

    // sending a repair man to the hotel
    send_repairMan(guy_name, guy_serial_num, hotels, i, startDate, startTime, endDate, endTime){
        this.repairMan_timetable.push({
            name : guy_name,
            serial_num : guy_serial_num,
            assigned_hotel : hotels[i], 
            start : {
                date : startDate,
                time : startTime,
            },
            end : {
                date : endDate,
                time : endTime,
            }
        });
    },

    // set types of rooms and bed type to associated room
    add_rooms(hotels, i, room_id, room_type, bed_type, numOf_beds, room_status){},

    // hire employees
    hire_employees(employee_name, employee_id, job_type, salary){},

    // send a cleaner to the designated room
    send_cleaner(cleaner_name, cleaner_id, rooms, employees, i,){
        if(employees["employee_id"] == "cleaner" && rooms["room_status"] == "clean"){
            this.assign_cleaner.push({
                cleaner_name : cleaner_name,
                cleaner_id : cleaner_id,
                room_id : rooms[i]

            });
        }
    }
}