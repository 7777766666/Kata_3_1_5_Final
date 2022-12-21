package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.kata.spring.boot_security.demo.service.UserService;


@Controller
@RequestMapping
public class AdminController {

    @GetMapping("/admin")
    public String returnAdminPage() {
        return "admin/admin";
    }

//    private final UserService userService;
//
//    @Autowired
//    public AdminController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping("")
//    public ModelAndView admin(Principal user) {
//        ModelAndView modelAndView = new ModelAndView();
//        modelAndView.setViewName("admin/admin");
//        List<User> users = userService.listUsers();
//        modelAndView.addObject("users", users);
//        modelAndView.addObject("admin", userService.findByEmail(user.getName()));
//        return modelAndView;
//    }


}


