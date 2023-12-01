package com.booking.phone.booking.util;

public enum PhoneEvent {
    BOOKED("BOOKED"),
    RETURNED("RETURNED");

    private final String event;

    PhoneEvent(String event) {
        this.event = event;
    }

    public String getEvent() {
        return event;
    }
}
