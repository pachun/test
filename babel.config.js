module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
