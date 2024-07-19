package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface RahbariyatRepo extends JpaRepository<Rahbariyat, UUID> {

    @Query(value = """
SELECT * FROM rahbariyat ORDER BY created_at;
""",nativeQuery = true)
    List<Rahbariyat> getAllorder();
}
