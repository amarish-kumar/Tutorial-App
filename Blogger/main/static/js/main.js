window.main = {};

(function (main) {
    main.constants = null
}(window.main));

(function () {
    let top = 'top',
        right = 'right',
        left = 'left'

    $('#nav-item-top a').click(function () {
        main.disableBtn(this, top);
        main.fixNav(top)
    });
    $('#nav-item-left a').click(function () {
        main.disableBtn(this, left);
        main.fixNav(left)
    });
    $('#nav-item-right a').click(function () {
        main.disableBtn(this, right);
        main.fixNav(right)
    });
}());

(function (main) {
    let oldDirection = 'navbar-fixed-left'
    main.fixNav = function (direction) {
        let newDirection = 'navbar-fixed-' + direction

        $("#main-navbar").removeClass(oldDirection);
        $("#main-navbar").addClass(newDirection);

        oldDirection = newDirection;

        if (direction == "top") {
            $('#custom-nav').removeClass('nav nav-link')
            $('#nav-item-right a').removeClass('disabled')
            $('#nav-item-left a').removeClass('disabled')
        }
        else if (direction == 'left') {
            $('#custom-nav').addClass('nav nav-link')
            $('#nav-item-top a').removeClass('disabled')
            $('#nav-item-right a').removeClass('disabled')
        }
        else {
            $('#custom-nav').addClass('nav nav-link')
            $('#nav-item-top a').removeClass('disabled')
            $('#nav-item-left a').removeClass('disabled')
        }
    };
}(window.main));

(function () {
    main.disableBtn = function (elem, direction) {
        $(elem).addClass('disabled');
    }

    $(window).on('scroll', function (ev) {
        let scrollValue = $(window).scrollTop()
        let logoNetImg = $($('header img')[0])
        let logoAngularImg = $($('header img')[1])
        let headerTitle = $('header h1');

        if (window.main.constants === null) {
            main.constants = {
                logoNetWidth: logoNetImg.width(),
                logoNetHeight: logoNetImg.height(),
                logoNetWidthSmall: logoNetImg.width() * 0.6,
                logoNetHeightSmall: logoNetImg.height() * 0.6,

                logoAngularWidth: logoAngularImg.width(),
                logoAngularHeight: logoAngularImg.height(),
                logoAngularWidthSmall: logoAngularImg.width() * 0.6,
                logoAngularHeightSmall: logoAngularImg.height() * 0.6
            }
        }

        let logoNetWidthSmall = main.constants.logoNetWidthSmall;
        let logoNetHeightSmall = main.constants.logoNetHeightSmall;
        let logoNetWidth = main.constants.logoNetWidth;
        let logoNetHeight = main.constants.logoNetHeight;

        let logoAngularWidthSmall = main.constants.logoAngularWidthSmall
        let logoAngularHeightSmall = main.constants.logoAngularHeightSmall
        let logoAngularWidth = main.constants.logoAngularWidth
        let logoAngularHeight = main.constants.logoAngularHeight

        if (scrollValue > 0) {
            logoNetImg.width(logoNetWidthSmall)
            logoNetImg.height(logoNetHeightSmall)

            logoAngularImg.width(logoAngularWidthSmall)
            logoAngularImg.height(logoAngularHeightSmall)

            headerTitle.css('font-size', '30px')
        }
        else {
            console.log('100%')
            logoNetImg.width(logoNetWidth)
            logoNetImg.height(logoNetHeight)

            logoAngularImg.width(logoAngularWidth)
            logoAngularImg.height(logoAngularHeight)

            headerTitle.css('font-size', '40px')
        }
    })

}());