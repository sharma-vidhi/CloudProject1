package com.cloud.samples.boot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity(name="app_user_image")
public class UserImage {
public UserImage(){}
	
	public UserImage(String key, String url) {
		this.key = key;
		this.url =url;		
	}

	@Id
	@Getter
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	
	@Setter
	@Getter
	@Column(name = "s3_key", nullable = false, length=200)
	private String key;
	
	@Setter
	@Getter
	@Column(name = "url", nullable = false, length=1000)
	private String url;

	public String getKey() {
		// TODO Auto-generated method stub
		return null;
	}
}
