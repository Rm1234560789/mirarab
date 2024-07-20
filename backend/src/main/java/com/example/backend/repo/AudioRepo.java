package com.example.backend.repo;

import com.example.backend.entity.Audio;
import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AudioRepo extends JpaRepository<Audio, UUID> {
    @Query(value = """
SELECT * FROM audio ORDER BY created_at;
""",nativeQuery = true)
    List<Audio> getAllorder();
}

