package com.example.backend.repo;

import com.example.backend.entity.Buxoro_Islom;
import com.example.backend.entity.Muqaddas_qadamlar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface QadamRepo extends JpaRepository<Muqaddas_qadamlar, UUID> {
    @Query(value = """
SELECT * FROM muqaddas_qadamlar ORDER BY created_at;
""",nativeQuery = true)
    List<Muqaddas_qadamlar> getAllorder();
}
