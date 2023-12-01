package com.booking.phone.booking.repository;

import com.booking.phone.booking.entity.Phone;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface PhoneRepository extends ListCrudRepository<Phone, Long> {
    List<Phone> findByModel(String model);
}