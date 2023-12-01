package com.booking.phone.booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class BookingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date eventTime;
    private String event;
    private String eventBy;

    @ManyToOne
    @JoinColumn(name = "phone_id")
    private Phone phone;
}