package com.example.backend.controller;

import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.dto.WorldNewsDto;
import com.example.backend.service.New_NewService;
import com.example.backend.service.WorldNewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/worldnews")
public class WorldNewsController {
    final WorldNewsService worldNewsService;
    @GetMapping
    public HttpEntity<?> getNews(){
        return worldNewsService.getAll();
    }
    @GetMapping("/{id}")
    public HttpEntity<?> getId(@PathVariable UUID id){
        return worldNewsService.getById(id);
    }
    @PostMapping
    public HttpEntity<?> postNews(@RequestBody WorldNewsDto worldNewsDto) {
        return worldNewsService.post(worldNewsDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable UUID id) {
        return worldNewsService.deleteNews(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editNews(@PathVariable UUID id, @RequestBody WorldNewsDto worldNewsDto) {
        return worldNewsService.editNews(id, worldNewsDto);
    }
}
