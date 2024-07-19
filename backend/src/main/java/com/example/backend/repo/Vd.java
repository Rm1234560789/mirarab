package com.example.backend.repo;

import com.example.backend.entity.Videos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface Vd extends JpaRepository<Videos, UUID> {
}
