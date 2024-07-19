package com.example.backend.service;

import com.example.backend.dto.Buxoro;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface Buxoro_islomService {
    HttpEntity<?> getBuxoro();
    HttpEntity<?>postBuxoro(Buxoro buxoro);
    HttpEntity<?> deleteBuxoro(UUID id);
    HttpEntity<?> editBuxoro(UUID id, Buxoro buxoro);
}
