package com.example.backend.service;

import com.example.backend.dto.RahbariyatDto;
import com.example.backend.dto.Shartnoma;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.entity.Xalqaro_Shartnoma;
import com.example.backend.repo.RahbariyatRepo;
import com.example.backend.repo.ShartnomaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ShartnomaServiceImpl implements ShartnomaService {
    final ShartnomaRepo shartnomaRepo;

    @Override
    public HttpEntity<?> getShartnoma() {
        return ResponseEntity.ok(shartnomaRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postShartnoma(Shartnoma shartnoma) {
        Xalqaro_Shartnoma xalqaroShartnoma = new Xalqaro_Shartnoma();
        xalqaroShartnoma.setTitle(shartnoma.getTitle());
        xalqaroShartnoma.setDescription(shartnoma.getDescription());
        xalqaroShartnoma.setImg(shartnoma.getImg());
        xalqaroShartnoma.setCreatedAt(LocalDateTime.now());
        shartnomaRepo.save(xalqaroShartnoma);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteShartnoma(UUID id) {
        if (shartnomaRepo.existsById(id)) {
            shartnomaRepo.deleteById(id);
            return ResponseEntity.ok("Rahbariyat deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Rahbariyat not found");
        }
    }
    @Override
    public HttpEntity<?> editShartnoma(UUID id, Shartnoma shartnoma) {
        Optional<Xalqaro_Shartnoma> optional = shartnomaRepo.findById(id);
        if (optional.isPresent()) {
            Xalqaro_Shartnoma xalqaroShartnoma = optional.get();
           xalqaroShartnoma.setTitle(shartnoma.getTitle());
           xalqaroShartnoma.setDescription(shartnoma.getDescription());
           xalqaroShartnoma.setImg(shartnoma.getImg());
           shartnomaRepo.save(xalqaroShartnoma);
            return ResponseEntity.ok("Rah updated successfully");
        } else {
            return ResponseEntity.status(404).body("Rah not found");
        }
    }
}
