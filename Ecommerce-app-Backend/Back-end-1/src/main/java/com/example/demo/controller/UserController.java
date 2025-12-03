package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LoginData;
import com.example.demo.entity.Users;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173") // allow React frontend
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/signup1")
	
	public Users addUser(@RequestBody Users user) {
		return userService.addUser(user);
	}
	
	@PostMapping("/login1")

	public Boolean loginUser(@RequestBody LoginData logindata) { // convert json into users
		return userService.loginUser(logindata); // check the email given by user and returns true and false

	}
}
