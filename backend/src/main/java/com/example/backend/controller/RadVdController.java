package com.example.backend.controller;

import com.example.backend.dto.RadVdDto;
import com.example.backend.dto.VdDto;
import com.example.backend.service.RadVdService;
import com.example.backend.service.VdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/raddiya")
@RequiredArgsConstructor
public class RadVdController {

    final RadVdService radVdService;

    @GetMapping
    public HttpEntity<?> getVideo() {
        return radVdService.getVideo();
    }

    @PostMapping
    public HttpEntity<?> addVideo(@RequestBody RadVdDto radVdDto) {
        return radVdService.addVideo(radVdDto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteVideo(@PathVariable UUID id) {
        return radVdService.deleteVideo(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editVideo(@PathVariable UUID id, @RequestBody RadVdDto radVdDto) {
        return radVdService.editVideo(id, radVdDto);
    }
}
