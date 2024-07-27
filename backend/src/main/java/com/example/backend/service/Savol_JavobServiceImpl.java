package com.example.backend.service;

import com.example.backend.dto.SavolJavobDto;
import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.entity.New_News;
import com.example.backend.entity.Savol_Javob;
import com.example.backend.repo.Savol_JavobRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class Savol_JavobServiceImpl implements Savol_JavobService{
    final Savol_JavobRepo savolJavobRepo;

    @Override
    public HttpEntity<?> getAll() {
        return ResponseEntity.ok(savolJavobRepo.findAll());
    }
    @Override
    public HttpEntity<?> post(SavolJavobDto uzbNewsDto) {
        Savol_Javob newNews = new Savol_Javob();
        newNews.setTitle(uzbNewsDto.title());
        newNews.setDescription(uzbNewsDto.description());
        newNews.setImg(uzbNewsDto.img());
        savolJavobRepo.save(newNews);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteNews(UUID id) {
        if (savolJavobRepo.existsById(id)) {
            savolJavobRepo.deleteById(id);
            return ResponseEntity.ok("News deleted successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }
    @Override
    public HttpEntity<?> editNews(UUID id, SavolJavobDto uzbNewsDto) {
        Optional<Savol_Javob> optional = savolJavobRepo.findById(id);
        if (optional.isPresent()) {
            Savol_Javob xalqaroShartnoma = optional.get();
            xalqaroShartnoma.setTitle(uzbNewsDto.title());
            xalqaroShartnoma.setDescription(uzbNewsDto.description());
            xalqaroShartnoma.setImg(uzbNewsDto.img());
            savolJavobRepo.save(xalqaroShartnoma);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
