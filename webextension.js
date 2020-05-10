/* global __dirname */

const path = require('path')
const express = require('express')

/**
 * Extension for Web Server
 * Provide Route to Ionic libraries (js & css)
 *
 * @class
 * @param {object} server http or https node.js object
 * @param {object} webSettings settings of the web server, like <pre><code>{secure: settings.secure, port: settings.port}</code></pre>
 * @param {object} adapter web adapter object
 * @param {object} instanceSettings instance object with common and native
 * @param {object} app express application
 */
class WebExtension {
   constructor(server, webSettings, adapter, instanceSettings, app) {
      this.defaultConfig = { "route": "ionic" }
      if(instanceSettings){
         this.config = instanceSettings.native
         if(! /^\w[\w\/-]*\w$/.test(instanceSettings.native.route)){
            adapter.log.error('Invalid route: ' + instanceSettings.native.route)
            this.config.route = this.defaultConfig.route
         }
      } else {
         this.config = this.defaultConfig
      }
      
      app.use('/' + this.config.route + '/js', express.static(path.join(__dirname, 'node_modules/@ionic/core/dist/ionic')))
      app.use('/' + this.config.route + '/css', express.static(path.join(__dirname, 'node_modules/@ionic/core/css')))
      
      adapter.log.info('Ionic registered on route /' + this.config.route)
   }
}

module.exports = WebExtension