package com.example.backend.service;

import com.example.backend.dto.Buxoro;
import com.example.backend.dto.MaqolaDto;
import com.example.backend.entity.Buxoro_Islom;
import com.example.backend.entity.Maqolalar;
import com.example.backend.repo.BuxoroIslom;
import com.example.backend.repo.MaqolaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class Buxoro_islomServiceImpl implements Buxoro_islomService {
    final BuxoroIslom buxoroIslom;
    @Override
    public HttpEntity<?> getBuxoro() {
        return ResponseEntity.ok(buxoroIslom.getAllorder());
    }

    @Override
    public HttpEntity<?> postBuxoro(Buxoro buxoro) {
        Buxoro_Islom buxoro1 =new Buxoro_Islom();
        buxoro1.setTitle(buxoro.getTitle());
        buxoro1.setDescription(buxoro.getDescription());
        buxoro1.setImg(buxoro.getImg());
        buxoro1.setCreatedAt(LocalDateTime.now());
        buxoroIslom.save(buxoro1);
        return ResponseEntity.ok("Saved!");
    }



    @Override
    public HttpEntity<?> deleteBuxoro(UUID id) {
        if (buxoroIslom.existsById(id)) {
            buxoroIslom.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }


    @Override
    public HttpEntity<?> editBuxoro(UUID id, Buxoro buxoro) {
        Optional<Buxoro_Islom> optional =buxoroIslom.findById(id);
        if (optional.isPresent()) {
            Buxoro_Islom buxoro2 = optional.get();
            buxoro2.setTitle(buxoro.getTitle());
            buxoro2.setDescription(buxoro.getDescription());
            buxoro2.setImg(buxoro.getImg());
            buxoroIslom.save(buxoro2);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body("not found");
        }
    }
}
