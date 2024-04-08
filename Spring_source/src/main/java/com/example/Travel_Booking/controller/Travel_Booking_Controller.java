package com.example.Travel_Booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Travel_Booking.Model.Travel_Booking;
import com.example.Travel_Booking.Repository.TravelRepository;

//@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Travel_Booking_Controller {

	@Autowired
	TravelRepository repo;
	
	//postmappingforlogincheck
	@PostMapping("/logincheck")
	
	public ResponseEntity<String> login(@RequestBody Travel_Booking  travel) {
	    String email = travel.getEmail();
	    String password = travel.getPassword();

	    Travel_Booking foundUser = repo.findByEmailAndPassword(email, password);
	    if (foundUser != null) {
	        	        return ResponseEntity.ok("Login successful");
	    } else {

	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
	    }
	}
	
	
	

	@GetMapping("/start")
	public String Welcome() {
		return "GET STARTED!";
	}

	@GetMapping("/index")
	public String loginForm() {
		return "index";
	}

	@GetMapping("/Register")
	public String form() {
		return "Register";
	}

	@GetMapping("/Home")
	public String home() {
		return "Home";
	}

	@GetMapping("/about")
	public String about() {
		return "about";
	}
	
	
	@GetMapping("/contact")
	public String contact() {
		return "contact";
	}
	@GetMapping("/bus")
	public String busdeatils() {
		return "bus";
	}
	
	@GetMapping("/train")
	public String traindeatils() {
		return "train";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	
//	@PostMapping("/logincheck")
//	
//	public ResponseEntity<String> login(@RequestBody Travel_Booking  travel) {
//	    String email = travel.getEmail();
//	    String password = travel.getPassword();
//
//	    Travel_Booking foundUser = Travel_Booking.findByEmailAndPassword(email, password);
//	    if (foundUser != null) {
//	        	        return ResponseEntity.ok("Login successful");
//	    } else {
//
//	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//	    }
//	}
	
	
//	@PostMapping("/Home")
//	public String home(@ModelAttribute Travel_Booking travel) {
//		System.out.println(travel);
//		repo.save(travel);
//		return "Home";
//	}

	
	@PostMapping("/Home1")
	public ResponseEntity<String> home(@RequestBody Travel_Booking travel) {
	    try {
	        System.out.println(travel);
	        repo.save(travel);
	        return ResponseEntity.ok("Record saved successfully");
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save record");
	    }
	}
	
	
	@GetMapping("/get")
	public List<Travel_Booking> getformvalue() {
		System.out.println(repo.findAll());
		return repo.findAll();
	}

	@RequestMapping("/travel/{email}")
	public String deleteEmployee(@PathVariable String email) {

		repo.deleteById(email);
          return"deleted";
		//System.out.println("deleted");
	}
	
	
	@PutMapping("/update/{email}")
    public ResponseEntity<String> updateBooking(@PathVariable String email, @RequestBody Travel_Booking updatedBooking) {
        try {
            Travel_Booking existingBooking = repo.findById(email).orElse(null);
            if (existingBooking == null) {
                return ResponseEntity.notFound().build();
            }

            // Update the existing booking with the new data
            existingBooking.setName(updatedBooking.getName());
            existingBooking.setContact(updatedBooking.getContact());
            existingBooking.setPassword(updatedBooking.getPassword());
            
            repo.save(existingBooking);

            return ResponseEntity.ok("Booking updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update booking");
        }
    }

}
