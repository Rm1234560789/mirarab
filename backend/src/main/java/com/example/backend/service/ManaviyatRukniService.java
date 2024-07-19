package com.example.backend.service;

import com.example.backend.dto.ManaviyatRukniDto;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface ManaviyatRukniService {
    HttpEntity<?>getManaviyatRukni();
    HttpEntity<?>postManaviyat(ManaviyatRukniDto manaviyatRukniDto);
    HttpEntity<?> deleteManaviyat(UUID id);
    HttpEntity<?> editManaviyat(UUID id, ManaviyatRukniDto manaviyatRukniDto);
}
