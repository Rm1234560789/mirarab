package com.example.backend.repo;

import com.example.backend.entity.Turli_Mavzular;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TurliMavzuRepo extends JpaRepository<Turli_Mavzular, UUID> {
    @Query(value = "select * from turli_mavzular tm order by tm.created_at",nativeQuery = true)
    List<Turli_Mavzular> getTurliMavzularOrderBy();
}
