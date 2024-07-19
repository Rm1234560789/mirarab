package com.example.backend.controller;


import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.Shartnoma;
import com.example.backend.dto.VdDto;
import com.example.backend.service.RahbariyatService;
import com.example.backend.service.ShartnomaService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/xalqaro")
public class ShartnomaController {
    final ShartnomaService shartnomaService;

    @GetMapping
    public HttpEntity<?> getRahbariyat() {
        return shartnomaService.getShartnoma();
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody Shartnoma shartnoma) {
        return shartnomaService.postShartnoma(shartnoma);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteRahbariyat(@PathVariable UUID id) {
        return shartnomaService.deleteShartnoma(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody Shartnoma shartnoma) {
        return shartnomaService.editShartnoma(id, shartnoma);
    }
}
