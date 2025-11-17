const WAD = require("../WAD_Assign1/AidanLee_WAD_Assignment1.js");

WAD.add_hotel("VivoCity", "Singapore", 4);
WAD.add_hotel("Suntec City", "Singapore", 4.5);
WAD.add_hotel("Park Royal", "Singapore", 5);

// rooms
WAD.rooms("VivoCity", 101, "Suite", "King", 1, "dirty");

// hire employee
WAD.hire_employees("VivoCity", "Alice", "E001", "cleaner", 2500);

// send repairman when room has problem
WAD.send_repairMan(
    "Jimmy Jim Bob", 
    "RM101", 
    "VivoCity", 
    "2025-11-12", 
    "10:00", 
    "2025-11-12", 
    "12:00"
);

// send cleaner to room
WAD.send_cleaner("VivoCity", 101, "E001");