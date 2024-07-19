package com.example.backend.service;

import com.example.backend.dto.QabulDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface QabulService {
    HttpEntity<?> getQabul();
    HttpEntity<?>postQabul(QabulDto qabul);
    HttpEntity<?> deleteQabul(UUID id);
    HttpEntity<?> editQabul(UUID id, QabulDto qabul);
}
