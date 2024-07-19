package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface Professor extends JpaRepository<com.example.backend.entity.Professor, UUID> {
    @Query(value = """
SELECT * FROM professor ORDER BY created_at;
""",nativeQuery = true)
    List<com.example.backend.entity.Professor> getAllorder();
}
