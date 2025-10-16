"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function FloatingNodesBackground({
  nodeCount = 80,
  maxLinkDistance = 200,
  minNodeRadius = 1.0,
  maxNodeRadius = 6.0,
  nodeColor = null,
  linkColor = null,
  backgroundColor = null,
  speedMultiplier = 2.5,
  bounce = true,
}) {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const nodesRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  // Theme-aware colors
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Theme-aware background color
  const finalBackgroundColor =
    backgroundColor !== null
      ? backgroundColor
      : isDark
      ? "rgba(0,0,0,1)"
      : "transparent";

  // Color palette based on offering gradients
  const colorPalette = [
    // QuadCaffe: Green to Yellow
    { center: "#1e8a5c", edge: "#ffde33" },
    // Energylicious: Red to Blue
    { center: "#cc2323", edge: "#1a5fb3" },
    // FolioWiz: Dark Green to Light Green
    { center: "#003300", edge: "#a6ff8a" },
    // NIshtAI Labs: Gray to Teal
    { center: "#6b7280", edge: "#14b8a6" },
    // Additional combinations
    { center: "#ffde33", edge: "#1e8a5c" },
    { center: "#1a5fb3", edge: "#cc2323" },
    { center: "#a6ff8a", edge: "#003300" },
    { center: "#14b8a6", edge: "#6b7280" },
  ];

  const finalLinkColor =
    linkColor || (isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)");

  // Initialize or re-init canvas + nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function setSize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = Math.max(300, canvas.clientWidth);
      const h = Math.max(300, canvas.clientHeight);
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Create nodes
    function initNodes() {
      nodesRef.current = Array.from({ length: nodeCount }).map(() => {
        const randVal = Math.random();
        let nodeRadius;

        // Create size distribution: 60% small, 30% medium, 10% large
        if (randVal < 0.6) {
          nodeRadius = rand(minNodeRadius, minNodeRadius + 1.5);
        } else if (randVal < 0.9) {
          nodeRadius = rand(minNodeRadius + 1.5, maxNodeRadius - 1.5);
        } else {
          nodeRadius = rand(maxNodeRadius - 1.5, maxNodeRadius);
        }

        // Assign gradient colors from palette
        const colorIndex = Math.floor(Math.random() * colorPalette.length);
        const colors = colorPalette[colorIndex];

        return {
          x: rand(0, sizeRef.current.w),
          y: rand(0, sizeRef.current.h),
          vx: rand(-1.2, 1.2) * speedMultiplier,
          vy: rand(-1.2, 1.2) * speedMultiplier,
          r: nodeRadius,
          // Add some nodes with different movement patterns
          movementType: Math.random() > 0.7 ? "chaotic" : "smooth",
          chaosFactor: Math.random() * 0.5 + 0.1,
          // Gradient colors
          centerColor: colors.center,
          edgeColor: colors.edge,
        };
      });
    }

    setSize();
    initNodes();

    let lastT = performance.now();

    function step(t) {
      const dt = Math.min(40, t - lastT) / 16.6667; // normalized to ~60fps
      lastT = t;
      update(dt);
      draw();
      rafRef.current = requestAnimationFrame(step);
    }

    function update(dt) {
      const { w, h } = sizeRef.current;
      for (let i = 0; i < nodesRef.current.length; i++) {
        const n = nodesRef.current[i];
        n.x += n.vx * dt;
        n.y += n.vy * dt;

        // Add chaotic movement for some nodes
        if (n.movementType === "chaotic") {
          n.vx += (Math.random() - 0.5) * n.chaosFactor * dt;
          n.vy += (Math.random() - 0.5) * n.chaosFactor * dt;
        }

        // gentle damping (less damping for more movement)
        n.vx *= 0.995;
        n.vy *= 0.995;

        // boundary handling
        if (bounce) {
          if (n.x <= 0 + n.r) {
            n.x = n.r;
            n.vx = Math.abs(n.vx);
          }
          if (n.x >= w - n.r) {
            n.x = w - n.r;
            n.vx = -Math.abs(n.vx);
          }
          if (n.y <= 0 + n.r) {
            n.y = n.r;
            n.vy = Math.abs(n.vy);
          }
          if (n.y >= h - n.r) {
            n.y = h - n.r;
            n.vy = -Math.abs(n.vy);
          }
        } else {
          // wrap-around
          if (n.x < -50) n.x = w + 50;
          if (n.x > w + 50) n.x = -50;
          if (n.y < -50) n.y = h + 50;
          if (n.y > h + 50) n.y = -50;
        }
      }

      // simple repulsion so nodes don't clump too much
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;
          const minDist = (a.r + b.r) * 1.4;
          if (dist < minDist) {
            const overlap = ((minDist - dist) / dist) * 0.5;
            const ox = dx * overlap;
            const oy = dy * overlap;
            a.x -= ox;
            a.y -= oy;
            b.x += ox;
            b.y += oy;
            // adjust velocities slightly
            a.vx -= ox * 0.02;
            a.vy -= oy * 0.02;
            b.vx += ox * 0.02;
            b.vy += oy * 0.02;
          }
        }
      }
    }

    function draw() {
      const { w, h } = sizeRef.current;
      const isDarkMode = isDark; // Capture current theme state
      ctx.clearRect(0, 0, w, h);

      if (finalBackgroundColor && finalBackgroundColor !== "transparent") {
        ctx.fillStyle = finalBackgroundColor;
        ctx.fillRect(0, 0, w, h);
      }

      // draw links
      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist2 = dx * dx + dy * dy;
          const maxD2 = maxLinkDistance * maxLinkDistance;
          if (dist2 <= maxD2) {
            const alpha = 1 - dist2 / maxD2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            // soften link opacity and width by distance
            ctx.strokeStyle = finalLinkColor;
            ctx.globalAlpha = alpha * 0.9;
            ctx.lineWidth = Math.max(1.0, 2.5 * alpha);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // draw nodes on top with gradients
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Create radial gradient for each node
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        gradient.addColorStop(0, n.centerColor + (isDarkMode ? "80" : "CC")); // Center color with alpha
        gradient.addColorStop(1, n.edgeColor + (isDarkMode ? "40" : "66")); // Edge color with alpha

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    rafRef.current = requestAnimationFrame(step);

    function handleResize() {
      setSize();
      // keep nodes inside after resize
      const { w, h } = sizeRef.current;
      for (const n of nodesRef.current) {
        n.x = Math.max(n.r, Math.min(w - n.r, n.x));
        n.y = Math.max(n.r, Math.min(h - n.r, n.y));
      }
    }

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);
    window.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else rafRef.current = requestAnimationFrame(step);
    });

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    nodeCount,
    maxLinkDistance,
    minNodeRadius,
    maxNodeRadius,
    speedMultiplier,
    bounce,
    finalLinkColor,
    finalBackgroundColor,
    theme,
  ]);

  // wrapper div is absolute, full-area, pointer-events-none so it won't intercept clicks
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
        aria-hidden="true"
      />
    </div>
  );
}
