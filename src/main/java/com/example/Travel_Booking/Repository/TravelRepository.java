package com.example.Travel_Booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Travel_Booking.Model.Travel_Booking;

public interface TravelRepository extends JpaRepository<Travel_Booking, String> {

}
