package com.example.backend.repo;

import com.example.backend.entity.New_News;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NewNewsRepo extends JpaRepository<New_News, UUID> {
}
