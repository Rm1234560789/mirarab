package com.example.backend.controller;


import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.VdDto;
import com.example.backend.dto.XorijDto;
import com.example.backend.service.RahbariyatService;
import com.example.backend.service.XorijService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/xorij")
public class XorijController {
    final XorijService xorijService;

    @GetMapping
    public HttpEntity<?> getRahbariyat() {
        return xorijService.getXorij();
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody XorijDto xorijDto) {
        return xorijService.postXorij(xorijDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteRahbariyat(@PathVariable UUID id) {
        return xorijService.deleteXorij(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody XorijDto xorijDto) {
        return xorijService.editXorij(id, xorijDto);
    }
}
