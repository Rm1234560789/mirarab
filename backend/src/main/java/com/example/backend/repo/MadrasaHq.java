package com.example.backend.repo;

import com.example.backend.entity.Madrasa_hq;
import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface MadrasaHq extends JpaRepository<Madrasa_hq, UUID> {
    @Query(value = """
SELECT * FROM madrasa_hq ORDER BY created_at;
""",nativeQuery = true)
    List<Madrasa_hq> getAllorder();
}
