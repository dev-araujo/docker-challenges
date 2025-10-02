# ESTÁGIO 01
FROM golang:alpine AS builder

WORKDIR /app

COPY main.go .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o fullcycle-challenge main.go


# ESTÁGIO 02
FROM scratch

WORKDIR /

COPY --from=builder /app/fullcycle-challenge .

CMD ["/fullcycle-challenge"]