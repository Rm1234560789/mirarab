package com.example.backend.service;

import com.example.backend.dto.Qadamlar;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Muqaddas_qadamlar;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.repo.QadamRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QadamServiceImpl implements QadamService {
    final QadamRepo qadamRepo;
    @Override
    public HttpEntity<?> getQadam() {
        return ResponseEntity.ok(qadamRepo.getAllorder());
    }

    @Override
    public HttpEntity<?> postQadam(Qadamlar qadamlar) {
        Muqaddas_qadamlar qadamlar1=new Muqaddas_qadamlar();
       qadamlar1.setTitle((qadamlar.getTitle()));
       qadamlar1.setDescription((qadamlar.getDescription()));
       qadamlar1.setImg(qadamlar.getImg());
       qadamlar1.setCreatedAt(LocalDateTime.now());
       qadamRepo.save(qadamlar1);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteQadam(UUID id) {
        if (qadamRepo.existsById(id)) {
            qadamRepo.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editQadam(UUID id, Qadamlar qadamlar) {
        Optional<Muqaddas_qadamlar> optional = qadamRepo.findById(id);
        if (optional.isPresent()) {
            Muqaddas_qadamlar qadamlar1 = optional.get();
            qadamlar1.setTitle(qadamlar.getTitle());
            qadamlar1.setDescription(qadamlar.getDescription());
            qadamlar1.setImg(qadamlar.getImg());
            qadamRepo.save(qadamlar1);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
