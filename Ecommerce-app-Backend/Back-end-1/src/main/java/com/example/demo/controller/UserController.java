package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Bulbs;
import com.example.demo.entity.FloweringPlant;
import com.example.demo.entity.Fruits_Vegitables;
import com.example.demo.entity.Herbs;
import com.example.demo.entity.IndoarPlant;
import com.example.demo.entity.LoginData;
import com.example.demo.entity.OutdoarPlants;
import com.example.demo.entity.Seeds;
import com.example.demo.entity.SoilPesticides;
import com.example.demo.entity.Users;
import com.example.demo.repo.OutdoarPlantsRepo;
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
	
	@GetMapping("/indoarplants")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<IndoarPlant> getIndoarPlant()
	{
		return userService.getAllIndoarPlants();
	}
	
	@GetMapping("/outdoarplants")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<OutdoarPlants> getOutdoarPlants()
	{
		return userService.getAllOutdoarPlants();
	}
	
	@GetMapping("/fruits_vegitables")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<Fruits_Vegitables> getFruits_Vegitables()
	{
		return userService.getAllFruits_Vegitables();
	}
	
	@GetMapping("/seeds")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<Seeds> getSeeds()
	{
		return userService.getAllSeeds();
	}
	
	@GetMapping("/soil_pesticides")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<SoilPesticides> getSoilPesticides()
	{
		return userService.getAllSoilPesticides();
	}
	
	@GetMapping("/flowering_plants")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<FloweringPlant> getFloweringPlants()
	{
		return userService.getAllFloweringPlants();
	}
	
	@GetMapping("/herbs")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<Herbs> getHerbs()
	{
		return userService.getAllHerbs();
	}

	@GetMapping("/bulbs")
	@CrossOrigin(origins = "http://localhost:5173")
	public List<Bulbs> getBulbs()
	{
		return userService.getAllBulbs();
	}

}
