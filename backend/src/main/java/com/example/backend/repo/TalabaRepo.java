package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Talaba_Minbari;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TalabaRepo extends JpaRepository<Talaba_Minbari, UUID> {
    @Query(value = """
SELECT * FROM talaba_minbari ORDER BY created_at;
""",nativeQuery = true)
    List<Talaba_Minbari> getAllorder();
}
