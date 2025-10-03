package com.ciel.blog.like;

import java.time.LocalDateTime;

public record LikeResponseDto(
        Boolean liked,
        LocalDateTime createdAt,
        Long postId,
        Long userId
) {
}
