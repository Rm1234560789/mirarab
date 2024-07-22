package com.example.backend.service;

import com.example.backend.dto.IzohDto;
import org.springframework.http.HttpEntity;

public interface IzohlarService {
    HttpEntity<?>getIzohlar();

    void postIzoh(IzohDto izohDto);
}
