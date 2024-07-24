package com.example.backend.service;

import com.example.backend.dto.BxObida;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Buxoro_Obidalar;
import org.springframework.http.HttpEntity;

import java.util.List;
import java.util.UUID;

public interface ObidaService {
    HttpEntity<?> getObida();
    HttpEntity<?>postObida(BxObida bxObida);
    HttpEntity<?> deleteObida(UUID id);
    HttpEntity<?> editObida(UUID id, BxObida bxObida);
    Buxoro_Obidalar getById(UUID id);
}
