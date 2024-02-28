package com.example.Travel_Booking.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Travel_Information")
public class Travel_Booking {

	  private String Name;
	  private String Contact;
	  @Id
	  private String Email;
	  private String password;
	  
	  
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getContact() {
		return Contact;
	}
	public void setContact(String contact) {
		Contact = contact;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Travel_Booking(String name, String contact, String email, String password) {
		super();
		Name = name;
		Contact = contact;
		Email = email;
		this.password = password;
	}
	

	public Travel_Booking() {
		super();
	}
	
	@Override
	public String toString() {
		return "Travel_Booking [Name=" + Name + ", Contact=" + Contact + ", Email=" + Email + ", password=" + password
				+ "]";
	}
	
	
	  
	  
	  
}
