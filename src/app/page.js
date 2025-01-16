'use client'
import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const productsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main>
        <div className="relative overflow-hidden">
          <div
            className="hero min-h-screen md:min-h-96 animate-slide-up"
            style={{
              backgroundImage:
                'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md animate-slide-down">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                  et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

          {/* Scroll Button */}
          <button 
            onClick={() => scrollToSection(productsRef)}
            className="absolute bottom-48 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            aria-label="Scroll to products"
          >
            <p>More</p>
            <ChevronDown size={32} />
          </button>

          <style jsx>{`
            @keyframes slideUp {
              from {
                transform: translateY(5%);
              }
              to {
                transform: translateY(0);
              }
            }

            @keyframes slideDown {
              from {
                transform: translateY(-100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }

            .animate-slide-up {
              animation: slideUp 1s ease-out forwards;
            }

            .animate-slide-down {
              animation: slideDown 1.2s ease-out forwards;
              animation-delay: 0.3s;
              opacity: 0;
            }
          `}</style>
        </div>

        {/* Products Section */}
        <div 
          ref={productsRef}
          className="flex flex-col md:flex-row gap-8 p-8 min-h-screen items-center"
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">Product 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! Nulla magni harum animi consequatur tempora totam repellat.</p>
            <button className="btn">more</button>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">Product 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae unde beatae temporibus nam voluptas, ipsum quam expedita ex repellendus aperiam voluptatem nobis deserunt, perferendis molestias cupiditate quia aliquam veniam earum.</p>
            <button className="btn">more</button>
          </div>
        </div>
      </main>
    </div>
  );
}