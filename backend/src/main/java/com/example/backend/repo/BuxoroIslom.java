package com.example.backend.repo;

import com.example.backend.entity.Buxoro_Islom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface BuxoroIslom extends JpaRepository<Buxoro_Islom, UUID> {
    @Query(value = """
SELECT * FROM buxoro_islom ORDER BY created_at;
""",nativeQuery = true)
    List<Buxoro_Islom> getAllorder();
}
