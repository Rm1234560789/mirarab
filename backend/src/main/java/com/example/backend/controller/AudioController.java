package com.example.backend.controller;

import com.example.backend.dto.AudioDto;
import com.example.backend.dto.VdDto;
import com.example.backend.service.AudioService;
import com.example.backend.service.VdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/audio")
@RequiredArgsConstructor
public class AudioController {

    final AudioService audioService;

    @GetMapping
    public HttpEntity<?> getVideo() {
        return audioService.getAudio();
    }

    @PostMapping
    public HttpEntity<?> addVideo(@RequestBody AudioDto dto) {
       return audioService.addAudio(dto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteVideo(@PathVariable UUID id) {
        return audioService.deleteAudio(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editVideo(@PathVariable UUID id, @RequestBody AudioDto dto) {
        return audioService.editAudio(id, dto);
    }
}
