package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.UlugAllomalar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AllomaRepo extends JpaRepository<UlugAllomalar, UUID> {
    @Query(value = """
SELECT * FROM ulug_allomalar ORDER BY created_at;
""",nativeQuery = true)
    List<UlugAllomalar> getAllorder();
}
