package com.example.backend.controller;

import com.example.backend.dto.IzohDto;
import com.example.backend.service.IzohlarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/izohlar")
@RequiredArgsConstructor
public class IzohlarController {
    final IzohlarService izohlarService;
    @GetMapping
    public HttpEntity<?> getAllIzohlar() {
        return izohlarService.getIzohlar();
    }
    @PostMapping
    public void postIzoh(@RequestBody IzohDto izohDto){
        izohlarService.postIzoh(izohDto);
    }
    @PutMapping("/{id}")
    public void editIzoh(@PathVariable    UUID id){
        izohlarService.editIzoh(id);
    }
    @GetMapping("/for/user")
    public HttpEntity<?> getUserIzoh(){
     return izohlarService.getIzohForUsers();
    }
}
