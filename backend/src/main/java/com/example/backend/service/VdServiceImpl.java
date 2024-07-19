package com.example.backend.service;

import com.example.backend.dto.VdDto;
import com.example.backend.entity.Videos;
import com.example.backend.repo.Vd;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class VdServiceImpl implements VdService {
    final Vd vd;

    @Override
    public HttpEntity<?> getVideo() {
        return ResponseEntity.ok(vd.findAll());
    }

    @Override
    public HttpEntity<?> addVideo(VdDto videoDto) {
        Videos video = new Videos();
        video.setUrl(videoDto.getUrl());
        vd.save(video);
        return ResponseEntity.ok("Video added successfully");
    }

    @Override
    public HttpEntity<?> deleteVideo(UUID id) {
        if (vd.existsById(id)) {
            vd.deleteById(id);
            return ResponseEntity.ok("Video deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }

    @Override
    public HttpEntity<?> editVideo(UUID id, VdDto videoDto) {
        Optional<Videos> optionalVideo = vd.findById(id);
        if (optionalVideo.isPresent()) {
            Videos video = optionalVideo.get();
            video.setUrl(videoDto.getUrl());
            vd.save(video);
            return ResponseEntity.ok("Video updated successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }
}
