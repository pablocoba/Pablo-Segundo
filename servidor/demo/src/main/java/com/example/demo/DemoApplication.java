package com.example.demo;

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
            @RequestHeader(value = "Accept-Language") String acceptLanguage) {
                String[] idiomas = acceptLanguage.split(",");
                switch(idiomas[0]){
                    case "en-US":
                        return String.format("Hello %s! Your language is: %s", name, idiomas[0]);
                    case "es-ES":
                        return String.format("Hola %s! Tu lenguaje del navegador es: %s", name, idiomas[0]);
                    case "ja":
                        return String.format("こんにちは、 %sさん！ %sさんの語学は:　日本語", name, name);
                }
                return String.format("Hello %s! Your language is: %s", name, idiomas[0]);

    }
}
