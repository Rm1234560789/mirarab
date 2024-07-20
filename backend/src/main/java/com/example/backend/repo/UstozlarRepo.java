package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Ustozlar_Minbari;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface UstozlarRepo extends JpaRepository<Ustozlar_Minbari, UUID> {
    @Query(value = """
SELECT * FROM ustozlar_minbari ORDER BY created_at;
""",nativeQuery = true)
    List<Ustozlar_Minbari> getAllorder();
}
