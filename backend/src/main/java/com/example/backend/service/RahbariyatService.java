package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.VdDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface RahbariyatService {
    HttpEntity<?>getRahbariyat();
    HttpEntity<?>postRahbariyat(RahbariyatDto rahbariyatDto);
    HttpEntity<?> deleteRahbariyat(UUID id);
    HttpEntity<?> editRahbariyat(UUID id, RahbariyatDto rahbariyatDto);
}
