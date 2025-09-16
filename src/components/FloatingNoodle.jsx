// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// // import noodleImg from "../assets/images/single-pasta.png"; // your noodle image
// import noodleVideo from "../assets/noodlevideo.mp4"; // your video file



// gsap.registerPlugin(MotionPathPlugin);

// const FloatingNoodles = () => {
//   const noodleLeftRef = useRef(null);
//   const noodleRightRef = useRef(null);

//   useEffect(() => {
//     // Left → Right noodle (wavy motion path)
//     gsap.to(noodleLeftRef.current, {
//       duration: 15,
//       repeat: -1,
//       ease: "linear",
//       motionPath: {
//         path: [
//           { x: -200, y: 0 },
//           { x: 200, y: 40 },
//           { x: 400, y: -40 },
//           { x: 600, y: 40 },
//           { x: window.innerWidth + 200, y: 0 },
//         ],
//         curviness: 1.5,
//       },
//     });

//     // Right → Left noodle (reverse direction, wavy)
//     gsap.to(noodleRightRef.current, {
//       duration: 18,
//       repeat: -1,
//       ease: "linear",
//       motionPath: {
//         path: [
//           { x: window.innerWidth + 200, y: 0 },
//           { x: 600, y: -40 },
//           { x: 400, y: 40 },
//           { x: 200, y: -40 },
//           { x: -200, y: 0 },
//         ],
//         curviness: 1.5,
//       },
//     });
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Left → Right noodle */}
//       <video
//         ref={noodleLeftRef}
//         src={noodle}
//         alt="Noodle floating"
//         className="absolute top-1/3 left-0 w-[250px] opacity-70 mix-blend-screen"
//       />

//       {/* Right → Left noodle */}
//       <video
//         ref={noodleRightRef}
//         src={noodle}
//         alt="Noodle floating"
//         className="absolute top-2/3 right-0 w-[250px] opacity-70 mix-blend-screen"
//       />
//     </div>
//   );
// };

// export default FloatingNoodles;





// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// // import noodleVideo from "../assets/noodle.gif"; // your noodle video

// // gsap.registerPlugin(MotionPathPlugin);

// // const FloatingNoodles = () => {
// //   const noodleLeftRef = useRef(null);
// //   const noodleRightRef = useRef(null);

// //   useEffect(() => {
// //     // Left → Right noodle (wavy motion)
// //     gsap.to(noodleLeftRef.current, {
// //       duration: 15,
// //       repeat: -1,
// //       ease: "linear",
// //       motionPath: {
// //         path: [
// //           { x: -200, y: 0 },
// //           { x: 200, y: 40 },
// //           { x: 400, y: -40 },
// //           { x: 600, y: 40 },
// //           { x: window.innerWidth + 200, y: 0 },
// //         ],
// //         curviness: 1.5,
// //       },
// //     });

// //     // Right → Left noodle (reverse, wavy)
// //     gsap.to(noodleRightRef.current, {
// //       duration: 18,
// //       repeat: -1,
// //       ease: "linear",
// //       motionPath: {
// //         path: [
// //           { x: window.innerWidth + 200, y: 0 },
// //           { x: 600, y: -40 },
// //           { x: 400, y: 40 },
// //           { x: 200, y: -40 },
// //           { x: -200, y: 0 },
// //         ],
// //         curviness: 1.5,
// //       },
// //     });
// //   }, []);

// //   return (
// //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //       {/* Left → Right noodle */}
// //       <video
// //         ref={noodleLeftRef}
// //         src={noodleVideo}
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute top-1/3 left-0 w-[250px] opacity-80 mix-blend-lighten"
// //       />

// //       {/* Right → Left noodle */}
// //       <video
// //         ref={noodleRightRef}
// //         src={noodleVideo}
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         className="absolute top-2/3 right-0 w-[250px] opacity-80 mix-blend-lighten"
// //       />
// //     </div>
// //   );
// // };

// // export default FloatingNoodles;

























































import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import noodleImg from "../assets/noodle.gif"; // your noodle image

gsap.registerPlugin(MotionPathPlugin);

const FloatingNoodles = () => {
  const noodleLeftRef = useRef(null);
  const noodleRightRef = useRef(null);

  useEffect(() => {
    // Left → Right noodle (wavy motion path)
    gsap.to(noodleLeftRef.current, {
      duration: 15,
      repeat: -1,
      ease: "linear",
      motionPath: {
        path: [
          { x: -200, y: 0 },
          { x: 200, y: 40 },
          { x: 400, y: -40 },
          { x: 600, y: 40 },
          { x: window.innerWidth + 200, y: 0 },
        ],
        curviness: 1.5,
      },
    });

    // Right → Left noodle (reverse direction, wavy)
    gsap.to(noodleRightRef.current, {
      duration: 18,
      repeat: -1,
      ease: "linear",
      motionPath: {
        path: [
          { x: window.innerWidth + 200, y: 0 },
          { x: 600, y: -40 },
          { x: 400, y: 40 },
          { x: 200, y: -40 },
          { x: -200, y: 0 },
        ],
        curviness: 1.5,
      },
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left → Right noodle */}
      <img
        ref={noodleLeftRef}
        src={noodleImg}
        alt="Noodle floating"
        className="absolute top-1/3 left-0 w-[250px] opacity-70 mix-blend-screen"
      />

      {/* Right → Left noodle */}
      <img
        ref={noodleRightRef}
        src={noodleImg}
        alt="Noodle floating"
        className="absolute top-2/3 right-0 w-[250px] opacity-70 mix-blend-screen"
      />
    </div>
  );
};

export default FloatingNoodles;
