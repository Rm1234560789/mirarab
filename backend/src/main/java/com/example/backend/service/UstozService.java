package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.UstozlarDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface UstozService {
    HttpEntity<?> get();
    HttpEntity<?>post(UstozlarDto ustozlarDto);
    HttpEntity<?> delete(UUID id);
    HttpEntity<?> edit(UUID id, UstozlarDto ustozlarDto);
}
