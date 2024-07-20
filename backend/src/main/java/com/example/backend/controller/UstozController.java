package com.example.backend.controller;


import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.UstozlarDto;
import com.example.backend.dto.VdDto;
import com.example.backend.service.RahbariyatService;
import com.example.backend.service.UstozService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ustoz")
public class UstozController {
    final UstozService ustozService;

    @GetMapping
    public HttpEntity<?> getRahbariyat() {
        return ustozService.get();
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody UstozlarDto ustozlarDto) {
        return ustozService.post(ustozlarDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteRahbariyat(@PathVariable UUID id) {
        return ustozService.delete(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody UstozlarDto ustozlarDto) {
        return ustozService.edit(id, ustozlarDto);
    }
}
