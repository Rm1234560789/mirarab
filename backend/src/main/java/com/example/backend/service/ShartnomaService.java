package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.Shartnoma;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface ShartnomaService {
    HttpEntity<?> getShartnoma();
    HttpEntity<?>postShartnoma(Shartnoma shartnoma);
    HttpEntity<?> deleteShartnoma(UUID id);
    HttpEntity<?> editShartnoma(UUID id, Shartnoma shartnoma);
}
