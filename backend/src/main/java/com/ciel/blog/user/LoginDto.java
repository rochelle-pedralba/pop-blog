package com.ciel.blog.user;

import jakarta.validation.constraints.NotEmpty;

public record LoginDto(
        @NotEmpty(message = "username must not be empty") String username,
        @NotEmpty(message = "password must not be empty") String password
) {}
