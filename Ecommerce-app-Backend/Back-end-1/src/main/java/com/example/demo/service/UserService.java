package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.example.demo.repo.BulbsRepo;
import com.example.demo.repo.FloweringPlantsRepo;
import com.example.demo.repo.Fruits_VegitablesRepo;
import com.example.demo.repo.HerbsRepo;
import com.example.demo.repo.IndoarPlantsRepo;
import com.example.demo.repo.OutdoarPlantsRepo;
import com.example.demo.repo.SeedsRepo;
import com.example.demo.repo.SoilPesticideRepo;
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
	
	@Autowired
	IndoarPlantsRepo indoarPlantsrepo1;
	
	public List<IndoarPlant> getAllIndoarPlants()
	{
		return indoarPlantsrepo1.findAll();
	}
	
	@Autowired
	OutdoarPlantsRepo outdoarPlantsRepo;
	
	public List<OutdoarPlants> getAllOutdoarPlants(){
		return outdoarPlantsRepo.findAll();
	}
	
	
	@Autowired
	Fruits_VegitablesRepo fruits_vegitablesrepo;
	
	public List<Fruits_Vegitables> getAllFruits_Vegitables(){
		return fruits_vegitablesrepo.findAll();
	}
	
	@Autowired
	SeedsRepo seedsrepo;
	
	public List<Seeds> getAllSeeds(){
		return seedsrepo.findAll();
	}
	
	@Autowired
	SoilPesticideRepo soilPesticiderepo;
	
	public List<SoilPesticides> getAllSoilPesticides(){
		return soilPesticiderepo.findAll();
	}
	
	@Autowired
	FloweringPlantsRepo floweringPlantsrepo;
	
	public List<FloweringPlant> getAllFloweringPlants(){
		return floweringPlantsrepo.findAll();
	}
	
	@Autowired
	HerbsRepo herbsrepo;
	
	public List<Herbs> getAllHerbs(){
		return herbsrepo.findAll();
	}
	
	@Autowired
	BulbsRepo bulbsrepo;
	
	public List<Bulbs> getAllBulbs(){
		return bulbsrepo.findAll();
	}

	
	
	
	
	
	
	
}
