package com.cloud.samples.boot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class ControllerExceptionHandler {

	@ResponseStatus(HttpStatus.NOT_FOUND) // 404
	@ExceptionHandler(UserNotFoundException.class)
	public void handleNotFound(UserNotFoundException ex) {
		//log.error("Resource not found");
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST) // 400
	@ExceptionHandler(InvalidUserRequestException.class)
	public void handleBadRequest(InvalidUserRequestException ex) {
		//log.error("Invalid Fund Request");
	}
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) // 500
	@ExceptionHandler(Exception.class)
	public void handleGeneralError(Exception ex) {
		//log.error("An error occurred procesing request", ex);
	}
}
