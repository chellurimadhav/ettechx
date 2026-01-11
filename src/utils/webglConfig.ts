import * as THREE from 'three';

/**
 * Configure WebGL renderer to suppress warnings and improve compatibility
 */
export function configureWebGLRenderer(gl: THREE.WebGLRenderer): void {
  try {
    // Get the WebGL context
    const context = gl.getContext();
    if (context && typeof context.getExtension === 'function') {
      // Suppress WEBGL_lose_context extension warning
      const originalGetExtension = context.getExtension.bind(context);
      context.getExtension = function(name: string) {
        if (name === 'WEBGL_lose_context') {
          return null;
        }
        return originalGetExtension(name);
      };
    }
  } catch (error) {
    // Silently fail if context access fails
    console.debug('WebGL context configuration skipped:', error);
  }

  // Set renderer settings for maximum quality and visibility
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFSoftShadowMap;
  
  // Enhanced rendering quality
  gl.antialias = true;
  gl.powerPreference = "high-performance";
  
  // Better tone mapping for visibility
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.3;
  gl.outputEncoding = THREE.sRGBEncoding;
  
  // Better color space
  gl.sortObjects = true;
}

/**
 * Default Canvas GL props for consistent WebGL configuration
 */
export const defaultCanvasGLProps = {
  antialias: true,
  alpha: false,
  powerPreference: "high-performance" as WebGLPowerPreference,
  stencil: false,
  depth: true,
  logarithmicDepthBuffer: false,
};
