package com.example.backend.service;

import com.example.backend.dto.NewsDto;
import com.example.backend.entity.News;
import com.example.backend.repo.NewsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class NewsServiceImpl implements NewsService {
    final NewsRepo newsRepo;

    @Override
    public HttpEntity<?> getNews() {
        return ResponseEntity.ok(newsRepo.findAll());
    }

    @Override
    public HttpEntity<?> addNews(NewsDto newsDto) {
        News news = new News();
        news.setTitle(newsDto.getTitle());
        news.setDescription(newsDto.getDescription());
        news.setImg(newsDto.getImg());
        newsRepo.save(news);
        return ResponseEntity.ok("News added successfully");
    }

    @Override
    public HttpEntity<?> deleteNews(UUID id) {
        if (newsRepo.existsById(id)) {
            newsRepo.deleteById(id);
            return ResponseEntity.ok("News deleted successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }

    @Override
    public HttpEntity<?> updateNews(UUID id, NewsDto newsDto) {
        Optional<News> optionalNews = newsRepo.findById(id);
        if (optionalNews.isPresent()) {
            News news = optionalNews.get();
            news.setTitle(newsDto.getTitle());
            news.setDescription(newsDto.getDescription());
            news.setImg(newsDto.getImg());
            newsRepo.save(news);
            return ResponseEntity.ok("News updated successfully");
        } else {
            return ResponseEntity.status(404).body("News not found");
        }
    }
}
