package com.booking.phone.booking.controller;

import com.booking.phone.booking.entity.BookingHistory;
import com.booking.phone.booking.entity.Phone;
import com.booking.phone.booking.service.PhoneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/phones")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PhoneController {
    private final PhoneService phoneService;

    public PhoneController(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    @GetMapping
    public List<Phone> getAllPhones() {
        return phoneService.getAllPhones();
    }

    @GetMapping("/{phoneId}")
    public Phone getPhoneById(@PathVariable Long phoneId) {
        return phoneService.getPhoneById(phoneId);
    }


    @PostMapping("/book/{phoneId}/{bookedBy}")
    public void bookPhone(@PathVariable Long phoneId, @PathVariable String bookedBy) {
        phoneService.bookPhone(phoneId, bookedBy);
    }

    @PostMapping("/return/{phoneId}/{returnedBy}")
    public void returnPhone(@PathVariable Long phoneId, @PathVariable String returnedBy) {
        phoneService.returnPhone(phoneId, returnedBy);
    }

    @GetMapping("/history/{phoneId}")
    public List<BookingHistory> getBookingHistory(@PathVariable Long phoneId) {
        return phoneService.getBookingHistory(phoneId);
    }
}