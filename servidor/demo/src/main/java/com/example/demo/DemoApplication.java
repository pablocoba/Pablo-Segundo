package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {
    public static void main(String[] args) {
    	SpringApplication.run(DemoApplication.class, args);
    }
    @GetMapping("/hello")
    public String hello(
 
            @RequestParam(value = "name", defaultValue = "World") String name,
            @RequestHeader(value = "Accept-Language", defaultValue = "en-US") String acceptLanguage) {
                for(String language : acceptLanguage.split(",")){
                    switch(language.split(";")[0].trim()){
                        case "en-US":
                            return String.format("Hello %s! Your language is: %s", name, language.substring(0,2));
                        case "es-ES":
                            return String.format("Hola %s! Tu lenguaje del navegador es: %s", name, language.substring(0,2));
                        case "ja":
                            return String.format("こんにちは、%sさん！ %sさんの語学は: %s", name, name, language.substring(0,2));
                    }
                }

                return String.format("Hello %s! Your prefered languages are not supported. :(", name);
    
    }
}
