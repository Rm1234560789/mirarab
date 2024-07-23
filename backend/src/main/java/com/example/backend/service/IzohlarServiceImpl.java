package com.example.backend.service;

import com.example.backend.dto.IzohDto;
import com.example.backend.repo.Izohlar;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class IzohlarServiceImpl implements IzohlarService {
    final Izohlar izohlar;

    @Override
    public HttpEntity<?> getIzohlar() {
        return ResponseEntity.ok(izohlar.findAll());
    }

    @Override
    public void postIzoh(IzohDto izohDto) {
        izohlar.save(new com.example.backend.entity.Izohlar(UUID.randomUUID(), izohDto.firstName(), izohDto.lastName(), izohDto.title(),false));
    }

    @Override
    public void editIzoh(UUID id) {
        com.example.backend.entity.Izohlar izohlar1 = izohlar.findById(id).orElseThrow();
        izohlar1.setActive(true);
        izohlar.save(izohlar1);
    }

}
