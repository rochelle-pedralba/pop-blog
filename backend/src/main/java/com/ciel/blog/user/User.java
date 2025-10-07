package com.ciel.blog.user;

import com.ciel.blog.comment.Comment;
import com.ciel.blog.like.Like;
import com.ciel.blog.post.Post;
import com.ciel.blog.userprofile.UserProfile;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @CreatedDate
    @Column(name = "created_at",  nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(nullable = false, updatable = false, columnDefinition = "boolean default false")
    private final Boolean admin = false;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private UserProfile userProfile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,  orphanRemoval = true, fetch = FetchType.LAZY)
    private final List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user",  cascade = CascadeType.ALL,  orphanRemoval = true, fetch = FetchType.LAZY)
    private final List<Like> likes = new ArrayList<>();

    @OneToMany(mappedBy = "user",  cascade = CascadeType.ALL,  orphanRemoval = true, fetch = FetchType.LAZY)
    private final List<Comment> comments =  new ArrayList<>();

    public User() {
    }

    public User(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public List<Like> getLikes() {
        return likes;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
