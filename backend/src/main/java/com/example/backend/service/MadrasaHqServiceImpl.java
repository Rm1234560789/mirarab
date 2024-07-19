package com.example.backend.service;

import com.example.backend.dto.MadrasaHqDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Madrasa_hq;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.repo.MadrasaHq;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MadrasaHqServiceImpl implements MadrasaHqService{
    final MadrasaHq madrasaHq;
    @Override
    public HttpEntity<?> getMadrasaHq() {
        return ResponseEntity.ok(madrasaHq.getAllorder());
    }

    @Override
    public HttpEntity<?> postMadrasa(MadrasaHqDto madrasaHqDto) {
        Madrasa_hq madrasa_hq = new Madrasa_hq();
        madrasa_hq.setTitle(madrasaHqDto.getTitle());
        madrasa_hq.setDescription(madrasaHqDto.getDescription());
        madrasa_hq.setImg(madrasaHqDto.getImg());
        madrasa_hq.setCreatedAt(LocalDateTime.now());
        madrasaHq.save(madrasa_hq);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteMadrasa(UUID id) {
        if (madrasaHq.existsById(id)) {
            madrasaHq.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editMadrasa(UUID id, MadrasaHqDto madrasaHqDto) {
        Optional<Madrasa_hq> optionalMad = madrasaHq.findById(id);
        if (optionalMad.isPresent()) {
            Madrasa_hq madrasa_hq= optionalMad.get();
            madrasa_hq.setTitle(madrasaHqDto.getTitle());
            madrasa_hq.setDescription(madrasaHqDto.getDescription());
            madrasa_hq.setImg(madrasaHqDto.getImg());
            madrasaHq.save(madrasa_hq);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body("not found");
        }
    }
}
