const express = require('express');
const router = express.Router();

// list of projects shown on the page
const projects = [
  {
    name: 'Protowall',
    url: 'https://protowall.sh/',
    image: '/images/protowall.svg',
    description: 'Protowall is the gateway between your application and foundation models. Inspect every request, enforce policy, and route across providers from a single SDK.'
  },
  {
    name: 'Panther',
    url: 'https://panther.sh/',
    image: '/images/panther.svg',
    description: 'PANTHER is an autonomous intelligence platform that continuously monitors your external attack surface. Domains, open ports, exposed services, and leaked credentials. Intelligent alerts before attackers have a chance to act.'
  },
  {
    name: 'boodoo.dev',
    url: 'https://boodoo.dev',
    image: '/images/boodoo_dev.svg',
    description: 'My actual personal website with my technical blog and project showcase.'
  },
  {
    name: 'Echelon8',
    url: 'https://echelon8.ca',
    image: '/images/echelon8.svg',
    description: 'Echelon8 is a cybersecurity company that provides penetration testing, vulnerability assessments, and security consulting services to help organizations protect their digital assets.'
  }
];

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects', projects: projects });
});

module.exports = router;
