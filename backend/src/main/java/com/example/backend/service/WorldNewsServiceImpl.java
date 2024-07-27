package com.example.backend.service;

import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.dto.WorldNewsDto;
import com.example.backend.entity.New_News;
import com.example.backend.entity.WorldNews;
import com.example.backend.repo.WorldNewsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WorldNewsServiceImpl implements WorldNewsService{
    final WorldNewsRepo worldNewsRepo;

    @Override
    public HttpEntity<?> getAll() {
        return ResponseEntity.ok(worldNewsRepo.findAll());
    }

    @Override
    public HttpEntity<?> getById(UUID id) {
        return ResponseEntity.ok(worldNewsRepo.findById(id));
    }
    @Override
    public HttpEntity<?> post(WorldNewsDto worldNewsDto) {
        WorldNews newNews = new WorldNews();
        newNews.setTitle(worldNewsDto.title());
        newNews.setDescription(worldNewsDto.description());
        newNews.setImg(worldNewsDto.img());
        worldNewsRepo.save(newNews);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteNews(UUID id) {
        if (worldNewsRepo.existsById(id)) {
            worldNewsRepo.deleteById(id);
            return ResponseEntity.ok("News deleted successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }
    @Override
    public HttpEntity<?> editNews(UUID id, WorldNewsDto worldNewsDto) {
        Optional<WorldNews> optional = worldNewsRepo.findById(id);
        if (optional.isPresent()) {
            WorldNews xalqaroShartnoma = optional.get();
            xalqaroShartnoma.setTitle(worldNewsDto.title());
            xalqaroShartnoma.setDescription(worldNewsDto.description());
            xalqaroShartnoma.setImg(worldNewsDto.img());
            worldNewsRepo.save(xalqaroShartnoma);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
