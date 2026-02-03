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
    name: 'Piano (Grade 8 Distinction)', [cite: 63]
    icon: FaBookOpen,
  },
  {
    name: 'Mandarin Chinese (HSK6)', [cite: 31]
    icon: FaBookOpen,
  },
  {
    name: 'Mixed Martial Arts', [cite: 65]
    icon: FaDumbbell,
  },
  {
    name: 'French', [cite: 65]
    icon: FaBookOpen,
  },
] as const

export const skills = [
  { name: 'Python', image: python }, [cite: 33]
  { name: 'C#', image: null }, [cite: 33]
  { name: 'C++', image: c }, [cite: 33]
  { name: 'MATLAB', image: null }, [cite: 33]
  { name: 'VB.net', image: null }, [cite: 33]
  { name: 'HTML', image: html }, [cite: 33]
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
    subtitle: 'AISSU, Shenzhen', [cite: 35]
    dates: 'Aug. 2025 - present', [cite: 35]
    description: 'Taught and designed physics curriculum. Communicated in Mandarin to facilitate technical instruction.', [cite: 36, 38]
    tags: ['IGCSE Physics', 'AS-level Physics', 'C1 Mandarin'], [cite: 31, 38]
    emphasized: true,
  },
  {
    title: 'MPHYS Master\'s in Physics',
    subtitle: 'The University of Manchester', [cite: 23]
    dates: 'Graduated July 2020', [cite: 23]
    description: 'Upper Second-Class Honors (2/1). Awarded 77% on Master\'s Dissertation (Dutch Cum Laude equivalent).', [cite: 23, 24]
    tags: ['WO Master of Science', 'Scientific Computing', 'Data Analysis'], [cite: 23, 11]
    emphasized: false,
  },
  {
    title: 'Research Student',
    subtitle: 'Cardiff University (Nuffield Placement)', [cite: 59]
    dates: 'Jul. - Aug. 2015', [cite: 59]
    description: 'Researched applied mathematics and undertook original research into queuing theory using Python simulations.', [cite: 60]
    tags: ['Queuing Theory', 'Monte Carlo', 'Python'], [cite: 60]
    emphasized: false,
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
