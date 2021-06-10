package com.example.progeksamen.controller;


import com.example.progeksamen.model.Sogn;
import com.example.progeksamen.repository.KommuneRepository;
import com.example.progeksamen.repository.SognRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Date;

@org.springframework.stereotype.Controller
public class Controller {

    @Autowired
    SognRepository sognRepository;

    @Autowired
    KommuneRepository kommuneRepository;

    @GetMapping("/")
    public String index(){
        return "index";
    }
}
