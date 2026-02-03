import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import flask from '@/public/flask.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import vscode from '@/public/vscode.png'
import eclipse from '@/public/eclipse.png'
import postman from '@/public/postman.png'
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import villa from '@/public/villa.png'
import warriors from '@/public/warriors.png'
import boxd from '@/public/boxd.png'
import atcq from '@/public/atcq.png'
import vercel from '@/public/vercel.png'
import split from '@/public/split.png'
import spotlefy from '@/public/spotlefy.png'
import spotify from '@/public/spotify.png'
import cinefindPersonal from '@/public/cinefind_me.png'
import tmdb from '@/public/tmdb.png'
import jinja from '@/public/jinja.png'
import cron from '@/public/cron.png'
import reddit from '@/public/reddit.png'
import discogs from '@/public/discogs.png'
import rpi from '@/public/rpi.png'
import vinylBot from '@/public/vinyl-bot.png'
import giants from '@/public/giants.png'
import amc from '@/public/amc.png'
import lifetime from '@/public/lifetime.png'
import sjsu from '@/public/sjsu.png'
import cinefindLogoC from '@/public/cinefind-logo-c.png'
import figma from '@/public/figma.png'
import niners from '@/public/49ers.png'
import scikit from '@/public/scikit.png'
import pandas from '@/public/pandas.png'
import shap from '@/public/shap.png'
import twitterBot from '@/public/twitter-bot.png'
import githubBanner from '@/public/git-banner.jpg'
import pl from '@/public/pl.png'
import beautifulsoup from '@/public/beautifulsoup.png'
import cinefindWebApp from '@/public/cinefind-web-app.png'
import cinefindEngine from '@/public/cinefind-engine.png'
import mailgun from '@/public/mailgun.png'
import expo from '@/public/expo.png'
import postgres from '@/public/postgres.png'
import selenium from '@/public/selenium.png'
import spotter from '@/public/spotter.png'
import swift from '@/public/swift.png'
import aws from '@/public/aws.png'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  // {
  //   hash: '#about',
  //   label: 'About',
  // },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#experience',
    label: 'Experience',
  },
  {
    hash: '#connect',
    label: 'Connect',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',
    color: '#0072B1',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',
    color: '#C0C0C0',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:ffinian@outlook.com',
    color: '#E5A823',
  },
] as const

export const interests = [
  {
    name: 'Piano',
    image: warriors, //Change
  },
  {
    name: 'Chinese',
    image: villa, //change
  },
  {
    name: 'Movies',
    image: giants, //Change
  },
  {
    name: 'Football',
    image: niners, //Change
  },
  {
    name: 'Tennis',
    icon: PiTennisBallFill,
  },
  {
    name: 'Fitness',
    icon: FaDumbbell,
  },
  {
    name: 'Movies',
    image: boxd,
    href: 'https://letterboxd.com/aross2010/',
  },
  {
    name: 'Music',
    image: atcq,
  },
  {
    name: 'Reading',
    icon: FaBookOpen,
  },
  {
    name: 'Traveling',
    icon: FaPlaneDeparture,
  },
] as const

export const skills = [
  { name: 'Python', image: python },
  { name: 'C#', image: null }, // You may need to import a C# logo
  { name: 'C++', image: c }, 
  { name: 'MATLAB', image: null },
  { name: 'HTML', image: html },
  { name: 'VB.net', image: null },
] as const

export const projects = [
  {
    name: 'MPhys Master’s Project',
    image: null, 
    description: 'Collaborative research project with The Christie Hospital focused on 3D data simulation and scientific computing.', // Citing: [cite: 12, 26]
    tech: [
      { src: python, alt: 'python' },
      { src: c, alt: 'C++' },
    ],
    link: null,
    code: '#',
  },
  {
    name: 'Queuing Theory Simulation',
    image: null,
    description: 'Original research into queuing theory using Monte-Carlo methods and Python simulations.', // Citing: [cite: 60]
    tech: [
      { src: python, alt: 'python' },
    ],
    link: null,
    code: '#',
  },
]

export const experiences = [
  {
    title: 'Physics & Programming Educator',
    subtitle: 'AISSU, Shenzhen', // Citing: [cite: 35]
    dates: 'Aug. 2025 - present',
    description: 'Designing physics curriculum and communicating in Mandarin to facilitate technical instruction.', // Citing: [cite: 36, 38]
    image: null,
  },
  {
    title: 'MPhys Master\'s in Physics',
    subtitle: 'The University of Manchester', // Citing: [cite: 23]
    dates: 'Graduated July 2020',
    description: 'Upper Second-Class Honors (2/1). Specialization in 1st Class programming modules.', // Citing: [cite: 23, 25]
    image: null,
  },
  {
    title: 'Research Student',
    subtitle: 'Cardiff University (Nuffield Placement)', // Citing: [cite: 59]
    dates: 'Jul. - Aug. 2015',
    description: 'Used Monte-Carlo methods to simulate queues and estimate waiting times.', // Citing: [cite: 60]
    tags: ['Queuing Theory', 'Monte Carlo', 'Simulation'],
    emphasized: true,
  },
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alex-ross-32b278236/',//change
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/aross2010',//change
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:ffinian@outlook.com',
  },
] as const
