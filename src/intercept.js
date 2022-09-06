const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
  const targetables = Targetables.using(targets);
  const Header = targetables.reactComponent(
      '@magento/venia-ui/lib/components/Header/header.js'
  );

  Header.insertAfterJSX('<MegaMenu />', '<div>Foobar</div>')
}
