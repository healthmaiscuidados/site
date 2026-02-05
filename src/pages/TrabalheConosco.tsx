import { useState } from 'react';
import { BookOpen, Users, PlusCircle, TrendingUp, CheckCircle2 } from 'lucide-react';

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: '',
    registro: '',
    experiencia: '',
    curriculo: null as File | null,
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        curriculo: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulação de envio
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        area: '',
        registro: '',
        experiencia: '',
        curriculo: null,
        mensagem: ''
      });
    }, 1500);
  };

  const vagas = [
    {
      titulo: 'Enfermeiro(a)',
      tipo: 'CLT - Tempo Integral',
      requisitos: [
        'Registro ativo no COREN',
        'Experiência em home care ou alta complexidade',
        'Conhecimento em administração de medicamentos EV',
        'Disponibilidade para trabalhar em escala'
      ]
    },
    {
      titulo: 'Fisioterapeuta',
      tipo: 'CLT - Tempo Parcial/Integral',
      requisitos: [
        'Registro ativo no CREFITO',
        'Experiência em reabilitação domiciliar',
        'Conhecimento em fisioterapia respiratória e motora',
        'Disponibilidade para atender em diferentes regiões'
      ]
    },
    {
      titulo: 'Técnico(a) de Enfermagem',
      tipo: 'CLT - Tempo Integral',
      requisitos: [
        'Registro ativo no COREN',
        'Experiência prévia em home care (diferencial)',
        'Disponibilidade para trabalhar em escala 12x36',
        'Proatividade e empatia no cuidado'
      ]
    },
    {
      titulo: 'Fonoaudiólogo(a)',
      tipo: 'PJ - Por Sessão',
      requisitos: [
        'Registro ativo no CRFa',
        'Experiência em disfagia e reabilitação',
        'Disponibilidade para atendimentos domiciliares',
        'Veículo próprio (desejável)'
      ]
    },
    {
      titulo: 'Nutricionista',
      tipo: 'PJ - Por Sessão',
      requisitos: [
        'Registro ativo no CRN',
        'Experiência em terapia nutricional enteral',
        'Conhecimento em nutrição clínica',
        'Disponibilidade para atendimentos domiciliares'
      ]
    },
    {
      titulo: 'Psicólogo(a)',
      tipo: 'PJ - Por Sessão',
      requisitos: [
        'Registro ativo no CRP',
        'Experiência em psicologia hospitalar ou cuidados paliativos',
        'Habilidade de trabalhar com pacientes e famílias em situações de vulnerabilidade',
        'Disponibilidade para atendimentos domiciliares'
      ]
    }
  ];

  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-24 pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-5xl mb-4 text-white">Trabalhe Conosco</h1>
          <p className="text-xl text-white/90 max-w-[700px] mx-auto">
            Faça parte de uma equipe que cuida com propósito e excelência
          </p>
        </div>
      </section>

      {/* Por que trabalhar */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Junte-se a Nós</span>
            <h2 className="text-4xl leading-tight text-text mb-6">Por que trabalhar na Health+?</h2>
            <p className="text-lg leading-[1.7] text-text-light">
              Na Health+, valorizamos profissionais comprometidos com a qualidade do
              cuidado e a humanização. Oferecemos um ambiente de trabalho colaborativo,
              oportunidades de desenvolvimento contínuo e a chance de fazer diferença real
              na vida de pacientes e familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Capacitação Contínua</h3>
              <p className="text-text-light leading-relaxed">
                Desenvolvimento profissional constante, aprimoramento técnico e
                qualificação prática para excelência no cuidado.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Equipe Multidisciplinar</h3>
              <p className="text-text-light leading-relaxed">
                Trabalho integrado com profissionais de diversas especialidades e troca
                constante de conhecimento.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <PlusCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Ambiente e Reconhecimento</h3>
              <p className="text-text-light leading-relaxed">
                Ambiente de trabalho colaborativo, valorização profissional e
                condições justas que respeitam sua contribuição.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-custom-md transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 text-primary flex items-center justify-center bg-accent rounded-full">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-xl mb-4 text-primary">Crescimento Profissional</h3>
              <p className="text-text-light leading-relaxed">
                Plano de carreira estruturado e oportunidades de assumir posições de
                liderança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vagas Abertas */}
      <section className="py-24 bg-gray-100" style={{ display: 'none' }}>
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Oportunidades</span>
            <h2 className="text-4xl leading-tight text-text mb-4">Vagas abertas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vagas.map((vaga, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-custom-md hover:shadow-custom-lg transition-all duration-300">
                <h3 className="text-2xl mb-2 text-primary">{vaga.titulo}</h3>
                <p className="text-sm text-text-light mb-6">{vaga.tipo}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-3">Requisitos:</h4>
                  <ul className="list-none p-0 space-y-2">
                    {vaga.requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-light">
                        <CheckCircle2 className="shrink-0 text-success mt-0.5" size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#candidatar" className="inline-flex items-center text-primary font-medium cursor-pointer transition-all duration-200 hover:gap-2 hover:underline">
                  Candidatar-se →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Candidatura */}
      <section className="py-24" id="candidatar" style={{ display: 'none' }}>
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-2">Candidate-se</span>
              <h2 className="text-4xl leading-tight text-text mb-6">Envie seu currículo</h2>
              <p className="text-lg leading-[1.7] text-text-light mb-8">
                Preencha o formulário abaixo com suas informações e anexe seu currículo.
                Nossa equipe de RH entrará em contato caso seu perfil esteja alinhado com
                nossas oportunidades.
              </p>

              <div className="p-8 bg-white rounded-xl shadow-custom-md">
                <h3 className="text-xl mb-4 text-primary">Processo de seleção</h3>
                <ol className="list-none p-0 space-y-4 counter-reset-item">
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-semibold">1</div>
                    <div>
                      <strong className="text-text block mb-1">Análise de currículo:</strong>
                      <span className="text-text-light text-sm">Avaliação inicial do perfil</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-semibold">2</div>
                    <div>
                      <strong className="text-text block mb-1">Entrevista com RH:</strong>
                      <span className="text-text-light text-sm">Conhecimento sobre você e suas expectativas</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-semibold">3</div>
                    <div>
                      <strong className="text-text block mb-1">Entrevista técnica:</strong>
                      <span className="text-text-light text-sm">Avaliação de conhecimentos específicos</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-semibold">4</div>
                    <div>
                      <strong className="text-text block mb-1">Proposta:</strong>
                      <span className="text-text-light text-sm">Apresentação da oferta e alinhamento de expectativas</span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="p-6 sm:p-12 bg-white rounded-xl shadow-custom-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="nome" className="block font-medium mb-2 text-text">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block font-medium mb-2 text-text">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="telefone" className="block font-medium mb-2 text-text">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="area" className="block font-medium mb-2 text-text">
                    Área de interesse *
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.area}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="enfermagem">Enfermagem</option>
                    <option value="fisioterapia">Fisioterapia</option>
                    <option value="fonoaudiologia">Fonoaudiologia</option>
                    <option value="nutricao">Nutrição</option>
                    <option value="psicologia">Psicologia</option>
                    <option value="terapia-ocupacional">Terapia Ocupacional</option>
                    <option value="farmacia">Farmácia</option>
                    <option value="odontologia">Odontologia</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="registro" className="block font-medium mb-2 text-text">
                    Número do registro profissional
                  </label>
                  <input
                    type="text"
                    id="registro"
                    name="registro"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.registro}
                    onChange={handleChange}
                    placeholder="Ex: COREN 12345-SP"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="experiencia" className="block font-medium mb-2 text-text">
                    Tempo de experiência na área *
                  </label>
                  <select
                    id="experiencia"
                    name="experiencia"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    value={formData.experiencia}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="menos-1">Menos de 1 ano</option>
                    <option value="1-3">1 a 3 anos</option>
                    <option value="3-5">3 a 5 anos</option>
                    <option value="5-10">5 a 10 anos</option>
                    <option value="mais-10">Mais de 10 anos</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="curriculo" className="block font-medium mb-2 text-text">
                    Currículo (PDF ou DOC) *
                  </label>
                  <input
                    type="file"
                    id="curriculo"
                    name="curriculo"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  {formData.curriculo && (
                    <p className="text-sm text-text-light mt-2">{formData.curriculo.name}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="mensagem" className="block font-medium mb-2 text-text">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="w-full px-4 py-3 text-base text-text bg-white border-2 border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:border-primary resize-y min-h-[120px]"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Conte-nos um pouco sobre você e suas motivações..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg mb-6 bg-[#D4EDDA] text-[#155724] border border-[#C3E6CB]">
                    Currículo enviado com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg mb-6 bg-[#F8D7DA] text-[#721C24] border border-[#F5C6CB]">
                    Erro ao enviar currículo. Por favor, tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-block px-7 py-3.5 font-medium text-center no-underline border-2 rounded-lg cursor-pointer transition-all duration-300 bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-custom-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar candidatura'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConosco;
