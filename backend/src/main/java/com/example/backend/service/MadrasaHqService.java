package com.example.backend.service;

import com.example.backend.dto.MadrasaHqDto;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface MadrasaHqService {
    HttpEntity<?>getMadrasaHq();
    HttpEntity<?>postMadrasa(MadrasaHqDto madrasaHqDto);
    HttpEntity<?> deleteMadrasa(UUID id);
    HttpEntity<?> editMadrasa(UUID id, MadrasaHqDto madrasaHqDto);
}
