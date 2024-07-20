package com.example.backend.service;


import com.example.backend.dto.VideoDto;
import com.example.backend.entity.Video;
import com.example.backend.repo.VideoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VideoServiceImpl implements VideoService {
    final VideoRepo videoRepo;
    @Override
    public HttpEntity<?> getVideo() {
        return ResponseEntity.ok(videoRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> addVideo(VideoDto videoDto) {
        System.out.println(videoDto);
        Video video = new Video();
        video.setName(videoDto.getName());
        video.setUrl(videoDto.getUrl());
        video.setCreatedAt(LocalDateTime.now());
        videoRepo.save(video);
        return ResponseEntity.ok("Video added successfully");
    }

    @Override
    public HttpEntity<?> deleteVideo(UUID id) {
        if (videoRepo.existsById(id)) {
            videoRepo.deleteById(id);
            return ResponseEntity.ok("Video deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }

    @Override
    public HttpEntity<?> editVideo(UUID id, VideoDto videoDto) {
        Optional<Video> optionalVideo = videoRepo.findById(id);
        if (optionalVideo.isPresent()) {
            Video video = optionalVideo.get();
            video.setName(videoDto.getName());
            video.setUrl(videoDto.getUrl());
            videoRepo.save(video);
            return ResponseEntity.ok("Video updated successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }
}
