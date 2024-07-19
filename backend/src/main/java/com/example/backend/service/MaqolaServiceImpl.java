package com.example.backend.service;

import com.example.backend.dto.MaqolaDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Maqolalar;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.repo.MaqolaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MaqolaServiceImpl implements MaqolaService {
    final MaqolaRepo maqolaRepo;
    @Override
    public HttpEntity<?> getMaqola() {

        return ResponseEntity.ok(maqolaRepo.findAll());
    }

    @Override
    public HttpEntity<?> postMaqola(MaqolaDto maqolaDto) {
        Maqolalar maqolalar = new Maqolalar();
        maqolalar.setTitle(maqolaDto.getTitle());
        maqolalar.setDescription(maqolaDto.getDescription());
        maqolalar.setImg(maqolaDto.getImg());
        maqolaRepo.save(maqolalar);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteMaqola(UUID id) {
        if (maqolaRepo.existsById(id)) {
            maqolaRepo.deleteById(id);
            return ResponseEntity.ok("Maqola deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Maqola not found");
        }
    }
    @Override
    public HttpEntity<?> editMaqola(UUID id, MaqolaDto maqolaDto) {
        Optional<Maqolalar> optionalmaq = maqolaRepo.findById(id);
        if (optionalmaq.isPresent()) {
            Maqolalar maqolalar= optionalmaq.get();
            maqolalar.setTitle(maqolaDto.getTitle());
            maqolalar.setDescription(maqolaDto.getDescription());
            maqolalar.setImg(maqolaDto.getImg());
            maqolaRepo.save(maqolalar);
            return ResponseEntity.ok("Maqolalar updated successfully");
        } else {
            return ResponseEntity.status(404).body("Maqolalar not found");
        }
    }
}
