import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Soins de Santé Professionnels
              </span>
            </div>

            <h1 className="heading-xl text-gray-900 text-balance">
              Votre Santé, Notre Priorité
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Clinique l'Actuel offre des services médicaux complets avec une équipe de professionnels dévoués.
              Prenez rendez-vous en ligne ou consultez sans rendez-vous.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rendez-vous" className="btn-primary text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Prendre Rendez-vous
              </Link>

              <Link href="/sans-rendez-vous" className="btn-secondary text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sans Rendez-vous
              </Link>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-primary-600 font-bold text-2xl mb-1">30+</div>
                <div className="text-gray-600 text-sm">Années d'Expérience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-primary-600 font-bold text-2xl mb-1">15+</div>
                <div className="text-gray-600 text-sm">Professionnels Certifiés</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:block hidden">
            <div className="relative h-[600px] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center">
              {/* Placeholder for actual image */}
              <div className="text-center p-12">
                <svg className="w-48 h-48 mx-auto text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-primary-600 mt-4 font-medium">Hero Image Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Add your clinic image here</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
