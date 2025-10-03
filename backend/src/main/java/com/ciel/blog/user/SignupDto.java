package com.ciel.blog.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record SignupDto(
        @NotEmpty(message = "email must not be empty") @Email String email,
        @NotEmpty(message = "username must not be empty") String username,
        @NotEmpty(message = "password must not be empty") String password
) {}
