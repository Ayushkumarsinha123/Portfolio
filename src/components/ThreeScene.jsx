import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Main component for the Three.js scene
const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const container = mountRef.current;
    let isUp = false;
    const mouse = { x: { current: 0 }, y: { current: 0 }, x_calc: 0, y_calc: 0 };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 1, 2000);
    camera.position.set(0, 400, 1200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(200, 200, 200);
    scene.add(hemiLight, dirLight);

    // Character Model
    const character = new Character();
    scene.add(character.threegroup);

    // --- Character Class (Jonggun Park inspired) ---
    function Character() {
        this.threegroup = new THREE.Group();

        // Materials
        this.skinMat = new THREE.MeshLambertMaterial({ color: "#e0bea5" });
        this.hairMat = new THREE.MeshLambertMaterial({ color: "#1c1c1c" });
        this.shirtMat = new THREE.MeshLambertMaterial({ color: "#ffffff" });
        this.suitMat = new THREE.MeshLambertMaterial({ color: "#2d3748" });
        this.shoesMat = new THREE.MeshLambertMaterial({ color: "#1a1a1a" });
        this.eyeMat = new THREE.MeshLambertMaterial({ color: "#2c3e50" });

        // Head
        const headGeom = new THREE.BoxGeometry(150, 180, 150);
        this.head = new THREE.Mesh(headGeom, this.skinMat);
        this.head.position.y = 250;
        
        // Hair
        const hairGeom = new THREE.BoxGeometry(155, 60, 155);
        this.hair = new THREE.Mesh(hairGeom, this.hairMat);
        this.hair.position.y = 80;
        this.head.add(this.hair);

        // Eyes
        const eyeGeom = new THREE.BoxGeometry(35, 10, 5);
        this.leftEye = new THREE.Mesh(eyeGeom, this.eyeMat);
        this.leftEye.position.set(-40, 10, 76);
        this.rightEye = new THREE.Mesh(eyeGeom, this.eyeMat);
        this.rightEye.position.set(40, 10, 76);
        this.head.add(this.leftEye, this.rightEye);

        // Body (Jacket)
        const bodyGeom = new THREE.BoxGeometry(180, 260, 100);
        this.body = new THREE.Mesh(bodyGeom, this.suitMat);
        this.body.position.y = 30;

        // Shirt visible part
        const shirtFrontGeom = new THREE.BoxGeometry(80, 100, 10);
        this.shirtFront = new THREE.Mesh(shirtFrontGeom, this.shirtMat);
        this.shirtFront.position.set(0, 80, 50);
        this.body.add(this.shirtFront);
        
        // Tie
        const tieGeom = new THREE.BoxGeometry(20, 80, 10);
        this.tie = new THREE.Mesh(tieGeom, this.suitMat);
        this.tie.position.set(0, 70, 52);
        this.body.add(this.tie);

        // Arms
        const armGeom = new THREE.BoxGeometry(45, 250, 50);
        this.leftArm = new THREE.Mesh(armGeom, this.suitMat);
        this.leftArm.position.set(-112, -10, 0);
        this.rightArm = new THREE.Mesh(armGeom, this.suitMat);
        this.rightArm.position.set(112, -10, 0);
        this.body.add(this.leftArm, this.rightArm);

        // Legs
        const legGeom = new THREE.BoxGeometry(60, 280, 60);
        this.leftLeg = new THREE.Mesh(legGeom, this.suitMat);
        this.leftLeg.position.set(-45, -270, 0);
        this.rightLeg = new THREE.Mesh(legGeom, this.suitMat);
        this.rightLeg.position.set(45, -270, 0);

        // Shoes
        const shoeGeom = new THREE.BoxGeometry(65, 30, 80);
        this.leftShoe = new THREE.Mesh(shoeGeom, this.shoesMat);
        this.leftShoe.position.y = -155;
        this.leftShoe.position.z = 10;
        this.rightShoe = new THREE.Mesh(shoeGeom, this.shoesMat);
        this.rightShoe.position.y = -155;
        this.rightShoe.position.z = 10;
        this.leftLeg.add(this.leftShoe);
        this.rightLeg.add(this.rightShoe);

        this.threegroup.add(this.head, this.body, this.leftLeg, this.rightLeg);

        // Update method for animation
        this.update = function() {
            const headRY = calc(mouse.x_calc, -window.innerWidth / 2, window.innerWidth / 2, -Math.PI / 12, Math.PI / 12);
            const headRX = calc(mouse.y_calc, -window.innerHeight / 2, window.innerHeight / 2, -Math.PI / 12, Math.PI / 12);
            const bodyRY = calc(mouse.x_calc, -window.innerWidth / 2, window.innerWidth / 2, -Math.PI / 60, Math.PI / 60);

            this.head.rotation.y += (headRY - this.head.rotation.y) / 10;
            this.head.rotation.x += (headRX - this.head.rotation.x) / 10;
            this.body.rotation.y += (bodyRY - this.body.rotation.y) / 10;

            // Transform pose on mousedown
            if (isUp) { 
                // Hand in pocket pose
                this.rightArm.rotation.z = -Math.PI / 8;
                this.rightArm.rotation.x = Math.PI / 4;
                this.rightArm.position.x = 90;
            } else {
                this.rightArm.rotation.z = 0;
                this.rightArm.rotation.x = 0;
                this.rightArm.position.x = 112;
            }
        }
    }

    function calc(v, vmin, vmax, tmin, tmax) {
        const nv = Math.max(Math.min(v, vmax), vmin);
        const dv = vmax - vmin;
        const pc = (nv - vmin) / dv;
        const dt = tmax - tmin;
        return tmin + (pc * dt);
    }

    // Event Listeners
    const handleMouseMove = (e) => {
        mouse.x.current = e.clientX;
        mouse.y.current = e.clientY;
        mouse.x_calc = mouse.x.current - (window.innerWidth / 2);
        mouse.y_calc = mouse.y.current - (window.innerHeight / 2);
    };

    const handleMouseDown = () => { isUp = true; };
    const handleMouseUp = () => { isUp = false; };
    
    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };

    // Attach listeners to the window object for global tracking
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        character.update();
        renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        try {
            container.removeChild(renderer.domElement);
        } catch (e) {
            // ignore error if element is already removed
        }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '80vh', cursor: 'grab' }} />;
};

export default ThreeScene;
