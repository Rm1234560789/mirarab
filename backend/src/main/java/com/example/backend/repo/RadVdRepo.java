package com.example.backend.repo;

import com.example.backend.entity.Raddiya_vd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface RadVdRepo extends JpaRepository<Raddiya_vd, UUID> {
    @Query(value = """
SELECT * FROM raddiya_vd ORDER BY created_at;
""",nativeQuery = true)
    List<Raddiya_vd> getAllorder();
}
