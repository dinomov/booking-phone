package com.booking.phone.booking.repository;

import com.booking.phone.booking.entity.BookingHistory;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface BookingHistoryRepository extends ListCrudRepository<BookingHistory, Long> {
    List<BookingHistory> findByPhoneIdOrderByEventTimeDesc(Long phoneId);
}
