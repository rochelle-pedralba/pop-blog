package com.ciel.blog.post;

import java.time.LocalDateTime;

public record PostResponseDto(
        String author,
        String title,
        String content,
        LocalDateTime createdAt
) {}
