const URL_PREFIX = 'dist/',
  URL_SUFFIX = '.png',
  URL_DELIM = '-';

function buildIconUrl(type, color) {
  if (color === '') {
    return URL_PREFIX + type + URL_SUFFIX;
  } else {
    return URL_PREFIX + color + URL_DELIM + type + URL_SUFFIX;
  }
}

export default {
  factory: function (type, color) {
    if (color !== undefined && this._isCoalitionIcon(type)) {
      color = '';
    } else if (
      color === 'black' &&
      (this._isRandomExpertIcon(type) || this._isTawIcon(type) || this._isStockIcon(type))
    ) {
      color = 'blue';
    }
    var iconOpts = {
      iconSize: type === 're-point-active' ? [40, 60] : [36, 36],
      iconUrl: buildIconUrl(type, color),
    };
    return L.icon(iconOpts);
  },
  textIconFactory: function (text, classes) {
    return L.divIcon({
      className: classes,
      html: text,
      iconSize: [165, 0],
    });
  },
  // Private methods determine if this icon should default to blue when black is chosen
  _isRandomExpertIcon: function (type) {
    return type.substring(0, 2) === 're';
  },
  _isTawIcon: function (type) {
    return type.substring(0, 3) === 'taw' && type !== 'taw-af';
  },
  _isStockIcon: function (type) {
    return type.substring(0, 5) === 'stock';
  },
  _isCoalitionIcon: function (type) {
    return type.substring(type.length - 5) === 'spawn';
  },
};
