package com.ciel.blog.post;

import jakarta.validation.constraints.NotEmpty;

public record PostDto (
        @NotEmpty(message = "title must not be empty") String title,
        @NotEmpty(message = "content must not be empty") String content
) {}
