package com.example.backend.controller;


import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.TalabaDto;
import com.example.backend.dto.VdDto;
import com.example.backend.service.RahbariyatService;
import com.example.backend.service.TalabaService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/talaba")
public class TalabaController {
    final TalabaService talabaService;

    @GetMapping
    public HttpEntity<?> getRahbariyat() {
        return talabaService.get();
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody TalabaDto talabaDto) {
        return talabaService.post(talabaDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteRahbariyat(@PathVariable UUID id) {
        return talabaService.delete(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody TalabaDto talabaDto) {
        return talabaService.edit(id, talabaDto);
    }
}
