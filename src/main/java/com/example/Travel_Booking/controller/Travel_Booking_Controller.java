package com.example.Travel_Booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Travel_Booking.Model.Travel_Booking;
import com.example.Travel_Booking.Repository.TravelRepository;


@Controller
@RestController
public class Travel_Booking_Controller {
	
	@Autowired
	TravelRepository repo;

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
	
	@GetMapping("/aboutus")
	public String Aboutus() {
		return"About us";
	}
	
	@PostMapping("/Home")
	public String home(@ModelAttribute Travel_Booking travel) {
		System.out.println(travel);
		repo.save(travel);
		return "Home";
	}
	
	@GetMapping("/get")
	public List<Travel_Booking> getformvalue() {
	//public String getformvalue() {
		System.out.println(repo.findAll());
		//return "index";
		 return repo.findAll();
	}
	@RequestMapping("/travel/{email}")
	public void deleteEmployee(@PathVariable String email) {
		
		repo.deleteById(email);

		System.out.println("deleted");
	}
	
	


}
