import jQuery from 'jquery';

export const animateService = {
    test,
};
/*!
 * jQuery Conveyor Ticker (jConveyorTicker)
 * Description: jQuery plugin to create simple horizontal conveyor belt animated tickers.
 *
 * Copyright (c) 2017 Luis Luz - UXD Lda
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/lluz/jquery-conveyor-ticker
 *
 * Version:  1.1.0
 *
 */

function test(undefined) {
    jConveyorTicker(jQuery.fn);
    function jConveyorTicker(options) {
        if ( !undefined || undefined.length === 0 ) {
            console.log('jquery.jConveyorTicker() INITIALIZATION ERROR: You need to select one or more elements. See documentation form more information.');
            return false;
        }

        var settings = {
            anim_duration: 200,
            reverse_elm: false,
            force_loop: false,
            start_paused: false,
        };
        var cycle_duration = settings.anim_duration;
        var reverse_commute = settings.reverse_elm;
        var initialization_forced = settings.force_loop;
        var paused_oninit = settings.start_paused;
        
        if (options) {
            if ( options.anim_duration !== undefined ) {
                cycle_duration = options.anim_duration;
            }

            if ( options.reverse_elm !== undefined ) {
                reverse_commute = options.reverse_elm;
            }

            if ( options.force_loop !== undefined ) {
                initialization_forced = options.force_loop;
            }

            if ( options.start_paused !== undefined ) {
                paused_oninit = options.start_paused;
            }

            jQuery.extend(settings, options);
        }

        var jQueryself = jQuery(this);
        var jQuerylist = jQueryself.children('ul');

        var output = {

            'init': function(){

                jQueryself.each(function(){

                    output.destroy();

                    jQuerylist
                    .css({
                        'margin': '0',
                        'padding': '0',
                        'list-style': 'none'
                    })
                    .children('li')
                    .css({
                        'display': 'inline-block'
                    });
        
                    var jQuerylistRawWidth = jQuerylist.width();
                    var jQueryparentWidth = jQuerylist.parent().width();
                    var jQueryparent1stThreshold = (jQueryparentWidth / 2) - 20;
        
                    jQuerylist
                    .removeAttr('style')
                    .children('li')
                    .removeAttr('style');
        
                    jQueryself.addClass('jctkr-wrapper');
        
                    var conveyorInit = function(){
                        var jQuerylistItems1stClone = jQuerylist.clone().children('li');
                        jQuerylistItems1stClone.each(function(){
                            jQuery(this).addClass('clone');
                        });
                        jQuerylist.append(jQuerylistItems1stClone);
        
                        var listTotalWidth = 0;
                        jQuerylist.children().each(function(){
                            listTotalWidth += jQuery(this).outerWidth();
                        });
                        jQuerylist.width(listTotalWidth);
        
                        jQueryself.hover(function(){
                            output.pauseAnim();
                        }, function(){
                            output.pauseAnim();
                            output.conveyorAnimate('normal');
                        });
        
                        if ( reverse_commute ){
                            jQueryself.prev('.jctkr-label')
                            .hover(function(){
                                output.pauseAnim();
                                output.conveyorAnimate('reverse');
                            }, function(){
                                output.pauseAnim();
                                output.conveyorAnimate('normal');
                            }).click(function(){
                                return false;
                            });
                        }
                        output.conveyorAnimate('normal');
                    };
        
                    if ( jQuerylistRawWidth >= jQueryparent1stThreshold ){
                        conveyorInit();
                    }
                    else if ( initialization_forced ){
                        var jQueryitemsWidth, jQuerycontainerWidth = 0;
                        var itemsReplicate = function(){
                            var jQuerylistItems1stClone = jQuerylist.clone().children('li');
                            jQuerylistItems1stClone.each(function(){
                                jQuery(this).addClass('clone');
                            });
                            jQuerylist.append(jQuerylistItems1stClone);
        
                            jQueryitemsWidth = jQuerylist.width();
                            jQuerycontainerWidth = jQuerylist.parent().width();
        
                            if ( jQueryitemsWidth < jQuerycontainerWidth ){
                                itemsReplicate();
                            }
                            else {
                                conveyorInit();
                                return false;
                            }
                        };
        
                        itemsReplicate();
        
                        while ( jQueryitemsWidth < jQuerycontainerWidth ) {
                            if ( jQueryitemsWidth >= jQueryparent1stThreshold ) {
                                conveyorInit();
                                break;
                            }
                            itemsReplicate();
                        }
                    }

                    jQueryself.addClass('jctkr-initialized');

                });

                if ( paused_oninit ){
                    output.pauseAnim();
                }

            },

            'destroy': function(){

                jQueryself.each(function(){

                    output.pauseAnim();

                    jQuery(this)
                    .unbind().removeData()
                    .removeClass('jctkr-wrapper jctkr-initialized');

                    jQuerylist
                    .unbind().removeData()
                    .removeAttr('style')
                    .find('.clone').remove();

                });

            },

            'conveyorAnimate': function(action){

                var tw = jQuerylist.width();
                var tp = jQuerylist.position().left;
                var operator = '-';
                var direction = 'normal';
                var tcal;

                if (action !== undefined && action === 'reverse'){
                    tcal = (tw / 2);
                    if (tp > 0){
                        jQuerylist.css('left', '-' + tcal + 'px');
                        output.conveyorAnimate('reverse');
                        return;
                    }
                    operator = '+';
                    direction = 'reverse';
                }
                else {
                    tcal = -1 * (tw / 2);
                    if (tp < tcal){
                        var toffs = -1 * (tcal - tp);
                        jQuerylist.css('left', toffs + 'px');
                        output.conveyorAnimate(direction);
                        return;
                    }
                }

                jQuerylist.stop().animate({
                    left: operator + '=10px'
                }, cycle_duration, 'linear', function(){
                    output.conveyorAnimate(direction);
                });

            },

            'pauseAnim': function(){
                jQuerylist.stop();
            },

            'playAnim': function(){
                output.conveyorAnimate('normal');
            },

        };

        output.init();
        return output;

    };

}