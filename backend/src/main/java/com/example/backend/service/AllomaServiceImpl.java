package com.example.backend.service;

import com.example.backend.dto.AllomaDto;
import com.example.backend.entity.UlugAllomalar;
import com.example.backend.repo.AllomaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AllomaServiceImpl implements AllomaService {
    final AllomaRepo allomaRepo;
    @Override
    public HttpEntity<?> getAlloma() {
        return ResponseEntity.ok(allomaRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postAlloma(AllomaDto allomaDto) {
        UlugAllomalar allomalar = new UlugAllomalar();
        allomalar.setTitle(allomaDto.getTitle());
        allomalar.setDescription(allomaDto.getDescription());
        allomalar.setImg(allomaDto.getImg());
        allomalar.setCreatedAt(LocalDateTime.now());
        allomaRepo.save(allomalar);
        return ResponseEntity.ok("Saved!");
    }



    @Override
    public HttpEntity<?> deleteAlloma(UUID id) {
        if (allomaRepo.existsById(id)) {
            allomaRepo.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }


    @Override
    public HttpEntity<?> editAlloma(UUID id, AllomaDto allomaDto) {
        Optional<UlugAllomalar> optional =allomaRepo.findById(id);
        if (optional.isPresent()) {
            UlugAllomalar allomalar = optional.get();
            allomalar.setTitle(allomaDto.getTitle());
            allomalar.setDescription(allomaDto.getDescription());
            allomalar.setImg(allomaDto.getImg());
            allomaRepo.save(allomalar);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body("not found");
        }
    }
}
