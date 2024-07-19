package com.example.backend.controller;


import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.VdDto;
import com.example.backend.service.RahbariyatService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rahbariyat")
public class RahbariyatController {
    final RahbariyatService rahbariyatService;

    @GetMapping
    public HttpEntity<?> getRahbariyat() {
        return rahbariyatService.getRahbariyat();
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody RahbariyatDto rahbariyatDto) {
        return rahbariyatService.postRahbariyat(rahbariyatDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteRahbariyat(@PathVariable UUID id) {
        return rahbariyatService.deleteRahbariyat(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody RahbariyatDto rahbariyatDto) {
        return rahbariyatService.editRahbariyat(id, rahbariyatDto);
    }
}
