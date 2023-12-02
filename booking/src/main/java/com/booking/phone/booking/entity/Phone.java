package com.booking.phone.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String model;
    private boolean availability;
    private Date eventTime;
    private String eventBy;

    @JsonIgnore
    @OneToMany(mappedBy = "phone", fetch = FetchType.LAZY)
    private List<BookingHistory> bookingHistory;
}
