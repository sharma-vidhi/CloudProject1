package com.cloud.samples.boot.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cloud.samples.boot.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

    public List<User> findByFirstName(String firstName); 
}