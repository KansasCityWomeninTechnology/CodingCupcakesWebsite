'use strict';

function sessionsCtrl() {
   let svm = this;
   svm.sessions = [{
      title: 'Intro to Modern Web Apps with Yeoman',
      description: 'To create the web applications of today, we have to get together the tools we need to build them. HTML, CSS, and JavaScript are the basic building blocks of web pages; in this session you’ll learn to get the most out of them using these tools.',
      date: '04/11/2015',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session1Worksheet.pdf')
      }] 
   }, {
      title: 'Build a Blog with Jekyll',
      description: 'Last session we got familiar with the command line and installing tools to help us build websites. This session we’re going to create our own blogs using a tool called Jekyll.​',
      date: '06/13/2015',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session2Worksheet.pdf')
      }] 
   }, {
      title: 'Intro to Web Conceps',
      description: 'Last session we got familiar with the command line and installing tools to help us build websites. This session we’re going to create our own blogs using a tool called Jekyll.​',
      date: '08/08/2015',
      links: [{
         button: 'View Presentation',
         url: 'http://kansascitywomenintechnology.github.io/IntroToWebConcepts/'
      }] 
   }, {
      title: 'Setting up Your Dev Environment',
      description: 'This session covers how to set up your development environment and learning tools and techniques to help your workflow.',
      date: '10/10/2015',
      links: [{
         button: 'Download Worksheet',
         url: require('../../worksheets/Session4Worksheet.pdf')
      }] 
   }]
}

export default angular.module('sessions.controllers', [])
   .controller('sessionsCtrl', sessionsCtrl);