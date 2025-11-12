import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Services Médicaux | Clinique l\'Actuel',
  description: 'Découvrez notre gamme complète de services médicaux: consultations, tests, vaccinations, soins préventifs et plus encore.',
}

const services = [
  {
    title: 'Consultation Générale',
    description: 'Consultations médicales complètes pour tous les âges. Nos médecins généralistes expérimentés sont disponibles pour diagnostiquer et traiter une variété de conditions médicales.',
    features: [
      'Examen médical complet',
      'Diagnostic et traitement',
      'Suivi médical régulier',
      'Références spécialisées',
    ],
    href: '/services/consultation',
  },
  {
    title: 'Tests et Dépistage',
    description: 'Services complets de tests de laboratoire et de dépistage. Résultats rapides et confidentiels avec interprétation par nos professionnels.',
    features: [
      'Dépistage VIH/ITSS',
      'Analyses sanguines complètes',
      'Tests hormonaux',
      'Dépistage des maladies chroniques',
    ],
    href: '/services/tests',
  },
  {
    title: 'Soins Préventifs',
    description: 'Programmes de soins préventifs personnalisés pour maintenir une santé optimale et prévenir les maladies.',
    features: [
      'Bilans de santé annuels',
      'Dépistage précoce',
      'Conseils nutritionnels',
      'Plans de prévention personnalisés',
    ],
    href: '/services/preventif',
  },
  {
    title: 'Vaccinations',
    description: 'Large gamme de vaccins pour protéger votre santé et celle de votre famille. Consultations de santé voyage disponibles.',
    features: [
      'Vaccins de routine',
      'Vaccins de voyage',
      'Immunisations pour enfants',
      'Rappels de vaccination',
    ],
    href: '/services/vaccinations',
  },
  {
    title: 'Santé Sexuelle',
    description: 'Services confidentiels et sans jugement pour tous vos besoins en matière de santé sexuelle et reproductive.',
    features: [
      'Contraception',
      'Dépistage ITSS',
      'Prophylaxie pré-exposition (PrEP)',
      'Consultations confidentielles',
    ],
    href: '/services/sante-sexuelle',
  },
  {
    title: 'Santé Mentale',
    description: 'Support professionnel pour votre bien-être mental et émotionnel dans un environnement sûr et accueillant.',
    features: [
      'Évaluation psychologique',
      'Gestion du stress et de l\'anxiété',
      'Support pour la dépression',
      'Thérapie et counseling',
    ],
    href: '/services/sante-mentale',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-gray-900 mb-6">Nos Services Médicaux</h1>
            <p className="text-xl text-gray-600">
              Une gamme complète de services de santé professionnels pour répondre à tous vos besoins médicaux.
              Notre équipe expérimentée est dédiée à votre bien-être.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="heading-md text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn-primary">
                    En Savoir Plus
                  </Link>
                </div>
                <div className={`h-64 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <svg className="w-32 h-32 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-gray-900 mb-6">
              Prêt à Commencer Votre Parcours Santé?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Prenez rendez-vous dès aujourd'hui et bénéficiez de soins de qualité avec notre équipe professionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous" className="btn-primary text-lg">
                Prendre Rendez-vous
              </Link>
              <a href="tel:514-524-1001" className="btn-secondary text-lg">
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
