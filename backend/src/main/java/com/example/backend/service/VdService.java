package com.example.backend.service;

import com.example.backend.dto.VdDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface VdService {
    HttpEntity<?> getVideo();
    HttpEntity<?> addVideo(VdDto videoDto);
    HttpEntity<?> deleteVideo(UUID id);
    HttpEntity<?> editVideo(UUID id, VdDto videoDto);
}
