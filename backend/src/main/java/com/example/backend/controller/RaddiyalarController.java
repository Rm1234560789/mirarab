package com.example.backend.controller;

import com.example.backend.dto.RaddiyalarDto;
import com.example.backend.entity.Raddiyalar;
import com.example.backend.service.RaddiyalarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/raddiyalar")
public class RaddiyalarController {
    @Autowired
    private RaddiyalarService service;

    @GetMapping
    public List<Raddiyalar> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Raddiyalar addRaddiyalar(@RequestBody RaddiyalarDto dto) {
        return service.addRaddiyalar(dto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Raddiyalar> updateRaddiyalar(@PathVariable UUID id, @RequestBody RaddiyalarDto dto) {
        Optional<Raddiyalar> updated = service.updateRaddiyalar(id, dto);
        return updated.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRaddiyalar(@PathVariable UUID id) {
        service.deleteRaddiyalar(id);
        return ResponseEntity.noContent().build();
    }
}
