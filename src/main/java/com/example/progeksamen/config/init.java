package com.example.progeksamen.config;

import com.example.progeksamen.model.Kommune;
import com.example.progeksamen.model.Sogn;
import com.example.progeksamen.repository.KommuneRepository;
import com.example.progeksamen.repository.SognRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class init implements CommandLineRunner {

    @Autowired
    KommuneRepository kommuneRepository;

    @Autowired
    SognRepository sognRepository;

    @Override
    public void run(String... args) throws Exception {
        Kommune kommune = new Kommune("holbek", 9999);
        kommuneRepository.save(kommune);


    }

}
