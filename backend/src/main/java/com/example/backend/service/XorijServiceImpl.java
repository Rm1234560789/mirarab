package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.XorijDto;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Xorijiy_proffessor;
import com.example.backend.repo.RahbariyatRepo;
import com.example.backend.repo.XorijRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class XorijServiceImpl implements XorijService {
    final XorijRepo xorijRepo;

    @Override
    public HttpEntity<?> getXorij() {
        return ResponseEntity.ok(xorijRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postXorij(XorijDto xorijDto) {
        Xorijiy_proffessor xorijiyProffessor = new Xorijiy_proffessor();
        xorijiyProffessor.setName(xorijDto.getName());
        xorijiyProffessor.setTitle(xorijDto.getTitle());
        xorijiyProffessor.setImg(xorijDto.getImg());
        xorijiyProffessor.setCreatedAt(LocalDateTime.now());
        xorijRepo.save(xorijiyProffessor);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteXorij(UUID id) {
        if (xorijRepo.existsById(id)) {
            xorijRepo.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editXorij(UUID id, XorijDto xorijDto) {
        Optional<Xorijiy_proffessor> optional = xorijRepo.findById(id);
        if (optional.isPresent()) {
            Xorijiy_proffessor xorijiyProffessor = optional.get();
            xorijiyProffessor.setName(xorijDto.getName());
            xorijiyProffessor.setTitle(xorijDto.getTitle());
            xorijiyProffessor.setImg(xorijDto.getImg());
            xorijRepo.save(xorijiyProffessor);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
