"use strict";(self.webpackChunkhello_plus=self.webpackChunkhello_plus||[]).push([[498],{4719:function(e,t,r){r.r(t),t.default=elementorModules.frontend.handlers.Base.extend({getDefaultSettings(){return{selectors:{form:".ehp-form"}}},getDefaultElements(){var e=this.getSettings("selectors"),t={};return t.$form=this.$element.find(e.form),t},bindEvents(){this.elements.$form.on("form_destruct",this.handleSubmit)},handleSubmit(e,t){void 0!==t.data.redirect_url&&(location.href=t.data.redirect_url)}})},4746:function(e,t,r){r.r(t),t.default=elementorModules.frontend.handlers.Base.extend({getDefaultSettings(){return{selectors:{form:".ehp-form",submitButton:'[type="submit"]'},action:"helloplus_forms_lite_send_form",ajaxUrl:elementorFrontendConfig.urls.ajaxurl,nonce:ehpFormsData.nonce}},getDefaultElements(){const e=this.getSettings("selectors"),t={};return t.$form=this.$element.find(e.form),t.$submitButton=t.$form.find(e.submitButton),t},bindEvents(){this.elements.$form.on("submit",this.handleSubmit)},beforeSend(){const e=this.elements.$form;e.animate({opacity:"0.45"},500).addClass("elementor-form-waiting"),e.find(".elementor-message").remove(),e.find(".elementor-error").removeClass("elementor-error"),e.find("div.elementor-field-group").removeClass("error").find("span.elementor-form-help-inline").remove().end().find(":input").attr("aria-invalid","false"),this.elements.$submitButton.attr("disabled","disabled").find("> span").prepend('<span class="elementor-button-text elementor-form-spinner"><i class="fa fa-spinner fa-spin"></i>&nbsp;</span>')},getFormData(){const e=new FormData(this.elements.$form[0]);return e.append("action",this.getSettings("action")),e.append("nonce",this.getSettings("nonce")),e.append("referrer",location.toString()),e},onSuccess(e){const t=this.elements.$form;if(this.elements.$submitButton.removeAttr("disabled").find(".elementor-form-spinner").remove(),t.animate({opacity:"1"},100).removeClass("elementor-form-waiting"),e.success){t.trigger("submit_success",e.data),t.trigger("form_destruct",e.data),t.trigger("reset");let r="elementor-message elementor-message-success";elementorFrontendConfig.experimentalFeatures.e_font_icon_svg&&(r+=" elementor-message-svg"),void 0!==e.data.message&&""!==e.data.message&&t.append('<div class="'+r+'" role="alert"></div>').text(e.data.message)}else e.data.errors&&(jQuery.each(e.data.errors,(function(e,r){t.find("#form-field-"+e).parent().addClass("elementor-error").append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert"></span>').text(r).find(":input").attr("aria-invalid","true")})),t.trigger("error")),t.append('<div class="elementor-message elementor-message-danger" role="alert"></div>').text(e.data.message)},onError(e,t){const r=this.elements.$form;r.append('<div class="elementor-message elementor-message-danger" role="alert"></div>').text(t),this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr("disabled"),r.animate({opacity:"1"},100).removeClass("elementor-form-waiting"),r.trigger("error")},handleSubmit(e){const t=this,r=this.elements.$form;if(e.preventDefault(),r.hasClass("elementor-form-waiting"))return!1;this.beforeSend(),jQuery.ajax({url:t.getSettings("ajaxUrl"),type:"POST",dataType:"json",data:t.getFormData(),processData:!1,contentType:!1,success:t.onSuccess,error:t.onError})}})}}]);