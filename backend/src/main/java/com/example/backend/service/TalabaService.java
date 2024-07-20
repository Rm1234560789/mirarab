package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.TalabaDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface TalabaService {
    HttpEntity<?> get();
    HttpEntity<?>post(TalabaDto talabaDto);
    HttpEntity<?> delete(UUID id);
    HttpEntity<?> edit(UUID id, TalabaDto talabaDto);
}
