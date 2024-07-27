package com.example.backend.repo;

import com.example.backend.entity.Raddiyalar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RaddiyalarRepo extends JpaRepository<Raddiyalar, UUID> {
}
