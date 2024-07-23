package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface Izohlar extends JpaRepository<com.example.backend.entity.Izohlar, UUID> {
}
