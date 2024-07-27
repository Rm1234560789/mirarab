package com.example.backend.service;

import com.example.backend.dto.TurliMavzuDto;
import com.example.backend.entity.Turli_Mavzular;

import java.util.List;
import java.util.UUID;

public interface TurliMavzuService {
    List<Turli_Mavzular> getTurliMavzu();
    void postTurliMavzu(TurliMavzuDto turliMavzuDto);
    void putTurliMavzu(UUID id, TurliMavzuDto turliMavzuDto);
    void deleteTurliMavzu(UUID id);
}
