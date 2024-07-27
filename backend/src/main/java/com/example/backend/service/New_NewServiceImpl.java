package com.example.backend.service;

import com.example.backend.dto.Shartnoma;
import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.entity.New_News;
import com.example.backend.entity.Xalqaro_Shartnoma;
import com.example.backend.repo.NewNewsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class New_NewServiceImpl implements New_NewService{
    final NewNewsRepo newNewsRepo;
    @Override
    public HttpEntity<?> getAll() {
        return ResponseEntity.ok(newNewsRepo.findAll());
    }

    @Override
    public HttpEntity<?> getById(UUID id) {
        return ResponseEntity.ok(newNewsRepo.findById(id));
    }

    @Override
    public HttpEntity<?> post(Uzb_NewsDto uzbNewsDto) {
        New_News newNews = new New_News();
        newNews.setTitle(uzbNewsDto.title());
        newNews.setDescription(uzbNewsDto.description());
        newNews.setImg(uzbNewsDto.img());
        newNewsRepo.save(newNews);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteNews(UUID id) {
        if (newNewsRepo.existsById(id)) {
            newNewsRepo.deleteById(id);
            return ResponseEntity.ok("News deleted successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }
    @Override
    public HttpEntity<?> editNews(UUID id, Uzb_NewsDto uzbNewsDto) {
        Optional<New_News> optional = newNewsRepo.findById(id);
        if (optional.isPresent()) {
            New_News xalqaroShartnoma = optional.get();
            xalqaroShartnoma.setTitle(uzbNewsDto.title());
            xalqaroShartnoma.setDescription(uzbNewsDto.description());
            xalqaroShartnoma.setImg(uzbNewsDto.img());
            newNewsRepo.save(xalqaroShartnoma);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
