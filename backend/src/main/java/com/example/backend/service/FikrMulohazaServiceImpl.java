package com.example.backend.service;

import com.example.backend.dto.FikrMulohazaDto;
import com.example.backend.entity.Fikr_Mulohaza;
import com.example.backend.repo.FikrMulohazaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FikrMulohazaServiceImpl implements FikrMulohazaService{
    final FikrMulohazaRepo fikrMulohazaRepo;

    @Override
    public HttpEntity<?> getAll() {
        return ResponseEntity.ok(fikrMulohazaRepo.findAll());
    }
    @Override
    public HttpEntity<?> post(FikrMulohazaDto fikrMulohazaDto) {
        Fikr_Mulohaza newNews = new Fikr_Mulohaza();
        newNews.setTitle(fikrMulohazaDto.title());
        newNews.setDescription(fikrMulohazaDto.description());
        newNews.setImg(fikrMulohazaDto.img());
        fikrMulohazaRepo.save(newNews);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteNews(UUID id) {
        if (fikrMulohazaRepo.existsById(id)) {
            fikrMulohazaRepo.deleteById(id);
            return ResponseEntity.ok("News deleted successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }
    @Override
    public HttpEntity<?> editNews(UUID id, FikrMulohazaDto fikrMulohazaDto) {
        Optional<Fikr_Mulohaza> optional = fikrMulohazaRepo.findById(id);
        if (optional.isPresent()) {
            Fikr_Mulohaza xalqaroShartnoma = optional.get();
            xalqaroShartnoma.setTitle(fikrMulohazaDto.title());
            xalqaroShartnoma.setDescription(fikrMulohazaDto.description());
            xalqaroShartnoma.setImg(fikrMulohazaDto.img());
            fikrMulohazaRepo.save(xalqaroShartnoma);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
