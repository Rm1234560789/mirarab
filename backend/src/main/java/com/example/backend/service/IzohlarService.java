package com.example.backend.service;

import com.example.backend.dto.IzohDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface IzohlarService {
    HttpEntity<?>getIzohlar();
    void postIzoh(IzohDto izohDto);
    void editIzoh(UUID id);
    HttpEntity<?> getIzohForUsers();
}
