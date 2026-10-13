/**
 * Floating Social Share Buttons - Frontend JavaScript
 * Handles social sharing functionality and animations
 */

(function($) {
    'use strict';
    
    // Classe principal
    class FloatingSocialShare {
        constructor() {
            this.settings = typeof fssSettings !== 'undefined' ? fssSettings : {};
            this.init();
        }
        
        init() {
            this.bindEvents();
            this.addLabels();
            this.createRippleEffect();
            this.initMobileFAB();
        }
        
        /**
         * CRÍTICO: Garante que botões estão ocultos ao carregar em mobile
         */
        
        bindEvents() {
            const self = this;
            
            // Facebook
            $(document).on('click', '.fss-facebook', function(e) {
                e.preventDefault();
                const url = $(this).data('url') || self.settings.currentUrl;
                self.shareOnFacebook(url, $(this));
            });
            
            // LinkedIn
            $(document).on('click', '.fss-linkedin', function(e) {
                e.preventDefault();
                const url = $(this).data('url') || self.settings.currentUrl;
                const title = $(this).data('title') || self.settings.currentTitle;
                self.shareOnLinkedIn(url, title, $(this));
            });
            
            // WhatsApp
            $(document).on('click', '.fss-whatsapp', function(e) {
                e.preventDefault();
                const url = $(this).data('url') || self.settings.currentUrl;
                const title = $(this).data('title') || self.settings.currentTitle;
                self.shareOnWhatsApp(url, title, $(this));
            });
            
            // Telegram
            $(document).on('click', '.fss-telegram', function(e) {
                e.preventDefault();
                const url = $(this).data('url') || self.settings.currentUrl;
                const title = $(this).data('title') || self.settings.currentTitle;
                self.shareOnTelegram(url, title, $(this));
            });
        }
        
        /**
         * Compartilhar no Facebook
         */
        shareOnFacebook(url, $button) {
            this.addLoadingState($button);
            
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            const width = 600;
            const height = 400;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            
            const popup = window.open(
                shareUrl,
                'facebook-share',
                `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
            );
            
            if (popup) {
                popup.focus();
                this.removeLoadingState($button);
                this.showSuccessFeedback($button);
            } else {
                this.removeLoadingState($button);
                this.showPopupBlockedWarning();
            }
        }
        
        /**
         * Compartilhar no LinkedIn
         */
        shareOnLinkedIn(url, title, $button) {
            this.addLoadingState($button);
            
            const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            const width = 600;
            const height = 400;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            
            const popup = window.open(
                shareUrl,
                'linkedin-share',
                `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
            );
            
            if (popup) {
                popup.focus();
                this.removeLoadingState($button);
                this.showSuccessFeedback($button);
            } else {
                this.removeLoadingState($button);
                this.showPopupBlockedWarning();
            }
        }
        
        /**
         * Compartilhar no WhatsApp
         */
        shareOnWhatsApp(url, title, $button) {
            this.addLoadingState($button);
            
            const text = encodeURIComponent(`${title} - ${url}`);
            
            // Detecta se é mobile para usar a versão API ou Web
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const whatsappUrl = isMobile 
                ? `whatsapp://send?text=${text}`
                : `https://web.whatsapp.com/send?text=${text}`;
            
            // Abre em nova aba/janela
            const newWindow = window.open(whatsappUrl, '_blank');
            
            if (newWindow) {
                newWindow.focus();
                this.removeLoadingState($button);
                this.showSuccessFeedback($button);
            } else {
                this.removeLoadingState($button);
                this.showPopupBlockedWarning();
            }
        }
        
        /**
         * Compartilhar no Telegram
         */
        shareOnTelegram(url, title, $button) {
            this.addLoadingState($button);
            
            const text = encodeURIComponent(title);
            const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`;
            
            // Abre em nova aba
            const newWindow = window.open(shareUrl, '_blank');
            
            if (newWindow) {
                newWindow.focus();
                this.removeLoadingState($button);
                this.showSuccessFeedback($button);
            } else {
                this.removeLoadingState($button);
                this.showPopupBlockedWarning();
            }
        }
        
        /**
         * Adiciona estado de loading ao botão
         */
        addLoadingState($button) {
            $button.addClass('fss-loading');
        }
        
        /**
         * Remove estado de loading do botão
         */
        removeLoadingState($button) {
            $button.removeClass('fss-loading');
        }
        
        /**
         * Mostra feedback de sucesso
         */
        showSuccessFeedback($button) {
            $button.addClass('fss-success');
            setTimeout(() => {
                $button.removeClass('fss-success');
            }, 500);
        }
        
        /**
         * Adiciona labels se configurado
         */
        addLabels() {
            $('.fss-button').each(function() {
                if ($(this).find('.fss-label').length > 0) {
                    $(this).addClass('fss-has-label');
                }
            });
        }
        
        /**
         * Cria efeito ripple ao clicar
         */
        createRippleEffect() {
            $(document).on('click', '.fss-button', function(e) {
                const $button = $(this);
                const $ripple = $('<span class="fss-ripple"></span>');
                
                const buttonOffset = $button.offset();
                const xPos = e.pageX - buttonOffset.left;
                const yPos = e.pageY - buttonOffset.top;
                
                $ripple.css({
                    left: xPos + 'px',
                    top: yPos + 'px'
                });
                
                $button.append($ripple);
                
                setTimeout(() => {
                    $ripple.remove();
                }, 600);
            });
        }
        
        /**
         * Mostra notificação
         */
        showNotification(message, type = 'info', duration = 4000) {
            const $notification = $(`
                <div class="fss-notification fss-notification-${type}">
                    ${message}
                </div>
            `);
            
            // Adiciona estilos inline se não existir
            if ($('.fss-notification-styles').length === 0) {
                $('head').append(`
                    <style class="fss-notification-styles">
                        .fss-notification {
                            position: fixed;
                            bottom: 30px;
                            right: 30px;
                            background: #333;
                            color: #fff;
                            padding: 15px 20px;
                            border-radius: 8px;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                            z-index: 999999;
                            animation: slideInUp 0.3s ease;
                            max-width: 300px;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        }
                        .fss-notification-warning {
                            background: #ff9800;
                        }
                        .fss-notification-success {
                            background: #4CAF50;
                        }
                        @keyframes slideInUp {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    </style>
                `);
            }
            
            $('body').append($notification);
            
            setTimeout(() => {
                $notification.fadeOut(300, function() {
                    $(this).remove();
                });
            }, duration);
        }
        
        /**
         * Aviso de popup bloqueado
         */
        showPopupBlockedWarning() {
            this.showNotification(
                'Permita pop-ups neste site para compartilhar nas redes sociais.',
                'warning'
            );
        }
        
        /**
         * Copia URL para clipboard (alternativa para Instagram)
         */
        copyToClipboard(text) {
            // Tenta usar a API moderna primeiro
            if (navigator.clipboard && navigator.clipboard.writeText) {
                return navigator.clipboard.writeText(text);
            }
            
            // Fallback para método antigo
            return new Promise((resolve, reject) => {
                const $temp = $('<textarea>');
                $('body').append($temp);
                $temp.val(text).select();
                
                try {
                    const successful = document.execCommand('copy');
                    $temp.remove();
                    
                    if (successful) {
                        resolve();
                    } else {
                        reject(new Error('Copy command failed'));
                    }
                } catch (err) {
                    $temp.remove();
                    reject(err);
                }
            });
        }
        
        /**
         * Detecta scroll e ajusta opacidade (opcional)
         */
        handleScroll() {
            let lastScrollTop = 0;
            const $container = $('.fss-container');
            
            $(window).on('scroll', function() {
                const scrollTop = $(this).scrollTop();
                
                if (scrollTop > lastScrollTop && scrollTop > 300) {
                    $container.css('opacity', '0.5');
                } else {
                    $container.css('opacity', '1');
                }
                
                lastScrollTop = scrollTop;
            });
            
            // Hover restaura opacidade
            $container.on('mouseenter', function() {
                $(this).css('opacity', '1');
            });
        }
        
        /**
         * Inicializa FAB Mobile
         */
        /**
         * Inicializa FAB Mobile - VERSÃO SIMPLES E FUNCIONAL
         */
        initMobileFAB() {
            const self = this;
            const $container = $('.fss-container');
            const $fabTrigger = $('.fss-fab-trigger');
            
            // Verifica se FAB está habilitado
            if ($container.data('mobile-fab') != '1') {
                $fabTrigger.hide();
                return;
            }
            
            // Função para verificar se está em mobile
            const isMobile = () => $(window).width() < 768;
            
            // Inicialização
            if (!isMobile()) {
                $fabTrigger.hide();
                $container.removeClass('fss-fab-expanded');
            } else {
                this.applyMobileFABPosition();
                $fabTrigger.show();
            }
            
            // EVENTO ÚNICO: Click no FAB (Toggle simples)
            $fabTrigger.off('click.fab').on('click.fab', function(e) {
                if (!isMobile()) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                const isExpanded = $container.hasClass('fss-fab-expanded');
                
                if (!isExpanded) {
                    // EXPANDIR - Remove inline styles e adiciona classe
                    $container.addClass('fss-fab-expanded');
                    $('.fss-button').each(function() {
                        // Remove inline style para deixar CSS controlar
                        this.removeAttribute('style');
                    });
                } else {
                    // FECHAR - Adiciona inline styles e remove classe
                    $container.removeClass('fss-fab-expanded');
                    $('.fss-button').each(function() {
                        // Adiciona inline style para forçar ocultação
                        this.style.cssText = 'opacity: 0 !important; visibility: hidden !important; pointer-events: none !important;';
                    });
                }
            });
            
            // Fecha ao clicar fora (no overlay ou fora do container)
            $(document).off('click.fabclose').on('click.fabclose', function(e) {
                if (!isMobile()) return;
                
                if (!$(e.target).closest('.fss-container').length) {
                    if ($container.hasClass('fss-fab-expanded')) {
                        $container.removeClass('fss-fab-expanded');
                        $('.fss-button').each(function() {
                            this.style.cssText = 'opacity: 0 !important; visibility: hidden !important; pointer-events: none !important;';
                        });
                    }
                }
            });
            
            // Fecha ao clicar em um botão social
            $('.fss-button').off('click.fabbutton').on('click.fabbutton', function() {
                if (!isMobile()) return;
                
                setTimeout(() => {
                    $container.removeClass('fss-fab-expanded');
                    $('.fss-button').each(function() {
                        this.style.cssText = 'opacity: 0 !important; visibility: hidden !important; pointer-events: none !important;';
                    });
                }, 300);
            });
            
            // Reaplicar ao redimensionar
            let resizeTimer;
            $(window).off('resize.fab').on('resize.fab', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    if (!isMobile()) {
                        $fabTrigger.hide();
                        $container.removeClass('fss-fab-expanded');
                        // Remove inline styles em desktop
                        $('.fss-button').each(function() {
                            this.removeAttribute('style');
                        });
                    } else {
                        $fabTrigger.show();
                        self.applyMobileFABPosition();
                        // Garante que botões estão ocultos em mobile
                        if (!$container.hasClass('fss-fab-expanded')) {
                            $('.fss-button').each(function() {
                                this.style.cssText = 'opacity: 0 !important; visibility: hidden !important; pointer-events: none !important;';
                            });
                        }
                    }
                }, 250);
            });
        }
        
        /**
         * Aplica posicionamento do FAB mobile baseado nas configurações
         */
        applyMobileFABPosition() {
            const $container = $('.fss-container');
            
            // Só aplica em mobile
            if ($(window).width() >= 768) {
                return;
            }
            
            if (!$container.hasClass('fss-mobile-fab-enabled')) {
                return;
            }
            
            const posH = $container.data('mobile-fab-pos-h');
            const posV = $container.data('mobile-fab-pos-v');
            const hVal = $container.data('mobile-fab-h-val');
            const vVal = $container.data('mobile-fab-v-val');
            const hUnit = $container.data('mobile-fab-h-unit') || 'px';
            const vUnit = $container.data('mobile-fab-v-unit') || 'px';
            
            // Remove posições antigas
            $container.css({
                'left': 'auto',
                'right': 'auto',
                'top': 'auto',
                'bottom': 'auto',
                'transform': 'none'
            });
            
            // Aplica nova posição com unidade correta
            if (posH === 'left') {
                $container.css('left', hVal + hUnit);
            } else {
                $container.css('right', hVal + hUnit);
            }
            
            if (posV === 'top') {
                $container.css('top', vVal + vUnit);
            } else {
                $container.css('bottom', vVal + vUnit);
            }
        }
    }
    
    // Inicializa quando o DOM estiver pronto
    $(document).ready(function() {
        new FloatingSocialShare();
        
        // Adiciona tooltips nos botões
        $('.fss-facebook').attr('data-tooltip', 'Compartilhar no Facebook');
        $('.fss-linkedin').attr('data-tooltip', 'Compartilhar no LinkedIn');
        $('.fss-whatsapp').attr('data-tooltip', 'Compartilhar no WhatsApp');
        $('.fss-telegram').attr('data-tooltip', 'Compartilhar no Telegram');
    });
    
})(jQuery);
