package com.booking.phone.booking.integration;

import com.booking.phone.booking.dto.PhoneDto;
import com.booking.phone.booking.entity.Phone;
import com.booking.phone.booking.util.PhoneEvent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessagePublisher {

    private final RabbitTemplate rabbitTemplate;

    public void sendPhoneBookingStatusNotification(Phone phone) {
        try {
            PhoneDto phoneDto = new PhoneDto(phone.getModel(),
                    phone.isAvailability() ? PhoneEvent.RETURNED.getEvent() : PhoneEvent.BOOKED.getEvent(),
                    phone.getEventTime(),
                    phone.getEventBy());
            ObjectMapper objectMapper = new ObjectMapper();
            String phoneDtoString = objectMapper.writeValueAsString(phoneDto);
            rabbitTemplate.convertAndSend("booking-exchange","booking-key", phoneDtoString);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
