package com.example.progeksamen.repository;

import com.example.progeksamen.model.Sogn;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SognRepository extends JpaRepository<Sogn, Integer> {
    List<Sogn> findSognByKommuneId(int kommuneId);
}
