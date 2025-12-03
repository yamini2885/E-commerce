package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "soil_pesticides")
public class SoilPesticides {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Unnamed_0")
    private Integer recordNumber;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "category")
    private String category;

    @Column(name = "origin")
    private String origin;

    @Column(name = "climate_suitability")
    private String climateSuitability;

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

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @ElementCollection
    @CollectionTable(name = "benefits", joinColumns = @JoinColumn(name = "soil_id"))
    @Column(name = "benefit")
    private List<String> benefits;
    
    @ElementCollection
    @CollectionTable(name = "directions_to_use", joinColumns = @JoinColumn(name = "soil_id"))
    @Column(name = "directions_to_use")
    private List<String> directionsToUse;

	public SoilPesticides() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SoilPesticides(Long id, Integer recordNumber, String productName, String category, String origin,
			String climateSuitability, String zone, String imgUrl, Double price, Double sellingPrice,
			Integer discountPercent, Double rating, String quantity, String description, List<String> benefits,
			List<String> directionsToUse) {
		super();
		this.id = id;
		this.recordNumber = recordNumber;
		this.productName = productName;
		this.category = category;
		this.origin = origin;
		this.climateSuitability = climateSuitability;
		this.zone = zone;
		this.imgUrl = imgUrl;
		this.price = price;
		this.sellingPrice = sellingPrice;
		this.discountPercent = discountPercent;
		this.rating = rating;
		this.quantity = quantity;
		this.description = description;
		this.benefits = benefits;
		this.directionsToUse = directionsToUse;
	}

	@Override
	public String toString() {
		return "SoilPesticides [id=" + id + ", recordNumber=" + recordNumber + ", productName=" + productName
				+ ", category=" + category + ", origin=" + origin + ", climateSuitability=" + climateSuitability
				+ ", zone=" + zone + ", imgUrl=" + imgUrl + ", price=" + price + ", sellingPrice=" + sellingPrice
				+ ", discountPercent=" + discountPercent + ", rating=" + rating + ", quantity=" + quantity
				+ ", description=" + description + ", benefits=" + benefits + ", directionsToUse=" + directionsToUse
				+ "]";
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

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getClimateSuitability() {
		return climateSuitability;
	}

	public void setClimateSuitability(String climateSuitability) {
		this.climateSuitability = climateSuitability;
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

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
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

	public List<String> getDirectionsToUse() {
		return directionsToUse;
	}

	public void setDirectionsToUse(List<String> directionsToUse) {
		this.directionsToUse = directionsToUse;
	}
    


    
}
