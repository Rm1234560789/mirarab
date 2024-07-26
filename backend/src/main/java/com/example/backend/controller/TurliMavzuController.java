package com.example.backend.controller;

import com.example.backend.dto.TurliMavzuDto;
import com.example.backend.service.TurliMavzuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/turli/mavzu")
public class TurliMavzuController {
    @Autowired
    TurliMavzuService turliMavzuService;
    @GetMapping
    public HttpEntity<?> getTurliMavzu(){
        return ResponseEntity.ok(turliMavzuService.getTurliMavzu());
    }
    @PostMapping
    public void postTurliMavzu(@RequestBody TurliMavzuDto turliMavzuDto){
        turliMavzuService.postTurliMavzu(turliMavzuDto);
    }
    @PutMapping
    public void putTurliMavzu(@RequestParam UUID id, @RequestBody TurliMavzuDto turliMavzuDto){
        turliMavzuService.putTurliMavzu(id,turliMavzuDto);
    }
    @DeleteMapping
    public void deleteTurliMavzu(@RequestParam UUID id){
        turliMavzuService.deleteTurliMavzu(id);
    }
}
