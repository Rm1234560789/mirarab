package com.example.backend.service;
import com.example.backend.dto.QabulDto;
import com.example.backend.dto.Qadamlar;
import com.example.backend.entity.Muqaddas_qadamlar;
import com.example.backend.entity.Qabul;
import com.example.backend.repo.QabulRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QabulServiceImpl implements QabulService {
    final QabulRepo qabulRepo;
    @Override
    public HttpEntity<?> getQabul() {
        return ResponseEntity.ok(qabulRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postQabul(QabulDto qabulDto) {
        System.out.println(qabulDto);
        Qabul qabul = new Qabul();
        qabul.setName(qabulDto.getName());
        qabul.setTitle(qabulDto.getTitle());
        qabul.setImg(qabulDto.getImg());
        qabul.setCreatedAt(LocalDateTime.now());
        qabulRepo.save(qabul);
        return ResponseEntity.ok("Saved!");

    }



    @Override
    public HttpEntity<?> deleteQabul(UUID id) {
        if (qabulRepo.existsById(id)) {
            qabulRepo.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editQabul(UUID id, QabulDto qabulDto) {
        Optional<Qabul> optional = qabulRepo.findById(id);
        if (optional.isPresent()) {
           Qabul qabul = optional.get();
           qabul.setName(qabulDto.getName());
           qabul.setTitle(qabulDto.getTitle());
           qabul.setImg(qabulDto.getImg());
           qabulRepo.save(qabul);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
