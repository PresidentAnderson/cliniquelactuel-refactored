export default function About() {
  const features = [
    {
      title: 'Équipe Expérimentée',
      description: 'Des professionnels de la santé qualifiés et dévoués',
      icon: '👥',
    },
    {
      title: 'Technologie Moderne',
      description: 'Équipements médicaux de pointe pour des diagnostics précis',
      icon: '🔬',
    },
    {
      title: 'Approche Personnalisée',
      description: 'Soins adaptés à vos besoins spécifiques',
      icon: '❤️',
    },
    {
      title: 'Horaires Flexibles',
      description: 'Ouvert 7 jours sur 7 pour votre commodité',
      icon: '⏰',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center">
              {/* Placeholder for actual image */}
              <div className="text-center p-12">
                <svg className="w-40 h-40 mx-auto text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-primary-600 mt-4 font-medium">Clinic Image Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Add your clinic/team photo here</p>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-primary-600 font-bold text-4xl mb-1">10,000+</div>
              <div className="text-gray-600">Patients Satisfaits</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                À Propos de Nous
              </span>
            </div>

            <h2 className="heading-lg text-gray-900">
              Excellence en Soins de Santé Depuis Plus de 30 Ans
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Clinique l'Actuel est reconnue comme un leader dans les soins de santé à Montréal.
              Notre équipe multidisciplinaire offre des services médicaux complets dans un
              environnement accueillant et professionnel.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Nous nous engageons à fournir des soins de qualité exceptionnelle avec une approche
              centrée sur le patient. Notre mission est de promouvoir la santé et le bien-être de
              notre communauté à travers des services accessibles et personnalisés.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
