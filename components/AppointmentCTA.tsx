import Link from 'next/link'

export default function AppointmentCTA() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Prêt à Prendre Soin de Votre Santé?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Réservez votre rendez-vous en ligne ou appelez-nous directement.
            Notre équipe est prête à vous accueillir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rendez-vous"
              className="bg-white text-primary-600 hover:bg-gray-50 font-medium px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Prendre Rendez-vous
            </Link>
            <a
              href="tel:514-524-1001"
              className="bg-primary-700 text-white hover:bg-primary-800 font-medium px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              514-524-1001
            </a>
          </div>

          {/* Hours Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-primary-700 bg-opacity-50 backdrop-blur p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Heures d'Ouverture</h3>
              <p className="text-primary-100">Lun-Ven: 7h30 - 20h00</p>
              <p className="text-primary-100">Sam-Dim: 7h30 - 15h00</p>
            </div>
            <div className="bg-primary-700 bg-opacity-50 backdrop-blur p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-2">Consultations Sans Rendez-vous</h3>
              <p className="text-primary-100">Disponibles pendant</p>
              <p className="text-primary-100">nos heures d'ouverture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
