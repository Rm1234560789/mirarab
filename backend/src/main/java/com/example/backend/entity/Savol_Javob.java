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
public class Savol_Javob {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "uuid DEFAULT gen_random_uuid()")
    private UUID id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String img;

}
