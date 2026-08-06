import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CoreDots = ({ radius, color, opacityMultiplier }: { radius: number, color: THREE.Color, opacityMultiplier: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const dotTexture = useMemo(() => {
    const dotCanvas = document.createElement('canvas');
    dotCanvas.width = 128; 
    dotCanvas.height = 128;
    const dotCtx = dotCanvas.getContext('2d');
    if (dotCtx) {
      const gradient = dotCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1.0, 'rgba(255, 255, 255, 0)');
      dotCtx.fillStyle = gradient;
      dotCtx.beginPath();
      dotCtx.arc(64, 64, 64, 0, Math.PI * 2);
      dotCtx.fill();
    }
    return new THREE.CanvasTexture(dotCanvas);
  }, []);

  const dotsGeometry = useMemo(() => {
    const dotCount = 1300;
    const dotPositions = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const dotRadius = radius * 1.008;
    for (let i = 0; i < dotCount; i++) {
      const y = 1 - (i / (dotCount - 1)) * 2;
      const horizontalRadius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      dotPositions.push(Math.cos(theta) * horizontalRadius * dotRadius, y * dotRadius, Math.sin(theta) * horizontalRadius * dotRadius);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    return geom;
  }, [radius]);

  useFrame(() => {
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.color.copy(color);
      mat.opacity = 0.95 * opacityMultiplier;
    }
  });

  return (
    <points ref={pointsRef} geometry={dotsGeometry}>
      <pointsMaterial 
        size={0.045 * (radius / 2)} 
        map={dotTexture} 
        transparent={true} 
        opacity={0.95 * opacityMultiplier} 
        alphaTest={0.015} 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
        color={color}
      />
    </points>
  );
};
