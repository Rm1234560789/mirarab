package com.example.backend.repo;

import com.example.backend.entity.Fikr_Mulohaza;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FikrMulohazaRepo extends JpaRepository<Fikr_Mulohaza, UUID> {
}
