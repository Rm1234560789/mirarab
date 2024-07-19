package com.example.backend.service;

import com.example.backend.dto.MaqolaDto;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface MaqolaService {
    HttpEntity<?> getMaqola();
    HttpEntity<?>postMaqola(MaqolaDto maqolaDto);
    HttpEntity<?> deleteMaqola(UUID id);
    HttpEntity<?> editMaqola(UUID id, MaqolaDto maqolaDto);
}
