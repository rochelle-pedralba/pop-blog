package com.ciel.blog.user;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserApiController {
    private final UserService  userService;

    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping({"/auth/signup"})
    public SignupResponseDto signup(@RequestBody @Valid SignupDto dto) {
        return userService.createUser(dto);
    }

    @PostMapping({"/auth/login"})
    public ResponseEntity<LoginResponseDto> login(@RequestBody @Valid LoginDto dto, HttpServletResponse response) {
        String token = userService.generateUserToken(dto);

        Cookie cookie = new Cookie("token", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        return ResponseEntity.ok(new LoginResponseDto(dto.username(), "Login Successful"));
    }

    @GetMapping({"/auth/check"})
    public ResponseEntity<Map<String, Boolean>> checkAuth(@CookieValue(name = "token", required = false) String token) {
        Map<String, Boolean> response = new HashMap<>();
        response.put("Authenticated", userService.authenticateUser(token));
        return ResponseEntity.ok(response);
    }

    @GetMapping({"/auth/me"})
    public ResponseEntity<?> getUserInfo(@CookieValue(name = "token", required = false) String token) {
        User user =  userService.getCurrentUser(token);
        return ResponseEntity.ok(
                Map.of(
                        "id", user.getId(),
                        "email", user.getEmail(),
                        "username", user.getUsername()
                )
        );
    }
}