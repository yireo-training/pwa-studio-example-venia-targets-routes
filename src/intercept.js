module.exports = targets => {
  targets.of('@magento/pwa-buildpack').specialFeatures.tap(
    featuresByModule => {
      featuresByModule[targets.name] = {
        esModules: true,
        cssModules: true
      }
    }
  );

  targets.of('@magento/venia-ui').routes.tap(routes => {
    routes.push({
      name: 'Example',
      pattern: '/example',
      path: require.resolve('./components/Example.js')
    })
    return routes;
  });
}
