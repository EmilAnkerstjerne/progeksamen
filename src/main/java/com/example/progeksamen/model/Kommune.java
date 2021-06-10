package com.example.progeksamen.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "kommune")
public class Kommune {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    //@OneToMany(cascade = CascadeType.PERSIST)
    //@JoinColumn(name = "id", referencedColumnName = "id")
    //private List<Sogn> sogn;

    private String navn;
    private int kommunekode;

    public Kommune(){}

    public Kommune(String navn, int kommunekode) {
        this.navn = navn;
        this.kommunekode = kommunekode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public int getKommunekode() {
        return kommunekode;
    }

    public void setKommunekode(int postnummer) {
        this.kommunekode = postnummer;
    }
}
