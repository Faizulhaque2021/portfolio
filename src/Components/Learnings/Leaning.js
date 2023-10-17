import React from 'react';
import './Learning.css'
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Leaning = () => {
  return(
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
    date="2010 - 2012"
    iconStyle={{
        background: "var(--color-bg-variant)",
        color: "var()",
    }}
    >
        <h3 className="text-xl" data-aos="fade-right">
            M.S.S (MS&apos;s) in Sociology
        </h3>
        <h5 className="" data-aos="fade-right">National University</h5>
        <h5 className="" data-aos="fade-right">Victoria Govt. College</h5>
        <p className="text-light" data-aos="fade-left">
            I&apos; 
            I&apos;
        </p>
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
    >
        <h3 className="text-xl" data-aos="fade-right">
            B.S.S (Hon&apos;s) in Sociology
        </h3>
        <h5 className="" data-aos="fade-right">National University</h5>
        <h5 className="" data-aos="fade-right">Victoria Govt. College</h5>
        <p className="text-light" data-aos="fade-left">
            I&apos;Had keen interest on robotics
            but it turned out that I&apos;m much interested and attracted towards
            programming.
        </p>
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
        background: "var(--color-bg-variant)",
        color: "var(--color-white)",
      }} 
    >
          <h3 className="text-xl" data-aos="fade-right">Higher Secondary School Certificate</h3>
          <h5 className="" data-aos="fade-right">Victoria Govt. College</h5>
          <p className="text-light" data-aos="fade-left">
            Huminities Group, HSC batch of 2006. I started to wondering how a
            website is built. So, started to learn HTML & CSS. I can still how I
            felt after seeing the Hello World! in Chrome.
          </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className=" timeline"
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
    >
          <h3 className="text-xl" data-aos="fade-right">Secondary School Certificate</h3>
          <h5 className="" data-aos="fade-right">Ibn Timiya School & College</h5>
          <p className="text-light" data-aos="fade-left">
            Science Group, SSC batch of 2002. 
            I always want to learn and implement newer
            things. I was a very quick learner.
          </p>
    </VerticalTimelineElement>
</VerticalTimeline>
  )
};

export default Leaning;

