package com.example.backend.controller;

import com.example.backend.dto.VdDto;
import com.example.backend.dto.VideoDto;
import com.example.backend.service.VdService;
import com.example.backend.service.VideoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/vd")
@RequiredArgsConstructor
public class VdController {

    final VideoService vdService;

    @GetMapping
    public HttpEntity<?> getVideo() {
        return vdService.getVideo();
    }

    @PostMapping
    public HttpEntity<?> addVideo(@RequestBody VideoDto videoDto) {
        return vdService.addVideo(videoDto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteVideo(@PathVariable UUID id) {
        return vdService.deleteVideo(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editVideo(@PathVariable UUID id, @RequestBody VideoDto videoDto) {
        return vdService.editVideo(id, videoDto);
    }
}
