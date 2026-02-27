import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { BookOpenIcon, CalendarBlankIcon, CheckCircleIcon, CheckIcon, ChefHatIcon, ClipboardTextIcon, CopyIcon, LayoutIcon, NotePencilIcon, StarIcon, StorefrontIcon, TelevisionIcon, UsersIcon, XCircleIcon } from "@phosphor-icons/react/ssr";

const CouponBadge = ({ code, light = false }: { code: string, light?: boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <motion.div
        onClick={handleCopy}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`px-4 py-2 rounded-xl border flex items-center gap-3 group cursor-pointer transition-all relative overflow-hidden ${light
          ? "bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
          : "bg-brand-green/10 border-brand-green/20 hover:bg-brand-green/20"
          }`}
      >
        <div className="flex flex-col items-start">
          <span className={`text-[10px] uppercase tracking-widest font-bold ${light ? "opacity-60" : "text-neutral-500"}`}>
            Cupom:
          </span>
          <span className={`text-lg font-mono font-bold text-brand-green tracking-widest`}>
            {code}
          </span>
        </div>

        <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green">
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 45 }}
              >
                <CheckIcon className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <CopyIcon className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 bg-brand-green flex items-center justify-center text-white font-bold text-xs uppercase tracking-widest"
            >
              Copiado!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="flex flex-col">
        <p className={`text-[10px] font-bold text-brand-green uppercase tracking-widest`}>Válido hoje</p>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-white">52,57% OFF EXTRA</p>
      </div>
    </div>
  );
};

const Button = ({ children, className = "", primary = false, href = "#" }: { children: React.ReactNode, className?: string, primary?: boolean, href?: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    animate={primary ? {
      boxShadow: ["0px 0px 0px rgba(0, 214, 50, 0)", "0px 0px 20px rgba(0, 214, 50, 0.4)", "0px 0px 0px rgba(0, 214, 50, 0)"],
    } : {}}
    transition={{
      duration: 0.15,
      ease: "easeOut",
      boxShadow: primary ? {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      } : undefined
    }}
    className={`inline-block px-10 py-5 rounded-full font-bold text-white uppercase tracking-widest text-sm transition-all duration-50 shadow-xl relative overflow-hidden group text-center ${primary
      ? "bg-gradient-to-r from-brand-green to-emerald-500 hover:shadow-brand-green/40"
      : "bg-brand-olive hover:bg-olive-600"
      } ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
      {primary}
    </span>
    {primary && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />
    )}
  </motion.a>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto bg-brand-cream shadow-2xl overflow-x-hidden">
        {/* Hero Section */}
        <header className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden">
          {/* Background Image with Overlay and Parallax */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0 h-[120%]"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet="/mobile.webp" />
              <img
                src="/desktop.webp"
                alt="Background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </picture>
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-8">
                <img src="/logobea1.webp" alt="Logo" className="w-auto h-18" referrerPolicy="no-referrer" />
              </div>

              <h1 className="text-5xl md:text-6xl leading-[1.1] mb-6">
                Transforme sua paixão por doces em <span className="italic font-bold">renda real</span>
              </h1>

              <p className="text-md md:text-lg opacity-90 mb-10 max-w-lg leading-relaxed font-light">
                Do zero ao seu primeiro cliente: um guia prático para começar na confeitaria com segurança e confiança.
              </p>

              <Button primary href="https://payfast.greenn.com.br/147469">
                Garantir meu ebook agora
              </Button>

              <div className="mt-6">
                <CouponBadge code="ATELIE2026" light />
              </div>
            </motion.div>
          </div>
        </header>

        {/* Rest of the sections... */}

        {/* Empathy Section */}
        <Section className="bg-brand-cream">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img src="/img1.webp" alt="Bolo decorado" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-8 leading-tight">
                Você ama confeitaria, mas ainda não sabe por onde começar?
              </h2>

              <ul className="space-y-6 mb-8">
                {[
                  "Sente insegurança na hora de cobrar ou vender seus doces?",
                  "Tem medo de não ser levada a sério pela família ou pelos clientes?",
                  "Já tentou aprender com vídeos gratuitos, mas continua perdida?",
                  "Se sente sozinha, sem saber qual o próximo passo?"
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <XCircleIcon className="w-8 h-8 text-brand-brown shrink-0 items-center opacity-60" weight="fill" />
                    <p className="text-neutral-700">{text}</p>
                  </motion.li>
                ))}
              </ul>

              <p className="text-lg font-medium text-brand-olive italic">
                <strong>Você não está sozinha.</strong> E é exatamente para mulheres como você que este ebook foi criado.
              </p>
            </div>
          </div>
        </Section>

        {/* Story Section */}
        <Section className="bg-brand-sand/30">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8 leading-tight">
                Eu também já tive medo de cobrar, já achei que não era boa o bastante e já pensei em desistir.
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Mas foi justamente superando esses desafios que <strong>descobri como transformar a confeitaria em profissão</strong> — e hoje, depois de mais de 10 anos de experiência, ateliê próprio e reconhecimento na mídia, quero te mostrar um caminho muito mais simples e claro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-[40px] overflow-hidden shadow-2xl relative"
            >
              <img src="/bea-sobre.webp" alt="Bea trabalhando" className="w-full h-auto" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-olive/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section className="bg-brand-olive text-white my-12 md:mx-auto relative overflow-hidden">
          <div className="text-center mb-16 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl mb-6 flex flex-col items-center gap-4"
            >
              <div className="flex items-center justify-center gap-4">
                <span>O que você vai encontrar no ebook</span>
              </div>
              <span className="italic">Confeitaria do Zero ao Primeiro Cliente</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: NotePencilIcon, title: "Ficha técnica de precificação", desc: "Para nunca mais cobrar errado." },
              { icon: ClipboardTextIcon, title: "Ideias de cardápios", desc: "Que vendem de verdade." },
              { icon: LayoutIcon, title: "Escolha do nicho", desc: "Como montar seu cardápio estratégico." },
              { icon: BookOpenIcon, title: "Didática prática", desc: "Conteúdo acessível e direto ao ponto." },
              { icon: CalendarBlankIcon, title: "Planejamento simples", desc: "Para começar sem medo hoje mesmo." },
              { icon: StorefrontIcon, title: "Organização da produção", desc: "Para evitar sobrecarga no dia a dia." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center transition-all duration-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/15"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-brand-cream" weight="fill" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Before & After Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Do medo à confiança em cada etapa da sua jornada</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-red-200 p-10 rounded-[40px] border border-red-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-red-800 mb-8 flex items-center gap-2">
                <XCircleIcon weight="fill" className="w-6 h-6" /> Antes do ebook
              </h3>
              <ul className="space-y-6">
                {[
                  "Insegurança para se posicionar.",
                  "Vergonha de cobrar.",
                  "Medo de não conseguir clientes."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-red-900">
                    <XCircleIcon weight="fill" className="w-5 h-5 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-green-200 p-10 rounded-[40px] border border-green-100 shadow-xl"
            >
              <h3 className="text-xl font-bold text-green-800 mb-8 flex items-center gap-2">
                <CheckCircleIcon weight="fill" className="w-6 h-6" /> Depois do ebook
              </h3>
              <ul className="space-y-6">
                {[
                  "Clareza para começar.",
                  "Estrutura simples para vender.",
                  "Orgulho do seu primeiro cliente!"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-green-900">
                    <CheckCircleIcon weight="fill" className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* Authority Section */}
        <Section className="bg-brand-sand/20">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[40px] overflow-hidden shadow-2xl"
              >
                <img src="/bea-bolo.webp" alt="Bea Requena" className="w-full h-auto" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-brand-olive" />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Por que aprender comigo?</h2>
              <ul className="space-y-6">
                {[
                  { icon: StarIcon, text: "Mais de 10 anos de experiência real no mercado." },
                  { icon: StorefrontIcon, text: "Ateliê próprio consolidado em Santos." },
                  { icon: UsersIcon, text: "Experiência com franquias, organização e vendas sazonais." },
                  { icon: TelevisionIcon, text: "Participação em programas de TV." },
                  { icon: ChefHatIcon, text: "Didática prática e acessível, já testada em alunas presenciais." }
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-brown flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-cream" />
                    </div>
                    <p className="text-neutral-700 pt-1">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Final Offer Section */}
        <Section className="bg-brand-brown text-white mt-32 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center -mt-32 md:-mt-56 z-20"
            >
              {/* iPad Mockup */}
              <motion.div
                whileHover={{ y: -15, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative -mt-16 sm:-mt-40 md:-mt-54 w-full max-w-105 aspect-3/4 bg-neutral-900 rounded-[3.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-[12px] border-neutral-800 transform -rotate-2 cursor-pointer"
              >
                {/* Screen */}
                <div className="relative w-full h-auto rounded-[2.5rem] overflow-hidden">
                  <img src="/bea-bolo.webp" alt="Ebook Cover" className="w-full h-full object-cover rounded-[2.5rem] border border-black" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                    <p className="text-xs uppercase tracking-widest font-bold mb-2 text-white/70">Bea Requena</p>
                    <h4 className="text-2xl leading-tight text-white">Confeitaria do Zero ao Primeiro Cliente</h4>
                    <div className="mt-6 h-1.5 w-16 bg-brand-green rounded-full"></div>
                  </div>
                </div>


                <div className="mt-8 flex items-center justify-center mx-auto gap-4 opacity-60 text-xs">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} alt="" className="w-8 h-8 rounded-full border-2 border-brand-brown" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <p>+ de 500 alunas já começaram</p>
                </div>

                {/* Camera Notch (iPad style) */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-1 h-8 bg-neutral-700 rounded-l-sm"></div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rounded-full border border-white/5"></div>
              </motion.div>
            </motion.div>

            <div>
              <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
                Seu sonho de viver da confeitaria começa aqui
              </h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                Não adie mais. Cada dia que passa é uma oportunidade perdida de se posicionar como confeiteira e conquistar clientes.
              </p>

              <div className="mb-10">
                <p className="text-sm opacity-60 line-through mb-1">de R$ 79,90</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">por <br />apenas</span>
                  <span className="text-5xl md:text-7xl font-black text-brand-green">R$ 37,90</span>
                </div>
                <p className="text-sm opacity-80 mt-2 italic">e dê o primeiro passo hoje mesmo.</p>
              </div>

              <Button primary href="https://payfast.greenn.com.br/147469" className="w-full md:w-auto text-lg py-5">
                Quero começar agora
              </Button>

              <div className="mt-6">
                <CouponBadge code="ATELIE2026" />
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-brand-cream text-brand-brown/80 py-12 px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logobea.webp" alt="Logo" className="w-auto h-18" referrerPolicy="no-referrer" />
            </div>
            <p className="text-xs">© 2025 Bea Requena | Todos os Direitos Reservados</p>
          </div>
        </footer>
      </div>
    </div>
  );
}