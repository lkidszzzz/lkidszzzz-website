package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.Static("/static", "./static/")
	r.LoadHTMLFiles("./templates/index.html")
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "lkidszzzz的个人主页",
		})
	})
	err := r.Run(":23333")
	if err != nil {
		panic(err)
	}
}
