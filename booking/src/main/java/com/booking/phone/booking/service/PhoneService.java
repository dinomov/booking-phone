package com.booking.phone.booking.service;

import com.booking.phone.booking.entity.BookingHistory;
import com.booking.phone.booking.entity.Phone;
import com.booking.phone.booking.integration.MessagePublisher;
import com.booking.phone.booking.repository.BookingHistoryRepository;
import com.booking.phone.booking.repository.PhoneRepository;
import com.booking.phone.booking.util.PhoneEvent;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PhoneService {
    private final PhoneRepository phoneRepository;
    private final BookingHistoryRepository bookingHistoryRepository;
    private final MessagePublisher messagePublisher;

    public PhoneService(PhoneRepository phoneRepository, BookingHistoryRepository bookingHistoryRepository,
                        MessagePublisher messagePublisher) {
        this.phoneRepository = phoneRepository;
        this.bookingHistoryRepository = bookingHistoryRepository;
        this.messagePublisher = messagePublisher;
    }

    public List<Phone> getAllPhones() {
        return phoneRepository.findAll();
    }

    public Phone getPhoneById(Long id) {
        return phoneRepository.findById(id).orElse(null);
    }

    public void bookPhone(Long phoneId, String eventBy) {
        Phone phone = phoneRepository.findById(phoneId).orElse(null);
        if (phone != null && phone.isAvailability()) {
            phone.setAvailability(false);
            phone.setEventBy(eventBy);
            phone.setEventTime(new Date());
            phoneRepository.save(phone);
            recordEvent(phone, PhoneEvent.BOOKED.getEvent(), eventBy);
            messagePublisher.sendPhoneBookingStatusNotification(phone);
        }
    }

    public void returnPhone(Long phoneId, String eventBy) {
        Phone phone = phoneRepository.findById(phoneId).orElse(null);
        if (phone != null && !phone.isAvailability()) {
            phone.setAvailability(true);
            phone.setEventBy(null);
            phone.setEventTime(null);
            phoneRepository.save(phone);
            recordEvent(phone, PhoneEvent.RETURNED.getEvent(), eventBy);
            messagePublisher.sendPhoneBookingStatusNotification(phone);
        }
    }

    public List<BookingHistory> getBookingHistory(Long phoneId) {
        return bookingHistoryRepository.findByPhoneIdOrderByEventTimeDesc(phoneId);
    }

    private void recordEvent(Phone phone, String eventType, String eventBy) {
        BookingHistory event = new BookingHistory();
        event.setPhone(phone);
        event.setEventTime(new Date());
        event.setEvent(eventType);
        event.setEventBy(eventBy);
        bookingHistoryRepository.save(event);
    }
}