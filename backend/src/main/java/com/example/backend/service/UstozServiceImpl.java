package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.UstozlarDto;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Ustozlar_Minbari;
import com.example.backend.repo.UstozlarRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UstozServiceImpl implements UstozService {
    final UstozlarRepo ustozlarRepo;
    @Override
    public HttpEntity<?> get() {
        return ResponseEntity.ok(ustozlarRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> post(UstozlarDto ustozlarDto) {
        Ustozlar_Minbari ustozlarMinbari = new Ustozlar_Minbari();
        ustozlarMinbari.setName(ustozlarDto.getName());
        ustozlarMinbari.setDescription(ustozlarDto.getDescription());
        ustozlarMinbari.setImg(ustozlarDto.getImg());
        ustozlarMinbari.setCreatedAt(LocalDateTime.now());
        ustozlarRepo.save(ustozlarMinbari);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> delete(UUID id) {
        if (ustozlarRepo.existsById(id)) {
            ustozlarRepo.deleteById(id);
            return ResponseEntity.ok("Rahbariyat deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Rahbariyat not found");
        }
    }
    @Override
    public HttpEntity<?> edit(UUID id, UstozlarDto ustozlarDto) {
        Optional<Ustozlar_Minbari> optional = ustozlarRepo.findById(id);
        if (optional.isPresent()) {
            Ustozlar_Minbari ustozlar = optional.get();
            ustozlar.setName(ustozlarDto.getName());
            ustozlar.setDescription(ustozlarDto.getDescription());
            ustozlar.setImg(ustozlarDto.getImg());
            ustozlarRepo.save(ustozlar);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
