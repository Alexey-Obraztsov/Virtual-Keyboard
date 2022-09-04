const buttonsList = [
  {
    codeName: 'Backquote',
    rus: {
      Low: 'ё',
      Up: 'Ё',
      caps: 'Ё',
      shiftCaps: 'ё'
    },
    eng: {
      Low: '`',
      Up: '~',
      caps: '`',
      shiftCaps: '~'
    }
  },
  {
    codeName: 'Digit1',
    rus: {
      Low: '1',
      Up: '!',
      caps: '1',
      shiftCaps: '!'
    },
    eng: {
      Low: '1',
      Up: '!',
      caps: '1',
      shiftCaps: '!'
    }
  },
  {
    codeName: 'Digit2',
    rus: {
      Low: '2',
      Up: '"',
      caps: '2',
      shiftCaps: '"'
    },
    eng: {
      Low: '2',
      Up: '@',
      caps: '2',
      shiftCaps: '@'
    }
  },
  {
    codeName: 'Digit3',
    rus: {
      Low: '3',
      Up: '№',
      caps: '3',
      shiftCaps: '№'
    },
    eng: {
      Low: '3',
      Up: '#',
      caps: '3',
      shiftCaps: '#'
    }
  },
  {
    codeName: 'Digit4',
    rus: {
      Low: '4',
      Up: ';',
      caps: '4',
      shiftCaps: ';'
    },
    eng: {
      Low: '4',
      Up: '$',
      caps: '4',
      shiftCaps: '$'
    }
  },
  {
    codeName: 'Digit5',
    rus: {
      Low: '5',
      Up: '%',
      caps: '5',
      shiftCaps: '%'
    },
    eng: {
      Low: '5',
      Up: '%',
      caps: '5',
      shiftCaps: '%'
    }
  },
  {
    codeName: 'Digit6',
    rus: {
      Low: '6',
      Up: ':',
      caps: '6',
      shiftCaps: ':'
    },
    eng: {
      Low: '6',
      Up: '^',
      caps: '6',
      shiftCaps: '^'
    }
  },
  {
    codeName: 'Digit7',
    rus: {
      Low: '7',
      Up: '?',
      caps: '7',
      shiftCaps: '?'
    },
    eng: {
      Low: '7',
      Up: '&',
      caps: '7',
      shiftCaps: '&'
    }
  },
  {
    codeName: 'Digit8',
    rus: {
      Low: '8',
      Up: '*',
      caps: '8',
      shiftCaps: '*'
    },
    eng: {
      Low: '8',
      Up: '*',
      caps: '8',
      shiftCaps: '*'
    }
  },
  {
    codeName: 'Digit9',
    rus: {
      Low: '9',
      Up: '(',
      caps: '9',
      shiftCaps: '('
    },
    eng: {
      Low: '9',
      Up: '(',
      caps: '9',
      shiftCaps: '('
    }
  },
  {
    codeName: 'Digit0',
    rus: {
      Low: '0',
      Up: ')',
      caps: '0',
      shiftCaps: ')'
    },
    eng: {
      Low: '0',
      Up: ')',
      caps: '0',
      shiftCaps: ')'
    }
  },
  {
    codeName: 'Minus',
    rus: {
      Low: '-',
      Up: '_',
      caps: '-',
      shiftCaps: '_'
    },
    eng: {
      Low: '-',
      Up: '_',
      caps: '-',
      shiftCaps: '_'
    }
  },
  {
    codeName: 'Equal',
    rus: {
      Low: '=',
      Up: '+',
      caps: '=',
      shiftCaps: '+'
    },
    eng: {
      Low: '=',
      Up: '+',
      caps: '=',
      shiftCaps: '+'
    }
  },
  {
    codeName: 'Backspace',
    rus: {
      Low: 'Backspace',
      Up: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace'
    },
    eng: {
      Low: 'Backspace',
      Up: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace'
    }
  },
  {
    codeName: 'Tab',
    rus: {
      Low: 'Tab',
      Up: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab'
    },
    eng: {
      Low: 'Tab',
      Up: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab'
    }
  },
  {
    codeName: 'KeyQ',
    rus: {
      Low: 'й',
      Up: 'Й',
      caps: 'Й',
      shiftCaps: 'й'
    },
    eng: {
      Low: 'q',
      Up: 'Q',
      caps: 'Q',
      shiftCaps: 'q'
    }
  },
  {
    codeName: 'KeyW',
    rus: {
      Low: 'ц',
      Up: 'Ц',
      caps: 'Ц',
      shiftCaps: 'ц'
    },
    eng: {
      Low: 'w',
      Up: 'W',
      caps: 'W',
      shiftCaps: 'w'
    }
  },
  {
    codeName: 'KeyE',
    rus: {
      Low: 'у',
      Up: 'У',
      caps: 'У',
      shiftCaps: 'у'
    },
    eng: {
      Low: 'e',
      Up: 'E',
      caps: 'E',
      shiftCaps: 'e'
    }
  },
  {
    codeName: 'KeyR',
    rus: {
      Low: 'к',
      Up: 'К',
      caps: 'К',
      shiftCaps: 'к'
    },
    eng: {
      Low: 'r',
      Up: 'R',
      caps: 'R',
      shiftCaps: 'r'
    }
  },
  {
    codeName: 'KeyT',
    rus: {
      Low: 'е',
      Up: 'Е',
      caps: 'Е',
      shiftCaps: 'е'
    },
    eng: {
      Low: 't',
      Up: 'T',
      caps: 'T',
      shiftCaps: 't'
    }
  },
  {
    codeName: 'KeyY',
    rus: {
      Low: 'н',
      Up: 'Н',
      caps: 'Н',
      shiftCaps: 'н'
    },
    eng: {
      Low: 'y',
      Up: 'Y',
      caps: 'Y',
      shiftCaps: 'y'
    }
  },
  {
    codeName: 'KeyU',
    rus: {
      Low: 'г',
      Up: 'Г',
      caps: 'Г',
      shiftCaps: 'г'
    },
    eng: {
      Low: 'u',
      Up: 'U',
      caps: 'U',
      shiftCaps: 'u'
    }
  },
  {
    codeName: 'KeyI',
    rus: {
      Low: 'ш',
      Up: 'Ш',
      caps: 'Ш',
      shiftCaps: 'ш'
    },
    eng: {
      Low: 'i',
      Up: 'I',
      caps: 'I',
      shiftCaps: 'i'
    }
  },
  {
    codeName: 'KeyO',
    rus: {
      Low: 'щ',
      Up: 'Щ',
      caps: 'Щ',
      shiftCaps: 'щ'
    },
    eng: {
      Low: 'o',
      Up: 'O',
      caps: 'O',
      shiftCaps: 'o'
    }
  },
  {
    codeName: 'KeyP',
    rus: {
      Low: 'з',
      Up: 'З',
      caps: 'З',
      shiftCaps: 'з'
    },
    eng: {
      Low: 'p',
      Up: 'P',
      caps: 'P',
      shiftCaps: 'p'
    }
  },
  {
    codeName: 'BracketLeft',
    rus: {
      Low: 'х',
      Up: 'Х',
      caps: 'Х',
      shiftCaps: 'х'
    },
    eng: {
      Low: '[',
      Up: '{',
      caps: '[',
      shiftCaps: '{'
    }
  },
  {
    codeName: 'BracketRight',
    rus: {
      Low: 'ъ',
      Up: 'Ъ',
      caps: 'Ъ',
      shiftCaps: 'ъ'
    },
    eng: {
      Low: ']',
      Up: '}',
      caps: ']',
      shiftCaps: '}'
    }
  },
  {
    codeName: 'Backslash',
    rus: {
      Low: '\\',
      Up: '/',
      caps: '\\',
      shiftCaps: '/'
    },
    eng: {
      Low: '\\',
      Up: '|',
      caps: '\\',
      shiftCaps: '|'
    }
  },
  {
    codeName: 'Delete',
    rus: {
      Low: 'Del',
      Up: 'Del',
      caps: 'Del',
      shiftCaps: 'Del'
    },
    eng: {
      Low: 'Del',
      Up: 'Del',
      caps: 'Del',
      shiftCaps: 'Del'
    }
  },
  {
    codeName: 'CapsLock',
    rus: {
      Low: 'CapsLock',
      Up: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock'
    },
    eng: {
      Low: 'CapsLock',
      Up: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock'
    }
  },
  {
    codeName: 'KeyA',
    rus: {
      Low: 'ф',
      Up: 'Ф',
      caps: 'Ф',
      shiftCaps: 'ф'
    },
    eng: {
      Low: 'a',
      Up: 'A',
      caps: 'A',
      shiftCaps: 'a'
    }
  },
  {
    codeName: 'KeyS',
    rus: {
      Low: 'ы',
      Up: 'Ы',
      caps: 'Ы',
      shiftCaps: 'ы'
    },
    eng: {
      Low: 's',
      Up: 'S',
      caps: 'S',
      shiftCaps: 's'
    }
  },
  {
    codeName: 'KeyD',
    rus: {
      Low: 'в',
      Up: 'В',
      caps: 'В',
      shiftCaps: 'в'
    },
    eng: {
      Low: 'd',
      Up: 'D',
      caps: 'D',
      shiftCaps: 'd'
    }
  },
  {
    codeName: 'KeyF',
    rus: {
      Low: 'а',
      Up: 'А',
      caps: 'А',
      shiftCaps: 'а'
    },
    eng: {
      Low: 'f',
      Up: 'F',
      caps: 'F',
      shiftCaps: 'f'
    }
  },
  {
    codeName: 'KeyG',
    rus: {
      Low: 'п',
      Up: 'П',
      caps: 'П',
      shiftCaps: 'п'
    },
    eng: {
      Low: 'g',
      Up: 'G',
      caps: 'G',
      shiftCaps: 'g'
    }
  },
  {
    codeName: 'KeyH',
    rus: {
      Low: 'р',
      Up: 'Р',
      caps: 'Р',
      shiftCaps: 'р'
    },
    eng: {
      Low: 'h',
      Up: 'H',
      caps: 'H',
      shiftCaps: 'h'
    }
  },
  {
    codeName: 'KeyJ',
    rus: {
      Low: 'о',
      Up: 'О',
      caps: 'О',
      shiftCaps: 'о'
    },
    eng: {
      Low: 'j',
      Up: 'J',
      caps: 'J',
      shiftCaps: 'j'
    }
  },
  {
    codeName: 'KeyK',
    rus: {
      Low: 'л',
      Up: 'Л',
      caps: 'Л',
      shiftCaps: 'л'
    },
    eng: {
      Low: 'k',
      Up: 'K',
      caps: 'K',
      shiftCaps: 'k'
    }
  },
  {
    codeName: 'KeyL',
    rus: {
      Low: 'д',
      Up: 'Д',
      caps: 'Д',
      shiftCaps: 'д'
    },
    eng: {
      Low: 'l',
      Up: 'L',
      caps: 'L',
      shiftCaps: 'l'
    }
  },
  {
    codeName: 'Semicolon',
    rus: {
      Low: 'ж',
      Up: 'Ж',
      caps: 'Ж',
      shiftCaps: 'ж'
    },
    eng: {
      Low: ';',
      Up: ':',
      caps: ';',
      shiftCaps: ':'
    }
  },
  {
    codeName: 'Quote',
    rus: {
      Low: 'э',
      Up: 'Э',
      caps: 'Э',
      shiftCaps: 'э'
    },
    eng: {
      Low: '\'',
      Up: '"',
      caps: '\'',
      shiftCaps: '"'
    }
  },
  {
    codeName: 'Enter',
    rus: {
      Low: 'Enter',
      Up: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter'
    },
    eng: {
      Low: 'Enter',
      Up: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter'
    }
  },
  {
    codeName: 'ShiftLeft',
    rus: {
      Low: 'Shift',
      Up: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift'
    },
    eng: {
      Low: 'Shift',
      Up: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift'
    }
  },
  {
    codeName: 'KeyZ',
    rus: {
      Low: 'я',
      Up: 'Я',
      caps: 'Я',
      shiftCaps: 'я'
    },
    eng: {
      Low: 'z',
      Up: 'Z',
      caps: 'Z',
      shiftCaps: 'z'
    }
  },
  {
    codeName: 'KeyX',
    rus: {
      Low: 'ч',
      Up: 'Ч',
      caps: 'Ч',
      shiftCaps: 'ч'
    },
    eng: {
      Low: 'x',
      Up: 'X',
      caps: 'X',
      shiftCaps: 'x'
    }
  },
  {
    codeName: 'KeyC',
    rus: {
      Low: 'с',
      Up: 'С',
      caps: 'С',
      shiftCaps: 'с'
    },
    eng: {
      Low: 'c',
      Up: 'C',
      caps: 'C',
      shiftCaps: 'c'
    }
  },
  {
    codeName: 'KeyV',
    rus: {
      Low: 'м',
      Up: 'М',
      caps: 'М',
      shiftCaps: 'м'
    },
    eng: {
      Low: 'v',
      Up: 'V',
      caps: 'V',
      shiftCaps: 'v'
    }
  },
  {
    codeName: 'KeyB',
    rus: {
      Low: 'и',
      Up: 'И',
      caps: 'И',
      shiftCaps: 'и'
    },
    eng: {
      Low: 'b',
      Up: 'B',
      caps: 'B',
      shiftCaps: 'b'
    }
  },
  {
    codeName: 'KeyN',
    rus: {
      Low: 'т',
      Up: 'Т',
      caps: 'Т',
      shiftCaps: 'т'
    },
    eng: {
      Low: 'n',
      Up: 'N',
      caps: 'N',
      shiftCaps: 'n'
    }
  },
  {
    codeName: 'KeyM',
    rus: {
      Low: 'ь',
      Up: 'Ь',
      caps: 'Ь',
      shiftCaps: 'ь'
    },
    eng: {
      Low: 'm',
      Up: 'M',
      caps: 'M',
      shiftCaps: 'm'
    }
  },
  {
    codeName: 'Comma',
    rus: {
      Low: 'б',
      Up: 'Б',
      caps: 'Б',
      shiftCaps: 'б'
    },
    eng: {
      Low: ',',
      Up: '<',
      caps: ',',
      shiftCaps: '<'
    }
  },
  {
    codeName: 'Period',
    rus: {
      Low: 'ю',
      Up: 'Ю',
      caps: 'Ю',
      shiftCaps: 'ю'
    },
    eng: {
      Low: '.',
      Up: '>',
      caps: '.',
      shiftCaps: '>'
    }
  },
  {
    codeName: 'Slash',
    rus: {
      Low: '.',
      Up: ',',
      caps: '.',
      shiftCaps: ','
    },
    eng: {
      Low: '/',
      Up: '?',
      caps: '/',
      shiftCaps: '?'
    }
  },
  {
    codeName: 'ArrowUp',
    rus: {
      Low: '↑',
      Up: '↑',
      caps: '↑',
      shiftCaps: '↑'
    },
    eng: {
      Low: '↑',
      Up: '↑',
      caps: '↑',
      shiftCaps: '↑'
    }
  },
  {
    codeName: 'ShiftRight',
    rus: {
      Low: 'Shift',
      Up: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift'
    },
    eng: {
      Low: 'Shift',
      Up: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift'
    }
  },
  {
    codeName: 'ControlLeft',
    rus: {
      Low: 'Ctrl',
      Up: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl'
    },
    eng: {
      Low: 'Ctrl',
      Up: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl'
    }
  },
  {
    codeName: 'MetaLeft',
    rus: {
      Low: 'Win',
      Up: 'Win',
      caps: 'Win',
      shiftCaps: 'Win'
    },
    eng: {
      Low: 'Win',
      Up: 'Win',
      caps: 'Win',
      shiftCaps: 'Win'
    }
  },
  {
    codeName: 'AltLeft',
    rus: {
      Low: 'Alt',
      Up: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt'
    },
    eng: {
      Low: 'Alt',
      Up: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt'
    }
  },
  {
    codeName: 'Space',
    rus: {
      Low: ' ',
      Up: ' ',
      caps: ' ',
      shiftCaps: ' '
    },
    eng: {
      Low: ' ',
      Up: ' ',
      caps: ' ',
      shiftCaps: ' '
    }
  },
  {
    codeName: 'AltRight',
    rus: {
      Low: 'Alt',
      Up: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt'
    },
    eng: {
      Low: 'Alt',
      Up: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt'
    }
  },
  {
    codeName: 'ArrowLeft',
    rus: {
      Low: '←',
      Up: '←',
      caps: '←',
      shiftCaps: '←'
    },
    eng: {
      Low: '←',
      Up: '←',
      caps: '←',
      shiftCaps: '←'
    }
  },
  {
    codeName: 'ArrowDown',
    rus: {
      Low: '↓',
      Up: '↓',
      caps: '↓',
      shiftCaps: '↓'
    },
    eng: {
      Low: '↓',
      Up: '↓',
      caps: '↓',
      shiftCaps: '↓'
    }
  },
  {
    codeName: 'ArrowRight',
    rus: {
      Low: '→',
      Up: '→',
      caps: '→',
      shiftCaps: '→'
    },
    eng: {
      Low: '→',
      Up: '→',
      caps: '→',
      shiftCaps: '→'
    }
  },
  {
    codeName: 'ControlRight',
    rus: {
      Low: 'Ctrl',
      Up: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl'
    },
    eng: {
      Low: 'Ctrl',
      Up: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl'
    }
  }
]

export default buttonsList
