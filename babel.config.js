module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@types": "./src/types",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
