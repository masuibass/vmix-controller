package main

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	EnvLoad()
	CONTROLLER_URL := os.Getenv("CONTROLLER_URL")
	LOCAL_CONTROLLER_URL := os.Getenv("LOCAL_CONTROLLER_URL")

	r := gin.Default()

	// CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:  []string{CONTROLLER_URL, LOCAL_CONTROLLER_URL},
		AllowMethods:  []string{"GET"},
		AllowHeaders:  []string{"Origin"},
		ExposeHeaders: []string{"Content-Length"},
	}))

	r.GET("/", handler)
	r.Run()
}

func handler(c *gin.Context) {
	url := c.Query("url")
	body, err := getVMix(url)
	if err != nil {
		c.JSON(400, err)
	}
	c.String(200, body)
}

func getVMix(url string) (string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)
	return string(body), nil
}

func EnvLoad() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}
}
