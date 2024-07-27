package com.example.backend.repo;

import com.example.backend.entity.WorldNews;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface WorldNewsRepo extends JpaRepository<WorldNews, UUID> {
}
