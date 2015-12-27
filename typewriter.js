function Typewriter() {
    this.typedText;
    this.timer;
    this.pickedQuote;
    var _that = this;
    var game;
    function init(gameInstance, options) {
        game = gameInstance;
        _that.time = options.time || Phaser.Timer.SECOND / 10;
        _that.sound = options.sound || null;
        _that.writerFn = options.writerFn || null;
        _that.endFn = options.endFn || null;
        _that.times = options.times || 10;
        _that.text = options.text || "";
        _that.x = options.x || 100;
        _that.y = options.y || 100;
        _that.maxWidth = options.maxWidth || 200;
        _that.fontFamily = options.fontFamily || "blackFont";
        _that.fontSize = options.fontSize || 28;
        _that.writerObj = options.writerObj || null;
    }

    function start() {
        enableTypingSpecificMessage(_that.text, _that.x, _that.y);
    }

    function enableTypingSpecificMessage(text, x, y) {
        var quote = text;
        if (_that.writerObj === null) {
            _that.typedText = game.add.bitmapText(x, y, _that.fontFamily, "", _that.fontSize);
            _that.typedText.maxWidth = _that.maxWidth;
        } else {
            _that.typedText = _that.writerObj;
            _that.typedText.maxWidth =_that.maxWidth;
        }

        _that.pickedQuote = quote;

        if (_that.sound !== null) {
            _that.sound.play();
        }

        _that.typedText.x = x;
        _that.typedText.y = y
        if (_that.endFn !== null) {
            countdown(typeWriter, quote.length, _that.endFn);
        } else {
            countdown(typeWriter, quote.length);
        }
    }

    /**
     * [countDown description]
     * @param  {Function} fn    [description]
     * @param  {[type]}   endFn [description]
     * @return {[type]}         [description]
     */
    function countdown(fn, times, endFn) {
        var _timer = game.time.create(false);
        _timer.start();
        endFn = endFn || function () {
            game.time.events.remove(_timer);
            if (_that.sound !== null) {
                _that.sound.stop();
            }
        };
        _timer.onComplete.add(endFn);
        _timer.repeat(_that.time, times, fn, this);
    }

    function typeWriter(text) {
        if (_that.sound !== null) {
            if (_that.sound.isPlaying === false) {
                _that.sound.play();
            }
        }
        var length = _that.typedText.text.length;
        _that.typedText.text += _that.pickedQuote.charAt(length);
    }

    return {
        init: function (gameInstance, options) {
            init(gameInstance, options);
        },
        start: function () {
            start();
        },
        destroy: function() {
            _that.typedText.destroy();
        },
        hideText: function() {
            _that.typedText.visible = false;
        },
        showText: function() {
            _that.typedText.visible = true;
        },
        moveToTop: function() {
            game.bringToTop(_that.typedText);
        }
    }
}