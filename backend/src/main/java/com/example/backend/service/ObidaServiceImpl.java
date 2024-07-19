package com.example.backend.service;

import com.example.backend.dto.BxObida;
import com.example.backend.entity.Buxoro_Obidalar;
import com.example.backend.repo.ObidaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ObidaServiceImpl implements ObidaService {
    final ObidaRepo obidaRepo;
    @Override
    public HttpEntity<?> getObida() {
        return ResponseEntity.ok(obidaRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postObida(BxObida bxObida) {
        Buxoro_Obidalar obidalar=new Buxoro_Obidalar();
       obidalar.setTitle(bxObida.getTitle());
       obidalar.setDescription(bxObida.getDescription());
       obidalar.setImg(bxObida.getImg());
        obidalar.setCreatedAt(LocalDateTime.now());
        obidaRepo.save(obidalar);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteObida(UUID id) {
        if (obidaRepo.existsById(id)) {
            obidaRepo.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editObida(UUID id, BxObida bxObida) {
        Optional<Buxoro_Obidalar> optional = obidaRepo.findById(id);
        if (optional.isPresent()) {
            Buxoro_Obidalar obidalar = optional.get();
            obidalar.setTitle(bxObida.getTitle());
            obidalar.setDescription(bxObida.getDescription());
            obidalar.setImg(bxObida.getImg());
            obidaRepo.save(obidalar);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
