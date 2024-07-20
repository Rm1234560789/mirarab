package com.example.backend.service;

import com.example.backend.dto.RadVdDto;
import com.example.backend.dto.VideoDto;
import com.example.backend.entity.Raddiya_vd;
import com.example.backend.entity.Video;
import com.example.backend.repo.RadVdRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RadVdServiceImpl implements RadVdService {
    final RadVdRepo radVdRepo;
    @Override
    public HttpEntity<?> getVideo() {
        return ResponseEntity.ok(radVdRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> addVideo(RadVdDto radVdDto) {
        Raddiya_vd raddiyaVd = new Raddiya_vd();
        raddiyaVd.setName(radVdDto.getName());
        raddiyaVd.setUrl(radVdDto.getUrl());
        raddiyaVd.setCreatedAt(LocalDateTime.now());
        radVdRepo.save(raddiyaVd);
        return ResponseEntity.ok("Video added successfully");
    }

    @Override
    public HttpEntity<?> deleteVideo(UUID id) {
        if (radVdRepo.existsById(id)) {
            radVdRepo.deleteById(id);
            return ResponseEntity.ok("Video deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }

    @Override
    public HttpEntity<?> editVideo(UUID id, RadVdDto radVdDto) {
        Optional<Raddiya_vd> optionalVideo = radVdRepo.findById(id);
        if (optionalVideo.isPresent()) {
            Raddiya_vd raddiyaVd = optionalVideo.get();
            raddiyaVd.setName(radVdDto.getName());
            raddiyaVd.setUrl(radVdDto.getUrl());
            radVdRepo.save(raddiyaVd);
            return ResponseEntity.ok("Video updated successfully");
        } else {
            return ResponseEntity.status(404).body("Video not found");
        }
    }
}
