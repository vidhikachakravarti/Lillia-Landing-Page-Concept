import React from 'react';
import { Container } from '../ui/Container';
import { FileText, Award, Globe } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden border-y border-lillia-light/30">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Lillia-Landing-Page-Concept/assets/trust-background.mp4" type="video/mp4" />
        </video>
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-lillia-deep/85"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Trusted. Proven. Next-gen.
            </h2>
          </div>

          {/* Three Horizontal Bullets */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Point 1 - ADA Studies */}
            <div className="flex flex-col items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm leading-relaxed">
                  Two comprehensive ADA-published studies demonstrated meaningful impact on A1c, weight, and adherence.
                </p>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://diabetesjournals.org/diabetes/article/71/Supplement_1/71-LB/146190/71-LB-Real-World-Evidence-of-Arabic-Digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lillia-light hover:text-white text-xs font-semibold underline"
                  >
                    Study 1
                  </a>
                  <span className="text-white/50 text-xs">·</span>
                  <a
                    href="https://diabetesjournals.org/diabetes/article/73/Supplement_1/1935-LB/156226/1935-LB-Integrated-Model-of-Digital-Health-and"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lillia-light hover:text-white text-xs font-semibold underline"
                  >
                    Study 2
                  </a>
                </div>
              </div>
            </div>

            {/* Point 2 - TIME Recognition */}
            <div className="flex flex-col items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm leading-relaxed">
                  Recognized by TIME and Statista among the{' '}
                  <a
                    href="https://time.com/7318020/worlds-top-healthtech-companies-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lillia-light hover:text-white font-semibold underline"
                  >
                    World's Top HealthTech Companies 2025
                  </a>
                  {' '}in AI & Data Analytics, with a 'Very High' performance rating.
                </p>
              </div>
            </div>

            {/* Point 3 - Global Trust */}
            <div className="flex flex-col items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm leading-relaxed">
                  <a
                    href="https://www.lilliacare.ai/clients#anchors-mg9hvw3a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lillia-light hover:text-white font-semibold underline"
                  >
                    Globally trusted by providers and payers
                  </a>
                  {' '}as a next-generation population health engine for value-based care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
