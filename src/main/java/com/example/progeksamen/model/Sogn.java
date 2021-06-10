package com.example.progeksamen.model;

import com.example.progeksamen.repository.KommuneRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "sogn")
public class Sogn {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "kommune_id", referencedColumnName = "id")
    private Kommune kommune;

    private int sogneKode;
    private String navn;
    private int smittetryk;
    private Date nedlukningStart;

    public Sogn(){}

    public Sogn(int sogneKode, String navn, int smittetryk, Date nedlukningStart) {
        this.sogneKode = sogneKode;
        this.navn = navn;
        this.smittetryk = smittetryk;
        this.nedlukningStart = nedlukningStart;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Kommune getKommune() {
        return kommune;
    }

    public void setKommune(Kommune kommune) {
        this.kommune = kommune;
    }

    public int getSogneKode() {
        return sogneKode;
    }

    public void setSogneKode(int sogneKode) {
        this.sogneKode = sogneKode;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public int getSmittetryk() {
        return smittetryk;
    }

    public void setSmittetryk(int smittetryk) {
        this.smittetryk = smittetryk;
    }

    public Date getNedlukningStart() {
        return nedlukningStart;
    }

    public void setNedlukningStart(Date nedlukningStart) {
        this.nedlukningStart = nedlukningStart;
    }
}
