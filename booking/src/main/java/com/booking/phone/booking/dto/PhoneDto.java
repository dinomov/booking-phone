package com.booking.phone.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class PhoneDto {
    private String model;
    private String event;
    private Date eventTime;
    private String eventBy;
}
