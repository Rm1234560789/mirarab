package com.example.backend.repo;

import com.example.backend.entity.Buxoro_Obidalar;
import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ObidaRepo extends JpaRepository<Buxoro_Obidalar, UUID> {
    @Query(value = """
SELECT * FROM buxoro_obidalar ORDER BY created_at;
""",nativeQuery = true)
    List<Buxoro_Obidalar> getAllorder();
}
