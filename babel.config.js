module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  ignore: [
    /\.spec\.(j|t)s?(x)/,
    /\.spec\.d\.(j|t)s?(x)/
  ]
};
