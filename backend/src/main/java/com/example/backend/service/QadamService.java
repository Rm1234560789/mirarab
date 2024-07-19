package com.example.backend.service;

import com.example.backend.dto.Qadamlar;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface QadamService {
    HttpEntity<?> getQadam();
    HttpEntity<?>postQadam(Qadamlar qadamlar);
    HttpEntity<?> deleteQadam(UUID id);
    HttpEntity<?> editQadam(UUID id, Qadamlar qadamlar);
}
