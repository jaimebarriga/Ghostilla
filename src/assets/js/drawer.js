var Drawer = (function ($, Mzr) {

    'use strict';

    var transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition'    : 'transitionend',
        'OTransition'      : 'oTransitionEnd otransitionend',
        'transition'       : 'transitionend'
      },
      transEndEventName = transEndEventNames[Mzr.prefixed('transition')];

    var _body = $('body'),
        _container = $('#container'),
        _overlay = $('#container');

    var module = {
        open: function() {
          _body.addClass('drawer-open drawer-transition');
        },
        close: function() {
          _body.removeClass('drawer-open');
        },
        isOpen: function() {
          return _body.hasClass('drawer-open');
        },
        bindOverlay: function() {
          _overlay.on('click', function(e) {
            //e.preventDefault();

            if(_body.hasClass('drawer-open')) {
              module.close();
            }
          });
        },
        bindContainerTransEnd: function() {
          _container.on(transEndEventName, function(e) {
            if(!_body.hasClass('drawer-open')) {
              _body.removeClass('drawer-transition');
            }
          });
        },
        init: function() {
          module.bindOverlay();
          module.bindContainerTransEnd();
        }
    };

    return {
      init: module.init,
      open: module.open,
      close: module.close,
      isOpen: module.isOpen
    };

}(jQuery, Modernizr));
