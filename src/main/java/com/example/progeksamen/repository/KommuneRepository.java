package com.example.progeksamen.repository;

import com.example.progeksamen.model.Kommune;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KommuneRepository extends JpaRepository<Kommune, Integer> {
    Kommune findKommuneByKommunekode(int kommunekode);
}
