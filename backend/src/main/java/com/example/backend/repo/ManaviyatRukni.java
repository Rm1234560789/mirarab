package com.example.backend.repo;

import com.example.backend.entity.Manaviyat_rukni;
import com.example.backend.entity.Rahbariyat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ManaviyatRukni extends JpaRepository<Manaviyat_rukni, UUID> {
    @Query(value = """
SELECT * FROM manaviyat_rukni ORDER BY created_at;
""",nativeQuery = true)
    List<Manaviyat_rukni> getAllorder();
}
