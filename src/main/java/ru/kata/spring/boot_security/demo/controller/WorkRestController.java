package ru.kata.spring.boot_security.demo.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class WorkRestController {

    private final UserService userService;


    public WorkRestController(UserService userService) {
        this.userService = userService;
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("/admin")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.listUsers(), HttpStatus.ACCEPTED);
    }




}
