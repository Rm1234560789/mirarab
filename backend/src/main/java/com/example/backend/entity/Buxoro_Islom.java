package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Buxoro_Islom {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "uuid DEFAULT gen_random_uuid()")
    private UUID id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String img;
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    public Buxoro_Islom(String title, String description, String img, LocalDateTime createdAt) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.createdAt = createdAt;
    }
}
