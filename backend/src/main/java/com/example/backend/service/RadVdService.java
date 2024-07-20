package com.example.backend.service;

import com.example.backend.dto.RadVdDto;
import com.example.backend.dto.VideoDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface RadVdService {
    HttpEntity<?> getVideo();
    HttpEntity<?> addVideo(RadVdDto radVdDto);
    HttpEntity<?> deleteVideo(UUID id);
    HttpEntity<?> editVideo(UUID id, RadVdDto radVdDto);
}
