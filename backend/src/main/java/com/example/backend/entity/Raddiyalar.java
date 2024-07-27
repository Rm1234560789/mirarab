package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Raddiyalar {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "uuid DEFAULT gen_random_uuid()")
    private UUID id;
    @Column(columnDefinition = "TEXT")
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String img;
}
