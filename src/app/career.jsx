"use client";

import React, { useState } from "react";
import { ArrowRight, HouseIcon } from "lucide-react";
import { Briefcase, Users } from "lucide-react";
import { Award, Target } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock, Heart, Plane } from "lucide-react";
import { GraduationCap, Coffee, Zap, Shield, Mail, Phone } from "lucide-react";

export const CareerSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex pt-20 flex-col items-center justify-center bg-green-50">
        <div className="bg-gray-200  rounded-lg flex items-center mb-6 gap-2 mx-auto px-2 py-1 mt-6 ">
          <HouseIcon className="w-3 h-3 font-bold" strokeWidth={3} />
          <p className="font-medium text-xs">Join Our Growing Team</p>
        </div>
        <p className="text-base mb-6 font-medium">Build the Future with Us</p>
        <p className="max-w-[600px] text-center text-xl text-gray-500 mb-7">
          We're looking for passionate, creative people to join our mission of
          building amazing products that make a difference in the world.
        </p>

        <div className="flex flex-col items-center gap-4 mb-18 md:flex-row">
          <button className="flex items-center bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-400 gap-2 px-4 py-2">
            <Briefcase className="w-4 h-4" />
            View Open Positions
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center text-sm font-medium rounded-md hover:bg-gray-200 px-7 py-2 border border-gray-300 ">
            {" "}
            Learn About Our Culture
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center flex flex-col mb-12">
        <div className="max-w-[650px] text-center mb-12 mt-12">
          <h1 className="text-xl font-medium mb-6">Our Values</h1>
          <p className="text-gray-500">
            These principles guide everything we do and helps us build a culture
            where everyone can thrive.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 flex flex-col md:flex-row">
          <div className="flex items-center gap-2 text-center max-w-[360px] border border-gray-200 rounded-lg flex flex-col p-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-10 ">
              <Users className="w-8 h-8" />
            </div>
            <div className="mb-10 ">Collaboration</div>
            <p className="text-gray-500">
              We believe the best solutions come from diverse perspectives
              working together towards a commom goal.
            </p>
          </div>

          <div className="flex items-center gap-2 text-center max-w-[360px] border border-gray-200 rounded-lg flex flex-col p-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-10 ">
              <Award className="w-8 h-8" />
            </div>
            <div className="mb-10 ">Excellence</div>
            <p className="text-gray-500">
              We strive for excellence in everything we do, continuously
              learning and improving our craft.
            </p>
          </div>

          <div className="flex items-center gap-2 text-center max-w-[360px] border border-gray-200 rounded-lg flex flex-col p-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-10 ">
              <Target className="w-8 h-8" />
            </div>
            <div className="mb-10 ">Impact</div>
            <p className="text-gray-500">
              We focus on creating meaningful impact for our users, our teams,
              and the broader community.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  p-27 gap-6">
        <h1 className="text-xl font-medium mb-4">Open Positions</h1>
        <p className="text-gray-500 mb-12">
          Find your next opportunity and join a team that's passionate about
          making a difference.
        </p>

        <div className="flex flex-col w-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-between">
            <h2 className="font-medium">Sales Development Representative</h2>
            <div className="text-xs rounded-lg px-4 py-1 bg-gray-200  font-medium mt-2">
              Sales
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Full-time</span>
            </div>
          </div>

          <p className="text-gray-500 mb-2">
            Generate and qualify leads to support our sales team in achieving
            revenue targets.
          </p>
          <p className="pb-2">Key Requirements:</p>
          <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
            <li>1-3 years of sales experience</li>
            <li>Excellent communication skills</li>
            <li>CRM experience (Salesforce preferred)</li>
          </ul>

          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Posted 4 days ago</p>
            <button className="bg-orange-500 rounded-sm text-white px-4 py-1 hover:bg-orange-400">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-between">
            <h2 className="font-medium">Settlement Specialist</h2>
            <div className="text-xs rounded-lg px-4 py-1 bg-gray-200 font-medium mt-2">
              Operations
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center  gap-1">
              <MapPin className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Full-time</span>
            </div>
          </div>

          <p className="text-gray-500 mb-2">
            Facilitate secure, efficient, and accurate transaction settlements
          </p>
          <p className="pb-2">Key Requirements:</p>
          <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
            <li>2+ years in financial operations</li>
            <li>Strong analytical skills</li>
            <li>Experience with payment systems</li>
          </ul>

          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Posted 2 days ago</p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-1 rounded-sm">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-between">
            <h2 className="font-medium">Frontend Developer</h2>
            <div className="text-xs rounded-lg px-4 py-1 bg-gray-200 font-medium mt-2">
              Engineering
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center  gap-1">
              <MapPin className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Full-time</span>
            </div>
          </div>

          <p className="text-gray-500 mb-2">
            Join our frontend team to build amazing user experience using React,
            Typescript, and modern web technologies.
          </p>
          <p className="pb-2">Key Requirements:</p>
          <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
            <li>4+ years of React experience</li>
            <li>Strong TypeScript skills</li>
            <li>Experience with modern CSS frameworks</li>
          </ul>

          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Posted 1 week ago</p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-1 rounded-sm">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-between">
            <h2 className="font-medium">Backend Developer</h2>
            <div className="text-xs rounded-lg px-4 py-1 bg-gray-200 font-medium mt-2">
              Engineering
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center  gap-1">
              <MapPin className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" strokeWidth={2} />
              <span className="text-gray-500">Full-time</span>
            </div>
          </div>

          <p className="text-gray-500 mb-2">
            Design, develop, and maintain scalable, efficient, and secure APIs
          </p>
          <p className="pb-2">Key Requirements:</p>
          <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
            <li>5+ years in Java, Python, or Ruby</li>
            <li>Knowledge of APIs design and development</li>
            <li>Experience with database management systems</li>
          </ul>

          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Posted 2 days ago</p>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-1 rounded-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-35 text-center">
        <div className="mb-6">
          <h2 className="text-xl mb-4 font-medium">Why Work With Us?</h2>
          <p className="text-gray-500 max-w-[650px] mb-4">
            We believe in taking care of our team members so they can do their
            best work and enjoy life outside of work too.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pb-6">
          {" "}
          {/* might put in padding here */}
          <div className="flex items-center text-center border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[260px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="mb-5 text-lg">Health & Wellness</h2>
            <p className="text-gray-500">
              Comprehensive health insurance, dental, and vision coverage for
              you and your family.
            </p>
          </div>
          <div className="flex items-center text-center border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[260px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-5">
              <Plane className="w-6 h-6" />
            </div>
            <h2 className="mb-5 text-lg">Time Off</h2>
            <p className="text-gray-500">
              Generous PTO, paid holidays, and sabbatical opportunities for
              long-term employees.
            </p>
          </div>
          <div className="flex items-center text-center  border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[260px] ">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="mb-5 text-lg">Learning & Development</h2>
            <p className="text-gray-500">
              Annual learning budget, conference attendance, and internal
              training programs.
            </p>
          </div>
          <div className="flex items-center text-center  border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[260px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
              <Coffee className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="mb-5 text-lg">Work Environment</h2>
            <p className="text-gray-500">
              Modern offices, free meals, snacks, and premium coffee in all
              locations.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="border border-gray-200 rounded-lg flex items-center text-center w-[280px] h-[240px] flex flex-col p-6">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-500 flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-lg mb-5">Team Building</h2>
            <p className="text-gray-500">
              Regular team events, annual company retreats, and social
              activities.
            </p>
          </div>

          <div className="flex items-center text-center  border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[240px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5 text-green-500">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="mb-5 text-lg">Innovation Time</h2>
            <p className="text-gray-500">
              20% time for personal projects and innovation initiatives.
            </p>
          </div>

          <div className="flex items-center text-center  border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[240px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5 text-green-500">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="mb-5 text-lg">Financial Security</h2>
            <p className="text-gray-500">
              Competitive salary, equity options, and comprehensive retirement
              planning.
            </p>
          </div>

          <div className="flex items-center text-center border border-gray-200 rounded-lg flex flex-col p-6 w-[280px] h-[240px]">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5 text-green-500">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="mb-5 text-lg">Work-Life Balance</h2>
            <p className="text-gray-500">
              Flexible working hours, and family friendly policies.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex flex-col text-center mb-30">
        <h2 className="text-lg font-medium mb-4">Our Hiring Process</h2>
        <p className="text-gray-500 max-w-[620px] mb-10">
          We've designed our hiring process to be transparent, efficient, and
          focused on finding the right fit for both you and our team.
        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center flex flex-col p-4 ">
            <div className="w-10 h-10 flex items-center justify-center text-white bg-green-500 rounded-full mb-4">
              1
            </div>
            <h3 className="font-medium mb-2">Application</h3>
            <p className="text-gray-500 max-w-[270px]">
              Submit your application and we'll review it within 2 business
              days.
            </p>
          </div>

          <div className="flex items-center justify-center flex flex-col p-4 ">
            <div className="w-10 h-10 flex items-center justify-center text-white bg-green-500 rounded-full mb-4">
              2
            </div>
            <h3 className="font-medium mb-2">Phone Screen</h3>
            <p className="text-gray-500 max-w-[270px]">
              Quick 30-minute call to discuss your background and the role.
            </p>
          </div>
          <div className="flex items-center justify-center flex flex-col p-4 ">
            <div className="w-10 h-10 flex items-center justify-center text-white bg-green-500 rounded-full mb-4">
              3
            </div>
            <h3 className="font-medium mb-2">Technical Interview</h3>
            <p className="text-gray-500 max-w-[270px]">
              Deep dive into your skills with relevant team members.
            </p>
          </div>
          <div className="flex items-center justify-center flex flex-col p-4 ">
            <div className="w-10 h-10 flex items-center justify-center text-white bg-green-500 rounded-full mb-4">
              4
            </div>
            <h3 className="font-medium mb-2">Final Interview</h3>
            <p className="text-gray-500 max-w-[270px]">
              Meet the team and leadership to ensure cultural fit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center flex flex-col mb-20 gap-3">
        <h2 className="text-lg font-medium mb-4">Questions?</h2>
        <p className="text-gray-500 max-w-[630px] text-center mb-12">
          Don't see the perfect role? Have questions about our company or
          culture? We'de love to hear from you.
        </p>

        <div className="flex items-center border border-gray-200 rounded-lg p-6 pt-6 w-[460px] h-[130px]">
          <div className="flex items center gap-3 ">
            <div className="bg-green-100 text-green-500 flex items-center justify-center w-12 h-12 rounded-lg ">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-medium">Email Us</h2>
              <p className="text-gray-500 mb-2">
                <a href="helpdesk@globalpayng.com">helpdesk@globalpayng.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center border border-gray-200 rounded-lg p-6 pt-6 w-[460px] h-[130px]">
          <div className="flex items center gap-3 ">
            <div className="bg-green-100 text-green-500 flex items-center justify-center w-12 h-12 rounded-lg ">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-medium">Call Us</h2>
              <p className="text-gray-500 mb-2">091-3000-0320</p>
            </div>
          </div>
        </div>

        <div className="flex items-center border border-gray-200 rounded-lg p-6 pt-6 w-[460px] h-[130px]">
          <div className="flex items center gap-3 ">
            <div className="bg-green-100 text-green-500 flex items-center justify-center w-12 h-12 rounded-lg ">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-medium">Visit Us</h2>
              <p className="text-gray-500 mb-2">
                5A Sogunle Street, Ikeja, Lagos Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
