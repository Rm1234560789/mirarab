package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Xorijiy_proffessor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface XorijRepo extends JpaRepository<Xorijiy_proffessor, UUID> {
    @Query(value = """
SELECT * FROM xorijiy_proffessor ORDER BY created_at;
""",nativeQuery = true)
    List<Xorijiy_proffessor> getAllorder();
}
