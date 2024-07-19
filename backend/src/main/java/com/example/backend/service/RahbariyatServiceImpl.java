package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.VdDto;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Videos;
import com.example.backend.repo.RahbariyatRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class RahbariyatServiceImpl implements RahbariyatService {
    final RahbariyatRepo rahbariyatRepo;

    @Override
    public HttpEntity<?> getRahbariyat() {
        return ResponseEntity.ok(rahbariyatRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postRahbariyat(RahbariyatDto rahbariyatDto) {
        Rahbariyat rahbariyat = new Rahbariyat();
        rahbariyat.setName(rahbariyatDto.getName());
        rahbariyat.setTitle(rahbariyatDto.getTitle());
        rahbariyat.setImg(rahbariyatDto.getImg());
        rahbariyat.setCreatedAt(LocalDateTime.now());
        rahbariyatRepo.save(rahbariyat);

       return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteRahbariyat(UUID id) {
        if (rahbariyatRepo.existsById(id)) {
            rahbariyatRepo.deleteById(id);
            return ResponseEntity.ok("Rahbariyat deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Rahbariyat not found");
        }
    }
    @Override
    public HttpEntity<?> editRahbariyat(UUID id, RahbariyatDto rahbariyatDto) {
        Optional<Rahbariyat> optionalRah = rahbariyatRepo.findById(id);
        if (optionalRah.isPresent()) {
            Rahbariyat rahbariyat= optionalRah.get();
            rahbariyat.setName(rahbariyatDto.getName());
            rahbariyat.setTitle(rahbariyatDto.getTitle());
            rahbariyat.setImg(rahbariyatDto.getImg());
            rahbariyatRepo.save(rahbariyat);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
