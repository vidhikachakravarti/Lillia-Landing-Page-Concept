import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX / window.innerWidth;
      mouseY.current = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-neutral-50 via-white to-lillia-lighter/10" />

      {/* Dot grid pattern */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #7848FE 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated gradient orbs with parallax */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Large purple blob - top right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle at center, rgba(120, 72, 254, 0.4) 0%, rgba(120, 72, 254, 0.1) 50%, transparent 100%)',
          }}
        />

        {/* Medium lavender blob - left center */}
        <div
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-medium"
          style={{
            background: 'radial-gradient(circle at center, rgba(159, 123, 255, 0.35) 0%, rgba(159, 123, 255, 0.1) 50%, transparent 100%)',
          }}
        />

        {/* Peach blob - bottom center */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl animate-float-fast"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 210, 187, 0.5) 0%, rgba(255, 210, 187, 0.15) 50%, transparent 100%)',
          }}
        />

        {/* Small purple blob - right middle */}
        <div
          className="absolute top-2/3 right-1/4 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl animate-float-reverse"
          style={{
            background: 'radial-gradient(circle at center, rgba(211, 185, 249, 0.4) 0%, rgba(211, 185, 249, 0.1) 50%, transparent 100%)',
          }}
        />

        {/* Accent blob - top left */}
        <div
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl animate-float-slow-reverse"
          style={{
            background: 'radial-gradient(circle at center, rgba(120, 72, 254, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Mesh gradient overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background: `
            radial-gradient(at 27% 37%, rgba(120, 72, 254, 0.12) 0px, transparent 50%),
            radial-gradient(at 97% 21%, rgba(159, 123, 255, 0.1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, rgba(255, 210, 187, 0.08) 0px, transparent 50%),
            radial-gradient(at 10% 29%, rgba(211, 185, 249, 0.1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, rgba(120, 72, 254, 0.08) 0px, transparent 50%),
            radial-gradient(at 33% 50%, rgba(159, 123, 255, 0.09) 0px, transparent 50%),
            radial-gradient(at 79% 53%, rgba(255, 210, 187, 0.07) 0px, transparent 50%)
          `,
        }}
      />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.1);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
          }
          33% {
            transform: translate(calc(-50% + 25px), -25px) scale(1.08);
          }
          66% {
            transform: translate(calc(-50% - 25px), 25px) scale(0.92);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(35px, -35px) scale(1.1);
          }
        }

        @keyframes float-slow-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-25px, 25px) scale(1.05);
          }
          66% {
            transform: translate(25px, -25px) scale(0.95);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 12s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 22s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
