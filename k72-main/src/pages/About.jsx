import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const About = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    const team = teamRef.current;
    if (!team) return;

    const profileImagesContainer = team.querySelector(".profile-images");
    const profileImages = Array.from(team.querySelectorAll(".profile-images .img"));
    const nameElements = Array.from(team.querySelectorAll(".profile-names .name"));
    const nameHeadings = Array.from(team.querySelectorAll(".profile-names .name h1"));

    const splitInstances = [];

    // split headings into characters and add .letter class
    nameHeadings.forEach((heading) => {
      const split = new SplitText(heading, { type: "chars" });
      split.chars.forEach((char) => char.classList.add("letter"));
      splitInstances.push(split);
    });

    const defaultLetters = nameElements[0] ? Array.from(nameElements[0].querySelectorAll(".letter")) : [];

    // initial position for default letters
    if (defaultLetters.length) {
      gsap.set(defaultLetters, { y: "100%" });
    }

    const listeners = [];

    if (window.innerWidth >= 900) {
      profileImages.forEach((img, index) => {
        const correspondingName = nameElements[index + 1];
        if (!correspondingName) return;
        const letters = Array.from(correspondingName.querySelectorAll(".letter"));

        const onEnter = () => {
          gsap.to(img, {
            width: 140,
            height: 140,
            duration: 0.5,
            ease: "power4.out",
            force3D: true
          });

          gsap.to(letters, {
            y: "-100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
            force3D: true
          });
        };

        const onLeave = () => {
          gsap.to(img, {
            width: 70,
            height: 70,
            duration: 0.5,
            ease: "power4.out",
            force3D: true
          });

          gsap.to(letters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
            force3D: true
          });
        };

        img.addEventListener("mouseenter", onEnter);
        img.addEventListener("mouseleave", onLeave);
        listeners.push(() => {
          img.removeEventListener("mouseenter", onEnter);
          img.removeEventListener("mouseleave", onLeave);
        });
      });

      const containerEnter = () => {
        gsap.to(defaultLetters, {
          y: "0%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
          force3D: true
        });
      };

      const containerLeave = () => {
        gsap.to(defaultLetters, {
          y: "100%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
          force3D: true
        });
      };

      profileImagesContainer?.addEventListener("mouseenter", containerEnter);
      profileImagesContainer?.addEventListener("mouseleave", containerLeave);
      listeners.push(() => {
        profileImagesContainer?.removeEventListener("mouseenter", containerEnter);
        profileImagesContainer?.removeEventListener("mouseleave", containerLeave);
      });
    }

    // cleanup on unmount
    return () => {
      // remove DOM listeners
      listeners.forEach((off) => off());
      // revert SplitText changes
      splitInstances.forEach((s) => {
        try { s.revert(); } catch (e) { /* ignore */ }
      });
      // kill any running tweens related to elements
      try {
        gsap.killTweensOf(profileImages);
        gsap.killTweensOf(defaultLetters);
      } catch (e) { /* ignore */ }
    };
  }, []);

  return (
    <div>
      <section className="team" ref={teamRef}>
        <div className="profile-images">
          <div className="img"><img src="image1.jpeg" alt=""/></div>
          <div className="img"><img src="image2.jpeg" alt=""/></div>
          <div className="img"><img src="image3.jpeg" alt=""/></div>
          <div className="img"><img src="image8.jpeg" alt=""/></div>
          <div className="img"><img src="image4.jpeg" alt=""/></div>
          <div className="img"><img src="image5.jpeg" alt=""/></div>
          <div className="img"><img src="image6.jpeg" alt=""/></div>
          <div className="img"><img src="image7.jpeg" alt=""/></div>
        </div>

        <div className="profile-names">
          <div className="name default"><h1>The Squad</h1></div>
          <div className="name"><h1>Srinibas Das</h1></div>
          <div className="name"><h1>Sonakshi Pradhan</h1></div>
          <div className="name"><h1>Gyanaranjan Patra</h1></div>
          <div className="name"><h1>Narayan Agarwal</h1></div>
          <div className="name"><h1>Anurag Mahapatra</h1></div>
          <div className="name"><h1>K Suman Patra</h1></div>
          <div className="name"><h1>Dharmendra Mahanta</h1></div>
          <div className="name"><h1>Dipun Barik</h1></div>
          
        </div>
      </section>
    </div>
  )
}

export default About