package com.example.backend.controller;

import com.example.backend.dto.Shartnoma;
import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.service.New_NewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/newnews")
public class NewNewsController {
final New_NewService newNewService;
@GetMapping
    public HttpEntity<?> getNews(){
    return newNewService.getAll();
}
@GetMapping("/{id}")
    public HttpEntity<?> getId(@PathVariable UUID id){
    return newNewService.getById(id);
}
    @PostMapping
    public HttpEntity<?> postNews(@RequestBody Uzb_NewsDto uzbNewsDto) {
        return newNewService.post(uzbNewsDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable UUID id) {
        return newNewService.deleteNews(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editNews(@PathVariable UUID id, @RequestBody Uzb_NewsDto uzbNewsDto) {
        return newNewService.editNews(id, uzbNewsDto);
    }
}
