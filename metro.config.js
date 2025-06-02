// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// // /**
// //  * Metro configuration
// //  * https://reactnative.dev/docs/metro
// //  *
// //  * @type {import('@react-native/metro-config').MetroConfig}
// //  */
// // const config = {};

// // module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// //const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts },
//   } = await getDefaultConfig();

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
//     },
//     resolver: {
//       sourceExts: [...sourceExts, 'cjs'],
//     },
//   };
// })();
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return mergeConfig(defaultConfig, {
    transformer: {
      babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    },
    resolver: {
      sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'flow'],
    },
  });
})();
