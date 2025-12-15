package com.example.lab10.controller;

import com.example.lab10.model.Person;
import com.example.lab10.repository.PersonRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/persons")
@CrossOrigin(origins = "http://localhost:53964")
public class PersonController {

    private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getById(@PathVariable Long id) {
        return personRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Person> create(@Valid @RequestBody Person person) {
        Person saved = personRepository.save(person);
        return ResponseEntity
                .created(URI.create("/api/persons/" + saved.getId()))
                .body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Person> update(
            @PathVariable Long id,
            @Valid @RequestBody Person person
    ) {
        return personRepository.findById(id)
                .map(existing -> {
                    existing.setFirstName(person.getFirstName());
                    existing.setFamilyName(person.getFamilyName());
                    existing.setAge(person.getAge());
                    existing.setAddress(person.getAddress());
                    return ResponseEntity.ok(personRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        if (!personRepository.existsById(id)) {
            throw new IllegalArgumentException("Person not found");
        }
        personRepository.deleteById(id);
    }
}















