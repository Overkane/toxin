const components = require.context('Components', true, /\.scss$|\.js$/);
const includes = require.context('Includes', true, /\.scss$/);
const pages = require.context('Pages', true, /\.scss$|\.js$/);

importAll(components);
importAll(includes);
importAll(pages);
import './styles.scss';

function importAll(r) {
  r.keys().forEach(r);
}
