@ECHO OFF
set GOARCH=amd64
go env -w GOARCH=amd64
set GOOS=linux
go env -w GOOS=linux
tailwindcss -i tailwind.css -o ./static/scripts/css/tailwind.min.css --minify
go build .