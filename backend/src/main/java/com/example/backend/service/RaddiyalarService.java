package com.example.backend.service;

import com.example.backend.dto.RaddiyalarDto;
import com.example.backend.entity.Raddiyalar;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RaddiyalarService {
    List<Raddiyalar> getAll();
    Raddiyalar addRaddiyalar(RaddiyalarDto dto);
    Optional<Raddiyalar> updateRaddiyalar(UUID id, RaddiyalarDto dto);
    void deleteRaddiyalar(UUID id);
}
