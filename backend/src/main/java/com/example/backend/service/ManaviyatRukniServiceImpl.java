package com.example.backend.service;

import com.example.backend.dto.ManaviyatRukniDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Manaviyat_rukni;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.repo.ManaviyatRukni;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ManaviyatRukniServiceImpl implements ManaviyatRukniService {
    final ManaviyatRukni manaviyat_rukni;
    @Override
    public HttpEntity<?> getManaviyatRukni() {
        return ResponseEntity.ok(manaviyat_rukni.getAllorder());
    }

    @Override
    public HttpEntity<?> postManaviyat(ManaviyatRukniDto manaviyat_ruknidto) {
        Manaviyat_rukni manaviyat = new Manaviyat_rukni();
        manaviyat.setName(manaviyat_ruknidto.getName());
        manaviyat.setImg(manaviyat_ruknidto.getImg());
        manaviyat.setCreatedAt(LocalDateTime.now());
        manaviyat_rukni.save(manaviyat);

        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteManaviyat(UUID id) {
        if (manaviyat_rukni.existsById(id)) {
            manaviyat_rukni.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editManaviyat(UUID id, ManaviyatRukniDto manaviyatRukniDto) {
        Optional<Manaviyat_rukni> optionalMan = manaviyat_rukni.findById(id);
        if (optionalMan.isPresent()) {
            Manaviyat_rukni manaviyat = optionalMan.get();
            manaviyat.setName(manaviyatRukniDto.getName());
            manaviyat.setImg(manaviyatRukniDto.getImg());
            manaviyat_rukni.save(manaviyat);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
