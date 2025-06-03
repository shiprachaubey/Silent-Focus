// // const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// // // /**
// // //  * Metro configuration
// // //  * https://reactnative.dev/docs/metro
// // //  *
// // //  * @type {import('@react-native/metro-config').MetroConfig}
// // //  */
// // // const config = {};

// // // module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// // //const { getDefaultConfig } = require('metro-config');

// // module.exports = (async () => {
// //   const {
// //     resolver: { sourceExts },
// //   } = await getDefaultConfig();

// //   return {
// //     transformer: {
// //       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
// //     },
// //     resolver: {
// //       sourceExts: [...sourceExts, 'cjs'],
// //     },
// //   };
// // })();
// // const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// // module.exports = (async () => {
// //   const defaultConfig = await getDefaultConfig(__dirname);

// //   return mergeConfig(defaultConfig, {
// //     transformer: {
// //       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
// //     },
// //     resolver: {
// //       sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'flow',  'ts', 'tsx', 'js', 'jsx'],
// //     },
// //     watcher: {
// //       usePolling: false,
// //       forceNodeWatcher: true,
// //     },
// //   });
// // })();
// // const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// // module.exports = (async () => {
// //   const defaultConfig = await getDefaultConfig(__dirname);

// //   return mergeConfig(defaultConfig, {
// //     transformer: {
// //       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
// //       unstable_allowRequireContext: true,
// //     },
// //     resolver: {
// //       sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'flow', 'ts', 'tsx', 'js', 'jsx'],
// //       assetExts: [...defaultConfig.resolver.assetExts],
// //     },
// //     watcher: {
// //       usePolling: false,
// //       forceNodeWatcher: true,
// //     },
// //   });
// // })();


// // const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// // module.exports = (async () => {
// //   const defaultConfig = await getDefaultConfig(__dirname);

// //   return mergeConfig(defaultConfig, {
// //     resolver: {
// //       sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'], // remove 'flow'
// //     },
// //     transformer: {
// //       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
// //     },
// //     watcher: {
// //       usePolling: false,
// //     },
// //   });
// // })();
// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);

//   return mergeConfig(defaultConfig, {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: true,
//         },
//       }),
//     },
//     resolver: {
//       sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'flow'],
//       // 🔥 This is key: include react-native for Babel transform
//       blockList: defaultConfig.resolver.blockList,
//     },
//     // 🔥 Tell Metro not to ignore node_modules/react-native
//     transformer: {
//       ...defaultConfig.transformer,
//       babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
//     },
//     // 🛠 This part tells Metro to include react-native for transformation
//     watchFolders: [__dirname],
//     // 🔥 Un-ignore react-native
//     transformer: {
//       ...defaultConfig.transformer,
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: true,
//         },
//       }),
//     },
//     resolver: {
//       ...defaultConfig.resolver,
//       sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'flow'],
//       blacklistRE: require('metro-config/src/defaults/exclusionList')([]),
//       blockList: undefined,
//     },
//   });
// })();

const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.resolver.sourceExts.push('cjs', 'flow');

  return config;
})();
