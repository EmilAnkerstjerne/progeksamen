package com.example.progeksamen.controller;


import com.example.progeksamen.model.Kommune;
import com.example.progeksamen.model.Sogn;
import com.example.progeksamen.repository.KommuneRepository;
import com.example.progeksamen.repository.SognRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    SognRepository sognRepository;

    @Autowired
    KommuneRepository kommuneRepository;

    @GetMapping("/allSogne")
    public List<Sogn> allSogne(){
        return sognRepository.findAll();
    }

    @GetMapping("/allKommuner")
    public List<Kommune> allKommuner(){
        return kommuneRepository.findAll();
    }

    @PostMapping(value = "/newKommune", consumes = "application/json")
    public ResponseEntity<Kommune> newKommune(@RequestBody Kommune kommune){
        kommuneRepository.save(kommune);
        return new ResponseEntity<Kommune>(kommune, HttpStatus.CREATED);
    }

    @PostMapping(value = "/newSogn/{kommunekode}", consumes = "application/json")
    public ResponseEntity<Sogn> newSogn(@RequestBody Sogn sogn, @PathVariable int kommunekode){
        Sogn newSogn = sogn;
        newSogn.setKommune(kommuneRepository.findKommuneByKommunekode(kommunekode));
        sognRepository.save(newSogn);
        return new ResponseEntity<>(newSogn, HttpStatus.CREATED);
    }

    @PutMapping(value = "/updateSogn", consumes = "application/json")
    public ResponseEntity<Sogn> updateSogn(@RequestBody Sogn sogn){
        Sogn newSogn = sogn;
        newSogn.setKommune(sognRepository.getById(sogn.getId()).getKommune());
        sognRepository.save(newSogn);


        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteSogn/{id}")
    public ResponseEntity<Sogn> deleteSogn(@PathVariable int id){
        sognRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }





}
