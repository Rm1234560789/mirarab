package com.example.backend.service;

import com.example.backend.dto.AllomaDto;
import com.example.backend.dto.Buxoro;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface AllomaService {
    HttpEntity<?> getAlloma();
    HttpEntity<?>postAlloma(AllomaDto allomaDto);
    HttpEntity<?> deleteAlloma(UUID id);
    HttpEntity<?> editAlloma(UUID id,AllomaDto allomaDto);
}
