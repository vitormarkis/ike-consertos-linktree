export const bandeirasTitleAnimation = {
  init: {
    bottom: -5,
    opacity: 0,
  },
  final: {
    bottom: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const bandeirasWordAnimation = {
  init: {
    left: -10,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  final: {
    left: -10,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const buttonsDivAnimation = {
  init: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.4,
    },
  },
}

export const buttonsAnimation = {
  init: {
    scale: 0.935,
  },
  final: {
    scale: 1,
    transition: {
      duration: 0.7,
      type: "tween",
      stiffness: 200,
      mass: 1200,
    },
  },
}

export const fromSidesAnimation = (from: "left" | "right") => {
  const side = from === "left" ? -1 : 1

  return {
    init: {
      left: 14 * side,
      opacity: 0,
    },
    final: {
      left: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  }
}

export const fromBottomSoft = {
  init: {
    opacity: 0,
    bottom: -15
  }, final: {
    opacity: 1,
    bottom: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
    }
  }
}
