package com.example.backend.repo;

import com.example.backend.entity.Muqaddas_qadamlar;
import com.example.backend.entity.Qabul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface QabulRepo extends JpaRepository<Qabul, UUID> {
    @Query(value = """
SELECT * FROM qabul ORDER BY created_at;
""",nativeQuery = true)
    List<Qabul> getAllorder();
}
