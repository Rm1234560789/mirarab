package com.example.backend.service;

import com.example.backend.dto.RaddiyalarDto;
import com.example.backend.entity.Raddiyalar;
import com.example.backend.repo.RaddiyalarRepo;
import com.example.backend.service.RaddiyalarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RaddiyalarServiceImpl implements RaddiyalarService {
    @Autowired
    private RaddiyalarRepo repository;

    @Override
    public List<Raddiyalar> getAll() {
        return repository.findAll();
    }


    @Override
    public Raddiyalar addRaddiyalar(RaddiyalarDto dto) {
        Raddiyalar raddiyalar = new Raddiyalar();
        raddiyalar.setTitle(dto.getTitle());
        raddiyalar.setDescription(dto.getDescription());
        raddiyalar.setImg(dto.getImg());
        return repository.save(raddiyalar);
    }

    @Override
    public Optional<Raddiyalar> updateRaddiyalar(UUID id, RaddiyalarDto dto) {
        return repository.findById(id).map(raddiyalar -> {
            raddiyalar.setTitle(dto.getTitle());
            raddiyalar.setDescription(dto.getDescription());
            raddiyalar.setImg(dto.getImg());
            return repository.save(raddiyalar);
        });
    }

    @Override
    public void deleteRaddiyalar(UUID id) {
        repository.deleteById(id);
    }
}
