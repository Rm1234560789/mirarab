package com.example.backend.service;

import com.example.backend.repo.Izohlar;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IzohlarServiceImpl implements IzohlarService {
    final Izohlar izohlar;
    @Override
    public HttpEntity<?> getIzohlar() {
        return ResponseEntity.ok(izohlar.findAll());
    }
}
