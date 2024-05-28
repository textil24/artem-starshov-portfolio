import { useState } from 'react'
import { benefits_1, benefits_2, benefits_3, benefits_4 } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from './Button';

const Benefits = () => {
  const [category, setCategory] = useState(0)

  return (
    <Section id="portfolio">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Портфолио"
        />

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          <Button onClick={() => setCategory(0)}>
            Первый курс
          </Button>

          <Button onClick={() => setCategory(1)}>
            Второй курс
          </Button>

          <Button onClick={() => setCategory(2)}>
            Третий курс
          </Button>

          <Button onClick={() => setCategory(3)}>
            Четвертый курс
          </Button>
        </div>

        {/* Первый Курс */}

        {
          category === 0 && (
            <div className="flex flex-wrap gap-10 mb-10">
              {benefits_1.map((item) => (
                <a
                  href={item.link}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  target='_blank'
                  key={item.id}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p style={{ flex: 1, opacity: 0 }} className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Перейти
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </a>
              ))}
            </div>

          )
        }

        {/* Второй Курс */}

        {
          category === 1 && (
            <div className="flex flex-wrap gap-10 mb-10">
              {benefits_2.map((item) => (
                <a
                  href={item.link}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  target='_blank'
                  key={item.id}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p style={{ flex: 1, opacity: 0 }} className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Перейти
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </a>
              ))}
            </div>

          )
        }

        {/* Третий Курс */}

        {
          category === 2 && (
            <div className="flex flex-wrap gap-10 mb-10">
              {benefits_3.map((item) => (
                <a
                  href={item.link}
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  target='_blank'
                  key={item.id}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p style={{ flex: 1, opacity: 0 }} className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Перейти
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </a>
              ))}
            </div>
          )
        }

        {/* Четвертый Курс */}

        {
          category === 3 && (
            <div className="flex flex-wrap gap-10 mb-10">
              {benefits_4.map((item) => (
                <a
                  href='https://www.google.com/intl/ru_ru/drive/'
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  target='_blank'
                  key={item.id}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }} className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p style={{ flex: 1, opacity: 0 }} className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Перейти
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </a>
              ))}
            </div>

          )
        }

      </div>
    </Section>
  );
};

export default Benefits;
