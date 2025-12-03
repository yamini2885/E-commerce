package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "seeds")
public class Seeds {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Unnamed_0")
    private Integer recordNumber;

    @Column(name = "common_name")
    private String commonName;

    @Column(name = "family")
    private String family;

    @Column(name = "categories")
    private String categories;

    @Column(name = "origin")
    private String origin;

    @Column(name = "climate")
    private String climate;

    @Column(name = "zone")
    private String zone;

    @Column(name = "img_url", columnDefinition = "TEXT")
    private String imgUrl;

    @Column(name = "price")
    private Double price;

    @Column(name = "selling_price")
    private Double sellingPrice;

    @Column(name = "discount_percent")
    private Integer discountPercent;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "sunlight")
    private String sunlight;

    @Column(name = "water")
    private String water;

    @Column(name = "soil_type")
    private String soilType;

    @Column(name = "growth_rate")
    private String growthRate;

    @Column(name = "max_height")
    private String maxHeight;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @ElementCollection
    @CollectionTable(name = "benefits", joinColumns = @JoinColumn(name = "seed_id"))
    @Column(name = "benefit")
    private List<String> benefits;

    @ElementCollection
    @CollectionTable(name = "steps_to_grow", joinColumns = @JoinColumn(name = "seed_id"))
    @Column(name = "step")
    private List<String> stepsToGrow;

	public Seeds() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Seeds(Long id, Integer recordNumber, String commonName, String family, String categories, String origin,
			String climate, String zone, String imgUrl, Double price, Double sellingPrice, Integer discountPercent,
			Double rating, String sunlight, String water, String soilType, String growthRate, String maxHeight,
			String description, List<String> benefits, List<String> stepsToGrow) {
		super();
		this.id = id;
		this.recordNumber = recordNumber;
		this.commonName = commonName;
		this.family = family;
		this.categories = categories;
		this.origin = origin;
		this.climate = climate;
		this.zone = zone;
		this.imgUrl = imgUrl;
		this.price = price;
		this.sellingPrice = sellingPrice;
		this.discountPercent = discountPercent;
		this.rating = rating;
		this.sunlight = sunlight;
		this.water = water;
		this.soilType = soilType;
		this.growthRate = growthRate;
		this.maxHeight = maxHeight;
		this.description = description;
		this.benefits = benefits;
		this.stepsToGrow = stepsToGrow;
	}

	@Override
	public String toString() {
		return "Seeds [id=" + id + ", recordNumber=" + recordNumber + ", commonName=" + commonName + ", family="
				+ family + ", categories=" + categories + ", origin=" + origin + ", climate=" + climate + ", zone="
				+ zone + ", imgUrl=" + imgUrl + ", price=" + price + ", sellingPrice=" + sellingPrice
				+ ", discountPercent=" + discountPercent + ", rating=" + rating + ", sunlight=" + sunlight + ", water="
				+ water + ", soilType=" + soilType + ", growthRate=" + growthRate + ", maxHeight=" + maxHeight
				+ ", description=" + description + ", benefits=" + benefits + ", stepsToGrow=" + stepsToGrow + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getRecordNumber() {
		return recordNumber;
	}

	public void setRecordNumber(Integer recordNumber) {
		this.recordNumber = recordNumber;
	}

	public String getCommonName() {
		return commonName;
	}

	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}

	public String getFamily() {
		return family;
	}

	public void setFamily(String family) {
		this.family = family;
	}

	public String getCategories() {
		return categories;
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getClimate() {
		return climate;
	}

	public void setClimate(String climate) {
		this.climate = climate;
	}

	public String getZone() {
		return zone;
	}

	public void setZone(String zone) {
		this.zone = zone;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(Double sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public Integer getDiscountPercent() {
		return discountPercent;
	}

	public void setDiscountPercent(Integer discountPercent) {
		this.discountPercent = discountPercent;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public String getSunlight() {
		return sunlight;
	}

	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}

	public String getWater() {
		return water;
	}

	public void setWater(String water) {
		this.water = water;
	}

	public String getSoilType() {
		return soilType;
	}

	public void setSoilType(String soilType) {
		this.soilType = soilType;
	}

	public String getGrowthRate() {
		return growthRate;
	}

	public void setGrowthRate(String growthRate) {
		this.growthRate = growthRate;
	}

	public String getMaxHeight() {
		return maxHeight;
	}

	public void setMaxHeight(String maxHeight) {
		this.maxHeight = maxHeight;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getBenefits() {
		return benefits;
	}

	public void setBenefits(List<String> benefits) {
		this.benefits = benefits;
	}

	public List<String> getStepsToGrow() {
		return stepsToGrow;
	}

	public void setStepsToGrow(List<String> stepsToGrow) {
		this.stepsToGrow = stepsToGrow;
	}
}
