package com.ciel.blog.userprofile;

public record UserProfileResponseDto(
        Long userId,
        String bio,
        String firstName,
        String lastName
) {
}
