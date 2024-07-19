package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Xalqaro_Shartnoma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ShartnomaRepo extends JpaRepository<Xalqaro_Shartnoma, UUID> {
    @Query(value = """
SELECT * FROM xalqaro_shartnoma ORDER BY created_at;
""",nativeQuery = true)
    List<Xalqaro_Shartnoma> getAllorder();
}
