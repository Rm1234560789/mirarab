package com.example.backend.repo;

import com.example.backend.entity.Maqolalar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MaqolaRepo extends JpaRepository<Maqolalar, UUID> {
}
