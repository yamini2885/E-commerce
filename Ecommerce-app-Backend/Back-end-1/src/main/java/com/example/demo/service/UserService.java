package com.example.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.LoginData;
import com.example.demo.entity.Users;
import com.example.demo.repo.UsersRepo;

@Service
public class UserService {
	
	@Autowired
	UsersRepo usersRepo;
	
	//add users
	public Users addUser(Users user) {
		return usersRepo.save(user);
	}
	
	//login 
	public Boolean loginUser(LoginData logindata) {
		Optional<Users> user = usersRepo.findByEmail(logindata.getEmail());
		
		if(user.isEmpty()) {
			return false;
		}
		
		Users user1 = user.get();
		return user1.getPassword().equals(logindata.getPassword());
	}
	
}
