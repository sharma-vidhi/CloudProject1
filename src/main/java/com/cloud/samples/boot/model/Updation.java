package com.cloud.samples.boot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity(name="app_updation")
public class Updation{

	public Updation(){}
	
	public Updation(Date start, Date tupdate) {
		this.start = start;
		this.tupdate = tupdate;
		
	}

	@Id
	@Getter
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	
	@Setter
	@Getter
	@Column(name = "start", nullable = false, length=40)
	private Date start;
	
	@Setter
	@Getter
	@Column(name = "tupdate", nullable = false, length=40)
	private Date tupdate;
	
	
}