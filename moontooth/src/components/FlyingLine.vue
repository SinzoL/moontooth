<script setup>
const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};
</script>


<template>
  <div id="app">
    <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="{
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
          },
          value: 100
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }" />
  </div>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* 将粒子特效放在背景层 */
  pointer-events: none; /* 禁用粒子特效的交互 */
}
</style>
