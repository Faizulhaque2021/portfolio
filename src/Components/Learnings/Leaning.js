import React from 'react';
import './Learning.css'
import { FaGraduationCap } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Leaning = () => {
  return(
    <div className='shadow-xl'> 
    <div id='education'>
        <section id='education' class="py-28 aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> 
              <h1 class="text-4xl text-center text-orange-600 font-bold uppercase titlehead aos-init" data-aos="fade-right">Education</h1>
              <h2 class="text-center font-bold text-4xl my-3 aos-init" data-aos="fade-left">Educational Qualifications</h2>
        </section>
  </div>
<VerticalTimeline>
<VerticalTimelineElement
    className='timeline'
    contentStyle={{
        background: "var(--color-bg-variant)",
       // color: "#fff",
    }}
    contentArrowStyle={{
        borderRight: "7px solid var(--color-bg-variant)",
    }}
    date="2018 - 2019"
    iconStyle={{
        background: "var(--color-bg-variant)",
        color: "var()",
    }}
    icon={<FaGraduationCap />}
    >
        <h3 className="text-xl" data-aos="fade-right">
          Diploma in Enterprise Systems <br/> Analysis & Design
        </h3>
        <h5 className="" data-aos="fade-right">ISDB-BISEW IT Scholarship Project</h5>
        <h5 className="" data-aos="fade-right">Round:39</h5>
        <p className="text-light" data-aos="fade-left"></p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className='timeline'
    contentStyle={{
        background: "var(--color-bg-variant)",
       // color: "#fff",
    }}
    contentArrowStyle={{
        borderRight: "7px solid var(--color-bg-variant)",
    }}
    date="2006 - 2010"
    iconStyle={{
        background: "var(--color-bg-variant)",
        color: "var()",
    }}
    icon={<FaGraduationCap />}
    >
        <h3 className="text-xl" data-aos="fade-right">
            B.S.S (Hon&apos;s) in Sociology
        </h3>
        <h5 className="" data-aos="fade-right">National University</h5>
        <h5 className="" data-aos="fade-right">Victoria Govt. College</h5>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className='timeline'
    contentStyle={{
        background: "var(--color-bg-variant)",
        // color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid var(--color-bg-variant)",
      }}
      date="2004 - 2006"
      iconStyle={{
        //background: "var(--color-bg-variant)",
        color: "var(--color-white)",
      }} 
      icon={<FaGraduationCap />}
    >
          <h3 className="text-xl" data-aos="fade-right">H.S.C</h3>
          <h5 className="" data-aos="fade-right">Victoria Govt. College</h5>
          <p className="text-light" data-aos="fade-left">
             I started to wondering how a website is built. So, started to learn HTML & CSS. I can still how I
            felt after seeing the Hello World! in Chrome.
          </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="timeline" 
      contentStyle={{
        background: "var(--color-bg-variant)",
        // color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid var(--color-bg-variant)",
      }}
      date="2001 - 2002"
      iconStyle={{
        background: "var(--color-bg-variant)",
        color: "var(--color-white)",
      }}
      icon={<FaGraduationCap />}
    >
          <h3 className="text-xl" data-aos="fade-right">S.S.C</h3>
          <h5 className="" data-aos="fade-right">Ibn Timiya School & College</h5>
          <p className="text-light" data-aos="fade-left">
            I always want to learn and implement newer
            things. <br/> I was a very quick learner.
          </p>
    </VerticalTimelineElement>
</VerticalTimeline>
</div>
  )
};

export default Leaning;

