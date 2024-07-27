package com.example.backend.service;

import com.example.backend.dto.TurliMavzuDto;
import com.example.backend.entity.Turli_Mavzular;
import com.example.backend.repo.TurliMavzuRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class TurliMavzuServiceImpl implements TurliMavzuService {
    @Autowired
    TurliMavzuRepo turliMavzuRepo;

    @Override
    public List<Turli_Mavzular> getTurliMavzu() {
        return turliMavzuRepo.getTurliMavzularOrderBy();
    }

    @Override
    public void postTurliMavzu(TurliMavzuDto turliMavzuDto) {
        turliMavzuRepo.save(new Turli_Mavzular(UUID.randomUUID(), turliMavzuDto.title(), turliMavzuDto.description(), turliMavzuDto.img(), LocalDateTime.now()));
    }

    @Override
    public void putTurliMavzu(UUID id, TurliMavzuDto turliMavzuDto) {
        Turli_Mavzular turliMavzular = turliMavzuRepo.findById(id).orElseThrow();
        turliMavzuRepo.save(new Turli_Mavzular(turliMavzular.getId(),turliMavzuDto.title(),turliMavzuDto.description(),turliMavzuDto.img(),turliMavzular.getCreatedAt()));
    }

    @Override
    public void deleteTurliMavzu(UUID id) {
        turliMavzuRepo.deleteById(id);
    }
}
