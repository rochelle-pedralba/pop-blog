package com.ciel.blog.user;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class UserApiController {
    private final UserService  userService;

    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping({"/signup"})
    public SignupResponseDto signup(@RequestBody @Valid SignupDto dto) {
        return userService.createUser(dto);
    }

    @PostMapping({"/login"})
    public ResponseEntity<LoginResponseDto> login(@RequestBody @Valid LoginDto dto, HttpServletResponse response) {
        String token = userService.authenticateUser(dto);

        Cookie cookie = new Cookie("token", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        return ResponseEntity.ok(new LoginResponseDto(dto.username(), "Login Successful"));
    }
}