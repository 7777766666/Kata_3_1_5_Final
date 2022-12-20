package ru.kata.spring.boot_security.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.kata.spring.boot_security.demo.dao.UserDao;
import ru.kata.spring.boot_security.demo.model.User;

import java.security.Principal;

@Controller
//@RequestMapping("/user")
public class UserController {

    @GetMapping("/user")
    public String userPage(){
        return "user/user";
    }


    @GetMapping("/api/user")
    @ResponseBody
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<User> getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }





    //  private final UserDao userDao;

   // public UserController(UserDao userDao) {
//        this.userDao = userDao;
//    }

//    @GetMapping(value = "")
//    public String printWelcome(ModelMap model, Principal principal) {
//        User user = userDao.findByEmail(principal.getName());
//        model.addAttribute("roles", user.getRoles());
//        model.addAttribute("user", user);
//        return "user/user";
//    }



}


