package com.ciel.blog.comment;

import java.time.LocalDateTime;

public record CommentResponseDto(
        String author,
        String content,
        LocalDateTime createdAt,
        Long postId
) {
}
