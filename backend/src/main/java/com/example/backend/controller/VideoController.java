package com.example.backend.controller;

import com.example.backend.dto.VdDto;
import com.example.backend.service.VdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/video")
@RequiredArgsConstructor
public class VideoController {

    final VdService vdService;

    @GetMapping
    public HttpEntity<?> getVideo() {
        return vdService.getVideo();
    }

    @PostMapping
    public HttpEntity<?> addVideo(@RequestBody VdDto videoDto) {
        return vdService.addVideo(videoDto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteVideo(@PathVariable UUID id) {
        return vdService.deleteVideo(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editVideo(@PathVariable UUID id, @RequestBody VdDto videoDto) {
        return vdService.editVideo(id, videoDto);
    }
}
