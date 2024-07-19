package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.XorijDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface XorijService {
    HttpEntity<?> getXorij();
    HttpEntity<?>postXorij(XorijDto xorijDto);
    HttpEntity<?> deleteXorij(UUID id);
    HttpEntity<?> editXorij(UUID id, XorijDto xorijDto);
}
