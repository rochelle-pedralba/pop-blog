package com.ciel.blog.user;

import org.springframework.stereotype.Service;

@Service
public class SignupMapper {

    public User toUser(SignupDto dto) {
        if (dto == null) {
            throw new NullPointerException("The user dto should not be null");
        } else {
            User user = new User();
            user.setEmail(dto.email());
            user.setUsername(dto.username());
            user.setPassword(dto.password());
            return user;
        }
    }

    public SignupResponseDto toSignupResponseDto(User user) {
        return new SignupResponseDto(user.getEmail(), user.getUsername());
    }
}
