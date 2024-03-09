import { type ISourceOptions } from '@tsparticles/engine'

export const getParticlesOption = (color: '#FFFFFF' | '#2F3850' | '#409EFF'): ISourceOptions => {
  return {
    autoPlay: true,
    fullScreen: {
      enable: true,
      zIndex: -1
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
        }
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
        value: color
      },
      links: {
        color: color,
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
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true
        },
        value: 50
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
  }
}
