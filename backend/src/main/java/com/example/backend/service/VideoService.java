package com.example.backend.service;


import com.example.backend.dto.VideoDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface VideoService {
    HttpEntity<?> getVideo();
    HttpEntity<?> addVideo(VideoDto videoDto);
    HttpEntity<?> deleteVideo(UUID id);
    HttpEntity<?> editVideo(UUID id, VideoDto videoDto);
}
