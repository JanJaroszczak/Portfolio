export const headerBackgroundOptions = {
  fpsLimit: 60,
  backgroundMode: {
    enable: false,
    zIndex: 0,
  },
  particles: {
    links: {
      distance: 100,
    },
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: '#fff',
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: 'circle',
      options: {
        polygon: {
          sides: 5,
        },
        image: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
      },
    },
    stroke: {
      width: 0,
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
        speed: 0.1,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
  pauseOnBlur: false,
  background: {
    color: '#2E2A2A',
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
};
