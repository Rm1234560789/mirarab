package com.example.backend.service;

import com.example.backend.dto.AudioDto;
import com.example.backend.dto.VideoDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface AudioService {
    HttpEntity<?> getAudio();
    HttpEntity<?> addAudio(AudioDto audioDto);
    HttpEntity<?> deleteAudio(UUID id);
    HttpEntity<?> editAudio(UUID id, AudioDto audioDto);
}
