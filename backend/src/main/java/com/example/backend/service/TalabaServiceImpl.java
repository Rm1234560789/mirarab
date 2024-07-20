package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.TalabaDto;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Talaba_Minbari;
import com.example.backend.repo.TalabaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TalabaServiceImpl implements TalabaService {
    final TalabaRepo talabaRepo;
    @Override
    public HttpEntity<?> get() {
        return ResponseEntity.ok(talabaRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> post(TalabaDto talabaDto) {
        Talaba_Minbari talabaMinbari = new Talaba_Minbari();
        talabaMinbari.setTitle(talabaDto.getTitle());
        talabaMinbari.setDescription(talabaDto.getDescription());
        talabaMinbari.setImg(talabaDto.getImg());
        talabaMinbari.setCreatedAt(LocalDateTime.now());
        talabaRepo.save(talabaMinbari);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> delete(UUID id) {
        if (talabaRepo.existsById(id)) {talabaRepo.deleteById(id);
            return ResponseEntity.ok("Rahbariyat deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Rahbariyat not found");
        }
    }
    @Override
    public HttpEntity<?> edit(UUID id,TalabaDto talabaDto) {
        Optional<Talaba_Minbari> optionalRah = talabaRepo.findById(id);
        if (optionalRah.isPresent()) {
           Talaba_Minbari talabaMinbari = optionalRah.get();
           talabaMinbari.setTitle(talabaDto.getTitle());
           talabaMinbari.setDescription(talabaDto.getDescription());
           talabaMinbari.setImg(talabaDto.getImg());
           talabaRepo.save(talabaMinbari);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
