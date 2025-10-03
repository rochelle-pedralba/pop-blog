package com.ciel.blog.comment;

import jakarta.validation.constraints.NotEmpty;

public record CommentDto(
        @NotEmpty(message = "content must not be empty") String comment
) {
}
