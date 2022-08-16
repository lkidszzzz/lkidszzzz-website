@ECHO OFF
go env -w GOARCH=amd64
go env -w GOOS=windows
tailwindcss -i tailwind.css -o ./static/scripts/css/tailwind.min.css --minify
go build .