package com.example.backend.repo;

import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface VideoRepo extends JpaRepository<Video, UUID> {
    @Query(value = """
SELECT * FROM video ORDER BY created_at;
""",nativeQuery = true)
    List<Video> getAllorder();

}
