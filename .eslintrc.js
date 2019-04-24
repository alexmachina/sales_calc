module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "mocha": true,
  },
  'plugins': ['mocha'],
  
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'mocha/no-exclusive-tests': 'error'
  }
}
