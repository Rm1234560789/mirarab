package com.example.backend.repo;

import com.example.backend.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NewsRepo extends JpaRepository<News, UUID> {
}
