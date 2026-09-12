import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Target, BookOpen, ArrowLeft, FileText, Users, Star, Search, Filter, HardDrive, Download, Clock, Eye, ExternalLink, ChevronRight, Zap
} from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

// Type definitions based on usage
interface Resource {
  id: string;
  title: string;
  description: string;
  format: string;
  downloadLink: string;
  previewAvailable: boolean;
  rating: number;
  downloads: number;
  difficulty: string;
  tags: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgPattern: string;
  resourceCount: number;
  resources: Resource[];
}

export const categories: Category[] = [
  {
    id: "Engineering",
    title: "Engineering",
    description: "Books and solution for all Engineering fields are here.",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    resourceCount: 10,
    resources: [
      {
        id: "Engr-01",
        title: "Thomas Calculus Edition 14",
        description: "Thomas' Calculus is a classic textbook that provides a clear and rigorous introduction to differential and integral calculus.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/2wZwnDDB#36n2jJDRivpUlX6fBwF0uuf2zqizkHQSRehiBnFg9Ac",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Differentiation", "Integration"]
      },
      {
        id: "Engr-02",
        title: "Thomas Calculus Edition 14 Solution",
        description: "Comprehensive solution manual for Thomas Calculus covering all chapters and exercises.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rx4jnIJZ#k3PDOJiFGuQtU_vxQ8TraasWEj7T5O57H8cuyQvcA8w",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Differentiation", "Integration"]
      },
      {
        id: "Engr-03",
        title: "DIFFERENTIAL EQUATIONS with Boundary-Value Problem",
        description: "This is a renowned textbook that explains differential equations concepts clearly with real-world applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/WhxXTbRQ#9_XaLGld-kEyQFhql8cdY3bmR-BuqOeF2ofFArKu8TM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Ordinary Differential Equation", "Partial Differential Equation"]
      },
      {
        id: "Engr-04",
        title: "DIFFERENTIAL EQUATIONS with Boundary-Value Problem Solution",
        description: "Complete solution manual for differential equations with detailed step-by-step solutions.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/fsQ2ADbC#n71v5dHpZi_gjCHRFPSV7RYBOeW3j-YB88hmNnQyteM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Ordinary Differential Equation", "Partial Differential Equation"]
      },
      {
        id: "Engr-05",
        title: "Calculus Edition 10 by Anton Biven Davis",
        description: "This is a renowned textbook that explains Multivariate calculus concepts clearly with real-world applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/bo4jyCqT#7m3EcuBzMSY0Q8_NyfDkNVDm6UGUAYyMfFFX6vjXqLI",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Real World Problem", "Multivariate Calculus"]
      },
      {
        id: "Engr-06",
        title: "Calculus Edition 10 Solution",
        description: "Complete solution manual for Calculus Edition 10 with detailed explanations and examples.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/K5BiBS7L#KbW2zvh3NerWfRX5W3ORHgBvaIlbH5Qft4NcpiVH0oE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Real World Problem", "Multivariate Calculus"]
      },
      {
        id: "Engr-07",
        title: "Computer Science an Overview Edition 12",
        description: "This is renowned book for understanding basic concept for learning Computer Science and logic building.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z4BGRBCL#ctiZlqX4VPU2L3bbjqgg5HdzyFDuG4oTqLOhR4fB7eg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Computer Science"]
      },
      {
        id: "Engr-08",
        title: "Analysis and Design of Linear Circuits by Thomas, Rosa and Toussaint, 7th Edition",
        description: "This is renowned book for understanding basic concept for learning Circuit analysis.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nlZDQIhD#5j-ahs1gexqFUPbr3PyeDOkkb-XHxF7E35-r0EJrifo",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Circuit analysis"]
      },
      {
        id: "Engr-09",
        title: "Analysis and Design of Linear Circuits Solution",
        description: "Complete solution manual for circuit analysis with detailed problem-solving techniques.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/384SURoZ#JC7Ih2HnK6thOxdbJrfiy6RF-m7gHt04nnQg9UhV76g",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Circuit analysis"]
      },
      {
        id: "Engr-10",
        title: "Unit Process Chemical Engineering",
        description: "Focuses on the unit processes in chemical engineering, covering reactions and process design.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jhQ3lRSA#BdJnxOORxjiVWaKIafoLKoaYZEZcZ5HKkScUkH0lASg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Chemical Engineering", "Unit Process", "Reaction Kinetics"]
      },
      {
        id: "Engr-11",
        title: "Thermodynamics by Yunus Cengel",
        description: "A classic textbook on thermodynamics, heat transfer, and fluid mechanics by Yunus A. Çengel.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/usQS0JaC#HXfFEBFIDdJ_nlh_dmL3QCW4RgfI395YSW3m2wYuD2I",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Thermodynamics", "Heat Transfer", "Fluid Mechanics", "Yunus Cengel"]
      },
      {
        id: "Engr-12",
        title: "Thermodynamics by Yunus Cengel Solution",
        description: "The complete solution manual for the thermodynamics and heat transfer textbook by Yunus A. Çengel.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/q1phSBaY#QaOkR9jWO5wiCsjy2wB7dHVQql5Lr-VG-gLkTqAGoRA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Thermodynamics", "Solution Manual", "Yunus Cengel"]
      },
      {
        id: "Engr-13",
        title: "Chemical Process Principles",
        description: "Covers the fundamental principles of chemical processes, including material and energy balances.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z9YW3DzR#ZrZv6M-llpro-FekrH2HI5kkvmQwg0JB0HnX8kPVufc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Chemical Engineering", "Process Principles", "Material Balance"]
      },
      {
        id: "Engr-14",
        title: "Unit Operation Edition 7 Solution",
        description: "Solution manual for 'Unit Operations of Chemical Engineering', focusing on transport phenomena and separation processes.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/W1og3LqZ#gJ3HIfiejIbFww-24MgqfJ9MJ_AXzm-MPjOgvcu7K5s",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Chemical Engineering", "Unit Operations", "Solution Manual"]
      },
      {
        id: "Engr-15",
        title: "Shreve's Chemical Process Industries",
        description: "An authoritative overview of the chemical process industries, detailing manufacturing processes for various chemicals.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Ww52DCRa#jLgntYOm-44poLrxaOAN0Mxvvf-QnfO07OdhLFP4bEU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Chemical Engineering", "Industrial Chemistry", "Shreve"]
      },
      {
        id: "Engr-16",
        title: "Basic Principles and Calculations in Chemical Engineering, Edition 7",
        description: "A foundational text by Himmelblau, introducing stoichiometry and material/energy balances in chemical engineering.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/q1phSBaY#QaOkR9jWO5wiCsjy2wB7dHVQql5Lr-VG-gLkTqAGoRA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Chemical Engineering", "Stoichiometry", "Himmelblau"]
      },
      {
        id: "Engr-17",
        title: "Basic Principles and Calculations in Chemical Engineering, Edition 7 Solution",
        description: "The official solution manual for Himmelblau's 'Basic Principles and Calculations in Chemical Engineering'.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/e8hV0BAZ#2QkfpaQX7UeBMJnOSTREC0K9XJ7mZgl3nIIqxDt47h4",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Chemical Engineering", "Solution Manual", "Himmelblau"]
      },
      {
        id: "Engr-18",
        title: "Advanced Engineering Mathematics by Erwin Kreyszig",
        description: "A comprehensive guide to advanced mathematical concepts for engineers, including differential equations, linear algebra, and complex analysis.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OkRWAIiZ#1nx3JuC1guUjygUpg4gyecJWFPOVDTiegto64pM_kyc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Mathematics", "Advanced Engineering", "Erwin Kreyszig"]
      },
      {
        id: "Engr-19",
        title: "Differential Equations with Modeling Applications by Dennis Zill, 11th Edition",
        description: "A thorough introduction to differential equations and their applications in modeling real-world phenomena.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z5QQyCgb#VJlWvScMHmYm1_-4LqK-hfrJYvkZTNGDgLpOkqfOpLM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Mathematics", "Differential Equations", "Dennis Zill"]
      },
      {
        id: "Engr-20",
        title: "Solution of Differential Equations with Modeling Applications by Dennis Zill, 11th Edition",
        description: "The solution manual for Dennis Zill's 'Differential Equations with Modeling Applications', providing step-by-step solutions.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z5QQyCgb#VJlWvScMHmYm1_-4LqK-hfrJYvkZTNGDgLpOkqfOpLM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Mathematics", "Differential Equations", "Solution Manual", "Dennis Zill"]
      },
      {
        id: "Engr-21",
        title: "Engineering Mechanics J.L. Meriam Edition 9",
        description: "Covers the principles of statics and dynamics, providing a solid foundation in engineering mechanics.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Swh0zS6J#wzOWoZjficA_uSk9bpmYZkPLzFnCApAEpnRlKZRzV6Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Mechanics", "Statics", "Dynamics", "J.L. Meriam"]
      },
      {
        id: "Engr-22",
        title: "Rosen Discrete Mathematics and Applications 7th Edition",
        description: "A foundational text on discrete mathematics, essential for computer science and engineering, covering logic, sets, and graph theory.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/2t4ViYTb#_2Y9vHprNnw_9zSbCebd6un92CM1rB7_3GX9gfGL5CA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Mathematics", "Discrete Math", "Computer Science", "Rosen"]
      },
      {
        id: "Engr-23",
        title: "Surveying And Levelling By N.N. Basak Edition 2",
        description: "A comprehensive textbook on the principles and practices of surveying and levelling for civil engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/3pYllDbK#9KxuoFb76vBNpfsnQiSUPHRRDPfIrQOpW6LXtEO_cIA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Civil Engineering", "Surveying", "Levelling", "N.N. Basak"]
      },
      {
        id: "Engr-24",
        title: "Floyd Digital Fundamentals",
        description: "A comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/z0hXiagD#aAeN4W-A0BOdxtmQIJN6ikDoY6HidSxRSUOpKYiboig",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "Computer"]
      },
      {
        id: "Engr-25",
        title: "Digital Design With an Introduction to the Verilog HDL",
        description: "A comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/K1QG3IRY#Xa1f7zmp9FvFupXUPZ3hu2wxgcwIG8GK_xqQYjuLBD8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "DLD"]
      },
      {
        id: "Engr-26",
        title: "Advanced Digital Design With the Verilog HDL, Michael D. Ciletti, 2nd Edition",
        description: "A comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jp4XDaqR#GgxxpY7h7xK2HIn4vaOjA1cmvRwkFKbSlujQXrBsaZ8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "DLD"]
      },
      {
        id: "Engr-27",
        title: "Verilog HDL, A Guide to Digital Design by S. Palnitkar",
        description: "A comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/DgIxnISZ#OU5NuYbPOjR2-8y8tt7jwimbYIXfCMdDLGx4wFOehnc",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "DLD"]
      },
      {
        id: "Engr-28",
        title: "Solution Manual Electronic Devices Thomas Floyd 9th Edition",
        description: "A Comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/ftgRAKRb#fLdYLZMZpi_ZV10o7A9btgE3Pb_izfsywOeN1htAKps",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "Design"]
      },
      {
        id: "Engr-29",
        title: "Solution Digital_Design_With_An_Introduction_to_the Verilog HDL, M. Mano, M. ciletti, 5th Ed, Pearson",
        description: "A Comprehensive textbook on the principles and practices of Circuit Devices for Computer and Electrical engineers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/fkZjwIja#5hJmKa_o7FWSoBXN8gNoKf5v5Wu_UwbjpNrffz05URE",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Advance",
        tags: ["Electrical Engineering", "Circuit", "DLD"]
      },
      {
        id: "Engr-30",
        title: "Introduction To Probability",
        description: "A foundational textbook covering probability theory, random variables, distributions, and statistical applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GkZ0hSgS#oF8OFguVFGxZNUlGVc_RAuTl_579CsckIJi9_8-_RNU",
        previewAvailable: false,
        rating: 4.7,
        downloads: 0,
        difficulty: "Intermediate",
        tags: ["Mathematics", "Probability", "Statistics"]
      },
      {
        id: "Engr-31",
        title: "Database System Concepts by Jeffrey D. Ullman",
        description: "A detailed guide to database systems including relational models, SQL, normalization, transaction management, and system implementation.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/WwxXTLBK#wsUIK9zhLO-a3cFP2T_aTd1WP6T_p2CH0Nvu-sxl3NQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 0,
        difficulty: "Advance",
        tags: ["Computer Science", "Database Systems", "SQL", "Jeffrey D. Ullman"]
      },
      {
        id: "Engr-32",
        title: "Linear Algebra and Its Applications by David C. Lay",
        description: "Comprehensive coverage of linear algebra concepts including matrices, vector spaces, eigenvalues, and real-world applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jggQnbyQ#jOXV4ZacrBYBT_tTmFMOcW-sxoCvy_tBy3dE5I3RKQk",
        previewAvailable: false,
        rating: 4.9,
        downloads: 0,
        difficulty: "Intermediate",
        tags: ["Mathematics", "Linear Algebra", "Engineering Mathematics", "David C. Lay"]
      },
      {
        id: "Engr-33",
        title: "Solutions Manual for Linear Algebra and Its Applications",
        description: "Step-by-step solutions and explanations for selected problems from Linear Algebra and Its Applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OhYnGLya#u7qMg9qPtwny1PJJmvOZllctGW5ymD1DnM3uMKmdDgY",
        previewAvailable: false,
        rating: 4.6,
        downloads: 0,
        difficulty: "Advance",
        tags: ["Mathematics", "Linear Algebra", "Solutions Manual"]
      },
      {
        id: "Engr-34",
        title: "Assembly Language for x86 Processors (6th Edition) by Kip Irvine",
        description: "An in-depth textbook covering x86 assembly language programming, architecture, low-level debugging, and system-level concepts.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/qxRnCQyQ#w4qE99a588RWYfPL2LR155Izs0d5M-T9p8qOfS6MwlA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 0,
        difficulty: "Advance",
        tags: ["Computer Engineering", "Assembly Language", "x86", "Kip Irvine"]
      }
    ]
  },
  {
    id: "Medical",
    title: "Medical",
    description: "Books available here for medical study and learning concept",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    resourceCount: 15,
    resources: [
      {
        id: "med-1",
        title: "(Patho) Medium Robbins Basic Pathology (10th Edition)",
        description: "Comprehensive book for Pathology covering fundamental concepts and clinical applications.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/XlhRTYrS#6wCQezEhvFhhSS2DL18lb611td45LX17Hh5MIGtX_OA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Pathology"]
      },
      {
        id: "med-2",
        title: "Aymon Blog Instruments",
        description: "Comprehensive guide to medical instruments and their applications in clinical practice.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Lg5lXRwZ#QcwYMcWtuetZO7tsdbHgC1Kgt0wfDlgNaW86dP5qvt8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Instrument"]
      },
      {
        id: "med-3",
        title: "C._Med_Park",
        description: "Comprehensive book for medical study covering essential medical concepts and practices.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O4g1iZ5S#pmJNi53RJUJjV7sUihZcr4UgUjv60UNNlaMmIIb1ROA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-4",
        title: "Dhingra_ENT_",
        description: "Comprehensive ENT (Ear, Nose, Throat) medical textbook for students and practitioners.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/O4g1iZ5S#pmJNi53RJUJjV7sUihZcr4UgUjv60UNNlaMmIIb1ROA",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-5",
        title: "Drugs used in ophthalmology",
        description: "Comprehensive guide to pharmaceutical drugs used in ophthalmology practice.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/TwJCVaBY#AIzLNDIYTaZaXZCzI0nwPTeWWV8nMYSJt-holuPJXTU",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-6",
        title: "Excel_Community_Medicine_13th_edition-1",
        description: "Comprehensive textbook for community medicine covering public health concepts.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/fw4SlSJC#vmPz_CdbcS8d-NfzhzyBivQRRvbO_NhtJCsXkRlUwZ0",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-7",
        title: "Eye Methods",
        description: "Comprehensive book for Eye study covering examination techniques and diagnostic methods.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GsYXyarA#DmJD8hPzEboMkCQevGeZwNbXkyiak29Htk6wtV_PL1k",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Pathology"]
      },
      {
        id: "med-8",
        title: "Eye ospe 2",
        description: "OSPE (Objective Structured Practical Examination) guide for ophthalmology students.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/K4gW3a5Z#js0LDp_jJV-fpZvanltOiH7f9K0sSSou7lOzmThaRuk",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-9",
        title: "Eye Ospe 3",
        description: "Advanced OSPE guide for ophthalmology with practical examination scenarios.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/axIkxAgD#DbANPm_cabxLWVtwM5i1DUGB79OMnR1Z0USNRfEiWxg",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-10",
        title: "Eye Ospe 4",
        description: "Comprehensive OSPE preparation guide for ophthalmology examinations.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Cg5EUbwb#YxPqKziytfIEd03--LO3bJ_tQs6Pku8NUTJ4s8Ru4w8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-11",
        title: "EYE Pharmacological drugs",
        description: "Detailed guide to pharmacological drugs used in ophthalmology treatment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/nthlnAAR#EmgaDIaNQMsshY28DJFE5nhnpU8MoE_mKKglMJ_HjLQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-12",
        title: "(Jatoi) Clinical Ophthomolgy_7th_edition",
        description: "Clinical ophthalmology textbook covering diagnosis and treatment of eye diseases.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/78oB3DYQ#XgkP08vJH9Xin33Z1DJjXP6smKOQsIOlTChjXpwLc_w",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-13",
        title: "Pathoma_Fundamentals_of_Pathology_2021_Edition",
        description: "Fundamental concepts of pathology explained in a clear and concise manner.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/S051TagB#qjERdTqNZIZ0k0Jnba9-1qObMPZ5OBg7eOkSczI7oJM",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      },
      {
        id: "med-14",
        title: "Robbins_and_Cotran_Review_of_Pathology,_4th_Edition",
        description: "Comprehensive review of pathology concepts with case studies and examples.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/jgZizYoK#hsYQNdtRuNTuqGSZJdzxnqDSIjZYthET9s99HDHw_2Y",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Fundamental", "Medical"]
      }
    ]
  },
  {
    id: "Business",
    title: "Business",
    description: "Business study books provide insights into management, marketing, finance, and entrepreneurship to build real-world business understanding.",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    resourceCount: 1,
    resources: [
      {
        id: "business-1",
        title: "Principles of Economy Edition 10",
        description: "This book helps to understand the economy of any country with fundamental economic principles.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/j0hwUKQJ#p97xWr4r-0haW5XJdfKx1DY1hTT3ZcDZLH_2F0aQgjQ",
        previewAvailable: false,
        rating: 4.8,
        downloads: 100,
        difficulty: "Intermediate",
        tags: ["Economy", "Fundamental"]
      }
    ]
  },
  {
    id: "Law",
    title: "Study of Law",
    description: "Law study books cover legal principles, case studies, and judicial systems to build a strong foundation in legal education.",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    resourceCount: 14,
    resources: [
      {
        id: "law-01",
        title: "Dictionary of Law",
        description: "An essential reference for legal terminology, providing clear definitions for thousands of legal terms.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/X55hxaqJ#5O3R7rUzxmR2OJ2lioqnm2f-3pFfke3SqEhZtU7UjCs",
        previewAvailable: true,
        rating: 4.7,
        downloads: 120,
        difficulty: "Advance",
        tags: ["Law", "Legal System", "Principles"]
      },
      {
        id: "law-02",
        title: "English Vocabulary for Law",
        description: "Build a strong foundation in legal English with this guide to vocabulary for documents, contracts, and court proceedings.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/es4WwLaR#kd7wnJbYE72HVSsoiL45mj5JmisrRkWm-wvlEjzg6V8",
        previewAvailable: false,
        rating: 4.8,
        downloads: 95,
        difficulty: "Advanced",
        tags: ["Constitution", "Cases", "Policies"]
      },
      {
        id: "law-03",
        title: "Constitutional-and-Administrative-law",
        description: "Explore core principles of constitutional and administrative law, covering government structure and judicial review.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/a0Zg1aIZ#SGp5dYHEi0OIasPWHqichWgvYAosFNLQJp60gmn_O2E",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-04",
        title: "Constitutional-Law",
        description: "A detailed examination of the fundamental principles of constitutional law, focusing on interpretation and citizen rights.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rhxH0AIC#47gwxSDG6fW51i_dpL4GbkXSncTH7aK30GBVuULyNTQ",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-05",
        title: "Criminal-Law",
        description: "An in-depth study of the principles of criminal law, including offenses, defenses, and theories of punishment.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/zgBUGbCa#5RVvB616_JMqt69yR-qWYNR-Cs3ghfkCgCKgKbs0HQA",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-06",
        title: "Equity-and-Law",
        description: "Understand the relationship between equity and common law, exploring equitable doctrines and remedies.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/WkIj3Rqa#ad7LtaiSnG0C9KvsUfGJieuZkTxDgcP3g5IQHI5r04Y",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-07",
        title: "Islamic-Jurisprudence",
        description: "An introduction to the principles and theories of Islamic law (Sharia), covering its sources and methodology.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/P1BhxCIC#vem7zAtnuuuRyjbiVpsYaZyTm0YeKXBV4POjgGOXSVo",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-08",
        title: "Mercantile-Law",
        description: "A guide to commercial and business law, covering topics like contracts, sales of goods, and partnerships.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/rwIG2KhD#AFpWTFaQYknDdFGWXAFOYX6R9r2AMsNxxkukp3Far7c",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-09",
        title: "Principles-of-Equity",
        description: "A focused study on the core maxims and principles of equity, detailing their historical development and relevance.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/OpxTzbLK#YJBQYAnY8m6bCuQzeU13my9OUNow5U0pPHUtSQCruT4",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-10",
        title: "Principles-of-Islamic-jurisprudence",
        description: "Delve into the foundational principles (Usul al-Fiqh) of Islamic jurisprudence and how legal rulings are derived.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/GpxhXRaQ#VhDxCeQkpMgvp2L9d2rdpyWfeeengvYzw01q8DIcDUs",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-11",
        title: "Transfer-of-Property-Act",
        description: "A detailed analysis of the Transfer of Property Act, covering the legal rules governing property transfers.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/7sZVDSiS#QYfJt6fY2DE-WOwvwyyq6vRnAu3E_p-nmR10y2hgeLc",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
      {
        id: "law-12",
        title: "Trust-Act-law",
        description: "A comprehensive guide to the law of trusts, explaining their creation, administration, and termination.",
        format: "PDF",
        downloadLink: "https://mega.nz/file/Os4QhSRJ#wcWY3kTsdNqJu0YBHQmZLeu4_0QXvhIjZBwIiD2BY_Y",
        previewAvailable: true,
        rating: 4.6,
        downloads: 80,
        difficulty: "Intermediate",
        tags: ["Criminal Law", "Cases", "Theory"]
      },
    ]
  },
  {
    id: "Science",
    title: "Sciences",
    description: "Science study books explore concepts in physics, chemistry, and biology to deepen understanding of the natural world.",
    icon: BookOpen,
    color: " ",
    bgPattern: "ed-tint    ",
    resourceCount: 0,
    resources: []
  }
];

const ScholarlyVault = (): JSX.Element => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

  // Read ?category=... from URL and auto-select if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && categories.some(c => c.id === cat)) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const filteredResources = selectedCategoryData?.resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty = filterDifficulty === "All" || resource.difficulty === filterDifficulty;

    return matchesSearch && matchesDifficulty;
  }) || [];

  const handleDownload = (downloadLink: string, title: string) => {
    window.open(downloadLink, '_blank');
  };

  const handlePreview = (resource: Resource) => {
    alert(`Preview for ${resource.title} would open here`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'ed-tint text-green-800  ';
      case 'Intermediate': return 'ed-tint text-yellow-800  ';
      case 'Advanced': return 'bg-red-100 text-red-800  ';
      default: return 'ed-canvas ed-ink  ';
    }
  };

  if (selectedCategory && selectedCategoryData) {
    return (
      <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
        <HeroSection />

        <div className={`flex flex-col w-full items-center ${selectedCategoryData.bgPattern} transition-colors duration-300 min-h-screen`}>
          <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Back to Categories</span>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint ${selectedCategoryData.color} ed-elevation mb-6`}>
                <selectedCategoryData.icon className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
                {selectedCategoryData.title}
              </h1>
              <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
                {selectedCategoryData.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <FileText className="w-5 h-5 ed-muted " />
                  <span className="font-semibold ed-ink ">{selectedCategoryData.resourceCount}</span>
                  <span className="ed-muted ">Resources</span>
                </div>
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <Users className="w-5 h-5 ed-muted " />
                  <span className="font-semibold ed-ink ">5K+</span>
                  <span className="ed-muted ">Downloads</span>
                </div>
                <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold ed-ink ">4.8</span>
                  <span className="ed-muted ">Rating</span>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="ed-surface  backdrop-blur-sm rounded-2xl p-6 ed-elevation border border-white/50  mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ed-muted" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 ed-surface  border ed-border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 ed-muted" />
                  <select
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="px-4 py-3 ed-surface  border ed-border  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="All">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="ed-surface  backdrop-blur-sm rounded-2xl p-6 ed-elevation border border-white/50  ed-hover-shadow transition-all duration-300 transform ed-lift"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 ed-tint  rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 ed-link " />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium ed-ink ">{resource.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg ed-ink  ed-type mb-2 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-sm ed-muted  leading-relaxed mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 ed-canvas  text-xs font-medium ed-muted  rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* File Info */}
                  <div className="flex items-center justify-between text-sm ed-muted  mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{resource.format}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(resource.downloadLink, resource.title)}
                      className="flex-1 flex items-center justify-center gap-2 ed-accent ed-hover-surface text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ed-lift"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    {resource.previewAvailable && (
                      <button
                        onClick={() => handlePreview(resource)}
                        className="flex items-center justify-center gap-2 ed-canvas  ed-hover-surface  ed-ink  px-4 py-2 rounded-xl font-medium transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => window.open(resource.downloadLink, '_blank')}
                      className="flex items-center justify-center gap-2 ed-canvas  ed-hover-surface  ed-ink  px-4 py-2 rounded-xl font-medium transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 ed-canvas  rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 ed-muted" />
                </div>
                <h3 className="text-xl font-semibold ed-ink  mb-2">No resources found</h3>
                <p className="ed-muted ">Try adjusting your search terms or filters</p>
              </div>
            )}
          </section>
        </div>

        <FooterSection />
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center ed-tint       transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Explore</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <div className="w-10 h-10 ed-surface rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Scholarly Vault
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive collection of academic books and resources across various fields of study.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <Users className="w-5 h-5 ed-muted " />
                <span className="font-semibold ed-ink ">5K+</span>
                <span className="ed-muted ">Students</span>
              </div>
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <FileText className="w-5 h-5 ed-muted " />
                <span className="font-semibold ed-ink ">26</span>
                <span className="ed-muted ">Resources</span>
              </div>
              <div className="flex items-center gap-2 ed-surface  backdrop-blur-sm rounded-full px-4 py-2 ed-elevation">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold ed-ink ">4.8</span>
                <span className="ed-muted ">Rating</span>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative ${category.bgPattern} rounded-xl p-6 lg:p-8 ed-elevation ed-hover-shadow transition-all duration-500 transform ed-lift cursor-pointer border border-white/50  backdrop-blur-sm overflow-hidden`}
                 role="button" tabIndex={0} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); event.currentTarget.click(); } }}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div className="absolute inset-0 ed-tint    transform rotate-12 scale-150" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon and Count */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ed-tint ${category.color} flex items-center justify-center ed-elevation ed-hover-shadow transition-all duration-300 ed-lift`}>
                        <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>

                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold ed-surface  ed-ink  border ed-border  shadow-sm transition-all duration-300">
                        {category.resourceCount} Resources
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-grow mb-6">
                      <h3 className="font-bold text-xl lg:text-2xl ed-ink  ed-type mb-3 leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm lg:text-base ed-muted  leading-relaxed line-clamp-3">
                        {category.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 ed-ink  font-medium ed-group-ink  transition-colors duration-300">
                        <span>Explore Resources</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 ed-tint   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center">
            <div className="ed-tint    rounded-xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 ed-tint    transform -rotate-12 scale-150" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ed-type">
                  Ready to Expand Your Knowledge?
                </h2>
                <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Explore our comprehensive collection of academic resources and take your learning to the next level.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="ed-surface ed-ink px-8 py-4 rounded-xl font-bold text-lg ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation">
                    Start Exploring
                  </button>
                  <Link to="/explore" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg ed-hover-surface ed-hover-ink transition-all duration-300 transform ed-lift">
                    View All Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};

export default ScholarlyVault;
