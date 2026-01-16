"use client";

import React, { useEffect, useRef } from "react";

const CircuitBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const gridSize = 40;
        const pathWidth = 1;

        // Circuit "packets"
        class Packet {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;

            constructor() {
                this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
                this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;

                // Move either Horizontal or Vertical
                if (Math.random() > 0.5) {
                    this.vx = (Math.random() > 0.5 ? 2 : -2); // Speed
                    this.vy = 0;
                } else {
                    this.vx = 0;
                    this.vy = (Math.random() > 0.5 ? 2 : -2);
                }

                this.life = Math.random() * 100 + 50;
            }

            update(ctx: CanvasRenderingContext2D) {
                this.x += this.vx;
                this.y += this.vy;
                this.life--;

                // Change direction randomly
                if (this.life > 0 && Math.random() > 0.98 && this.x % gridSize === 0 && this.y % gridSize === 0) {
                    if (this.vx !== 0) {
                        this.vx = 0;
                        this.vy = (Math.random() > 0.5 ? 2 : -2);
                    } else {
                        this.vy = 0;
                        this.vx = (Math.random() > 0.5 ? 2 : -2);
                    }
                }

                // Draw head
                ctx.fillStyle = "#4ade80"; // Bright Green
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw trail (simple)
                ctx.fillStyle = "rgba(74, 222, 128, 0.2)";
                ctx.fillRect(this.x - (this.vx * 4), this.y - (this.vy * 4), this.vx * 5 || 2, this.vy * 5 || 2);
            }
        }

        let packets: Packet[] = [];
        const maxPackets = 15;

        const drawGrid = () => {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 1;

            // Draw grid
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            drawGrid();

            if (packets.length < maxPackets && Math.random() > 0.95) {
                packets.push(new Packet());
            }

            packets.forEach((p, index) => {
                p.update(ctx);
                if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
                    packets.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};

export default CircuitBackground;
