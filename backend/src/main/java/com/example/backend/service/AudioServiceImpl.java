package com.example.backend.service;

import com.example.backend.dto.AudioDto;
import com.example.backend.dto.VideoDto;
import com.example.backend.entity.Audio;
import com.example.backend.entity.Video;
import com.example.backend.repo.AudioRepo;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AudioServiceImpl implements AudioService {
    final AudioRepo audioRepo;
    @Override
    public HttpEntity<?> getAudio() {
        return ResponseEntity.ok(audioRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> addAudio(AudioDto dto) {
        Audio audio = new Audio();
        audio.setName(dto.getName());
        audio.setUrl(dto.getUrl());
        audio.setCreatedAt(LocalDateTime.now()) ;
        audioRepo.save(audio);
        return ResponseEntity.ok("Video added successfully");
    }

    @Override
    public HttpEntity<?> deleteAudio(UUID id) {
        if (audioRepo.existsById(id)) {
            audioRepo.deleteById(id);
            return ResponseEntity.ok("Video deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }

    @Override
    public HttpEntity<?> editAudio(UUID id, AudioDto dto) {
        Optional<Audio> optionalVideo = audioRepo.findById(id);
        if (optionalVideo.isPresent()) {
            Audio audio = optionalVideo.get();
            audio.setName(dto.getName());
            audio.setUrl(dto.getUrl());
            audioRepo.save(audio);
            return ResponseEntity.ok("Video updated successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }
}
